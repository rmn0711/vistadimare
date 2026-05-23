import React from 'react';
import '../styles/components.css';

const DeveloperBrand = () => {
  return (
    <section id="desarrollador" className="developer-section section-padding">
      <div className="container">
        <div className="developer-grid-editorial reveal-mask">
          
          {/* Fila Superior — Encabezado Editorial */}
          <div className="developer-header-editorial">
            <span className="developer-tagline">DISEÑO · PRESTIGIO · SOLIDEZ</span>
            <h2 className="developer-main-title">
              Dieciocho Años <br />
              <em>Modelando el Futuro Inmobiliario</em>
            </h2>
            <div className="developer-divider-line" />
          </div>

          {/* Fila Inferior — Contenido Asimétrico */}
          <div className="developer-body-grid">
            
            {/* Columna Izquierda — El Manifiesto de ACF */}
            <div className="developer-manifesto-col">
              <div className="developer-logo-frame">
                <img 
                  src="/images/acf-logo.png" 
                  alt="Constructora ACF" 
                  className="developer-acf-logo-premium"
                />
              </div>
              <p className="developer-narrative">
                Como firma **desarrolladora y comercializadora exclusiva** de Vista Di Mare, **Constructora ACF** aporta un legado intachable de más de 18 años en el Caribe colombiano. Nuestra filosofía fusiona el rigor de la ingeniería estructural con diseños contemporáneos de vanguardia, garantizando que cada loft sea una obra maestra de plusvalía y confort.
              </p>
              <p className="developer-narrative-sub">
                Cada etapa del proyecto, desde la cimentación sismorresistente hasta las terminaciones expuestas al entorno salino, se ejecuta bajo estrictos controles de calidad y auditoría fiduciaria para tu absoluta tranquilidad financiera.
              </p>
            </div>

            {/* Columna Derecha — Las Métricas de Confianza Inmobiliaria */}
            <div className="developer-trust-col">
              
              <div className="trust-editorial-item">
                <div className="trust-meta">
                  <span className="trust-number">18+</span>
                  <span className="trust-label">AÑOS DE HISTORIA</span>
                </div>
                <div className="trust-details-box">
                  <h4 className="trust-headline">Trayectoria Consolidada</h4>
                  <p className="trust-paragraph">
                    Dieciocho años desarrollando, construyendo y comercializando con éxito hitos residenciales en el Caribe, garantizando plusvalía sostenible y cumplimiento de cronogramas.
                  </p>
                </div>
              </div>

              <div className="trust-editorial-item">
                <div className="trust-meta">
                  <span className="trust-number">100%</span>
                  <span className="trust-label">RIGOR TÉCNICO</span>
                </div>
                <div className="trust-details-box">
                  <h4 className="trust-headline">Ingeniería Sismorresistente</h4>
                  <p className="trust-paragraph">
                    Precisión milimétrica en la cimentación y estructuras calculadas con especificaciones antisísmicas avanzadas, diseñadas para perdurar en entornos marinos exigentes.
                  </p>
                </div>
              </div>

              <div className="trust-editorial-item">
                <div className="trust-meta">
                  <span className="trust-number">Fiducia</span>
                  <span className="trust-label">CONTROL DE RECURSOS</span>
                </div>
                <div className="trust-details-box">
                  <h4 className="trust-headline">Seguridad y Transparencia Legal</h4>
                  <p className="trust-paragraph">
                    Gestión fiduciaria de recursos y estructuración clara en escrituras públicas, ofreciendo un entorno de inversión transparente, seguro y libre de riesgos.
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
