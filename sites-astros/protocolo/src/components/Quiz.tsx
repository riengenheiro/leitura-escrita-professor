import { useState } from 'react';

export default function Quiz() {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const items = [
    'Dormiu 8h mas acordou destruído, como se não tivesse dormido',
    'Sem café, o dia simplesmente não começa',
    'Às 15h você já está no piloto automático',
    'Entrou num cômodo e esqueceu o que ia fazer',
    'Explode com quem ama por coisas pequenas',
    'Ansiedade que aperta o peito sem motivo aparente',
    'Cabelo caindo mais que o normal',
    'Pega gripe com uma facilidade absurda',
  ];

  const toggleItem = (index: number) => {
    const newChecked = new Set(checked);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setChecked(newChecked);
  };

  const count = checked.size;
  let message: string | JSX.Element = 'Marque os sintomas acima.';
  if (count > 0 && count <= 2) {
    message = (
      <>
        Já é um sinal de alerta. <strong style={{color: 'var(--green)'}}>Seu corpo está pedindo atenção.</strong>
      </>
    );
  } else if (count <= 5) {
    message = (
      <>
        Muito provavelmente algo está errado. <strong style={{color: 'var(--green)'}}>Você precisa descobrir o que é.</strong>
      </>
    );
  } else {
    message = (
      <>
        <strong style={{color: 'var(--red)'}}>Seu corpo está pedindo socorro.</strong> Isso não é normal e não vai passar sozinho.
      </>
    );
  }

  return (
    <div className="quiz-wrap fade-in">
      <div className="quiz-card">
        <div className="label" style={{textAlign: 'center'}}>Teste rápido</div>
        <div className="quiz-title" style={{textAlign: 'center'}}>Você sente algum desses?</div>
        <div className="quiz-sub" style={{textAlign: 'center'}}>Marque todos que se aplicam. Seja honesto.</div>

        <div id="quizList">
          {items.map((text, index) => (
            <div
              key={index}
              className={`quiz-item ${checked.has(index) ? 'checked' : ''}`}
              onClick={() => toggleItem(index)}
            >
              <div className="quiz-check"></div>
              <div className="quiz-text">{text}</div>
            </div>
          ))}
        </div>

        <div className={`quiz-result ${count > 0 ? 'show' : ''}`}>
          <div className="quiz-count">{count}</div>
          <div className="quiz-msg">{message}</div>
        </div>
      </div>
    </div>
  );
}

