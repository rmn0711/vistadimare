import React from 'react';

const loftsData = [
  {
    type: 'Loft Tipo 1',
    size: '36.50 m²',
    img: '/images/enhanced-image (34).png',
    tag: 'Mayor Espacio',
    feature: 'Espectacular loft con distribución optimizada para estancias prolongadas o viajes familiares. Cuenta con imponentes ventanales de piso a techo y acabados de ultra-lujo.',
    meta: ['Loft Premium', 'Ventanales Panorámicos', 'Airbnb Ready'],
  },
  {
    type: 'Loft Tipo 5',
    size: '25.89 m²',
    img: '/images/enhanced-image (24).png',
    tag: 'Alta Ocupación',
    feature: 'Eficiente diseño que maximiza cada rincón para el absoluto confort del huésped. Sus ventanales panorámicos y cocina integrada lo convierten en la opción preferida de nómadas digitales.',
    meta: ['Loft Premium', 'Ventanales Panorámicos', 'Airbnb Ready'],
  },
  {
    type: 'Loft Tipo 7',
    size: '21.03 m²',
    img: '/images/enhanced-image (52).png',
    tag: 'Mejor ROI',
    feature: 'La distribución inteligente definitiva. Diseñado con precisión geométrica para optimizar costos de adquisición y maximizar el rendimiento por metro cuadrado.',
    meta: ['Loft Premium', 'Optimización Espacial', 'Airbnb Ready'],
  },
  {
    type: 'Loft Tipo 10',
    size: '22.04 m²',
    img: '/images/enhanced-image (54).png',
    tag: 'Posición Exclusiva',
    feature: 'Estratégicamente ubicado en planta para mayor privacidad y flujo rápido hacia las áreas de esparcimiento del edificio. Excelentes visuales y confort premium.',
    meta: ['Loft Premium', 'Vista Exterior', 'Airbnb Ready'],
  },
];

const Lofts = () => {
  return (
    <section id="lofts" className="lofts-section section-padding">
      <div className="container">
        
        {/* Encabezado */}
        <div className="lofts-header">
          <div className="text-reveal-wrapper">
            <span className="manifesto-label text-reveal-item">Modelos de Residencia</span>
          </div>
          <div className="text-reveal-wrapper" style={{ display: 'block' }}>
            <h2
              className="manifesto-title text-reveal-item delay-1"
              style={{ color: 'var(--color-primary)' }}
            >
              19 Unidades Exclusivas.<br />Diseño sin concesiones.
            </h2>
          </div>
          <div
            className="text-reveal-wrapper"
            style={{ display: 'block', maxWidth: '820px', margin: '0 auto' }}
          >
            <p
              className="manifesto-text text-reveal-item delay-2"
              style={{ color: 'var(--color-text-dark)' }}
            >
              Solo <strong>7 unidades por planta</strong>, con metrajes que oscilan entre <strong>21 m²</strong> y <strong>36.5 m²</strong>. Cada loft cuenta con imponentes ventanales termo-acústicos de piso a techo que bañan de luz natural el espacio, climatización eficiente y acabados de lujo ideales para el mercado de rentas cortas.
            </p>
          </div>
        </div>

        {/* Grilla de lofts */}
        <div className="lofts-grid">
          {loftsData.map((loft, index) => (
            <div key={index} className="loft-card reveal-mask">
              <img src={loft.img} alt={loft.type} className="loft-image" />
              <span className="loft-tag">{loft.tag}</span>
              <div className="loft-info glass-panel-dark">
                <div className="loft-info-top">
                  <h3 className="loft-title">{loft.type}</h3>
                  <span className="loft-size">{loft.size}</span>
                </div>
                <p className="loft-details">{loft.feature}</p>
                <div className="loft-meta">
                  {loft.meta.map((m, i) => (
                    <React.Fragment key={i}>
                      <span>{m}</span>
                      {i < loft.meta.length - 1 && <span>·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="lofts-cta text-reveal-wrapper">
          <div className="text-reveal-item delay-1">
            <p className="lofts-cta-text">
              Descubre las condiciones de separación y el plan detallado de preventa de nuestro equipo.
            </p>
            <div className="lofts-cta-btns">
              <a
                href="/brochure/Presentacion Vista Di Mare (1).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium"
              >
                Descargar Brochure
              </a>
              <a href="#contacto" className="btn-premium solid">
                Hablar con un Asesor
              </a>
            </div>
          </div>
        </div>

        <p className="lofts-disclaimer" style={{
          fontSize: '0.68rem',
          color: 'rgba(30, 37, 32, 0.45)',
          textAlign: 'center',
          marginTop: '3.5rem',
          fontWeight: '300',
          fontStyle: 'italic',
          lineHeight: '1.4',
          maxWidth: '800px',
          margin: '3.5rem auto 0'
        }}>
          *Las imágenes, diseño, áreas y precios son únicamente de referencia y son sensibles a modificaciones en el proceso de desarrollo arquitectónico y constructivo.
        </p>
      </div>
    </section>
  );
};

export default Lofts;
