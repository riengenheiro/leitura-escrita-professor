# Depoimentos - Fábrica Mágica

Site de depoimentos reais de professoras que utilizam a Fábrica Mágica da Doutora Escola.

## 🎨 Características

- **Design em tons de azul**: Interface moderna e agradável com gradientes azuis
- **Depoimentos reais**: Exibição de feedbacks autênticos de professoras
- **Cards interativos**: Cada depoimento em um card elegante com hover effects
- **Responsive**: Design adaptável para todos os dispositivos
- **Performance otimizada**: Build com Vite e React

## 🚀 Tecnologias

- **React 18** + **TypeScript**
- **Tailwind CSS** para estilização
- **Vite** para build rápido
- **Dados em JSON** (src/data/depoimentos.ts)

## 📦 Build

```bash
# Build individual
cd /var/www/projetos/nginx-multisite
./build-site.sh depoimentos-fabrica

# Build de todos os sites
./build-all.sh
```

## 🌐 Acesso

O site estará disponível em: `depoimentos.doutoraescola.com.br`

## 📝 Estrutura

```
src/
├── components/
│   ├── Header.tsx           # Cabeçalho com logo
│   ├── Hero.tsx             # Seção principal com estatísticas
│   ├── DepoimentoCard.tsx   # Card individual de depoimento
│   ├── DepoimentosGrid.tsx  # Grid com todos os depoimentos
│   └── Footer.tsx           # Rodapé padrão Doutora Escola
├── data/
│   └── depoimentos.ts       # Dados dos depoimentos
├── App.tsx                  # Componente principal
├── main.tsx                 # Entry point
└── index.css                # Estilos globais
```

## 🔄 Atualizar Depoimentos

Para adicionar novos depoimentos, edite o arquivo `src/data/depoimentos.ts` e faça o rebuild do site.

## 🎨 Cores

- **Primary**: `#1e3a5f` (Azul escuro)
- **Secondary**: `#2563eb` (Azul médio)
- **Accent**: `#3b82f6` (Azul claro)
- **Blue Dark**: `#0f172a` (Azul muito escuro)

## ✨ Funcionalidades

- Filtro automático de depoimentos válidos (com conteúdo significativo)
- Avatar colorido gerado automaticamente a partir do nome
- Badges de tempo (antes/depois)
- Botão "Ver Todos" para carregar mais depoimentos
- Seção de estatísticas com números impactantes
- Layout em grid responsivo (1, 2 ou 3 colunas)

---

**Desenvolvido para Doutora Escola**
