# 🚀 Configuração Rápida - Proxy Manager

## Subdomínios Recomendados (escolha um)

### 🥇 Opção 1: **`protocolo.vivasuamissao.top`** ⭐ RECOMENDADO
- Curto, direto, fácil de lembrar
- Reflete o nome do produto
- Profissional

### 🥈 Opção 2: **`energia.vivasuamissao.top`**
- Palavra-chave forte (energia)
- Fácil de digitar
- Memorável

### 🥉 Opção 3: **`protocoloenergia.vivasuamissao.top`**
- Nome completo do produto
- Mais específico
- Pode ser longo para digitar

### ❌ Evitar: `vendas.vivasuamissao.top`
- Genérico demais
- Não reforça o branding
- Menos memorável

## Configuração no Proxy Manager

### Passo 1: Criar Proxy Host

| Campo | Valor |
|-------|-------|
| **Domain Names** | `protocolo.vivasuamissao.top` (ou sua escolha) |
| **Scheme** | `http` |
| **Forward Hostname/IP** | `sales-page-prod` (se Proxy Manager em Docker) OU `localhost` (se fora) |
| **Forward Port** | `80` (se mesma rede Docker) OU `8080` (se Proxy Manager fora do Docker) |
| **Block Common Exploits** | ✅ Sim |
| **Websockets Support** | ✅ Sim |

### Passo 2: SSL (Let's Encrypt)

| Opção | Status |
|-------|--------|
| Request SSL Certificate | ✅ |
| Force SSL | ✅ |
| HTTP/2 Support | ✅ |
| HSTS Enabled | ✅ |

### Passo 3: DNS

Configure no seu provedor de DNS:

```
Tipo: A
Nome: vendas
Valor: [IP_DO_SEU_SERVIDOR]
TTL: 3600
```

### Passo 4: Iniciar Aplicação

```bash
cd /var/www/sales_page
docker compose --profile prod up -d --build
```

## ✅ Teste

Após configurar, acesse:
- **HTTPS:** https://protocolo.vivasuamissao.top (ou seu subdomínio escolhido)
- **Teste local:** `curl http://localhost:8080`

## 🔧 Configuração de Rede Docker

### Cenário 1: Proxy Manager em Docker (Recomendado)

**Se Proxy Manager também está em Docker:**
- **Forward Hostname/IP:** `sales-page-prod` (nome do container)
- **Forward Port:** `80` (porta interna do container)
- **Importante:** Adicione o Proxy Manager na rede `sales-network` do docker-compose

**Como adicionar Proxy Manager na mesma rede:**
```bash
# No docker-compose do Proxy Manager, adicione:
networks:
  - sales-network

# E adicione a rede externa:
networks:
  sales-network:
    external: true
```

### Cenário 2: Proxy Manager fora do Docker

**Se Proxy Manager está rodando diretamente no host:**
- **Forward Hostname/IP:** `localhost` ou `127.0.0.1`
- **Forward Port:** `8080` (porta exposta no host)

---

**Pronto!** Sua página estará acessível em `https://protocolo.vivasuamissao.top` 🎉
