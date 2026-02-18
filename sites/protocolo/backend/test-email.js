import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const email = process.argv[2] || 'ricardo@viafiltros.com.br';
const password = process.argv[3] || 'Teste123!@#';

console.log('🧪 Testando envio de email via SMTP...\n');

// Verificar configuração SMTP
if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
  console.error('❌ Configuração SMTP incompleta!');
  console.log('\nVerifique se estas variáveis estão no .env:');
  console.log('  - SMTP_HOST');
  console.log('  - SMTP_USER');
  console.log('  - SMTP_PASS');
  process.exit(1);
}

console.log('📋 Configuração SMTP:');
console.log(`   Host: ${process.env.SMTP_HOST}`);
console.log(`   Port: ${process.env.SMTP_PORT || 465}`);
console.log(`   User: ${process.env.SMTP_USER}`);
console.log(`   Pass: ${process.env.SMTP_PASS ? '***' : 'NÃO CONFIGURADA'}`);
console.log(`   From: ${process.env.EMAIL_FROM || process.env.SMTP_USER}`);
console.log(`   To: ${email}\n`);

if (process.env.SMTP_PASS === 'SUA_SENHA_AQUI' || !process.env.SMTP_PASS) {
  console.error('❌ ERRO: A senha SMTP não foi configurada!');
  console.log('\nEdite o arquivo .env e substitua SUA_SENHA_AQUI pela senha real do email.');
  process.exit(1);
}

// Criar transporte SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: process.env.SMTP_PORT === '465' || !process.env.SMTP_PORT || parseInt(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Testar conexão
console.log('🔌 Testando conexão SMTP...');
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Erro na conexão SMTP:', error.message);
    console.error('\nDetalhes:', error);
    process.exit(1);
  } else {
    console.log('✅ Conexão SMTP estabelecida com sucesso!\n');
    
    // Enviar email de teste
    const emailFrom = process.env.EMAIL_FROM || process.env.SMTP_USER;
    const loginUrl = process.env.FRONTEND_URL ? `${process.env.FRONTEND_URL}/login` : 'https://protocolo.vivasuamissao.top/login';
    
    const mailOptions = {
      from: emailFrom,
      to: email,
      subject: '🧪 TESTE - Acesso ao Manual Interativo',
      html: `
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
            .test-badge { background: #ffc107; color: #000; padding: 10px; border-radius: 5px; margin: 20px 0; text-align: center; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🧪 TESTE - Email SMTP</h1>
            </div>
            <div class="content">
              <div class="test-badge">
                ⚠️ ESTE É UM EMAIL DE TESTE
              </div>
              <p>Olá!</p>
              <p>Este é um email de teste para verificar se o SMTP está funcionando corretamente.</p>
              
              <div class="credentials">
                <h3>📋 Credenciais de Teste</h3>
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

              <p>Se você recebeu este email, significa que o SMTP está funcionando! ✅</p>
              
              <p>Atenciosamente,<br>Equipe do Manual Interativo</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
🧪 TESTE - Email SMTP

Este é um email de teste para verificar se o SMTP está funcionando.

Credenciais de Teste:
Email: ${email}
Senha: ${password}

Acesse: ${loginUrl}

Se você recebeu este email, significa que o SMTP está funcionando! ✅
      `
    };

    console.log('📧 Enviando email de teste...');
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('❌ Erro ao enviar email:', error.message);
        console.error('\nDetalhes:', error);
        process.exit(1);
      } else {
        console.log('✅ Email enviado com sucesso!');
        console.log(`   Message ID: ${info.messageId}`);
        console.log(`   Response: ${info.response}`);
        console.log(`\n📬 Verifique a caixa de entrada de: ${email}`);
        console.log('   (Verifique também a pasta de spam/lixo eletrônico)');
        process.exit(0);
      }
    });
  }
});
