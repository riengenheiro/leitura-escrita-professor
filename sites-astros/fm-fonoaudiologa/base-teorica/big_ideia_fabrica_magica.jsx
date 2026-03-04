import { useState } from "react";

const ideas = [
  {
    id: 1,
    tag: "TERRITÓRIO 1",
    titulo: "A Magia Acontece na Sessão.",
    subtitulo: "Não no Laudo.",
    cor1: "#7C3AED",
    cor2: "#A78BFA",
    emoji: "✨",
    essencia: "O nome Fábrica Mágica já carrega o conceito. A magia real da fonoaudiologia acontece dentro do consultório — quando uma criança fala pela primeira vez, quando um adulto recupera a voz. O laudo é só o registro do que já foi mágico. A Fábrica cuida do registro. O fono cuida da magia.",
    tensao: "O fonoaudiólogo é o profissional que devolveu a voz a alguém — e passa horas escrevendo sobre isso em vez de fazer mais.",
    manifesto: "\"Você ajudou a Júlia a dizer 'mamãe' pela primeira vez. Você devolveu a voz do professor que perdeu o emprego. Você ensinou o Lucas a se fazer entender no mundo. Isso é magia. O laudo que prova que você fez isso? Esse a gente escreve.\"",
    tagline: "\"Fábrica Mágica: a magia é sua. O documento é nosso.\"",
    visual: "Criança pronunciando primeira palavra / consultório iluminado — contraste com tela de computador escura e vazia",
    campanhas: [
      "Reels: O antes e depois NÃO são o documento — são a criança.",
      "\"A sessão durou 45 min. O laudo durou 8.\" (comparativo com dado real)",
      "Campanha de valorização da profissão + produto como aliado",
    ],
    forca: "Conecta com o propósito da profissão. Emociona. Usa o nome da marca como conceito.",
    risco: "Pode parecer genérico se não for executado com dados concretos de tempo.",
  },
  {
    id: 2,
    tag: "TERRITÓRIO 2",
    titulo: "Você Foi Feita Para Falar.",
    subtitulo: "Não Para Escrever.",
    cor1: "#0D7377",
    cor2: "#34D399",
    emoji: "🎙️",
    essencia: "A ironia perfeita: o profissional da comunicação humana, da voz, da fala — passa horas em silêncio, sozinho, digitando laudos. A fonoaudiologia é a ciência da palavra. E a burocracia transformou o fono em datilógrafo.",
    tensao: "O paradoxo: quem ensina o mundo a falar precisa parar de falar para escrever sobre isso.",
    manifesto: "\"Você escolheu essa profissão porque acredita no poder das palavras ditas — não das escritas. Você sabia dar voz a quem não tinha. Sabia ouvir o que os outros não escutavam. Mas nunca imaginou que passaria tanto tempo com a boca fechada, os olhos no computador, escrevendo o que você já sabe que fez.\"",
    tagline: "\"Fábrica Mágica: você fala com o paciente. A gente escreve o resto.\"",
    visual: "Fono animada em sessão, gesticulando, sorrindo — vs. silhueta curvada sobre computador às 23h",
    campanhas: [
      "\"Quantas horas por semana você passa em silêncio escrevendo sobre comunicação?\"",
      "Série de conteúdo: 'A semana de uma fono em números' (horas com paciente vs. laudo)",
      "Campanha de identidade profissional: 'Você é fono. Não é redatora.'",
    ],
    forca: "Paradoxo inteligente. Fácil de viralizar. Funciona como pergunta retórica em anúncio.",
    risco: "Pode soar crítico à profissão se o tom não for cuidadoso. Precisa de validação com fonos.",
  },
  {
    id: 3,
    tag: "TERRITÓRIO 3",
    titulo: "Enquanto Você Escreve,",
    subtitulo: "Alguém Está Esperando.",
    cor1: "#B45309",
    cor2: "#F59E0B",
    emoji: "⏳",
    essencia: "A dor mais profunda não é o tempo perdido — é o custo de oportunidade. Cada hora no laudo é uma hora a menos com a família, com a atualização profissional, com o descanso. Ou pior: é uma hora a mais que o próximo paciente espera.",
    tensao: "O laudo não rouba só tempo. Rouba energia, presença e capacidade de cuidar.",
    manifesto: "\"São 23h. A Maria ainda está escrevendo o relatório da Isabela. Amanhã são mais 7 crianças. E no fim do semestre, mais 60 relatórios escolares. Em algum lugar, a família da Maria também está esperando.\"",
    tagline: "\"Fábrica Mágica: porque seu tempo é de quem importa.\"",
    visual: "Relógio avançando / fono no computador enquanto família dorme / criança que vai ser atendida amanhã",
    campanhas: [
      "Campanha de empatia: 'Nós sabemos que você não escolheu ficar no computador até meia-noite.'",
      "Dado de impacto: 'Fonos escolares passam em média X horas/semana em documentação'",
      "Depoimento real: 'O dia que parei de levar laudo pra casa'",
    ],
    forca: "Alta carga emocional. Universalmente identificável. Converte bem em copy longo.",
    risco: "Pode ser pesado demais. Precisa terminar com esperança, não com culpa.",
  },
  {
    id: 4,
    tag: "TERRITÓRIO 4",
    titulo: "10.000 Professores Já Sabem.",
    subtitulo: "E Agora, as Fonos?",
    cor1: "#BE185D",
    cor2: "#F472B6",
    emoji: "🏆",
    essencia: "A validação com professores é o maior ativo da Fábrica Mágica. Essa Big Idea usa a prova social como provocação. É o único território que faz do histórico da empresa a narrativa central — e transforma um dado de negócio em combustível criativo.",
    tensao: "Os professores descobriram primeiro. A pergunta para o fono é: você vai ser dos últimos a saber?",
    manifesto: "\"Em 2024, 10.000 professores descobriram que relatório pedagógico não precisa mais ser sofrimento. Em 2025, chegou a vez da fonoaudiologia. Laudo de TEA em 8 minutos. Relatório escolar em 10. Avaliação integral em 15. A pergunta não é se vai valer. A pergunta é: quantos laudos você já poderia ter entregue?\"",
    tagline: "\"Fábrica Mágica: professores já sabem. Fonos, bem-vindas.\"",
    visual: "Comparativo lado a lado: professora satisfeita / fono exausta. Depois: as duas satisfeitas.",
    campanhas: [
      "Post de lançamento: 'Começamos pelos professores. Mas a lista sempre incluiu você.'",
      "Depoimento de professora + pergunta para fonos nos comentários",
      "Campanha de indicação: professora indica a fono que atende o filho dela",
    ],
    forca: "Único. Nenhum concorrente tem essa história. Usa FOMO + prova social ao mesmo tempo.",
    risco: "Pode soar arrogante. O número de professores precisa ser real e verificável.",
  },
];

const winner = {
  recomendacao: "TERRITÓRIO 2 + TERRITÓRIO 1",
  explicacao: "Combine o paradoxo inteligente do T2 com o calor emocional do T1. A linha mestra de comunicação é o paradoxo ('você é a ciência da fala, não da escrita'), mas o coração emocional é a magia que acontece na sessão. O T4 funciona como campanha de lançamento (ativação de base), não como Big Idea permanente.",
  linha_mestra: "\"Você foi feita para a magia da fala. O documento, a Fábrica resolve.\"",
  desdobramentos: [
    "Campanha de lançamento (T4): 'Professores já sabem. Fonos, é a sua vez.'",
    "Campanha de conversão (T2): 'Você foi feita para falar. Não para escrever.'",
    "Campanha de retenção (T1): 'A magia acontece na sessão. O laudo é nosso.'",
    "Campanha sazonal (T3): 'Fim de semestre chegando. A família não pode esperar.'",
  ],
};

export default function App() {
  const [active, setActive] = useState(null);
  const [showWinner, setShowWinner] = useState(false);

  return (
    <div style={{ background: "#080810", minHeight: "100vh", color: "#F0F0F8", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Mono:wght@700&family=Syne:wght@700;800;900&display=swap');
        * { box-sizing: border-box; }
        .card { transition: all 0.3s cubic-bezier(0.4,0,0.2,1); cursor: pointer; }
        .card:hover { transform: translateY(-4px); }
        .btn { transition: all 0.2s; cursor: pointer; border: none; }
        .btn:hover { opacity: 0.85; transform: scale(0.98); }
        .expand { animation: expand 0.4s cubic-bezier(0.4,0,0.2,1); }
        @keyframes expand { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        .glow { animation: glow 3s ease-in-out infinite; }
        @keyframes glow { 0%,100% { box-shadow: 0 0 40px #7C3AED33; } 50% { box-shadow: 0 0 80px #7C3AED55; } }
      `}</style>

      {/* HEADER */}
      <div style={{ padding: "56px 32px 40px", borderBottom: "1px solid #1E1E2E", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, #7C3AED18 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "relative" }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: 4, color: "#6B6B8A", marginBottom: 16, textTransform: "uppercase" }}>Fábrica Mágica · Expansão Fonoaudiologia · 2025</div>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(40px, 7vw, 80px)", fontWeight: 900, lineHeight: 1, margin: "0 0 16px", letterSpacing: -2 }}>
            A{" "}
            <span style={{ background: "linear-gradient(90deg, #A78BFA, #F472B6, #F59E0B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Big Ideia
            </span>
          </h1>
          <p style={{ fontSize: 18, color: "#6B6B8A", maxWidth: 480, margin: "0 auto" }}>4 territórios criativos. Uma direção. Clique em cada um para explorar.</p>
        </div>
      </div>

      {/* GRID DE IDEIAS */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20, marginBottom: 32 }}>
          {ideas.map((idea) => {
            const isActive = active === idea.id;
            return (
              <div key={idea.id} onClick={() => setActive(isActive ? null : idea.id)}
                className="card"
                style={{
                  background: isActive ? `linear-gradient(135deg, ${idea.cor1}22, #13131A)` : "#13131A",
                  border: `1px solid ${isActive ? idea.cor1 + "66" : "#1E1E2E"}`,
                  borderRadius: 16,
                  padding: 28,
                  borderTop: `3px solid ${idea.cor1}`,
                }}>

                {/* Card Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: idea.cor2, letterSpacing: 2 }}>{idea.tag}</span>
                  <span style={{ fontSize: 28 }}>{idea.emoji}</span>
                </div>

                {/* Título */}
                <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 900, color: "#F0F0F8", lineHeight: 1.1, marginBottom: 4 }}>{idea.titulo}</h2>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(16px, 2vw, 22px)", fontWeight: 700, color: idea.cor2, marginBottom: 16 }}>{idea.subtitulo}</h3>

                {/* Essência */}
                <p style={{ fontSize: 14, color: "#6B6B8A", lineHeight: 1.7, marginBottom: 16 }}>{idea.essencia}</p>

                {/* Tagline */}
                <div style={{ background: idea.cor1 + "18", borderRadius: 8, padding: "10px 14px", marginBottom: 16 }}>
                  <div style={{ fontSize: 11, color: idea.cor2, fontFamily: "'Space Mono', monospace", letterSpacing: 2, marginBottom: 4 }}>TAGLINE</div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#F0F0F8", fontStyle: "italic" }}>{idea.tagline}</p>
                </div>

                {/* Expand indicator */}
                <div style={{ textAlign: "center", color: idea.cor2, fontSize: 13 }}>
                  {isActive ? "▲ fechar" : "▼ explorar"}
                </div>

                {/* EXPANDED */}
                {isActive && (
                  <div className="expand" style={{ marginTop: 24, borderTop: `1px solid ${idea.cor1}33`, paddingTop: 24 }}>

                    {/* Tensão */}
                    <div style={{ marginBottom: 20 }}>
                      <div style={{ fontSize: 10, color: idea.cor2, fontFamily: "'Space Mono', monospace", letterSpacing: 2, marginBottom: 8 }}>TENSÃO CRIATIVA</div>
                      <p style={{ fontSize: 15, color: "#C0C0D8", lineHeight: 1.6, fontStyle: "italic" }}>{idea.tensao}</p>
                    </div>

                    {/* Manifesto */}
                    <div style={{ background: "#0A0A10", borderRadius: 10, padding: 20, marginBottom: 20, borderLeft: `3px solid ${idea.cor1}` }}>
                      <div style={{ fontSize: 10, color: idea.cor2, fontFamily: "'Space Mono', monospace", letterSpacing: 2, marginBottom: 12 }}>MANIFESTO</div>
                      <p style={{ fontSize: 15, color: "#E0E0F0", lineHeight: 1.8 }}>{idea.manifesto}</p>
                    </div>

                    {/* Visual */}
                    <div style={{ marginBottom: 20 }}>
                      <div style={{ fontSize: 10, color: idea.cor2, fontFamily: "'Space Mono', monospace", letterSpacing: 2, marginBottom: 8 }}>DIREÇÃO VISUAL</div>
                      <p style={{ fontSize: 14, color: "#6B6B8A" }}>{idea.visual}</p>
                    </div>

                    {/* Campanhas */}
                    <div style={{ marginBottom: 20 }}>
                      <div style={{ fontSize: 10, color: idea.cor2, fontFamily: "'Space Mono', monospace", letterSpacing: 2, marginBottom: 12 }}>DESDOBRAMENTOS</div>
                      {idea.campanhas.map((c, i) => (
                        <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8 }}>
                          <span style={{ color: idea.cor1, flexShrink: 0, marginTop: 2 }}>›</span>
                          <span style={{ fontSize: 14, color: "#C0C0D8", lineHeight: 1.6 }}>{c}</span>
                        </div>
                      ))}
                    </div>

                    {/* Força e Risco */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                      <div style={{ background: idea.cor1 + "15", borderRadius: 8, padding: 14 }}>
                        <div style={{ fontSize: 10, color: idea.cor2, fontFamily: "'Space Mono', monospace", letterSpacing: 2, marginBottom: 6 }}>✦ FORÇA</div>
                        <p style={{ fontSize: 13, color: "#C0C0D8", lineHeight: 1.5 }}>{idea.forca}</p>
                      </div>
                      <div style={{ background: "#FF000011", borderRadius: 8, padding: 14 }}>
                        <div style={{ fontSize: 10, color: "#F87171", fontFamily: "'Space Mono', monospace", letterSpacing: 2, marginBottom: 6 }}>⚠ RISCO</div>
                        <p style={{ fontSize: 13, color: "#C0C0D8", lineHeight: 1.5 }}>{idea.risco}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA RECOMENDAÇÃO */}
        {!showWinner && (
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <button className="btn" onClick={() => setShowWinner(true)}
              style={{ background: "linear-gradient(135deg, #7C3AED, #BE185D)", color: "#fff", padding: "18px 48px", borderRadius: 12, fontSize: 16, fontFamily: "'Syne', sans-serif", fontWeight: 800, letterSpacing: 0.5 }}>
              ✦ Ver a Recomendação da Agência
            </button>
          </div>
        )}

        {/* WINNER */}
        {showWinner && (
          <div className="expand glow" style={{ background: "linear-gradient(135deg, #1A0F2E, #0D1020)", border: "1px solid #7C3AED44", borderTop: "3px solid #A78BFA", borderRadius: 20, padding: 40, marginBottom: 48 }}>
            
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 24 }}>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#A78BFA", letterSpacing: 3 }}>RECOMENDAÇÃO DA AGÊNCIA</span>
              <div style={{ flex: 1, height: 1, background: "#2A1F4A" }} />
            </div>

            <div style={{ display: "inline-block", background: "#A78BFA22", border: "1px solid #A78BFA44", borderRadius: 8, padding: "6px 16px", marginBottom: 20 }}>
              <span style={{ color: "#A78BFA", fontFamily: "'Space Mono', monospace", fontSize: 12, letterSpacing: 2 }}>COMBINAÇÃO VENCEDORA</span>
            </div>

            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#F0F0F8", marginBottom: 8, lineHeight: 1.1 }}>
              {winner.recomendacao}
            </h2>

            <div style={{ background: "#0A0615", borderRadius: 12, padding: 24, margin: "24px 0", borderLeft: "4px solid #A78BFA" }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#A78BFA", letterSpacing: 2, marginBottom: 12 }}>LINHA MESTRA DA COMUNICAÇÃO</div>
              <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(20px, 3vw, 32px)", fontWeight: 800, color: "#F0F0F8", lineHeight: 1.2, fontStyle: "italic" }}>
                "{winner.linha_mestra}"
              </p>
            </div>

            <p style={{ fontSize: 16, color: "#9090B0", lineHeight: 1.8, marginBottom: 32 }}>{winner.explicacao}</p>

            <div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#A78BFA", letterSpacing: 2, marginBottom: 16 }}>COMO CADA TERRITÓRIO VIRA UMA FASE</div>
              <div style={{ display: "grid", gap: 12 }}>
                {winner.desdobramentos.map((d, i) => {
                  const colors_arr = ["#7C3AED", "#BE185D", "#B45309", "#0D7377"];
                  return (
                    <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", background: "#0A0A15", borderRadius: 10, padding: 16, borderLeft: `3px solid ${colors_arr[i]}` }}>
                      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 20, fontWeight: 700, color: colors_arr[i], flexShrink: 0, lineHeight: 1 }}>0{i + 1}</div>
                      <div>
                        <p style={{ fontSize: 15, color: "#E0E0F0", lineHeight: 1.6 }}>{d}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Próxima pergunta */}
            <div style={{ marginTop: 40, background: "#13131A", borderRadius: 12, padding: 24, textAlign: "center" }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#6B6B8A", letterSpacing: 2, marginBottom: 12 }}>PRÓXIMA DECISÃO DE MESA</div>
              <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 22, fontWeight: 800, color: "#F0F0F8", marginBottom: 8 }}>Qual território ressoa mais com vocês?</p>
              <p style={{ fontSize: 15, color: "#6B6B8A" }}>A partir da escolha, desenvolvemos o manifesto completo, o roteiro do primeiro Reel e a landing page de conversão.</p>
            </div>

          </div>
        )}

        {/* BARRA INFERIOR */}
        <div style={{ borderTop: "1px solid #1E1E2E", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#3A3A5A", letterSpacing: 2 }}>FÁBRICA MÁGICA · SESSÃO CRIATIVA · 2025</span>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#3A3A5A", letterSpacing: 2 }}>4 TERRITÓRIOS · 1 BIG IDEA</span>
        </div>
      </div>
    </div>
  );
}
