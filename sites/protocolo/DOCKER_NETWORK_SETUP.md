# 🔗 Configuração de Rede Docker - Proxy Manager

## Como conectar Proxy Manager na mesma rede

Se o Proxy Manager também estiver rodando em Docker, é melhor conectá-lo na mesma rede para usar o nome do container.

### Passo 1: Criar a rede (se ainda não existir)

```bash
docker network create sales-network
```

### Passo 2: Adicionar Proxy Manager na rede

**Opção A: Via docker-compose do Proxy Manager**

Adicione no `docker-compose.yml` do Proxy Manager:

```yaml
services:
  nginx-proxy-manager:
    # ... outras configurações ...
    networks:
      - sales-network

networks:
  sales-network:
    external: true
```

**Opção B: Via comando Docker**

```bash
docker network connect sales-network nginx-proxy-manager
```

(Substitua `nginx-proxy-manager` pelo nome do seu container do Proxy Manager)

### Passo 3: Verificar conexão

```bash
docker network inspect sales-network
```

Você deve ver ambos os containers listados.

### Passo 4: Configurar no Proxy Manager

- **Forward Hostname/IP:** `sales-page-prod`
- **Forward Port:** `80`

## Vantagens de usar a mesma rede

✅ Comunicação direta entre containers (mais rápido)
✅ Não precisa expor portas no host
✅ Mais seguro (isolamento de rede)
✅ Usa DNS interno do Docker (nome do container)

## Verificar se está funcionando

```bash
# Dentro do container do Proxy Manager, teste:
docker exec nginx-proxy-manager ping sales-page-prod
```

Se funcionar, a rede está configurada corretamente!
