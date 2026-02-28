import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Isso substitui meu médico?',
      a: 'Não, e não deve. O manual te prepara para chegar na consulta sabendo o que perguntar, quais exames pedir e como interpretar os resultados. Paciente informado facilita — e acelera — o diagnóstico.',
    },
    {
      q: 'Serve para homens e mulheres?',
      a: 'Sim. O conteúdo é relevante para qualquer adulto que sente cansaço crônico, falta de foco ou disposição baixa — independente de gênero ou idade.',
    },
    {
      q: 'É PDF para baixar?',
      a: 'Não é um PDF estático. É uma plataforma online interativa com quizzes, diário alimentar e checklists com salvamento automático. Acessa pelo celular ou computador, a qualquer momento.',
    },
    {
      q: 'E se eu já tomo suplementos?',
      a: 'Melhor ainda. O manual vai mostrar se o que você toma está correto — na forma, na dose e no momento certo — ou se está jogando dinheiro fora com fórmulas que o corpo não consegue absorver adequadamente.',
    },
    {
      q: 'R$47 é pouco demais. Qual é a pegadinha?',
      a: 'Não há. Pagamento único, acesso vitalício, sem mensalidade. O preço é estratégico para alcançar mais pessoas. E a garantia de 7 dias elimina qualquer risco da sua parte — se não gostar, devolvemos tudo.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section fade-in">
      <div className="label" style={{textAlign: 'center'}}>Dúvidas frequentes</div>
      <h2 style={{textAlign: 'center', marginBottom: '40px'}}>Perguntas que todo<br />mundo faz antes de comprar</h2>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${openIndex === index ? 'open' : ''}`}
          onClick={() => toggleFaq(index)}
        >
          <div className="faq-q">
            {faq.q} <span className="faq-arrow">+</span>
          </div>
          <div className="faq-a">{faq.a}</div>
        </div>
      ))}
    </div>
  );
}

