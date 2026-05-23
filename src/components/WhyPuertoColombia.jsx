import React from 'react';

const WhyPuertoColombia = () => {
  return (
    <section id="why-puerto" className="why-puerto-section section-padding">
      <div className="container">
        <div className="why-puerto-grid">
          
          {/* Imagen / Visual */}
          <div className="why-puerto-visual reveal-mask">
            <img 
              src="/images/enhanced-image (51).png" 
              alt="Puerto Colombia y el nuevo desarrollo turístico" 
              className="why-puerto-img"
            />
            <div className="why-puerto-floating-card glass-panel-dark">
              <span className="floating-metric">+22%</span>
              <p className="floating-text">Incremento en turismo y valorización costera anual</p>
            </div>
          </div>

          {/* Textos Informativos */}
          <div className="why-puerto-info">
            <span className="section-label">Auge Turístico & Valorización</span>
            
            <div className="text-reveal-wrapper" style={{ display: 'block' }}>
              <h2 className="why-puerto-title text-reveal-item">
                ¿Por qué invertir en Puerto Colombia?
              </h2>
            </div>

            <p className="why-puerto-paragraph reveal-fade-in delay-1">
              Puerto Colombia se ha consolidado como el **municipio costero de mayor proyección e inversión en el norte del país**. Integrado al desarrollo del área metropolitana de Barranquilla, combina la serenidad marina con una infraestructura turística de primer nivel.
            </p>

            <p className="why-puerto-paragraph reveal-fade-in delay-2">
              A solo <strong>1 km de Vista Di Mare</strong>, se alza el imponente monumento <strong>El Faro de los Sueños</strong>, un hito que atrae a miles de visitantes cada semana. Además, la histórica reconstrucción del <strong>Muelle de Puerto Colombia</strong> y la plaza central han revitalizado la economía y la demanda cultural de la zona.
            </p>

            <div className="why-puerto-highlights reveal-fade-in delay-3">
              <div className="highlight-item">
                <div className="highlight-num">01</div>
                <div>
                  <h4 className="highlight-title">Capital de Surf y Deporte</h4>
                  <p className="highlight-desc">
                    Las playas de Pradomar son reconocidas internacionalmente por la práctica del surf y deportes náuticos, garantizando un flujo constante de atletas y turistas extranjeros.
                  </p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-num">02</div>
                <div>
                  <h4 className="highlight-title">Eje Gastronómico e Histórico</h4>
                  <p className="highlight-desc">
                    Con la nueva plaza, restaurantes de alta gama y clubes de playa premium, el corredor de Pradomar es el destino de escape preferido los fines de semana.
                  </p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-num">03</div>
                <div>
                  <h4 className="highlight-title">Proyecto NO-VIS de Alta Gama</h4>
                  <p className="highlight-desc">
                    Un segmento inmobiliario libre de topes de precio sociales, diseñado para la apreciación del dólar/peso y una rotación eficiente en Airbnb y Booking.
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

export default WhyPuertoColombia;
