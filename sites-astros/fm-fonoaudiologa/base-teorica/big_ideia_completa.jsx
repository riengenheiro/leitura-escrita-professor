import { useState } from "react";

export default function App() {
  const [section, setSection] = useState("insight");

  const nav = [
    { id: "insight", label: "A Descoberta" },
    { id: "bigidea", label: "A Big Idea" },
    { id: "manifesto", label: "Manifesto" },
    { id: "copies", label: "Copies" },
    { id: "desdobramentos", label: "Desdobramentos" },
  ];

  return (
    <div style={{ background: "#07070F", minHeight: "100vh", color: "#EEEEF8", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&family=Space+Mono:wght@400;700&family=Syne:wght@700;800;900&display=swap');
        * { box-sizing: border-box; }
        .nav-btn { background: none; border: none; cursor: pointer; font-family: 'Space Mono', monospace; transition: all 0.2s; padding: 10px 20px; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; }
        .nav-btn:hover { color: #C4B5FD !important; }
        .fade { animation: fadeIn 0.5s ease; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .highlight { background: linear-gradient(90deg, #A78BFA, #F472B6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .highlight-gold { background: linear-gradient(90deg, #F59E0B, #FCD34D); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .highlight-green { background: linear-gradient(90deg, #34D399, #6EE7B7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .card { background: #111118; border: 1px solid #1E1E30; border-radius: 14px; padding: 28px; }
        .pill { display: inline-block; padding: 4px 14px; border-radius: 20px; font-family: 'Space Mono', monospace; font-size: 10px; letter-spacing: 2px; font-weight: 700; text-transform: uppercase; }
        .copy-card { background: #0D0D1A; border: 1px solid #1E1E30; border-radius: 12px; padding: 22px; transition: border-color 0.2s; }
        .copy-card:hover { border-color: #7C3AED55; }
      `}</style>

      {/* HEADER */}
      <div style={{ borderBottom: "1px solid #1A1A28", padding: "40px 32px 32px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "#4A4A6A", letterSpacing: 3, marginBottom: 14 }}>
            FÁBRICA MÁGICA · FONOAUDIOLOGIA · BIG IDEA · 2025
          </div>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: -1, margin: 0 }}>
            <span className="highlight">O documento</span><br />
            fala por você.
          </h1>
        </div>
      </div>

      {/* NAV */}
      <div style={{ borderBottom: "1px solid #1A1A28", background: "#07070F", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {nav.map(n => (
            <button key={n.id} className="nav-btn"
              onClick={() => setSection(n.id)}
              style={{ color: section === n.id ? "#C4B5FD" : "#4A4A6A", borderBottom: section === n.id ? "2px solid #7C3AED" : "2px solid transparent", whiteSpace: "nowrap" }}>
              {n.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px" }} className="fade" key={section}>

        {section === "insight" && (
          <div>
            <div style={{ marginBottom: 48 }}>
              <div className="pill" style={{ background: "#7C3AED22", color: "#A78BFA", marginBottom: 20 }}>A resposta para sua dúvida</div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 32, fontWeight: 900, marginBottom: 24, lineHeight: 1.2 }}>
                Laudo ou Relatório?<br />
                <span className="highlight-gold">Nenhum dos dois. Documento.</span>
              </h2>

              <div className="card" style={{ borderLeft: "3px solid #F59E0B", marginBottom: 16 }}>
                <div className="pill" style={{ background: "#F59E0B22", color: "#FCD34D", marginBottom: 14 }}>Insight Técnico</div>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: "#B0B0D0", margin: 0 }}>
                  Na fonoaudiologia, <strong style={{ color: "#EEEEF8" }}>laudo</strong> tem conotação médica — e tecnicamente, o fonoaudiólogo <em>não emite laudo de TEA</em>. Quem emite é o médico. A fono emite o <strong style={{ color: "#EEEEF8" }}>relatório fonoaudiológico</strong> que embasa esse laudo. Usar "laudo" na comunicação pode criar atrito técnico com parte do público mais rigoroso.
                </p>
              </div>

              <div className="card" style={{ borderLeft: "3px solid #34D399", marginBottom: 16 }}>
                <div className="pill" style={{ background: "#34D39922", color: "#6EE7B7", marginBottom: 14 }}>Insight de Comunicação</div>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: "#B0B0D0", margin: 0 }}>
                  <strong style={{ color: "#EEEEF8" }}>Relatório</strong> é o termo mais popular no dia a dia da fono que atende crianças — relatório escolar, de acompanhamento, de alta. <strong style={{ color: "#EEEEF8" }}>A mãe, a escola e o médico entendem "relatório"</strong> sem precisar saber o que é "laudo fonoaudiológico".
                </p>
              </div>

              <div className="card" style={{ background: "linear-gradient(135deg, #13001F, #0D0D1A)", borderColor: "#7C3AED44" }}>
                <div className="pill" style={{ background: "#7C3AED22", color: "#A78BFA", marginBottom: 14 }}>Decisão Criativa ✦</div>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: "#B0B0D0", marginBottom: 12 }}>
                  A Big Idea usa <strong style={{ color: "#C4B5FD", fontSize: 18 }}>"documento"</strong> como palavra-guarda-chuva na tagline — porque abraça laudo, relatório e parecer ao mesmo tempo, sem criar ruído técnico.
                </p>
                <p style={{ fontSize: 15, color: "#7070A0", lineHeight: 1.7, margin: 0 }}>
                  Na copy de cada campanha, o termo é adaptado: <em style={{ color: "#EEEEF8" }}>"relatório"</em> para a fono escolar, <em style={{ color: "#EEEEF8" }}>"relatório fonoaudiológico"</em> para a clínica autônoma, <em style={{ color: "#EEEEF8" }}>"laudo"</em> somente em contextos técnicos específicos (voz, audiologia).
                </p>
              </div>
            </div>

            <div>
              <div className="pill" style={{ background: "#F472B622", color: "#F472B6", marginBottom: 20 }}>A Grande Virada de Posicionamento</div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 28, fontWeight: 900, marginBottom: 24, lineHeight: 1.2 }}>
                Você revelou algo que<br /><span className="highlight">muda tudo</span>
              </h2>
              <div style={{ display: "grid", gap: 14 }}>
                {[
                  { num: "01", titulo: "A fono não tem consciência do problema real", texto: "Ela acha que o problema é falta de tempo. Na verdade é medo de errar, insegurança sobre o que escrever e linguagem que não comunica para quem lê. Isso muda o posicionamento: a Fábrica Mágica não é só rápida — ela é a guia que dá segurança e voz.", cor: "#7C3AED" },
                  { num: "02", titulo: "O documento é o maior cartão de visitas da fono — e ela não sabe", texto: "Um relatório bem feito diz à escola: 'essa fono é excelente'. Diz ao médico: 'confie nessa profissional'. Diz à mãe: 'seu filho está em boas mãos'. É o cartão de visitas que fica na pasta da escola para sempre. A fono nunca foi ensinada a pensar assim.", cor: "#F59E0B" },
                  { num: "03", titulo: "A linguagem técnica exclui quem mais importa", texto: "O relatório escrito para o prontuário não serve para a mãe. Não serve para a professora. A Fábrica Mágica gera documentos que a mãe entende E que o médico respeita — promessa única que nenhum concorrente tem.", cor: "#34D399" },
                ].map(item => (
                  <div key={item.num} className="card" style={{ borderLeft: `3px solid ${item.cor}`, display: "flex", gap: 20 }}>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 28, fontWeight: 700, color: item.cor, flexShrink: 0, lineHeight: 1, paddingTop: 4 }}>{item.num}</div>
                    <div>
                      <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 16, color: "#EEEEF8", marginBottom: 8 }}>{item.titulo}</div>
                      <p style={{ fontSize: 15, color: "#8888A8", lineHeight: 1.7, margin: 0 }}>{item.texto}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {section === "bigidea" && (
          <div>
            <div className="pill" style={{ background: "#7C3AED22", color: "#A78BFA", marginBottom: 24 }}>Big Idea Central</div>

            <div style={{ background: "linear-gradient(135deg, #13001F, #0D0020)", border: "1px solid #7C3AED44", borderRadius: 20, padding: "48px 40px", marginBottom: 28, textAlign: "center" }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#6B4A8A", letterSpacing: 3, marginBottom: 24 }}>TAGLINE PRINCIPAL</div>
              <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(24px, 4vw, 42px)", fontWeight: 900, lineHeight: 1.2, color: "#EEEEF8", margin: "0 0 20px" }}>
                "O seu documento fala por você<br />
                <span className="highlight">quando você não está na sala."</span>
              </p>
              <div style={{ width: 60, height: 2, background: "linear-gradient(90deg, #7C3AED, #F472B6)", margin: "0 auto 20px" }} />
              <p style={{ fontSize: 15, color: "#6B6B8A", fontStyle: "italic", margin: 0 }}>para a mãe que lê em casa · para a professora que precisa entender · para o médico que precisa confiar</p>
            </div>

            <div style={{ background: "#0D0D1A", border: "1px solid #F59E0B33", borderRadius: 20, padding: "36px 40px", marginBottom: 28, textAlign: "center" }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#7A5A00", letterSpacing: 3, marginBottom: 20 }}>TAGLINE ALTERNATIVA — FOCO EM REPUTAÇÃO</div>
              <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(20px, 3.5vw, 36px)", fontWeight: 900, lineHeight: 1.2, color: "#EEEEF8", margin: "0 0 16px" }}>
                "Um documento bem feito abre portas<br />
                <span className="highlight-gold">que anos de carreira não abrem."</span>
              </p>
              <div style={{ width: 60, height: 2, background: "linear-gradient(90deg, #F59E0B, #FCD34D)", margin: "0 auto 16px" }} />
              <p style={{ fontSize: 15, color: "#6B6B8A", fontStyle: "italic", margin: 0 }}>a escola que recomenda · o médico que encaminha · a família que indica</p>
            </div>

            <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, marginBottom: 16, color: "#EEEEF8" }}>Por que essa Big Idea funciona?</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 28 }}>
              {[
                { titulo: "Inverte a percepção", texto: "A fono vê o documento como fardo. A Big Idea transforma em ativo de reputação. Não é burocracia — é marketing passivo.", cor: "#7C3AED" },
                { titulo: "Cria consciência do problema", texto: "Ela não sabia que o documento ruim travava indicações. Agora sabe. E a Fábrica Mágica é a solução natural.", cor: "#F472B6" },
                { titulo: "Fala com todos os perfis", texto: "Fono escolar quer impressionar a escola. Clínica quer impressionar o médico. Uma Big Idea, múltiplas portas.", cor: "#34D399" },
                { titulo: "Incomparável com concorrentes", texto: "Sistemas de gestão falam em agenda. Só a Fábrica pode falar em reputação, abertura de portas e como a profissional é percebida.", cor: "#F59E0B" },
              ].map(item => (
                <div key={item.titulo} className="card" style={{ borderTop: `2px solid ${item.cor}` }}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 15, color: "#EEEEF8", marginBottom: 8 }}>{item.titulo}</div>
                  <p style={{ fontSize: 14, color: "#7070A0", lineHeight: 1.7, margin: 0 }}>{item.texto}</p>
                </div>
              ))}
            </div>

            <div className="card" style={{ background: "linear-gradient(135deg, #001A10, #0D0D1A)", borderColor: "#34D39933" }}>
              <div className="pill" style={{ background: "#34D39922", color: "#6EE7B7", marginBottom: 16 }}>Tensão Criativa — O Motor da Campanha</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 16, alignItems: "center" }}>
                <div style={{ background: "#0A0A12", borderRadius: 10, padding: 16 }}>
                  <div style={{ fontSize: 11, color: "#4A4A6A", fontFamily: "'Space Mono', monospace", letterSpacing: 2, marginBottom: 8 }}>O QUE ELA ACREDITA</div>
                  <p style={{ fontSize: 15, color: "#8888A8", fontStyle: "italic", lineHeight: 1.6, margin: 0 }}>"Documento é obrigação, não ferramenta."</p>
                </div>
                <div style={{ fontSize: 28, color: "#34D399", textAlign: "center" }}>→</div>
                <div style={{ background: "#001810", borderRadius: 10, padding: 16, border: "1px solid #34D39933" }}>
                  <div style={{ fontSize: 11, color: "#34D399", fontFamily: "'Space Mono', monospace", letterSpacing: 2, marginBottom: 8 }}>O QUE É VERDADE</div>
                  <p style={{ fontSize: 15, color: "#EEEEF8", fontStyle: "italic", lineHeight: 1.6, margin: 0 }}>"É o maior cartão de visitas que você nunca soube que tinha."</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {section === "manifesto" && (
          <div>
            <div className="pill" style={{ background: "#F472B622", color: "#F472B6", marginBottom: 24 }}>Manifesto da Marca</div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 28, fontWeight: 900, marginBottom: 32, lineHeight: 1.2 }}>
              O texto que define quem a<br /><span className="highlight">Fábrica Mágica é</span> para a fono
            </h2>

            <div style={{ background: "linear-gradient(160deg, #0D0020, #07070F)", border: "1px solid #7C3AED33", borderRadius: 20, padding: "48px 40px", marginBottom: 28 }}>
              {[
                { texto: "Você escolheu essa profissão porque acredita que a fala transforma vidas.", destaque: false },
                { texto: "Você passou anos aprendendo a escutar o que outros não escutam. A enxergar no silêncio de uma criança um mundo inteiro esperando para se revelar.", destaque: false },
                { texto: "Você ajudou o João a dizer 'mamãe' pela primeira vez. Devolveu a voz da professora que havia perdido o emprego. Mostrou para a família da Mariana que o diagnóstico não é o fim — é o começo.", destaque: false },
                { texto: "Isso é o seu trabalho real.", destaque: true, cor: "#C4B5FD" },
                { texto: "Mas tem uma parte do trabalho que você carrega em silêncio: o documento que precisa provar tudo isso.", destaque: false, separator: true },
                { texto: "O relatório que a escola vai arquivar. O parecer que o médico vai ler antes de encaminhar mais pacientes para você. A avaliação que a mãe vai mostrar para a psicóloga, para a neurologista, para a família inteira.", destaque: false },
                { texto: "Esse documento fala por você quando você não está na sala.", destaque: true, cor: "#F9C84A" },
                { texto: "E quando está bem feito — na linguagem certa, com a estrutura certa, com as palavras que a escola entende e o médico respeita — ele abre portas que anos de carreira não abrem sozinhos.", destaque: false, separator: true },
                { texto: "O problema é que ninguém te ensinou isso na faculdade. E no fim do dia, depois de 6 sessões, você ainda precisa escrever esse documento do zero.", destaque: false },
                { texto: "Com medo de errar. Com preguiça de começar. Com a sensação de que nunca vai ficar bom o suficiente.", destaque: false, separator: true },
                { texto: "A Fábrica Mágica existe para isso.", destaque: true, cor: "#F472B6" },
                { texto: "Não para substituir o que você sabe. Para traduzir o que você sabe em palavras que chegam onde precisam chegar.", destaque: false },
                { texto: "Você responde. A gente escreve. O documento faz o resto.", destaque: true, cor: "#A0FDD0", assinatura: true },
              ].map((item, i) => (
                <div key={i}>
                  {item.separator && <div style={{ height: 1, background: "#2A2A40", margin: "20px 0" }} />}
                  <p style={{
                    fontSize: item.destaque ? (item.assinatura ? 20 : 22) : 16,
                    lineHeight: item.destaque ? 1.3 : 1.8,
                    color: item.destaque ? (item.cor || "#EEEEF8") : "#9090B8",
                    fontStyle: item.destaque ? "italic" : "normal",
                    fontWeight: item.destaque ? 800 : 400,
                    fontFamily: item.destaque ? "'Syne', sans-serif" : "'DM Sans', sans-serif",
                    margin: "0 0 14px",
                    paddingTop: item.assinatura ? 8 : 0,
                    borderTop: item.assinatura ? "1px solid #2A2A40" : "none",
                  }}>
                    {item.texto}
                  </p>
                </div>
              ))}
            </div>

            <div className="card" style={{ borderTop: "2px solid #F59E0B", textAlign: "center" }}>
              <div className="pill" style={{ background: "#F59E0B22", color: "#FCD34D", marginBottom: 14 }}>Linha de Assinatura</div>
              <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 22, fontWeight: 900, color: "#EEEEF8", margin: "0 0 6px" }}>Fábrica Mágica</p>
              <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 16, color: "#F59E0B", fontStyle: "italic", margin: 0 }}>Você responde. A gente escreve. O documento faz o resto.</p>
            </div>
          </div>
        )}

        {section === "copies" && (
          <div>
            <div className="pill" style={{ background: "#34D39922", color: "#6EE7B7", marginBottom: 24 }}>Arsenal de Copy</div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 28, fontWeight: 900, marginBottom: 32 }}>Copies prontas para cada<br /><span className="highlight-green">formato e persona</span></h2>

            <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 17, color: "#EEEEF8", marginBottom: 14 }}>Hooks — Abertura de Reels / Stories</h3>
            <div style={{ display: "grid", gap: 10, marginBottom: 36 }}>
              {[
                { copy: "A escola da Júlia arquivou o seu relatório. E a diretora encaminhou 3 novas famílias para você. Isso não foi coincidência.", tag: "reputação", cor: "#7C3AED" },
                { copy: "Você sabe exatamente o que a Mariana precisa. O problema é transformar isso em palavras que a professora dela vai entender.", tag: "linguagem", cor: "#F472B6" },
                { copy: "Um relatório bem escrito é a única parte do seu trabalho que continua trabalhando quando você está dormindo.", tag: "autoridade", cor: "#F59E0B" },
                { copy: "Ninguém te ensinou a fazer relatório na faculdade. Só te disseram que você precisava fazer.", tag: "dor", cor: "#34D399" },
                { copy: "A mãe leu o seu relatório e chorou. Não de tristeza — porque foi a primeira vez que alguém descreveu o filho dela de um jeito que ela entendeu.", tag: "emoção", cor: "#60A5FA" },
              ].map((item, i) => (
                <div key={i} className="copy-card" style={{ borderLeft: `3px solid ${item.cor}`, display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "#D0D0F0", fontStyle: "italic", margin: 0, flex: 1 }}>"{item.copy}"</p>
                  <span className="pill" style={{ background: item.cor + "22", color: item.cor, flexShrink: 0 }}>{item.tag}</span>
                </div>
              ))}
            </div>

            <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 17, color: "#EEEEF8", marginBottom: 14 }}>Headlines — Anúncios Meta Ads</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 36 }}>
              {[
                { titulo: "Dado de Tempo", copy: "Você leva 60 minutos para fazer um relatório. Na Fábrica Mágica, 8 minutos. O seu próximo paciente agradece.", sub: "Fono escolar / autônoma" },
                { titulo: "Prova Social", copy: "Mais de 10.000 professores já descobriram. Agora chegou a vez dos fonoaudiólogos.", sub: "Campanha de lançamento" },
                { titulo: "Pergunta", copy: "O último relatório que você entregou — a escola entendeu o que você quis dizer?", sub: "Fono clínica" },
                { titulo: "Provocação técnica", copy: "Um relatório de TEA mal escrito não abre vagas na escola. Bem escrito garante mediador, sala de recursos e prioridade.", sub: "Fono especialista" },
              ].map((item, i) => (
                <div key={i} className="copy-card">
                  <div style={{ fontSize: 10, color: "#4A4A6A", fontFamily: "'Space Mono', monospace", letterSpacing: 2, marginBottom: 8 }}>{item.titulo}</div>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "#D0D0F0", fontStyle: "italic", margin: "0 0 10px" }}>"{item.copy}"</p>
                  <span className="pill" style={{ background: "#7C3AED22", color: "#A78BFA" }}>{item.sub}</span>
                </div>
              ))}
            </div>

            <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 17, color: "#EEEEF8", marginBottom: 14 }}>Subject Lines — Email Marketing</h3>
            <div style={{ display: "grid", gap: 8, marginBottom: 36 }}>
              {[
                ["Você sabia que o seu relatório está abrindo (ou fechando) portas?", "Abertura de funil"],
                ["A professora ficou com o relatório. E começou a recomendar você.", "Prova social"],
                ["60 minutos por relatório × 80 relatórios = você sabe a conta", "ROI de tempo"],
                ["O que a escola lê no seu relatório quando você não está lá", "Curiosidade"],
                ["Fim de semestre chegando. 80 relatórios na lista. Respira.", "Sazonal — novembro"],
              ].map(([copy, tag], i) => (
                <div key={i} style={{ background: "#0D0D1A", borderRadius: 8, padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, border: "1px solid #1E1E30" }}>
                  <p style={{ fontSize: 15, color: "#C0C0E0", margin: 0 }}>{copy}</p>
                  <span className="pill" style={{ background: "#1E1E30", color: "#5050A0", flexShrink: 0 }}>{tag}</span>
                </div>
              ))}
            </div>

            <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 17, color: "#EEEEF8", marginBottom: 14 }}>CTAs por Intenção</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {[
                { cta: "Gerar meu primeiro documento grátis", intencao: "Conversão imediata", cor: "#34D399" },
                { cta: "Ver como fica um relatório de TEA", intencao: "Demonstração / prova", cor: "#7C3AED" },
                { cta: "Quero testar antes do fim de semestre", intencao: "Urgência sazonal", cor: "#F59E0B" },
                { cta: "Começar agora — sem cartão de crédito", intencao: "Remover fricção", cor: "#F472B6" },
                { cta: "Baixar template de relatório grátis", intencao: "Lead magnet / topo", cor: "#60A5FA" },
                { cta: "Fazer o meu primeiro relatório escolar", intencao: "Fono escolar", cor: "#A78BFA" },
              ].map((item, i) => (
                <div key={i} style={{ background: item.cor + "15", border: `1px solid ${item.cor}33`, borderRadius: 10, padding: 16 }}>
                  <div style={{ fontSize: 11, color: item.cor, fontFamily: "'Space Mono', monospace", letterSpacing: 1, marginBottom: 8 }}>{item.intencao}</div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#EEEEF8", margin: 0 }}>"{item.cta}"</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === "desdobramentos" && (
          <div>
            <div className="pill" style={{ background: "#F59E0B22", color: "#FCD34D", marginBottom: 24 }}>Como a Big Idea vira campanha</div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 28, fontWeight: 900, marginBottom: 32 }}>Uma ideia.<br /><span className="highlight-gold">Quatro campanhas.</span></h2>

            {[
              { num: "01", nome: "Campanha de Lançamento", cor: "#7C3AED", timing: "Mês 1–2", conceito: '"Professores já sabem. Fonos, é a sua vez."', descricao: "Usa a validação com professores como prova social. Apresenta a Fábrica Mágica como produto que já transformou uma categoria — e agora chegou na fonoaudiologia. Tom: convite, não urgência.", execucao: ["Reel 30s: professora fala, fono aparece no final", "Post comparativo: professora descansada vs fono exausta → as duas descansadas", "Email para base de professores: 'Você conhece uma fono?'"] },
              { num: "02", nome: "Campanha de Autoridade", cor: "#F59E0B", timing: "Mês 2–3", conceito: '"O documento que fala por você quando você não está na sala."', descricao: "Coração da Big Idea. Faz a fono enxergar o documento com novos olhos. Não vende produtividade — vende reputação. Tom: revelação, epifania.", execucao: ["Série de posts: 'O que a escola lê no seu relatório'", "Carrossel: antes e depois de um relatório (ruim vs bem feito)", "Depoimento: 'Depois que melhorei o relatório, as indicações triplicaram'"] },
              { num: "03", nome: "Campanha de Conversão", cor: "#34D399", timing: "Mês 3–4", conceito: '"8 minutos. Relatório pronto. Portas abertas."', descricao: "Após aquecer o público com autoridade, entra o produto de frente. Dado de tempo + benefício de reputação. Tom: direto, objetivo.", execucao: ["Anúncio estático com dado: '60 min → 8 min'", "Reel de demonstração: do formulário ao documento final", "CTA: 'Gere seu primeiro relatório grátis'"] },
              { num: "04", nome: "Campanha Sazonal", cor: "#F472B6", timing: "Junho e Novembro", conceito: '"Fim de semestre chegando. 80 relatórios na lista. Respira."', descricao: "Ativada nos picos de relatórios escolares. Alta urgência, alta empatia. Tom: alívio imediato, não pressão.", execucao: ["Stories com contagem: 'X dias para o fim do semestre'", "Desconto por 72h: 'Semana do relatório escolar'", "WhatsApp: mensagem direta para lista de leads"] },
            ].map(item => (
              <div key={item.num} className="card" style={{ marginBottom: 18, borderTop: `3px solid ${item.cor}` }}>
                <div style={{ display: "flex", gap: 20, alignItems: "flex-start", marginBottom: 18 }}>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 30, fontWeight: 700, color: item.cor, flexShrink: 0, lineHeight: 1 }}>{item.num}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8, flexWrap: "wrap", gap: 8 }}>
                      <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 19, color: "#EEEEF8", margin: 0 }}>{item.nome}</h3>
                      <span className="pill" style={{ background: item.cor + "22", color: item.cor }}>{item.timing}</span>
                    </div>
                    <div style={{ background: item.cor + "15", borderRadius: 8, padding: "10px 16px", marginBottom: 12 }}>
                      <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 16, fontWeight: 700, color: "#EEEEF8", fontStyle: "italic", margin: 0 }}>{item.conceito}</p>
                    </div>
                    <p style={{ fontSize: 15, color: "#8080A0", lineHeight: 1.7, margin: 0 }}>{item.descricao}</p>
                  </div>
                </div>
                <div style={{ paddingLeft: 50 }}>
                  <div style={{ fontSize: 11, color: "#4A4A6A", fontFamily: "'Space Mono', monospace", letterSpacing: 2, marginBottom: 8 }}>EXECUÇÃO</div>
                  {item.execucao.map((e, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, marginBottom: 6 }}>
                      <span style={{ color: item.cor }}>›</span>
                      <span style={{ fontSize: 14, color: "#A0A0C0", lineHeight: 1.6 }}>{e}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div style={{ background: "linear-gradient(135deg, #0D0020, #07070F)", border: "1px solid #7C3AED44", borderRadius: 16, padding: 32, textAlign: "center" }}>
              <div className="pill" style={{ background: "#7C3AED22", color: "#A78BFA", marginBottom: 14 }}>Próximo passo da mesa</div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 900, color: "#EEEEF8", marginBottom: 10 }}>Aprovar a Big Idea e escolher a campanha de lançamento</h3>
              <p style={{ fontSize: 15, color: "#6B6B8A", lineHeight: 1.7, margin: "0 auto", maxWidth: 480 }}>A partir daqui: manifesto em vídeo (30–60s), primeira landing page, 5 posts de aquecimento e o roteiro do reel de demonstração.</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
