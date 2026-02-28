import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';
import nodemailer from 'nodemailer';
import bcrypt from 'bcrypt';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import FacebookPixelClient from './FacebookPixelClient.js';
import { getPixelConfig, getDefaultPixelConfig } from './pixelConfig.js';

// Configuração ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carregar variáveis de ambiente
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

// Inicializar Resend (se configurado)
let resend = null;
if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 're_xxxxxxxxxxxxx') {
  try {
    resend = new Resend(process.env.RESEND_API_KEY);
  } catch (error) {
    console.warn('⚠️  Erro ao inicializar Resend:', error.message);
  }
}

// Configurar transporte SMTP (se configurado)
let smtpTransporter = null;
if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
  smtpTransporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: process.env.SMTP_PORT === '465' || !process.env.SMTP_PORT || parseInt(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    },
    tls: {
      rejectUnauthorized: false // Aceita certificados auto-assinados
    }
  });
  
  // Testar conexão SMTP
  smtpTransporter.verify((error, success) => {
    if (error) {
      console.error('❌ Erro na configuração SMTP:', error.message);
    } else {
      console.log('✅ SMTP configurado e conectado com sucesso');
    }
  });
}

// Configurar CORS
app.use(cors({
  origin: FRONTEND_URL,
  credentials: true
}));

// Middleware para parsing JSON
app.use(express.json());

// Middleware para parsing de cookies
app.use(cookieParser());

// Caminho para arquivo de usuários
const dataDir = path.join(__dirname, 'data');
const usersFile = path.join(dataDir, 'users.json');

// Garantir que o diretório data existe
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Função para ler usuários
function readUsers() {
  try {
    if (fs.existsSync(usersFile)) {
      const data = fs.readFileSync(usersFile, 'utf8');
      return JSON.parse(data);
    }
    return {};
  } catch (error) {
    console.error('Erro ao ler usuários:', error);
    return {};
  }
}

// Função para salvar usuários
function saveUsers(users) {
  try {
    fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
  } catch (error) {
    console.error('Erro ao salvar usuários:', error);
    throw error;
  }
}

// Função para gerar senha segura
function generatePassword(length = 12) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
}

// Função para enviar email com credenciais
async function sendCredentialsEmail(email, password) {
  const emailFrom = process.env.EMAIL_FROM || process.env.SMTP_USER || 'Manual <noreply@example.com>';
  const loginUrl = `${FRONTEND_URL}/login`;

  const emailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .credentials { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea; }
            .credential-item { margin: 15px 0; }
            .label { font-weight: bold; color: #555; }
            .value { font-family: monospace; font-size: 16px; color: #333; background: #f5f5f5; padding: 10px; border-radius: 4px; margin-top: 5px; }
            .button { display: inline-block; background: #667eea; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
            .warning { background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0; border-radius: 4px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 Bem-vindo ao Manual Interativo!</h1>
            </div>
            <div class="content">
              <p>Olá!</p>
              <p>Parabéns pela sua compra! Suas credenciais de acesso foram geradas com sucesso.</p>
              
              <div class="credentials">
                <h3>📋 Suas Credenciais de Acesso</h3>
                <div class="credential-item">
                  <div class="label">Email:</div>
                  <div class="value">${email}</div>
                </div>
                <div class="credential-item">
                  <div class="label">Senha:</div>
                  <div class="value">${password}</div>
                </div>
              </div>

              <div style="text-align: center;">
                <a href="${loginUrl}" class="button">Acessar Manual Interativo</a>
              </div>

              <div class="warning">
                <strong>⚠️ Importante:</strong> Guarde estas credenciais em local seguro. 
                Você precisará delas para acessar o manual interativo.
              </div>

              <p>Se você tiver alguma dúvida, entre em contato conosco.</p>
              
              <p>Atenciosamente,<br>Equipe do Manual Interativo</p>
            </div>
          </div>
        </body>
        </html>
      `;

  const emailText = `
Bem-vindo ao Manual Interativo!

Parabéns pela sua compra! Suas credenciais de acesso foram geradas:

Email: ${email}
Senha: ${password}

Acesse: ${loginUrl}

⚠️ Importante: Guarde estas credenciais em local seguro.

Atenciosamente,
Equipe do Manual Interativo
  `;

  // Prioridade: SMTP > Resend
  if (smtpTransporter) {
    try {
      console.log(`📧 Enviando email via SMTP para: ${email}`);
      const info = await smtpTransporter.sendMail({
        from: emailFrom,
        to: email,
        subject: 'Acesso ao Manual Interativo - Suas Credenciais',
        html: emailHtml,
        text: emailText
      });
      
      console.log('✅ Email enviado com sucesso via SMTP para:', email);
      console.log('   Message ID:', info.messageId);
      return { success: true, data: info };
    } catch (error) {
      console.error('❌ Erro ao enviar email via SMTP:', error);
      return { success: false, error: error.message };
    }
  } else if (resend) {
    try {
      console.log(`📧 Enviando email via Resend para: ${email}`);
      const { data, error } = await resend.emails.send({
        from: emailFrom,
        to: email,
        subject: 'Acesso ao Manual Interativo - Suas Credenciais',
        html: emailHtml,
        text: emailText
      });

      if (error) {
        console.error('❌ Erro ao enviar email via Resend:', error);
        return { success: false, error: error.message };
      }

      console.log('✅ Email enviado com sucesso via Resend para:', email);
      return { success: true, data };
    } catch (error) {
      console.error('❌ Erro ao enviar email via Resend:', error);
      return { success: false, error: error.message };
    }
  } else {
    console.warn('⚠️  Nenhum serviço de email configurado (SMTP ou Resend). Email não será enviado.');
    return { success: false, error: 'Email não configurado' };
  }
}

// ==================== ROTAS ====================

// Health check (localhost / Docker)
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    service: 'manual-backend'
  });
});

// Health check via Nginx (GET /api/health no site)
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    service: 'manual-backend',
    webhook: '/webhook/kiwify'
  });
});

// Login
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validação
    if (!email || !password) {
      return res.status(400).json({ 
        success: false, 
        error: 'Email e senha são obrigatórios' 
      });
    }

    // Ler usuários
    const users = readUsers();

    // Verificar se usuário existe
    if (!users[email]) {
      return res.status(401).json({ 
        success: false, 
        error: 'Email ou senha incorretos' 
      });
    }

    // Verificar senha
    const passwordMatch = await bcrypt.compare(password, users[email].passwordHash);
    
    if (!passwordMatch) {
      return res.status(401).json({ 
        success: false, 
        error: 'Email ou senha incorretos' 
      });
    }

    // Login bem-sucedido
    res.json({ 
      success: true, 
      message: 'Login realizado com sucesso',
      user: {
        email: users[email].email,
        createdAt: users[email].createdAt
      }
    });

  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Erro interno do servidor' 
    });
  }
});

// Webhook Kiwify
app.post('/webhook/kiwify', async (req, res) => {
  try {
    console.log('🔔 Webhook endpoint chamado');
    console.log('📋 Headers recebidos:', JSON.stringify(req.headers, null, 2));
    
    // Validar token/assinatura do webhook (se configurado)
    // NOTA: A Kiwify pode não enviar token no header, então tornamos opcional
    const webhookToken = process.env.KIWIFY_WEBHOOK_TOKEN;
    console.log(`🔐 Token configurado: ${webhookToken ? 'Sim' : 'Não'}`);
    
    if (webhookToken) {
      // Verificar token em vários lugares possíveis
      const receivedToken = req.headers['x-kiwify-token'] 
        || req.headers['x-kiwify-webhook-token']
        || req.headers['authorization']?.replace('Bearer ', '') 
        || req.query.token
        || req.body.token;
      
      console.log(`🔑 Token recebido: ${receivedToken ? 'Sim' : 'Não'}`);
      
      // Se token foi recebido, validar. Se não foi recebido, permitir (Kiwify pode não enviar)
      if (receivedToken && receivedToken !== webhookToken) {
        console.warn('⚠️  Token de webhook inválido');
        console.warn(`   Esperado: ${webhookToken}`);
        console.warn(`   Recebido: ${receivedToken}`);
        return res.status(401).json({ 
          success: false, 
          error: 'Token inválido' 
        });
      }
      
      if (receivedToken) {
        console.log('✅ Token válido');
      } else {
        console.log('ℹ️  Token não recebido, mas permitindo (Kiwify pode não enviar token)');
      }
    }

    console.log('📥 Webhook recebido da Kiwify:', JSON.stringify(req.body, null, 2));

    const body = req.body;

    // Formato real da Kiwify: webhook_event_type, Customer.email, order_status (tudo no objeto raiz)
    // Formato alternativo: event, data.customer.email (formato aninhado)
    const event = body.webhook_event_type || body.event;
    const orderStatus = body.order_status || body.data?.order?.status;
    
    // Validar que é um evento de pedido aprovado/pago
    const validEvents = [
      'order_approved', 
      'order.paid', 
      'order.completed', 
      'order.payment_confirmed'
    ];
    
    const validStatuses = ['paid', 'approved'];
    
    const isValidEvent = event && validEvents.includes(event);
    const isValidStatus = orderStatus && validStatuses.includes(orderStatus.toLowerCase());
    
    console.log(`🔍 Análise do evento:`);
    console.log(`   Event: ${event || 'não encontrado'}`);
    console.log(`   Order Status: ${orderStatus || 'não encontrado'}`);
    console.log(`   Evento válido: ${isValidEvent}`);
    console.log(`   Status válido: ${isValidStatus}`);
    
    // Se não tem event/data no formato antigo, mas tem os campos da Kiwify, processa
    const hasKiwifyFormat = body.Customer?.email || body.customer?.email || body.order_status;
    
    if (!isValidEvent && !isValidStatus && !hasKiwifyFormat) {
      console.log(`⚠️  Evento ignorado: ${event || 'sem evento'} | Status: ${orderStatus || 'sem status'}`);
      console.log(`   Eventos válidos: ${validEvents.join(', ')}`);
      console.log(`   Status válidos: ${validStatuses.join(', ')}`);
      return res.json({ 
        success: true, 
        message: 'Evento recebido mas não processado (não é pedido pago/aprovado)' 
      });
    }
    
    // Se tem formato Kiwify mas não tem evento/status válido, ainda processa se tiver email
    if (hasKiwifyFormat && !isValidEvent && !isValidStatus) {
      console.log('⚠️  Formato Kiwify detectado mas evento/status não reconhecido. Processando mesmo assim...');
    }
    
    console.log('✅ Evento/Status válido ou formato Kiwify detectado, processando...');

    // Extrair email do cliente (formato real da Kiwify)
    const email = body.Customer?.email || body.customer?.email || body.data?.customer?.email || body.data?.email;
    
    console.log(`📧 Tentando extrair email:`);
    console.log(`   body.Customer?.email: ${body.Customer?.email || 'não encontrado'}`);
    console.log(`   body.customer?.email: ${body.customer?.email || 'não encontrado'}`);
    console.log(`   body.data?.customer?.email: ${body.data?.customer?.email || 'não encontrado'}`);
    console.log(`   Email final: ${email || 'NÃO ENCONTRADO'}`);
    
    if (!email) {
      console.error('❌ Email do cliente não encontrado no webhook');
      return res.status(400).json({ 
        success: false, 
        error: 'Email do cliente não encontrado no webhook' 
      });
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Email inválido' 
      });
    }

    // Ler usuários existentes
    const users = readUsers();

    // Verificar se usuário já existe
    if (users[email]) {
      console.log(`ℹ️  Usuário ${email} já existe. Não será criado novamente.`);
      return res.json({ 
        success: true, 
        message: 'Usuário já existe',
        email: email
      });
    }

    // Gerar senha segura
    const password = generatePassword(12);

    // Hash da senha
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // Criar usuário
    const user = {
      email: email,
      passwordHash: passwordHash,
      createdAt: new Date().toISOString(),
      orderId: body.order_id || body.order_ref || body.data?.order?.id || body.data?.id || 'unknown',
      event: event || body.webhook_event_type || 'order_approved'
    };

    // Salvar usuário
    users[email] = user;
    saveUsers(users);

    console.log(`✅ Usuário criado: ${email}`);

    // Enviar email com credenciais
    const emailResult = await sendCredentialsEmail(email, password);

    if (!emailResult.success) {
      console.error('⚠️  Erro ao enviar email:', emailResult.error);
      // Não falha o webhook se o email falhar, apenas loga
    }

    // Resposta de sucesso
    res.json({ 
      success: true, 
      message: 'Usuário criado com sucesso',
      email: email,
      emailSent: emailResult.success
    });

  } catch (error) {
    console.error('❌ Erro ao processar webhook:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Erro ao processar webhook',
      message: error.message
    });
  }
});

// ==================== FACEBOOK PIXEL API ====================

/**
 * Endpoint para tracking de eventos do Facebook Pixel via CAPI
 * 
 * Body esperado (OPÇÃO 1 - Com pixel_id e access_token):
 * {
 *   event_type: 'PageView' | 'InitiateCheckout' | 'Purchase' | 'Lead' | 'AddToCart',
 *   pixel_id: '123456789',
 *   access_token: 'seu_token',
 *   event_id: 'opcional',
 *   value: 100,
 *   currency: 'BRL',
 *   content_ids: ['product_1'],
 *   client_data: { email, phone, first_name, last_name }
 * }
 * 
 * Body esperado (OPÇÃO 2 - Com config_id):
 * {
 *   event_type: 'Purchase',
 *   config_id: 'landing-page-1', // Busca config do pixelConfig.js
 *   event_id: 'opcional',
 *   value: 100,
 *   currency: 'BRL',
 *   content_ids: ['product_1'],
 *   client_data: { email, phone, first_name, last_name }
 * }
 */
app.post('/api/facebook-pixel/track', async (req, res) => {
  try {
    const {
      event_type,
      pixel_id,
      access_token,
      config_id, // NOVO: permite buscar config por ID
      event_id,
      value,
      currency = 'BRL',
      content_ids = [],
      client_data = {},
      test_event_code
    } = req.body;

    // Validações
    if (!event_type) {
      return res.status(400).json({
        success: false,
        error: 'event_type é obrigatório'
      });
    }

    // Determinar configuração do pixel
    let pixelConfig;
    
    if (config_id) {
      // NOVO: Busca config por ID (ex: 'landing-page-1', 'product-1')
      pixelConfig = getPixelConfig(config_id);
      
      if (!pixelConfig) {
        return res.status(400).json({
          success: false,
          error: `Configuração de pixel não encontrada: ${config_id}`
        });
      }
    } else if (pixel_id && access_token) {
      // Modo legado: recebe pixel_id e access_token direto
      pixelConfig = {
        pixelId: pixel_id,
        accessToken: access_token
      };
    } else if (pixel_id) {
      // Tenta usar pixel_id com access_token do .env
      pixelConfig = {
        pixelId: pixel_id,
        accessToken: process.env.FACEBOOK_ACCESS_TOKEN
      };
    } else {
      // Usa configuração padrão do .env
      pixelConfig = getDefaultPixelConfig();
    }

    if (!pixelConfig || !pixelConfig.pixelId || !pixelConfig.accessToken) {
      return res.status(400).json({
        success: false,
        error: 'Configuração de pixel inválida. Forneça config_id, pixel_id+access_token, ou configure .env'
      });
    }

    // Criar cliente Facebook Pixel
    const pixelClient = new FacebookPixelClient(
      pixelConfig.pixelId,
      pixelConfig.accessToken,
      test_event_code || process.env.FACEBOOK_TEST_EVENT_CODE,
      process.env.FACEBOOK_DEBUG === 'true'
    );

    let result;

    // Processar evento baseado no tipo
    switch (event_type) {
      case 'PageView':
        result = await pixelClient.trackPageView(req, client_data, event_id);
        break;

      case 'InitiateCheckout':
        if (!value) {
          return res.status(400).json({
            success: false,
            error: 'value é obrigatório para InitiateCheckout'
          });
        }
        result = await pixelClient.trackInitiateCheckout(
          req,
          client_data,
          value,
          currency,
          content_ids,
          event_id
        );
        break;

      case 'Purchase':
        if (!value) {
          return res.status(400).json({
            success: false,
            error: 'value é obrigatório para Purchase'
          });
        }
        result = await pixelClient.trackPurchase(
          req,
          client_data,
          value,
          currency,
          content_ids,
          event_id
        );
        break;

      case 'Lead':
        result = await pixelClient.trackLead(req, client_data, event_id);
        break;

      case 'AddToCart':
        result = await pixelClient.trackCustom(
          'AddToCart',
          req,
          client_data,
          {
            currency,
            value: value || 0,
            content_ids,
            content_type: 'product'
          },
          event_id
        );
        break;

      default:
        // Evento personalizado
        result = await pixelClient.trackCustom(
          event_type,
          req,
          client_data,
          { currency, value, content_ids },
          event_id
        );
    }

    res.json(result);

  } catch (error) {
    console.error('Erro ao processar evento do Facebook Pixel:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ==================== TESTES ====================

// Endpoint de teste (apenas desenvolvimento)
if (process.env.NODE_ENV !== 'production') {
  app.post('/api/test/create-user', async (req, res) => {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({ 
          success: false, 
          error: 'Email é obrigatório' 
        });
      }

      const users = readUsers();

      if (users[email]) {
        return res.json({ 
          success: false, 
          message: 'Usuário já existe',
          email: email
        });
      }

      const password = generatePassword(12);
      const saltRounds = 10;
      const passwordHash = await bcrypt.hash(password, saltRounds);

      users[email] = {
        email: email,
        passwordHash: passwordHash,
        createdAt: new Date().toISOString(),
        orderId: 'test',
        event: 'test'
      };

      saveUsers(users);

      const emailResult = await sendCredentialsEmail(email, password);

      res.json({ 
        success: true, 
        message: 'Usuário de teste criado',
        email: email,
        password: password,
        emailSent: emailResult.success
      });

    } catch (error) {
      console.error('Erro ao criar usuário de teste:', error);
      res.status(500).json({ 
        success: false, 
        error: error.message 
      });
    }
  });
}

// Middleware de erro
app.use((err, req, res, next) => {
  console.error('Erro não tratado:', err);
  res.status(500).json({ 
    success: false, 
    error: 'Erro interno do servidor' 
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend rodando na porta ${PORT}`);
  console.log(`📧 SMTP configurado: ${smtpTransporter ? '✅ Sim' : '❌ Não'}`);
  console.log(`📧 Resend configurado: ${resend ? '✅ Sim' : '❌ Não'}`);
  console.log(`🌐 Frontend URL: ${FRONTEND_URL}`);
  console.log(`📁 Arquivo de usuários: ${usersFile}`);
  
  if (!smtpTransporter && !resend) {
    console.warn('⚠️  ATENÇÃO: Nenhum serviço de email configurado (SMTP ou Resend). Emails não serão enviados.');
  } else if (smtpTransporter) {
    console.log('✅ Usando SMTP para envio de emails');
  } else if (resend) {
    console.log('✅ Usando Resend para envio de emails');
  }
});
