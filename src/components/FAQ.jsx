import React, { useState } from 'react';

const faqData = [
  {
    q: '¿El modelo de rentas cortas está permitido legalmente?',
    a: 'Sí, absolutamente. A diferencia de otros desarrollos residenciales, en **Vista Di Mare** el permiso para operar alquileres vacacionales y de corta estancia (Airbnb, Booking) está **estipulado en el reglamento de copropiedad por escritura pública**. Esto te brinda el 100% de la seguridad jurídica para rentar tu loft sin restricciones de juntas de vecinos.'
  },
  {
    q: '¿Cómo se maneja la administración y la limpieza de los lofts?',
    a: 'Tienes total libertad. Puedes gestionar tu loft directamente a través de tus cuentas de plataformas digitales o **delegar la operación completa en una agencia de administración profesional** (operador turístico) que se encargará del check-in, check-out, limpieza profunda estilo hotelero y servicio al cliente, para que tu inversión sea 100% pasiva.'
  },
  {
    q: '¿Qué servicios ofrece el lobby las 24 horas?',
    a: 'El edificio cuenta con un **Lobby Premium con recepción y conserjería 24/7**. Este equipo actúa exactamente como el front-desk de un condo-hotel, recibiendo de forma segura a tus huéspedes, verificando sus identificaciones, entregando llaves digitales o físicas y velando por la seguridad general de la copropiedad.'
  },
  {
    q: '¿Qué ventajas ofrece que el proyecto sea NO-VIS?',
    a: 'Los proyectos NO-VIS (No de Interés Social) no están restringidos por precios regulados del gobierno. Esto nos permite incorporar **acabados de lujo, sistemas de ventilación superior, terrazas privadas reales y zonas sociales exclusivas** como el Rooftop Gastro-Bar y las piscinas infinitas, atrayendo a huéspedes internacionales dispuestos a pagar tarifas más altas.'
  },
  {
    q: '¿Cuáles son las formas de pago y el proceso de preventa?',
    a: 'Ofrecemos esquemas de pago altamente flexibles durante el periodo de preventa. Puedes separar tu loft con una cuota mínima inicial, abonar la cuota inicial diferida en cómodas cuotas mensuales durante la fase de construcción y financiar el saldo restante a la entrega mediante crédito hipotecario o recursos propios.'
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section section-padding">
      <div className="container">
        
        {/* Encabezado */}
        <div className="faq-header">
          <span className="section-label">Resolviendo tus dudas</span>
          <div className="text-reveal-wrapper" style={{ display: 'block' }}>
            <h2 className="faq-title text-reveal-item">
              Preguntas Frecuentes
            </h2>
          </div>
          <p className="faq-subtitle reveal-fade-in delay-1">
            Todo lo que necesitas saber antes de invertir en tu próximo Loft en la costa caribeña.
          </p>
        </div>

        {/* Acordeón */}
        <div className="faq-accordion reveal-fade-in delay-2">
          {faqData.map((faq, i) => {
            const isOpen = activeIndex === i;
            return (
              <div 
                key={i} 
                className={`faq-item${isOpen ? ' faq-item--open' : ''}`}
                onClick={() => toggleFAQ(i)}
                style={{
                  borderBottom: '1px solid rgba(25, 47, 34, 0.1)',
                  padding: '1.75rem 0',
                  cursor: 'pointer'
                }}
              >
                <div 
                  className="faq-question-wrapper"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1.5rem'
                  }}
                >
                  <h3 
                    className="faq-question"
                    style={{
                      fontSize: 'clamp(1rem, 1.2vw, 1.25rem)',
                      fontWeight: isOpen ? '500' : '400',
                      color: isOpen ? 'var(--color-accent)' : 'var(--color-primary)',
                      fontFamily: 'var(--font-heading)',
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {faq.q}
                  </h3>
                  <span 
                    className="faq-trigger"
                    style={{
                      fontSize: '1.5rem',
                      color: isOpen ? 'var(--color-accent)' : 'var(--color-primary)',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 0.4s var(--ease-premium), color 0.3s ease',
                      display: 'inline-block',
                      lineHeight: '1'
                    }}
                  >
                    +
                  </span>
                </div>
                
                <div 
                  className="faq-answer-wrapper"
                  style={{
                    maxHeight: isOpen ? '250px' : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s var(--ease-premium), opacity 0.3s ease',
                    opacity: isOpen ? 1 : 0,
                    marginTop: isOpen ? '1rem' : '0'
                  }}
                >
                  <p 
                    className="faq-answer"
                    dangerouslySetInnerHTML={{ __html: faq.a }}
                    style={{
                      fontSize: '0.95rem',
                      lineHeight: '1.7',
                      color: 'rgba(30, 37, 32, 0.75)',
                      fontWeight: '300'
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
