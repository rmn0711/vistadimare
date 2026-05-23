import React from 'react';
import '../styles/components.css';

const DeveloperBrand = () => {
  return (
    <section id="desarrollador" className="developer-section section-padding">
      <div className="container">
        <div className="developer-inner reveal-mask">
          <div className="developer-grid">
            {/* Lado Izquierdo — Identidad y Misión */}
            <div className="developer-brand-card">
              <span className="section-label">RESPALDO Y GARANTÍA</span>
              <div className="developer-logo-container" style={{ margin: '1.5rem 0 2rem' }}>
                <img 
                  src="/images/acf-logo.png" 
                  alt="ACF Ingeniería Logo" 
                  className="developer-acf-logo" 
                  style={{
                    height: '90px',
                    width: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 4px 10px rgba(25, 47, 34, 0.08))'
                  }}
                />
              </div>
              <h2 className="developer-title">
                ACF Ingeniería
              </h2>
              <p className="developer-subtitle">
                Desarrolladora y Comercializadora de Vista Di Mare
              </p>
              <p className="developer-lead-text">
                En <strong>ACF Ingeniería</strong>, transformamos visiones en realidades estructurales de alta gama. Como desarrolladores y comercializadores exclusivos de Vista Di Mare, consolidamos un compromiso inquebrantable con la excelencia técnica, la transparencia legal y la satisfacción de nuestros inversores en el Caribe colombiano.
              </p>
              <div className="developer-stats-row">
                <div className="developer-stat-box">
                  <span className="dev-stat-num">100%</span>
                  <span className="dev-stat-lbl">Cumplimiento Técnico</span>
                </div>
                <div className="developer-stat-box">
                  <span className="dev-stat-num">Premium</span>
                  <span className="dev-stat-lbl">Calidad de Materiales</span>
                </div>
              </div>
            </div>

            {/* Lado Derecho — Pilares de Confianza */}
            <div className="developer-trust-pillars">
              <h3 className="trust-pillars-header">¿Por qué invertir con ACF Ingeniería?</h3>
              
              <div className="trust-pillar-item">
                <div className="trust-icon-wrapper">🛡️</div>
                <div className="trust-content">
                  <h4 className="trust-title">Transparencia y Seguridad Jurídica</h4>
                  <p className="trust-desc">
                    Respaldamos tu inversión bajo rigurosos esquemas legales y fiduciarios. El proyecto se estructura con total claridad contractual en escrituras públicas, garantizando que tu LOFT sea un activo familiar seguro desde el primer día.
                  </p>
                </div>
              </div>

              <div className="trust-pillar-item">
                <div className="trust-icon-wrapper">🏗️</div>
                <div className="trust-content">
                  <h4 className="trust-title">Ingeniería de Precisión y Cumplimiento</h4>
                  <p className="trust-desc">
                    Nuestra metodología técnica asegura el cumplimiento riguroso de los cronogramas de obra. Diseñamos con especificaciones sismorresistentes avanzadas y cimentación de alta ingeniería para resistir las condiciones del entorno marino.
                  </p>
                </div>
              </div>

              <div className="trust-pillar-item">
                <div className="trust-icon-wrapper">✨</div>
                <div className="trust-content">
                  <h4 className="trust-title">Diseño Sostenible y Alta Valorización</h4>
                  <p className="trust-desc">
                    Fusionamos arquitectura contemporánea de vanguardia con eficiencia energética y térmica. Esto no solo preserva el ecosistema de Puerto Colombia, sino que optimiza los costos operativos de mantenimiento y maximiza la plusvalía de tu loft.
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
