import crypto from 'crypto';
import fetch from 'node-fetch';

/**
 * Cliente para Facebook Pixel com Conversion API (CAPI)
 * Baseado na implementação PHP original
 */
class FacebookPixelClient {
  constructor(pixelId, accessToken, testEventCode = null, debugMode = false) {
    this.pixelId = pixelId;
    this.accessToken = accessToken;
    this.testEventCode = testEventCode;
    this.debugMode = debugMode;
    this.apiVersion = 'v18.0';
    this.apiUrl = `https://graph.facebook.com/${this.apiVersion}/${pixelId}/events`;
  }

  /**
   * Gera ou recupera um ID único persistente para o usuário
   */
  getOrCreateUserId(req) {
    // Se usuário logado, usa o ID dele
    if (req.session?.user_id) {
      return `user_${req.session.user_id}`;
    }

    // Para usuário anônimo, usa cookie persistente
    const cookieName = 'fb_anon_id';
    if (!req.cookies?.[cookieName]) {
      const anonId = `anon_${crypto.randomBytes(16).toString('hex')}`;
      return anonId;
    }

    return req.cookies[cookieName];
  }

  /**
   * Prepara dados do usuário com hash adequado
   */
  prepareUserData(userData = {}, req = null) {
    const preparedData = { ...userData };

    // ID persistente (CRÍTICO para desduplicação)
    if (!preparedData.external_id && req) {
      preparedData.external_id = this.getOrCreateUserId(req);
    }

    // Normaliza e faz hash dos dados
    if (preparedData.email) {
      preparedData.em = this.hashData(preparedData.email.toLowerCase().trim());
      delete preparedData.email;
    }
    if (preparedData.phone) {
      preparedData.ph = this.hashData(preparedData.phone.replace(/[^0-9+]/g, ''));
      delete preparedData.phone;
    }
    if (preparedData.first_name) {
      preparedData.fn = this.hashData(preparedData.first_name.toLowerCase().trim());
      delete preparedData.first_name;
    }
    if (preparedData.last_name) {
      preparedData.ln = this.hashData(preparedData.last_name.toLowerCase().trim());
      delete preparedData.last_name;
    }
    if (preparedData.city) {
      preparedData.ct = this.hashData(preparedData.city.toLowerCase().trim());
      delete preparedData.city;
    }
    if (preparedData.state) {
      preparedData.st = this.hashData(preparedData.state.toLowerCase().trim());
      delete preparedData.state;
    }
    if (preparedData.zip_code) {
      preparedData.zp = this.hashData(preparedData.zip_code.trim());
      delete preparedData.zip_code;
    }
    if (preparedData.country) {
      preparedData.country = this.hashData(preparedData.country.toLowerCase().trim());
    }

    return preparedData;
  }

  /**
   * Hash SHA256
   */
  hashData(data) {
    return crypto.createHash('sha256').update(data).digest('hex');
  }

  /**
   * Gera event_id único para desduplicação
   */
  generateEventId() {
    return `evt_${Date.now()}_${crypto.randomBytes(8).toString('hex')}`;
  }

  /**
   * Verifica se é um bot
   */
  isBot(userAgent) {
    if (!userAgent) return false;

    const botPatterns = [
      'bot', 'crawl', 'spider', 'scraper', 'facebookexternalhit',
      'facebot', 'uptimerobot', 'pingdom', 'monitoring', 'googlebot',
      'bingbot', 'slurp', 'duckduckbot', 'baiduspider', 'yandexbot'
    ];

    return botPatterns.some(pattern => userAgent.toLowerCase().includes(pattern));
  }

  /**
   * Obtém IP do cliente
   */
  getClientIp(req) {
    const ipKeys = ['cf-connecting-ip', 'x-forwarded-for', 'x-real-ip'];
    
    for (const key of ipKeys) {
      const ip = req.headers[key];
      if (ip) {
        const ips = ip.split(',');
        return ips[0].trim();
      }
    }

    return req.ip || req.connection?.remoteAddress || '127.0.0.1';
  }

  /**
   * Obtém URL atual
   */
  getCurrentUrl(req) {
    const protocol = req.secure || req.headers['x-forwarded-proto'] === 'https' ? 'https' : 'http';
    const host = req.headers.host || 'localhost';
    const url = req.originalUrl || req.url || '/';
    return `${protocol}://${host}${url}`;
  }

  /**
   * Track PageView
   */
  async trackPageView(req, userData = {}, eventId = null) {
    if (!userData.external_id) {
      userData = this.prepareUserData(userData, req);
    }
    return this.sendEvent('PageView', req, userData, {}, eventId);
  }

  /**
   * Track InitiateCheckout
   */
  async trackInitiateCheckout(req, userData = {}, value, currency = 'BRL', contentIds = [], eventId = null) {
    if (!userData.external_id) {
      userData = this.prepareUserData(userData, req);
    }
    const customData = {
      currency,
      value: parseFloat(value),
      content_ids: contentIds,
      content_type: 'product',
      num_items: contentIds.length
    };
    return this.sendEvent('InitiateCheckout', req, userData, customData, eventId);
  }

  /**
   * Track Purchase
   */
  async trackPurchase(req, userData = {}, value, currency = 'BRL', contentIds = [], eventId = null) {
    if (!userData.external_id) {
      userData = this.prepareUserData(userData, req);
    }
    const customData = {
      currency,
      value: parseFloat(value),
      content_ids: contentIds,
      content_type: 'product',
      num_items: contentIds.length
    };
    return this.sendEvent('Purchase', req, userData, customData, eventId);
  }

  /**
   * Track Lead
   */
  async trackLead(req, userData = {}, eventId = null) {
    if (!userData.external_id) {
      userData = this.prepareUserData(userData, req);
    }
    return this.sendEvent('Lead', req, userData, {}, eventId);
  }

  /**
   * Track Custom Event
   */
  async trackCustom(eventName, req, userData = {}, customData = {}, eventId = null) {
    if (!userData.external_id) {
      userData = this.prepareUserData(userData, req);
    }
    return this.sendEvent(eventName, req, userData, customData, eventId);
  }

  /**
   * Envia evento para a Conversion API do Facebook
   */
  async sendEvent(eventName, req, userData, customData, eventId) {
    try {
      // Validação de bot
      const userAgent = req.headers['user-agent'] || '';
      if (this.isBot(userAgent)) {
        return { success: false, event_id: null, error: 'Bot detected' };
      }

      // Gera event_id único para desduplicação
      eventId = eventId || this.generateEventId();

      // Cookies do Facebook
      const fbc = req.cookies?._fbc || null;
      const fbp = req.cookies?._fbp || null;

      // Monta o evento
      const event = {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        event_source_url: this.getCurrentUrl(req),
        action_source: 'website',
        user_data: {
          client_ip_address: this.getClientIp(req),
          client_user_agent: userAgent,
          ...userData
        }
      };

      // Adiciona cookies do Facebook
      if (fbc) event.user_data.fbc = fbc;
      if (fbp) event.user_data.fbp = fbp;

      // Adiciona custom data se houver
      if (Object.keys(customData).length > 0) {
        event.custom_data = customData;
      }

      // Prepara request
      const requestData = {
        data: [event],
        access_token: this.accessToken
      };

      if (this.testEventCode) {
        requestData.test_event_code = this.testEventCode;
      }

      // Envia para Facebook
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      });

      const result = await response.json();

      // Debug
      if (this.debugMode) {
        console.log(`FB CAPI Success: Event=${eventName}, ID=${eventId}, ExtID=${userData.external_id}`);
        console.log('Response:', result);
      }

      return {
        success: response.ok,
        event_id: eventId,
        external_id: userData.external_id,
        response: result
      };

    } catch (error) {
      if (this.debugMode) {
        console.error('Facebook CAPI Error:', error.message);
      }
      return {
        success: false,
        event_id: eventId || null,
        external_id: userData.external_id || null,
        error: error.message
      };
    }
  }

  /**
   * Gera script do Pixel com configuração avançada
   */
  getPixelScript(externalId = null) {
    const safeExternalId = this.escapeHtml(externalId || '');
    
    return `<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');

// Inicialização com external_id para matching avançado
fbq('init', '${this.pixelId}', {
    external_id: '${safeExternalId}'
});

// Configuração global do Pixel
fbq.disablePushState = true; // Evita eventos duplicados em SPAs
</script>
<noscript>
<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=${this.pixelId}&ev=PageView&noscript=1"/>
</noscript>
<!-- End Facebook Pixel Code -->`;
  }

  /**
   * Gera script para evento específico com desduplicação
   */
  getEventScript(eventName, parameters = {}, eventId = null, externalId = null) {
    const safeEventId = this.escapeHtml(eventId || '');
    const safeExternalId = this.escapeHtml(externalId || '');
    
    // Adiciona external_id aos parâmetros do evento
    parameters.external_id = safeExternalId;
    
    const params = JSON.stringify(parameters);
    
    let script = '<script>\n';
    script += `// Facebook Pixel Event: ${eventName}\n`;
    
    if (eventId) {
      script += `fbq('track', '${eventName}', ${params}, {eventID: '${safeEventId}'});\n`;
    } else {
      script += `fbq('track', '${eventName}', ${params});\n`;
    }
    
    script += '</script>';
    
    return script;
  }

  /**
   * Escape HTML
   */
  escapeHtml(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return String(text).replace(/[&<>"']/g, m => map[m]);
  }
}

export default FacebookPixelClient;
