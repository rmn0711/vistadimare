import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      const scrolled = window.scrollY;
      contentRef.current.style.transform = `translateY(${scrolled * 0.32}px)`;
      contentRef.current.style.opacity = Math.max(0, 1 - scrolled / 750);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg">
        <img
          src="/images/enhanced-image (39).png"
          alt="Vista Di Mare — Edificio Exclusivo en Puerto Colombia"
          className="parallax-img"
        />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content" ref={contentRef}>
        <span className="hero-subtitle hero-anim-item delay-1">
          Corredor Turístico · Pradomar, Puerto Colombia
        </span>

        <h1 className="hero-title hero-anim-item delay-2">
          Donde el Caribe<br />
          se convierte en<br />
          <em>tu mejor inversión.</em>
        </h1>

        <p className="hero-body hero-anim-item delay-3">
          Un apartamento premium de lujo a 500 metros de la playa y 1 km del Faro de Puerto Colombia.
          El balance perfecto entre **estilo de vida costero** y un **activo financiero de alta rentabilidad** vía plataformas de rentas cortas.
        </p>

        <div className="hero-pills hero-anim-item delay-3">
          <span className="hero-pill">Rentas Cortas Permitidas</span>
          <span className="hero-pill">Proyecto NO-VIS</span>
          <span className="hero-pill">Inversión Inteligente</span>
        </div>

        <div className="hero-btns hero-anim-item delay-4">
          <a href="#contacto" className="btn-premium light">Invierte Ahora</a>
          <a href="#simulador" className="btn-premium light">Calcular ROI</a>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true" />
    </section>
  );
};

export default Hero;
