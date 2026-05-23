import React from 'react';
import '../styles/components.css';

const DeveloperBrand = () => {
  return (
    <section id="desarrollador" className="developer-section section-padding">
      <div className="container">
        <div className="developer-editorial-card reveal-mask">
          <div className="developer-card-inner">
            
            {/* Lado Izquierdo — Sello de Confianza y Logo */}
            <div className="developer-seal-block">
              <div className="developer-logo-badge">
                <img 
                  src="/images/acf-logo.png" 
                  alt="ACF S.A.S. Logo" 
                  className="acf-badge-logo"
                />
              </div>
              <div className="developer-badge-text">
                <span className="developer-badge-title">ACF S.A.S.</span>
                <span className="developer-badge-subtitle">Desarrollador & Comercializador</span>
              </div>
            </div>

            {/* Lado Derecho — Contenido e Historia */}
            <div className="developer-editorial-content">
              <span className="editorial-label">GARANTÍA Y RESPALDO</span>
              <h2 className="editorial-title">
                Más de 18 años edificando <br />
                <em>confianza y solidez</em> en el Caribe.
              </h2>
              <p className="editorial-lead">
                La inversión en Vista Di Mare está respaldada por la trayectoria impecable de **ACF S.A.S.** Con más de 18 años liderando el desarrollo, diseño y comercialización de proyectos inmobiliarios de alta gama en la región, consolidamos un compromiso absoluto con el rigor técnico, la transparencia jurídica y la seguridad financiera de nuestros clientes.
              </p>
              
              {/* Grid Horizontal de Respaldo */}
              <div className="editorial-values-grid">
                
                <div className="value-item">
                  <div className="value-header">
                    <span className="value-number">01</span>
                    <h4 className="value-title">Control Fiduciario</h4>
                  </div>
                  <p className="value-desc">
                    Estructuración legal y financiera robusta, garantizando la total transparencia de los recursos bajo esquemas fiduciarios seguros.
                  </p>
                </div>

                <div className="value-item">
                  <div className="value-header">
                    <span className="value-number">02</span>
                    <h4 className="value-title">Ingeniería Sismorresistente</h4>
                  </div>
                  <p className="value-desc">
                    Construcción bajo estándares internacionales con cimentación de alta ingeniería adaptada al clima y condiciones marinas.
                  </p>
                </div>

                <div className="value-item">
                  <div className="value-header">
                    <span className="value-number">03</span>
                    <h4 className="value-title">Cumplimiento Riguroso</h4>
                  </div>
                  <p className="value-desc">
                    18 años de entrega puntual, cumplimiento de cronogramas y una reputación intachable en el sector inmobiliario regional.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperBrand;
