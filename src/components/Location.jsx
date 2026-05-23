import React from 'react';

const locationHighlights = [
  {
    icon: '◎',
    title: '1 km del Faro Histórico',
    desc: 'A pasos del emblemático monumento El Faro de los Sueños, símbolo del patrimonio y el gran atractivo turístico del corredor costero del Atlántico.',
  },
  {
    icon: '◈',
    title: 'Corredor Turístico Pradomar',
    desc: 'Ubicado en el epicentro del ocio de Puerto Colombia, con acceso rápido a las playas, la gastronomía premium y clubes náuticos de la zona.',
  },
  {
    icon: '◇',
    title: '20 minutos de Barranquilla',
    desc: 'Conexión vial inmediata con el norte empresarial y comercial de Barranquilla, y acceso rápido al aeropuerto internacional en 35 minutos.',
  },
  {
    icon: '◐',
    title: 'Tierra de Alta Valorización',
    desc: 'El municipio costero con mayor índice de valorización residencial en el norte de Colombia, impulsado por macroproyectos gubernamentales y privados.',
  },
];

const Location = () => {
  return (
    <section id="ubicacion" className="location-section section-padding">
      <div className="location-inner container">
        <div className="location-text">
          <div className="text-reveal-wrapper">
            <span className="manifesto-label text-reveal-item">Ubicación Privilegiada</span>
          </div>
          <div className="text-reveal-wrapper" style={{ display: 'block' }}>
            <h2 className="manifesto-title text-reveal-item delay-1">
              Puerto Colombia,<br />el nuevo epicentro<br />del Caribe colombiano.
            </h2>
          </div>
          <div className="text-reveal-wrapper" style={{ display: 'block' }}>
            <p className="manifesto-text text-reveal-item delay-2">
              Situado en la **Carrera 14B No. 2-51**, Vista Di Mare ocupa una de las mejores posiciones del municipio. Un sector costero de excelente flujo residencial que se beneficia del incremento masivo en turismo de playa, eventos deportivos internacionales y la demanda de alojamiento premium de corta estancia.
            </p>
          </div>

          <div className="location-highlights">
            {locationHighlights.map((item, i) => (
              <div key={i} className="location-highlight-item text-reveal-wrapper">
                <div
                  className="text-reveal-item"
                  style={{ transitionDelay: `${i * 0.12}s` }}
                >
                  <span className="location-icon">{item.icon}</span>
                  <div>
                    <h4 className="location-highlight-title">{item.title}</h4>
                    <p className="location-highlight-desc">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="location-visual reveal-mask">
          <img
            src="/images/enhanced-image (50).png"
            alt="Corredor turístico de Pradomar y playas en Puerto Colombia"
          />
          <div className="location-tag">
            <span className="location-tag-title">Vista Di Mare</span>
            <span className="location-tag-sub">Cra 14B No. 2-51 · Pradomar · Puerto Colombia</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
