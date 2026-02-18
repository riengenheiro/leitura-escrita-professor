# Configuração Proxy Manager - protocolo.vivasuamissao.top

## 🎯 Subdomínios Recomendados

**Opção 1 (Recomendada):** `protocolo.vivasuamissao.top` ⭐
- Curto e direto
- Reflete o nome do produto
- Fácil de lembrar

**Opção 2:** `energia.vivasuamissao.top`
- Palavra-chave forte
- Memorável

**Opção 3:** `protocoloenergia.vivasuamissao.top`
- Nome completo
- Mais específico

## 📋 Passo a Passo no Nginx Proxy Manager

### 1. Acesse o Proxy Manager
- URL: `http://seu-ip:81` (ou domínio configurado)
- Faça login

### 2. Criar Proxy Host

1. Clique em **"Proxy Hosts"** → **"Add Proxy Host"**

2. **Aba "Details":**
   - **Domain Names:** `protocolo.vivasuamissao.top` (ou sua escolha)
   - **Scheme:** `http`
   - **Forward Hostname/IP:** 
     - `sales-page-prod` (se Proxy Manager em Docker na mesma rede) ⭐
     - `localhost` (se Proxy Manager fora do Docker)
   - **Forward Port:** 
     - `80` (se Proxy Manager em Docker na mesma rede) ⭐
     - `8080` (se Proxy Manager fora do Docker)
   - ✅ Marque **"Block Common Exploits"**
   - ✅ Marque **"Websockets Support"** (opcional, mas recomendado)

3. **Aba "SSL":**
   - ✅ Marque **"Request a new SSL Certificate"**
   - ✅ Marque **"Force SSL"**
   - ✅ Marque **"HTTP/2 Support"**
   - ✅ Marque **"HSTS Enabled"**
   - ✅ Marque **"HSTS Subdomains"**
   - Email: Seu email para notificações Let's Encrypt
   - Clique em **"Save"**

### 3. Verificar DNS

Certifique-se que o DNS está configurado:

```
Tipo: A
Nome: protocolo (ou energia, protocoloenergia - conforme sua escolha)
Valor: IP_DO_SEU_SERVIDOR
TTL: 3600 (ou automático)
```

## 🔧 Configuração Avançada (Opcional)

### Custom Nginx Configuration

Se precisar de configurações customizadas, adicione no campo **"Custom Nginx Configuration"**:

```nginx
# Headers adicionais para performance
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;

# Cache para assets estáticos
location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot|webp)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

## 🚀 Iniciar Aplicação em Produção

```bash
cd /var/www/sales_page
docker compose --profile prod up -d --build
```

## ✅ Verificar se está funcionando

1. **Teste local:**
   ```bash
   curl http://localhost:8080
   ```

2. **Teste pelo domínio:**
   ```bash
   curl https://protocolo.vivasuamissao.top
   ```

3. **Ver logs:**
   ```bash
   docker logs sales-page-prod
   ```

## 🔍 Troubleshooting

### Container não inicia
```bash
docker compose --profile prod logs
```

### Porta 8080 já em uso
Altere no `docker-compose.yml`:
```yaml
ports:
  - "8081:80"  # Use outra porta
```
E atualize no Proxy Manager: Forward Port → `8081`

### SSL não funciona
- Verifique se o DNS está apontando corretamente
- Aguarde alguns minutos para propagação
- Verifique logs do Proxy Manager

### Página não carrega
- Verifique se o container está rodando: `docker ps | grep sales-page-prod`
- Teste acesso direto: `curl http://localhost:8080`
- Verifique logs: `docker logs sales-page-prod`

## 📝 Notas Importantes

- O Proxy Manager gerencia SSL automaticamente
- **Recomendado:** Use o nome do container (`sales-page-prod`) quando ambos estiverem em Docker
- Se Proxy Manager estiver na mesma rede Docker, use porta `80` (porta interna do container)
- Se Proxy Manager estiver fora do Docker, use `localhost:8080` (porta exposta no host)
- Para conectar containers na mesma rede, adicione o Proxy Manager na rede `sales-network`
- Use sempre HTTPS em produção
