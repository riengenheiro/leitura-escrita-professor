#!/bin/bash

echo "🧪 Testando Webhook da Kiwify"
echo ""

# URL do webhook
URL="https://protocolo.vivasuamissao.top/webhook/kiwify"
TOKEN="npjyiwbk74h"

# Dados de teste baseados no formato real da Kiwify
curl -X POST "$URL" \
  -H "Content-Type: application/json" \
  -H "X-Kiwify-Token: $TOKEN" \
  -d '{
    "order_id": "test-123",
    "order_ref": "TEST123",
    "order_status": "paid",
    "webhook_event_type": "order_approved",
    "Customer": {
      "email": "teste@exemplo.com",
      "full_name": "Teste Usuario"
    }
  }'

echo ""
echo ""
echo "✅ Teste enviado! Verifique os logs:"
echo "   docker compose logs -f backend"
