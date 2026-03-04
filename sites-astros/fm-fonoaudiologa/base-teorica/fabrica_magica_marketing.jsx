import { useState } from "react";

const data = {
  positioning: {
    insight: "A Fábrica Mágica já provou que profissionais que trabalham com crianças odeiam documentação. O fonoaudiólogo é o professor que nunca parou de estudar — e que enfrenta documentos ainda mais técnicos, regulados e repetitivos.",
    before: "Para professores, o produto resolve o relatório pedagógico.",
    after: "Para fonoaudiólogos, resolve o documento clínico que o convênio exige, a escola cobra e o conselho regula.",
    tagline_atual: "\"Fábrica Mágica: seus documentos, do jeito certo.\"",
    tagline_fono: "\"Da avaliação ao laudo em minutos. Do jeito que o CFFa pede.\"",
    diferencial: "Já é validado. Fonos vão confiar porque professores confiam.",
  },
  publico: [
    {
      nome: "A Fono Escolar",
      icon: "🏫",
      dor: "80 relatórios no fim do semestre",
      gatilho: "Tempo e volume",
      docs: ["Relatório de Acompanhamento", "Relatório de Alta Infantil"],
      canal: "Instagram + Grupos Facebook",
      tom: "Alívio / Praticidade",
    },
    {
      nome: "A Fono Clínica Autônoma",
      icon: "🏥",
      dor: "Cada laudo é uma estrutura diferente",
      gatilho: "Segurança e conformidade CFFa",
      docs: ["Anamnese", "Avaliação Integral", "Estudo de Caso"],
      canal: "LinkedIn + Instagram",
      tom: "Profissionalismo / Confiança",
    },
    {
      nome: "A Fono de Laudos Especializados",
      icon: "📋",
      dor: "Laudos de TEA, TDAH, DI: densos, cobrados por escolas e INSS",
      gatilho: "Precisão técnica e velocidade",
      docs: ["Laudo TEA", "Laudo TDAH", "Laudo DI"],
      canal: "LinkedIn + Congresso CBFa",
      tom: "Autoridade / ROI de tempo",
    },
    {
      nome: "A Fono em Formação (Estagiária)",
      icon: "🎓",
      dor: "Não sabe estruturar o primeiro relatório de estágio",
      gatilho: "Segurança / não errar",
      docs: ["Relatório de Estágio", "Anamnese"],
      canal: "TikTok + Instagram",
      tom: "Encorajamento / Guia",
    },
  ],
  fases: [
    {
      num: "01",
      nome: "Conquista de Território",
      tempo: "Meses 1–2",
      cor: "#7C3AED",
      objetivo: "Ser reconhecida como a ferramenta de documentação do fonoaudiólogo",
      acoes: [
        "Lançar perfil @fabricamagica.fono no Instagram",
        "Publicar 20 templates gratuitos no formato carrossel (lead magnet orgânico)",
        "Parceria com 3–5 fonos influencers para review honesta",
        "Lançar landing page com foco em Relatório Escolar + Laudo TEA",
        "Campanha de pré-lançamento: lista de espera com brinde (kit PDF)",
      ],
      kpi: "500 leads qualificados | 200 cadastros free",
    },
    {
      num: "02",
      nome: "Prova Social em Escala",
      tempo: "Meses 3–4",
      cor: "#0D7377",
      objetivo: "Fazer o mercado falar por nós",
      acoes: [
        "Campanha de casos reais: \"Fiz 12 laudos em 2 horas\"",
        "UGC incentivado: fonos postam comparativo antes/depois",
        "Depoimento em Reels curto (15s) com dado concreto de tempo salvo",
        "Email nurturing: sequência de 5 emails para leads free",
        "Artigos de SEO para 'como fazer laudo TEA fonoaudiologia'",
      ],
      kpi: "NPS > 60 | 50 depoimentos coletados | 5% conversão free→pago",
    },
    {
      num: "03",
      nome: "Expansão e Autoridade",
      tempo: "Meses 5–6",
      cor: "#B45309",
      objetivo: "Dominar o segmento e abrir B2B (clínicas)",
      acoes: [
        "Participação no CBFa 2025 (estande ou parceria)",
        "Lançar plano Clínica (multiusuário) para gestoras de equipe",
        "Webinar gratuito: 'Documentação clínica que o CFFa exige — e como fazer rápido'",
        "Parceria de indicação com Clínica Ágil / Terapee",
        "Press release para veículos de saúde: Saúde Business, Portal CFM",
      ],
      kpi: "R$ 20k MRR | 3 clínicas B2B | 1.000 usuários ativos",
    },
  ],
  campanhas: [
    {
      titulo: "\"A Fábrica Virou Clínica\"",
      conceito: "Campanha de lançamento. Professores já conhecem. Agora é a vez dos fonos.",
      hook: "O mesmo produto que transformou a documentação de 10.000 professores chegou para a fonoaudiologia.",
      formato: ["Reels de lançamento 30s", "Post de comparação (prof vs fono)", "Email para base existente de professores com indicação"],
      canal: "Instagram + Email base atual",
      timing: "Semana 1 do lançamento",
    },
    {
      titulo: "\"Quanto Vale 1 Hora do Seu Tempo?\"",
      conceito: "Campanha de conversão baseada em ROI de tempo.",
      hook: "Um laudo de TEA leva 60 minutos. Na Fábrica Mágica, 8 minutos. Qual é o valor da diferença?",
      formato: ["Carrossel de dados", "Calculadora de tempo (ferramenta interativa)", "Anúncio estático para Meta Ads"],
      canal: "Instagram + Meta Ads (retargeting)",
      timing: "Mês 2 — após aquecer a audiência",
    },
    {
      titulo: "\"Fim de Semestre, Não de Paciência\"",
      conceito: "Campanha sazonal. Ativada em junho e novembro.",
      hook: "80 relatórios escolares em 3 semanas? A gente transforma isso em 3 dias.",
      formato: ["Stories com contagem regressiva", "Reels de urgência", "Desconto por 72h"],
      canal: "Instagram Stories + WhatsApp",
      timing: "Junho e Novembro (pico de relatórios escolares)",
    },
    {
      titulo: "\"Conforme o CFFa Exige\"",
      conceito: "Campanha de credibilidade técnica. Para fonos mais exigentes.",
      hook: "Cada documento gerado já inclui os campos obrigatórios da Resolução 645/2021. Assine com confiança.",
      formato: ["Post educativo sobre a resolução", "Depoimento de fono especialista", "Comparativo documento manual vs Fábrica Mágica"],
      canal: "LinkedIn + Instagram",
      timing: "Mês 3 — após conquistar primeiros depoimentos",
    },
  ],
  conteudo: [
    { tipo: "Educacional", freq: "3x/semana", exemplo: "\"O que deve ter em um laudo fonoaudiológico de TEA segundo o CFFa\"", meta: "Ranquear no Google / virar referência" },
    { tipo: "Bastidores/Relato Real", freq: "2x/semana", exemplo: "\"Essa fono fez 15 laudos em 1 dia — veja como\"", meta: "Prova social + identificação" },
    { tipo: "Templates Grátis", freq: "1x/semana", exemplo: "PDF: Template de Anamnese Fonoaudiológica (conforme CFFa)", meta: "Lead magnet + autoridade" },
    { tipo: "Produto em Uso", freq: "2x/semana", exemplo: "Screencast do formulário gerando um laudo de TDAH em tempo real", meta: "Demonstração / conversão" },
    { tipo: "Sazonalidade", freq: "conforme calendário", exemplo: "\"5 dias para entregar relatórios. Está pronta?\"", meta: "Urgência / conversão pontual" },
  ],
  budget: [
    { linha: "Meta Ads (Instagram + Facebook)", perc: 40, valor: "R$ 2.000–4.000/mês", foco: "Tráfego pago para landing page" },
    { linha: "Influencers / Criadores de Conteúdo Fono", perc: 25, valor: "R$ 1.200–2.500/mês", foco: "3–5 microinfluencers (5k–50k seguidores)" },
    { linha: "Produção de Conteúdo", perc: 20, valor: "R$ 1.000–2.000/mês", foco: "Design, vídeo, copywriting" },
    { linha: "SEO / Blog", perc: 10, valor: "R$ 500–1.000/mês", foco: "Artigos e templates gratuitos" },
    { linha: "Eventos / CBFa", perc: 5, valor: "R$ 250–500/mês", foco: "Reservado para congressos" },
  ],
};

const colors = {
  bg: "#0A0A0F",
  surface: "#13131A",
  surface2: "#1A1A24",
  border: "#2A2A38",
  accent: "#A78BFA",
  accent2: "#34D399",
  accent3: "#F59E0B",
  text: "#F0F0F8",
  muted: "#6B6B8A",
  highlight: "#7C3AED",
};

const TAG = ({ children, color = colors.accent }) => (
  <span style={{ background: color + "22", color, border: `1px solid ${color}44`, borderRadius: 4, padding: "2px 10px", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>
    {children}
  </span>
);

const Section = ({ id, children, style = {} }) => (
  <section id={id} style={{ marginBottom: 80, ...style }}>{children}</section>
);

const SectionTitle = ({ eyebrow, title, accent = colors.accent }) => (
  <div style={{ marginBottom: 32 }}>
    <div style={{ color: accent, fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 8 }}>{eyebrow}</div>
    <h2 style={{ fontFamily: "'Clash Display', 'Syne', sans-serif", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: colors.text, margin: 0, lineHeight: 1.1 }}>{title}</h2>
    <div style={{ width: 48, height: 3, background: accent, marginTop: 12, borderRadius: 2 }} />
  </div>
);

const Card = ({ children, style = {} }) => (
  <div style={{ background: colors.surface, border: `1px solid ${colors.border}`, borderRadius: 12, padding: 24, ...style }}>
    {children}
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeCampanha, setActiveCampanha] = useState(0);

  const tabs = ["Estratégia", "Público", "Campanhas", "Fases", "Conteúdo", "Budget"];

  return (
    <div style={{ background: colors.bg, minHeight: "100vh", color: colors.text, fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Mono:wght@400;700&family=Syne:wght@700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #0A0A0F; } ::-webkit-scrollbar-thumb { background: #7C3AED; border-radius: 2px; }
        .tab-btn { background: none; border: none; cursor: pointer; transition: all 0.2s; }
        .tab-btn:hover { color: #A78BFA !important; }
        .pulse { animation: pulse 2s ease-in-out infinite; }
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.6; } }
        .fade-in { animation: fadeIn 0.4s ease; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        .card-hover { transition: transform 0.2s, border-color 0.2s; cursor: pointer; }
        .card-hover:hover { transform: translateY(-2px); border-color: #7C3AED !important; }
        .bar-fill { transition: width 1s ease; }
      `}</style>

      {/* HERO */}
      <div style={{ position: "relative", padding: "64px 40px 48px", borderBottom: `1px solid ${colors.border}`, overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, #7C3AED22 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -40, left: 200, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, #34D39911 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg, #7C3AED, #A78BFA)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>✨</div>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: colors.muted, letterSpacing: 2 }}>FÁBRICA MÁGICA</span>
            <div style={{ width: 4, height: 4, borderRadius: "50%", background: colors.muted }} />
            <TAG color={colors.accent2}>Validado com Professores</TAG>
            <span style={{ color: colors.muted, fontSize: 18 }}>→</span>
            <TAG color={colors.accent3}>Expansão para Fonoaudiologia</TAG>
          </div>

          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(36px, 6vw, 68px)", fontWeight: 800, lineHeight: 1.05, marginBottom: 20, letterSpacing: -1 }}>
            Estratégia de<br />
            <span style={{ background: "linear-gradient(90deg, #A78BFA, #34D399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Marketing</span><br />
            para Fonos
          </h1>

          <p style={{ fontSize: 18, color: colors.muted, maxWidth: 560, lineHeight: 1.6, marginBottom: 32 }}>
            Como levar a Fábrica Mágica do mercado de professores para o universo da fonoaudiologia — com os 9 documentos certos, as 4 personas mapeadas e o plano em 3 fases.
          </p>

          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {[["9", "Documentos gerados"], ["4", "Personas mapeadas"], ["3", "Fases de lançamento"], ["4", "Campanhas prontas"]].map(([n, l]) => (
              <div key={l} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 36, fontWeight: 800, color: colors.accent, lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: 12, color: colors.muted, marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TABS */}
      <div style={{ position: "sticky", top: 0, zIndex: 100, background: colors.bg + "EE", backdropFilter: "blur(12px)", borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", gap: 0, overflowX: "auto" }}>
          {tabs.map((tab, i) => (
            <button key={tab} className="tab-btn" onClick={() => setActiveTab(i)}
              style={{ padding: "16px 24px", fontSize: 13, fontWeight: 600, color: activeTab === i ? colors.accent : colors.muted, borderBottom: activeTab === i ? `2px solid ${colors.accent}` : "2px solid transparent", whiteSpace: "nowrap" }}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }} className="fade-in" key={activeTab}>

        {/* ====== ABA 0: ESTRATÉGIA ====== */}
        {activeTab === 0 && (
          <div>
            <SectionTitle eyebrow="Posicionamento" title="O Produto Já É Real. A Narrativa Muda." />

            <Card style={{ marginBottom: 24, borderLeft: `3px solid ${colors.accent}` }}>
              <div style={{ fontSize: 12, color: colors.accent, fontFamily: "'Space Mono', monospace", letterSpacing: 2, marginBottom: 12 }}>INSIGHT CENTRAL</div>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: colors.text }}>{data.positioning.insight}</p>
            </Card>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
              <Card style={{ borderTop: `2px solid ${colors.muted}` }}>
                <div style={{ fontSize: 11, color: colors.muted, letterSpacing: 2, marginBottom: 12, fontFamily: "'Space Mono', monospace" }}>ANTES — PROFESSOR</div>
                <p style={{ color: colors.muted, fontSize: 15, lineHeight: 1.6 }}>{data.positioning.before}</p>
              </Card>
              <Card style={{ borderTop: `2px solid ${colors.accent2}` }}>
                <div style={{ fontSize: 11, color: colors.accent2, letterSpacing: 2, marginBottom: 12, fontFamily: "'Space Mono', monospace" }}>AGORA — FONOAUDIÓLOGO</div>
                <p style={{ color: colors.text, fontSize: 15, lineHeight: 1.6 }}>{data.positioning.after}</p>
              </Card>
            </div>

            <SectionTitle eyebrow="Mensagem" title="Da Tagline Geral ao Recorte Fono" />

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
              <Card>
                <div style={{ fontSize: 11, color: colors.muted, letterSpacing: 2, marginBottom: 12, fontFamily: "'Space Mono', monospace" }}>TAGLINE ATUAL (Professores)</div>
                <p style={{ fontSize: 18, fontFamily: "'Syne', sans-serif", fontWeight: 700, color: colors.muted }}>{data.positioning.tagline_atual}</p>
              </Card>
              <Card style={{ background: "#1A0F2E", borderColor: colors.accent + "44" }}>
                <div style={{ fontSize: 11, color: colors.accent, letterSpacing: 2, marginBottom: 12, fontFamily: "'Space Mono', monospace" }}>MENSAGEM PARA FONOS ✦</div>
                <p style={{ fontSize: 18, fontFamily: "'Syne', sans-serif", fontWeight: 700, color: colors.text }}>{data.positioning.tagline_fono}</p>
              </Card>
            </div>

            <Card style={{ background: "linear-gradient(135deg, #0D1F1A, #13131A)", borderColor: colors.accent2 + "44" }}>
              <div style={{ fontSize: 11, color: colors.accent2, letterSpacing: 2, marginBottom: 12, fontFamily: "'Space Mono', monospace" }}>🏆 VANTAGEM COMPETITIVA DECISIVA</div>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: colors.text }}>{data.positioning.diferencial}</p>
              <p style={{ marginTop: 12, fontSize: 14, color: colors.muted }}>Usar o case de professores como prova social na comunicação para fonos é o ativo mais valioso que vocês têm. <strong style={{ color: colors.accent2 }}>Nenhum concorrente tem isso.</strong></p>
            </Card>

            <div style={{ marginTop: 40 }}>
              <SectionTitle eyebrow="Os 9 Documentos" title="Cada Documento É Uma Campanha" />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
                {[
                  { doc: "Anamnese Fonoaudiológica", prioridade: "Alta", cor: colors.accent2 },
                  { doc: "Relatório de Acompanhamento", prioridade: "Alta", cor: colors.accent2 },
                  { doc: "Relatório de Alta Infantil", prioridade: "Alta", cor: colors.accent2 },
                  { doc: "Avaliação Integral", prioridade: "Alta", cor: colors.accent2 },
                  { doc: "Estudo de Caso", prioridade: "Média", cor: colors.accent3 },
                  { doc: "Laudo Fono — DI", prioridade: "Alta", cor: colors.accent2 },
                  { doc: "Laudo Fono — TDAH", prioridade: "Alta", cor: colors.accent2 },
                  { doc: "Laudo Fono — TEA", prioridade: "Muito Alta ✦", cor: "#F87171" },
                  { doc: "Relatório de Estágio", prioridade: "Média", cor: colors.accent3 },
                ].map(({ doc, prioridade, cor }) => (
                  <Card key={doc} style={{ padding: 16 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: colors.text, marginBottom: 8 }}>{doc}</div>
                    <TAG color={cor}>{prioridade}</TAG>
                  </Card>
                ))}
              </div>
              <Card style={{ marginTop: 16, background: "#1A0A0A", borderColor: "#F8717144" }}>
                <span style={{ color: "#F87171", fontWeight: 700 }}>★ Laudo de TEA é o hero product da campanha.</span>
                <span style={{ color: colors.muted, fontSize: 14 }}> É o documento mais cobrado por escolas, INSS e equipes multidisciplinares. É o documento que mais gera busca orgânica no Google. Toda campanha de conversão deve mencionar TEA primeiro.</span>
              </Card>
            </div>
          </div>
        )}

        {/* ====== ABA 1: PÚBLICO ====== */}
        {activeTab === 1 && (
          <div>
            <SectionTitle eyebrow="Personas" title="4 Perfis, 4 Abordagens" />
            <div style={{ display: "grid", gap: 20 }}>
              {data.publico.map((p, i) => (
                <Card key={i} style={{ borderLeft: `3px solid ${[colors.accent, colors.accent2, colors.accent3, "#60A5FA"][i]}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16, flexWrap: "wrap", gap: 12 }}>
                    <div>
                      <div style={{ fontSize: 24, marginBottom: 4 }}>{p.icon}</div>
                      <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, color: colors.text }}>{p.nome}</h3>
                    </div>
                    <TAG color={[colors.accent, colors.accent2, colors.accent3, "#60A5FA"][i]}>{p.tom}</TAG>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
                    <div style={{ background: colors.surface2, borderRadius: 8, padding: 12 }}>
                      <div style={{ fontSize: 10, color: colors.muted, letterSpacing: 2, marginBottom: 6, fontFamily: "'Space Mono', monospace" }}>DOR PRINCIPAL</div>
                      <p style={{ fontSize: 14, color: colors.text }}>{p.dor}</p>
                    </div>
                    <div style={{ background: colors.surface2, borderRadius: 8, padding: 12 }}>
                      <div style={{ fontSize: 10, color: colors.muted, letterSpacing: 2, marginBottom: 6, fontFamily: "'Space Mono', monospace" }}>GATILHO DE COMPRA</div>
                      <p style={{ fontSize: 14, color: colors.text }}>{p.gatilho}</p>
                    </div>
                    <div style={{ background: colors.surface2, borderRadius: 8, padding: 12 }}>
                      <div style={{ fontSize: 10, color: colors.muted, letterSpacing: 2, marginBottom: 6, fontFamily: "'Space Mono', monospace" }}>DOCUMENTOS QUE USA</div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                        {p.docs.map(d => <TAG key={d} color={colors.muted}>{d}</TAG>)}
                      </div>
                    </div>
                    <div style={{ background: colors.surface2, borderRadius: 8, padding: 12 }}>
                      <div style={{ fontSize: 10, color: colors.muted, letterSpacing: 2, marginBottom: 6, fontFamily: "'Space Mono', monospace" }}>CANAL PRIORITÁRIO</div>
                      <p style={{ fontSize: 14, color: colors.text }}>{p.canal}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* ====== ABA 2: CAMPANHAS ====== */}
        {activeTab === 2 && (
          <div>
            <SectionTitle eyebrow="Campanhas" title="4 Conceitos Criativos" />
            <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
              {data.campanhas.map((c, i) => (
                <button key={i} className="tab-btn" onClick={() => setActiveCampanha(i)}
                  style={{ padding: "8px 16px", borderRadius: 8, background: activeCampanha === i ? colors.accent + "22" : colors.surface, border: `1px solid ${activeCampanha === i ? colors.accent : colors.border}`, color: activeCampanha === i ? colors.accent : colors.muted, fontSize: 13, fontWeight: 600 }}>
                  {`C${i + 1}`}
                </button>
              ))}
            </div>

            {data.campanhas.map((c, i) => activeCampanha === i && (
              <div key={i} className="fade-in">
                <Card style={{ marginBottom: 20, background: "linear-gradient(135deg, #1A0F2E, #13131A)", borderColor: colors.accent + "44", padding: 32 }}>
                  <TAG color={colors.accent} style={{ marginBottom: 16 }}>Campanha {i + 1}</TAG>
                  <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 28, fontWeight: 800, color: colors.text, margin: "12px 0 8px" }}>{c.titulo}</h2>
                  <p style={{ color: colors.muted, fontSize: 15, marginBottom: 20 }}>{c.conceito}</p>
                  <div style={{ background: colors.surface, borderRadius: 10, padding: 20, borderLeft: `3px solid ${colors.accent2}` }}>
                    <div style={{ fontSize: 11, color: colors.accent2, letterSpacing: 2, marginBottom: 8, fontFamily: "'Space Mono', monospace" }}>HOOK / HEADLINE</div>
                    <p style={{ fontSize: 18, fontFamily: "'Syne', sans-serif", fontWeight: 700, color: colors.text, lineHeight: 1.4 }}>"{c.hook}"</p>
                  </div>
                </Card>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
                  <Card>
                    <div style={{ fontSize: 11, color: colors.accent3, letterSpacing: 2, marginBottom: 12, fontFamily: "'Space Mono', monospace" }}>FORMATOS</div>
                    {c.formato.map(f => (
                      <div key={f} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 8 }}>
                        <span style={{ color: colors.accent3, marginTop: 2 }}>›</span>
                        <span style={{ fontSize: 13, color: colors.text, lineHeight: 1.5 }}>{f}</span>
                      </div>
                    ))}
                  </Card>
                  <Card>
                    <div style={{ fontSize: 11, color: colors.accent, letterSpacing: 2, marginBottom: 12, fontFamily: "'Space Mono', monospace" }}>CANAL</div>
                    <p style={{ fontSize: 15, color: colors.text, lineHeight: 1.6 }}>{c.canal}</p>
                  </Card>
                  <Card>
                    <div style={{ fontSize: 11, color: colors.accent2, letterSpacing: 2, marginBottom: 12, fontFamily: "'Space Mono', monospace" }}>TIMING</div>
                    <p style={{ fontSize: 15, color: colors.text, lineHeight: 1.6 }}>{c.timing}</p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ====== ABA 3: FASES ====== */}
        {activeTab === 3 && (
          <div>
            <SectionTitle eyebrow="Roadmap" title="3 Fases de Lançamento" />
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", left: 28, top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom, ${colors.fases?.[0]?.cor || "#7C3AED"}, #0D7377, #B45309)` }} />
              {data.fases.map((f, i) => (
                <div key={i} style={{ display: "flex", gap: 24, marginBottom: 32, paddingLeft: 8 }}>
                  <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: "50%", background: f.cor, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Space Mono', monospace", fontSize: 13, fontWeight: 700, color: "#fff", zIndex: 1, marginTop: 8 }}>
                    {f.num}
                  </div>
                  <Card style={{ flex: 1, borderTop: `2px solid ${f.cor}` }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12, flexWrap: "wrap", gap: 8 }}>
                      <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, color: colors.text }}>{f.nome}</h3>
                      <TAG color={f.cor}>{f.tempo}</TAG>
                    </div>
                    <p style={{ fontSize: 14, color: colors.muted, marginBottom: 16, lineHeight: 1.6 }}>{f.objetivo}</p>
                    <div style={{ display: "grid", gap: 6, marginBottom: 16 }}>
                      {f.acoes.map(a => (
                        <div key={a} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                          <div style={{ width: 6, height: 6, borderRadius: "50%", background: f.cor, flexShrink: 0, marginTop: 6 }} />
                          <span style={{ fontSize: 14, color: colors.text, lineHeight: 1.5 }}>{a}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ background: colors.surface2, borderRadius: 8, padding: "8px 14px", display: "inline-block" }}>
                      <span style={{ fontSize: 11, color: colors.muted, fontFamily: "'Space Mono', monospace", letterSpacing: 1 }}>KPI META: </span>
                      <span style={{ fontSize: 13, color: f.cor, fontWeight: 700 }}>{f.kpi}</span>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ====== ABA 4: CONTEÚDO ====== */}
        {activeTab === 4 && (
          <div>
            <SectionTitle eyebrow="Conteúdo" title="O Que Publicar e Por Quê" />
            <div style={{ display: "grid", gap: 16, marginBottom: 40 }}>
              {data.conteudo.map((c, i) => (
                <Card key={i} style={{ display: "grid", gridTemplateColumns: "180px 1fr 1fr", gap: 20, alignItems: "center" }}>
                  <div>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 16, fontWeight: 800, color: colors.text, marginBottom: 6 }}>{c.tipo}</div>
                    <TAG color={[colors.accent, colors.accent2, colors.accent3, "#60A5FA", "#F87171"][i]}>{c.freq}</TAG>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: colors.muted, letterSpacing: 2, marginBottom: 6, fontFamily: "'Space Mono', monospace" }}>EXEMPLO DE CONTEÚDO</div>
                    <p style={{ fontSize: 14, color: colors.text, lineHeight: 1.5 }}>"{c.exemplo}"</p>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: colors.muted, letterSpacing: 2, marginBottom: 6, fontFamily: "'Space Mono', monospace" }}>META ESTRATÉGICA</div>
                    <p style={{ fontSize: 14, color: colors.muted }}>{c.meta}</p>
                  </div>
                </Card>
              ))}
            </div>

            <SectionTitle eyebrow="Calendário" title="Quando Usar Cada Peça" />
            <Card>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 8 }}>
                {["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"].map((m, i) => (
                  <div key={m} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 12, color: colors.muted, marginBottom: 8, fontFamily: "'Space Mono', monospace" }}>{m}</div>
                    <div style={{ borderRadius: 8, padding: 8, background: i === 5 ? colors.accent + "22" : colors.surface2, border: `1px solid ${i === 5 ? colors.accent + "66" : colors.border}`, fontSize: 11, color: i === 5 ? colors.accent : colors.muted, lineHeight: 1.4 }}>
                      {i === 5 ? "🔥 Pico Relatórios" : i === 0 ? "Lançamento" : i === 1 ? "Prova Social" : i === 2 ? "Meta Ads" : i === 3 ? "SEO" : "CBFa Prep"}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 12, display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 8 }}>
                {["Jul", "Ago", "Set", "Out", "Nov", "Dez"].map((m, i) => (
                  <div key={m} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 12, color: colors.muted, marginBottom: 8, fontFamily: "'Space Mono', monospace" }}>{m}</div>
                    <div style={{ borderRadius: 8, padding: 8, background: i === 4 ? colors.accent + "22" : colors.surface2, border: `1px solid ${i === 4 ? colors.accent + "66" : colors.border}`, fontSize: 11, color: i === 4 ? colors.accent : colors.muted, lineHeight: 1.4 }}>
                      {i === 0 ? "CBFa 2025" : i === 1 ? "B2B Push" : i === 2 ? "Integração" : i === 3 ? "PLG" : i === 4 ? "🔥 Pico Relatórios" : "Balanço"}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* ====== ABA 5: BUDGET ====== */}
        {activeTab === 5 && (
          <div>
            <SectionTitle eyebrow="Investimento" title="Onde Colocar o Dinheiro" />
            <div style={{ display: "grid", gap: 16, marginBottom: 40 }}>
              {data.budget.map((b, i) => (
                <Card key={i}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 15, color: colors.text, marginBottom: 4 }}>{b.linha}</div>
                      <div style={{ fontSize: 13, color: colors.muted }}>{b.foco}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 16, fontWeight: 700, color: colors.accent2 }}>{b.valor}</div>
                      <div style={{ fontSize: 12, color: colors.muted }}>{b.perc}% do budget</div>
                    </div>
                  </div>
                  <div style={{ background: colors.surface2, borderRadius: 4, height: 6, overflow: "hidden" }}>
                    <div style={{ height: "100%", borderRadius: 4, background: `linear-gradient(90deg, ${[colors.accent, colors.accent3, colors.accent2, "#60A5FA", "#F87171"][i]}, ${[colors.accent, colors.accent3, colors.accent2, "#60A5FA", "#F87171"][i]}88)`, width: `${b.perc}%` }} />
                  </div>
                </Card>
              ))}
            </div>

            <Card style={{ background: "linear-gradient(135deg, #0D1F1A, #13131A)", borderColor: colors.accent2 + "44" }}>
              <div style={{ fontSize: 11, color: colors.accent2, letterSpacing: 2, marginBottom: 16, fontFamily: "'Space Mono', monospace" }}>RECOMENDAÇÃO DE BUDGET INICIAL</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                {[
                  ["MVP / Teste", "R$ 2.000–3.000/mês", "Orgânico + 1 microinfluencer + landing page"],
                  ["Crescimento", "R$ 5.000–8.000/mês", "Meta Ads + 3 influencers + produção de conteúdo"],
                  ["Escala", "R$ 12.000–20.000/mês", "Funil completo + time de conteúdo + events"],
                ].map(([fase, valor, desc]) => (
                  <div key={fase} style={{ background: colors.surface, borderRadius: 10, padding: 16 }}>
                    <div style={{ fontSize: 11, color: colors.muted, letterSpacing: 2, marginBottom: 8, fontFamily: "'Space Mono', monospace" }}>{fase}</div>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, color: colors.accent2, marginBottom: 8 }}>{valor}</div>
                    <div style={{ fontSize: 13, color: colors.muted, lineHeight: 1.5 }}>{desc}</div>
                  </div>
                ))}
              </div>
            </Card>

            <div style={{ marginTop: 32 }}>
              <Card style={{ borderColor: colors.accent + "44", background: "#1A0F2E" }}>
                <div style={{ fontSize: 11, color: colors.accent, letterSpacing: 2, marginBottom: 12, fontFamily: "'Space Mono', monospace" }}>✦ DECISÃO DE MESA: QUAL É O PRÓXIMO PASSO?</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  {[
                    ["Valida a mensagem primeiro", "Poste 5 peças orgânicas com os hooks das campanhas e meça engajamento antes de investir em paid."],
                    ["Use a base de professores", "Envie email para quem já usa a Fábrica Mágica perguntando se conhece fonoaudiólogos. Indicação zero custo."],
                    ["Defina o hero document", "TEA ou Relatório Escolar? A escolha do primeiro documento na LP define o público inicial."],
                    ["Capture leads antes de lançar", "Landing page com lista de espera + lead magnet (kit de templates) = base qualificada no dia 1."],
                  ].map(([titulo, desc]) => (
                    <div key={titulo} style={{ background: colors.surface, borderRadius: 8, padding: 14 }}>
                      <div style={{ fontWeight: 700, color: colors.text, fontSize: 14, marginBottom: 6 }}>{titulo}</div>
                      <div style={{ fontSize: 13, color: colors.muted, lineHeight: 1.5 }}>{desc}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
