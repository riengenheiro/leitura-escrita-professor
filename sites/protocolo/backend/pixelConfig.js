/**
 * Configuração de Múltiplos Pixels do Facebook
 * 
 * Este arquivo permite gerenciar múltiplos pixels por página, produto ou campanha.
 * Similar ao exemplo PHP original que busca do banco de dados.
 */

/**
 * Configuração de pixels
 * 
 * Em produção, você pode buscar isso de um banco de dados,
 * arquivo JSON, ou qualquer outra fonte de dados.
 */
const PIXEL_CONFIGS = {
  // Por página
  'landing-page-1': {
    pixelId: '123456789',
    accessToken: process.env.FACEBOOK_ACCESS_TOKEN_1 || process.env.FACEBOOK_ACCESS_TOKEN,
    name: 'Landing Page Principal'
  },
  
  'landing-page-2': {
    pixelId: '987654321',
    accessToken: process.env.FACEBOOK_ACCESS_TOKEN_2 || process.env.FACEBOOK_ACCESS_TOKEN,
    name: 'Landing Page Secundária'
  },

  // Por produto (similar ao exemplo PHP com plans)
  'product-1': {
    pixelId: '111111111',
    accessToken: process.env.FACEBOOK_ACCESS_TOKEN_PRODUCT_1,
    name: 'Produto 1 - Manual Básico'
  },

  'product-2': {
    pixelId: '222222222',
    accessToken: process.env.FACEBOOK_ACCESS_TOKEN_PRODUCT_2,
    name: 'Produto 2 - Manual Premium'
  },

  // Por campanha
  'black-friday': {
    pixelId: '333333333',
    accessToken: process.env.FACEBOOK_ACCESS_TOKEN_BF,
    name: 'Campanha Black Friday'
  },

  // Pixel padrão
  'default': {
    pixelId: process.env.FACEBOOK_PIXEL_ID,
    accessToken: process.env.FACEBOOK_ACCESS_TOKEN,
    name: 'Pixel Padrão'
  }
};

/**
 * Obtém configuração do pixel por ID
 * 
 * @param {string} configId - ID da configuração (ex: 'landing-page-1', 'product-1')
 * @returns {object|null} Configuração do pixel ou null se não encontrado
 */
export function getPixelConfig(configId) {
  const config = PIXEL_CONFIGS[configId];
  
  if (!config) {
    console.warn(`Pixel config not found: ${configId}. Using default.`);
    return PIXEL_CONFIGS['default'];
  }

  // Validar que tem as informações necessárias
  if (!config.pixelId || !config.accessToken) {
    console.error(`Pixel config incomplete for: ${configId}`);
    return null;
  }

  return config;
}

/**
 * Obtém configuração padrão
 */
export function getDefaultPixelConfig() {
  return PIXEL_CONFIGS['default'];
}

/**
 * Lista todos os pixels configurados
 */
export function getAllPixelConfigs() {
  return Object.entries(PIXEL_CONFIGS).map(([id, config]) => ({
    id,
    ...config,
    accessToken: '***' // Nunca exponha o token completo em listagens
  }));
}

/**
 * EXEMPLO: Buscar configuração do banco de dados
 * 
 * Se você tiver uma tabela 'pixels' ou 'plans' com pixel_id e access_token,
 * use esta função como referência:
 */
export async function getPixelConfigFromDatabase(planId) {
  // Exemplo com banco de dados (adapte para sua infraestrutura)
  /*
  const db = await connectDatabase();
  const result = await db.query(
    'SELECT pixel_id, access_token FROM plans WHERE id = ?',
    [planId]
  );
  
  if (result.length === 0) {
    return null;
  }
  
  return {
    pixelId: result[0].pixel_id,
    accessToken: result[0].access_token,
    name: `Plan ${planId}`
  };
  */
  
  // Por enquanto, retorna do objeto em memória
  return getPixelConfig(`product-${planId}`);
}

/**
 * EXEMPLO: Buscar configuração de arquivo JSON
 */
export async function getPixelConfigFromFile(configId) {
  try {
    // Leia de um arquivo JSON externo
    const fs = await import('fs/promises');
    const path = await import('path');
    
    const configPath = path.join(process.cwd(), 'data', 'pixels.json');
    const data = await fs.readFile(configPath, 'utf8');
    const configs = JSON.parse(data);
    
    return configs[configId] || getDefaultPixelConfig();
  } catch (error) {
    console.error('Error reading pixel config from file:', error);
    return getDefaultPixelConfig();
  }
}

export default {
  getPixelConfig,
  getDefaultPixelConfig,
  getAllPixelConfigs,
  getPixelConfigFromDatabase,
  getPixelConfigFromFile
};
