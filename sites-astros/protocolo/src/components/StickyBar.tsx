import { useEffect, useState } from 'react';

export default function StickyBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`sticky-bar ${show ? 'show' : ''}`} id="stickyBar">
      <div className="sticky-info">
        <div className="sticky-label">Energia Sem Limites</div>
        <div className="sticky-price">R$47</div>
      </div>
      <a href="#oferta" className="btn-primary">Garantir acesso →</a>
    </div>
  );
}

