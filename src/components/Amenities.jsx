import React from 'react';

const amenitiesList = [
  {
    icon: '✦',
    title: 'Rooftop Gastro-Bar',
    desc: 'Una experiencia gastronómica y social de altura con vistas infinitas al Mar Caribe. Coctelería de autor y el mejor mirador del corredor de Pradomar.',
  },
  {
    icon: '◎',
    title: 'Piscinas & Solárium',
    desc: 'Zonas de baño y relajación rodeadas de hamacas, camastros y vegetación costera nativa, diseñadas para el descanso y el disfrute del sol caribeño.',
  },
  {
    icon: '◈',
    title: 'Lobby Premium 24/7',
    desc: 'Recepción y conserjería permanentes. Tus huéspedes y tu propiedad, siempre atendidos con los más altos estándares de hospitalidad cinco estrellas.',
  },
  {
    icon: '△',
    title: 'Terrazas Privadas',
    desc: 'Cada unidad cuenta con su propia terraza de diseño, configurada para maximizar la ventilación natural cruzada y contemplar el entorno costero.',
  },
  {
    icon: '▷',
    title: '10 Parqueaderos Cubiertos',
    desc: 'Estacionamiento cubierto seguro para residentes y visitantes. Una ventaja competitiva clave en una de las zonas de mayor afluencia de Pradomar.',
  },
  {
    icon: '◐',
    title: 'Seguridad y CCTV Integral',
    desc: 'Monitoreo constante, control de acceso digital y personal de vigilancia física las 24 horas del día. Tu tranquilidad y la de tus huéspedes es prioridad.',
  },
  {
    icon: '◉',
    title: 'Conectividad Ultra Rápida',
    desc: 'Infraestructura de fibra óptica con excelente velocidad, perfecta para nómadas digitales y profesionales remotos que buscan productividad frente al mar.',
  },
];

const Amenities = () => {
  return (
    <section id="amenidades" className="amenities-section section-padding">
      <div className="container">
        
        {/* Encabezado */}
        <div className="amenities-header">
          <div className="text-reveal-wrapper">
            <span
              className="manifesto-label text-reveal-item"
              style={{ color: 'var(--color-secondary)' }}
            >
              Amenidades & Servicios
            </span>
          </div>
          <div className="text-reveal-wrapper" style={{ display: 'block' }}>
            <h2
              className="manifesto-title text-reveal-item delay-1"
              style={{ color: 'var(--color-text-light)' }}
            >
              Todo diseñado para vivir bien<br />—y rentar mejor.
            </h2>
          </div>
          <div
            className="text-reveal-wrapper"
            style={{ display: 'block', maxWidth: '680px', margin: '0 auto' }}
          >
            <p
              className="manifesto-text text-reveal-item delay-2"
              style={{ color: 'rgba(250,248,245,0.65)' }}
            >
              Vista Di Mare opera bajo un esquema Condo-Hotel de lujo. Cada servicio y espacio común fue diseñado para maximizar la satisfacción del usuario final y garantizar excelentes calificaciones en Airbnb y Booking.
            </p>
          </div>
        </div>

        {/* Grilla */}
        <div className="amenities-grid">
          {amenitiesList.map((item, index) => (
            <div key={index} className="amenity-card text-reveal-wrapper">
              <div className={`text-reveal-item delay-${(index % 3) + 1}`}>
                <div className="amenity-icon">{item.icon}</div>
                <h3 className="amenity-title">{item.title}</h3>
                <p className="amenity-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
