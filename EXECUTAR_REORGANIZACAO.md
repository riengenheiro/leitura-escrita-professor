# 🚀 Como Executar a Reorganização

O script precisa ser executado manualmente no terminal porque requer:
- Senha do sudo
- Confirmação interativa

## 📋 Passo a Passo

### 1. Abra um terminal e execute:

```bash
sudo /var/www/scripts-reorganizacao.sh
```

### 2. O script vai mostrar:

```
🔄 Script de Reorganização de Projetos

⚠️  Este script vai:
   1. Criar /var/www/projetos/sites/
   2. Mover sales_page → projetos/sites/protocolo
   3. Mover doutora-escola → projetos/sites/doutora-escola
   4. Mover nginx-multisite → projetos/nginx-multisite

Continuar? (s/N):
```

### 3. Digite `s` e pressione Enter

### 4. O script vai:
- ✅ Criar estrutura de pastas
- ✅ Parar containers Docker
- ✅ Mover os projetos
- ✅ Atualizar configurações
- ✅ Criar symlinks para compatibilidade

### 5. Após concluir, execute:

```bash
cd /var/www/projetos/nginx-multisite
docker compose up -d
./build-all.sh
```

---

## ⚠️ Alternativa: Executar Passo a Passo Manualmente

Se preferir fazer manualmente, siga estes passos:

### Passo 1: Criar estrutura
```bash
sudo mkdir -p /var/www/projetos/sites
```

### Passo 2: Parar containers
```bash
cd /var/www/nginx-multisite
docker compose down

cd /var/www/sales_page
docker compose down
```

### Passo 3: Mover projetos
```bash
sudo mv /var/www/sales_page /var/www/projetos/sites/protocolo
sudo mv /var/www/doutora-escola /var/www/projetos/sites/doutora-escola
sudo mv /var/www/nginx-multisite /var/www/projetos/nginx-multisite
```

### Passo 4: Atualizar nginx.conf
```bash
sudo sed -i 's|/var/www/sales_page/dist|/var/www/projetos/sites/protocolo/dist|g' /var/www/projetos/nginx-multisite/nginx.conf
sudo sed -i 's|/var/www/doutora-escola/dist|/var/www/projetos/sites/doutora-escola/dist|g' /var/www/projetos/nginx-multisite/nginx.conf
```

### Passo 5: Atualizar docker-compose.yml
```bash
sudo sed -i 's|/var/www/sales_page/dist|/var/www/projetos/sites/protocolo/dist|g' /var/www/projetos/nginx-multisite/docker-compose.yml
sudo sed -i 's|/var/www/doutora-escola/dist|/var/www/projetos/sites/doutora-escola/dist|g' /var/www/projetos/nginx-multisite/docker-compose.yml
sudo sed -i 's|/var/www/sales_page/backend|/var/www/projetos/sites/protocolo/backend|g' /var/www/projetos/nginx-multisite/docker-compose.yml
```

### Passo 6: Atualizar scripts de build
```bash
sudo sed -i 's|/var/www/sales_page|/var/www/projetos/sites/protocolo|g' /var/www/projetos/nginx-multisite/build-all.sh
sudo sed -i 's|/var/www/doutora-escola|/var/www/projetos/sites/doutora-escola|g' /var/www/projetos/nginx-multisite/build-all.sh

sudo sed -i 's|/var/www/sales_page|/var/www/projetos/sites/protocolo|g' /var/www/projetos/nginx-multisite/build-site.sh
sudo sed -i 's|/var/www/doutora-escola|/var/www/projetos/sites/doutora-escola|g' /var/www/projetos/nginx-multisite/build-site.sh
```

### Passo 7: Criar symlinks (opcional)
```bash
sudo ln -sf /var/www/projetos/sites/protocolo /var/www/sales_page
sudo ln -sf /var/www/projetos/sites/doutora-escola /var/www/doutora-escola
sudo ln -sf /var/www/projetos/nginx-multisite /var/www/nginx-multisite
```

### Passo 8: Reiniciar serviços
```bash
cd /var/www/projetos/nginx-multisite
docker compose up -d
./build-all.sh
```

---

## ✅ Verificar se funcionou

```bash
# Verificar estrutura
ls -la /var/www/projetos/

# Verificar containers
cd /var/www/projetos/nginx-multisite
docker compose ps

# Testar sites
curl http://localhost:8082/health
```

---

## 🔄 Reverter (se necessário)

Se precisar reverter:

```bash
# Parar containers
cd /var/www/projetos/nginx-multisite
docker compose down

# Remover symlinks
sudo rm /var/www/sales_page /var/www/doutora-escola /var/www/nginx-multisite

# Mover de volta
sudo mv /var/www/projetos/sites/protocolo /var/www/sales_page
sudo mv /var/www/projetos/sites/doutora-escola /var/www/doutora-escola
sudo mv /var/www/projetos/nginx-multisite /var/www/nginx-multisite

# Reiniciar
cd /var/www/nginx-multisite
docker compose up -d
```

---

**Dica:** Use o script automático (`sudo /var/www/scripts-reorganizacao.sh`) - é mais seguro e faz tudo automaticamente! 🚀
