import React from 'react';

const pillars = [
  {
    label: 'Renta',
    title: 'Ingresos Pasivos Reales',
    desc: 'Con rentas cortas habilitadas por escritura pública, tu propiedad trabaja por ti en Airbnb y Booking sin restricciones de copropiedad.',
  },
  {
    label: 'Vive',
    title: 'Tu Refugio Premium',
    desc: 'Cada metro cuadrado fue diseñado para ofrecerte el confort de un hotel de lujo, ventilación natural y conexión con el Caribe.',
  },
  {
    label: 'Invierte',
    title: 'Valorización Sostenida',
    desc: 'Puerto Colombia lidera el crecimiento inmobiliario del corredor costero, garantizando una alta apreciación del metro cuadrado.',
  },
];

const Manifesto = () => {
  return (
    <section id="manifiesto" className="manifesto-section">
      <div className="manifesto-content">
        <div className="text-reveal-wrapper">
          <span className="manifesto-label text-reveal-item">Manifiesto & Concepto</span>
        </div>

        <div className="text-reveal-wrapper" style={{ display: 'block' }}>
          <h2 className="manifesto-title text-reveal-item delay-1">
            Más que un apartamento.<br />Un activo de lujo<br />frente al Caribe.
          </h2>
        </div>

        <div className="text-reveal-wrapper" style={{ display: 'block' }}>
          <p className="manifesto-text text-reveal-item delay-2">
            <strong>Vista Di Mare</strong> nació de una premisa audaz: ¿Por qué el disfrute y las ganancias de una suite de lujo frente al mar deben ser de otra persona? Aquí, cada propietario posee su propio loft premium, con la libertad absoluta de vivirlo, usarlo para vacacionar, o rentarlo a turistas de todo el mundo.
          </p>
        </div>

        <div className="text-reveal-wrapper" style={{ display: 'block' }}>
          <p className="manifesto-text text-reveal-item delay-3">
            El proyecto combina **arquitectura costera contemporánea** con un modelo de inversión de alto desempeño: rentas vacacionales cortas 100% legalizadas en el reglamento de propiedad horizontal. Tú decides el precio, la ocupación y las fechas. Sin intermediarios obligatorios ni juntas residenciales que bloqueen tu negocio.
          </p>
        </div>

        <div className="manifesto-pillars">
          {pillars.map((pillar, i) => (
            <div key={i} className="manifesto-pillar text-reveal-wrapper">
              <div className={`text-reveal-item delay-${i + 1}`}>
                <span className="pillar-label">{pillar.label}</span>
                <h4 className="pillar-title">{pillar.title}</h4>
                <p className="pillar-desc">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-reveal-wrapper" style={{ marginTop: '1rem' }}>
          <div className="text-reveal-item delay-2">
            <a href="#contacto" className="btn-premium">Descubrir Disponibilidad</a>
          </div>
        </div>
      </div>

      <div className="manifesto-image-container reveal-mask">
        <img
          src="/images/enhanced-image (49).png"
          alt="Vista Di Mare — Render de la Fachada Lateral"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div className="manifesto-image-badge">
          <span className="badge-number">19</span>
          <span className="badge-text">Lofts<br />Exclusivos</span>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
