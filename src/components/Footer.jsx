import React, { useState } from 'react';

const Footer = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <footer id="contacto" className="footer-section">
      <div className="container">
        <div className="footer-top">
          {/* Columna izquierda — Información */}
          <div className="footer-brand-col">
            <div className="footer-logo-wrapper" style={{ marginBottom: '1.75rem' }}>
              <img 
                src="/images/vista-di-mare-logo.png" 
                alt="Vista Di Mare" 
                style={{ 
                  height: '140px', 
                  width: 'auto', 
                  objectFit: 'contain',
                  background: '#FFFFFF',
                  padding: '12px 16px',
                  borderRadius: '6px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.2)'
                }}
              />
            </div>
            <div className="text-reveal-wrapper" style={{ display: 'block' }}>
              <p className="footer-brand-tagline text-reveal-item delay-1">
                Tu apartamento de lujo en el Caribe colombiano. Diseñado para vivir, rentar e invertir con inteligencia financiera.
              </p>
            </div>
            <div className="text-reveal-wrapper" style={{ display: 'block' }}>
              <address
                className="footer-address text-reveal-item delay-2"
                style={{ fontStyle: 'normal' }}
              >
                Carrera 14B No. 2-51<br />
                Corredor Turístico de Pradomar<br />
                Puerto Colombia, Atlántico<br />
                Colombia
              </address>
            </div>

            <div className="text-reveal-wrapper">
              <a
                href="https://wa.me/573000000000?text=Hola%2C%20me%20interesa%20obtener%20informaci%C3%B3n%20sobre%20el%20proyecto%20Vista%20Di%20Mare"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-whatsapp-btn text-reveal-item delay-3"
              >
                <span>💬</span> Escríbenos por WhatsApp
              </a>
            </div>
          </div>

          {/* Columna derecha — Formulario */}
          <div className="contact-box reveal-mask">
            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon" style={{ color: 'var(--color-secondary)' }}>✦</div>
                <h3 className="form-success-title">Mensaje recibido</h3>
                <p className="form-success-desc">
                  Un asesor de Vista Di Mare se pondrá en contacto contigo en las próximas horas.
                  Gracias por tu interés en esta oportunidad única de inversión en el Caribe colombiano.
                </p>
              </div>
            ) : (
              <>
                <h2 className="contact-box-title">Invierte<br />en el Paraíso</h2>
                <p className="contact-box-desc">
                  Agenda una asesoría personalizada o solicita la lista de precios de preventa. Nuestro equipo comercial te brindará toda la información sin compromisos.
                </p>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      className="form-input"
                      placeholder=" "
                      required
                      autoComplete="name"
                    />
                    <label htmlFor="name" className="form-label">Nombre Completo *</label>
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      className="form-input"
                      placeholder=" "
                      required
                      autoComplete="email"
                    />
                    <label htmlFor="email" className="form-label">Correo Electrónico *</label>
                  </div>

                  <div className="form-group">
                    <input
                      type="tel"
                      id="phone"
                      className="form-input"
                      placeholder=" "
                      required
                      autoComplete="tel"
                    />
                    <label htmlFor="phone" className="form-label">Teléfono / WhatsApp *</label>
                  </div>

                  <div className="form-group">
                    <select id="interest" className="form-input" defaultValue="">
                      <option value="" disabled> </option>
                      <option value="inversion">Inversión — Renta Corta (Airbnb)</option>
                      <option value="vivir">Vivienda Principal o Vacacional</option>
                      <option value="portafolio">Portafolio de Inversión Inmobiliaria</option>
                      <option value="info">Solo quiero información general</option>
                    </select>
                    <label
                      htmlFor="interest"
                      className="form-label"
                      style={{ top: '-0.5rem', fontSize: '0.7rem', color: 'var(--color-secondary)' }}
                    >
                      ¿Cuál es tu interés principal?
                    </label>
                  </div>

                  <button type="submit" className="btn-premium light form-submit">
                    Solicitar Información Gratuita
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom" style={{ borderTop: '1px solid rgba(253,251,247,0.06)', paddingTop: '3rem' }}>
          <div className="footer-brands" style={{ display: 'flex', justifyContent: 'center', width: '100%', margin: '1rem 0' }}>
            <div className="footer-brand-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
              <p className="footer-brand-role" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--color-secondary)', margin: 0, fontWeight: '500' }}>
                Desarrolla e Ingenia
              </p>
              <img 
                src="/images/acf-logo.png" 
                alt="ACF Ingeniería" 
                style={{ 
                  height: '80px', 
                  width: 'auto', 
                  objectFit: 'contain',
                  marginTop: '0.5rem'
                }}
              />
            </div>
          </div>

          <p className="footer-disclaimer" style={{
            width: '100%',
            fontSize: '0.68rem',
            color: 'rgba(253, 251, 247, 0.35)',
            textAlign: 'center',
            fontWeight: '300',
            fontStyle: 'italic',
            lineHeight: '1.5',
            margin: '0.5rem auto 1.5rem',
            maxWidth: '1000px'
          }}>
            *Las imágenes, diseño, áreas y precios son únicamente de referencia y son sensibles a modificaciones en el proceso de desarrollo arquitectónico y constructivo.
          </p>

          <p className="footer-copy">
            © {new Date().getFullYear()} Vista Di Mare · Puerto Colombia, Atlántico ·
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
