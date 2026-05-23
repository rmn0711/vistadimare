import React, { useState, useEffect } from 'react';

const categories = [
  { id: 'todos', name: 'Todos' },
  { id: 'fachada', name: 'Fachada' },
  { id: 'interiores', name: 'Interiores' },
  { id: 'amenidades', name: 'Amenidades' }
];

const galleryImages = [
  { src: '/images/enhanced-image (39).png', alt: 'Vista Di Mare — Fachada Principal de Lujo', category: 'fachada', span: 'wide' },
  { src: '/images/enhanced-image (49).png', alt: 'Fachada Lateral y Accesos', category: 'fachada' },
  { src: '/images/enhanced-image (34).png', alt: 'Loft Tipo 1 — Dormitorio Premium', category: 'interiores' },
  { src: '/images/enhanced-image (24).png', alt: 'Loft Tipo 5 — Cocina e Integración', category: 'interiores' },
  { src: '/images/enhanced-image (48).png', alt: 'Lobby Premium de Recepción', category: 'amenidades' },
  { src: '/images/enhanced-image (50).png', alt: 'Terrazas con Vistas Costeras', category: 'amenidades', span: 'tall' },
  { src: '/images/enhanced-image (52).png', alt: 'Loft Tipo 7 — Diseño Eficiente', category: 'interiores' },
  { src: '/images/enhanced-image (54).png', alt: 'Loft Tipo 10 — Suite Loft de Lujo', category: 'interiores' },
  { src: '/images/enhanced-image (55).png', alt: 'Fachada y Entorno Caribe', category: 'fachada' },
  { src: '/images/enhanced-image (56).png', alt: 'Fachada de Noche — Vista Di Mare', category: 'fachada' },
  { src: '/images/enhanced-image (57).png', alt: 'Geometría y Terrazas del Edificio', category: 'fachada' },
  { src: '/images/enhanced-image (35).png', alt: 'Loft Interior — Detalle de Acabados', category: 'interiores' }
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('todos');
  const [activeImg, setActiveImg] = useState(null);
  const [animateGrid, setAnimateGrid] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setActiveImg(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleTabChange = (tabId) => {
    setAnimateGrid(true);
    setActiveTab(tabId);
    setTimeout(() => {
      setAnimateGrid(false);
    }, 400);
  };

  const filteredImages = activeTab === 'todos' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeTab);

  return (
    <section id="galeria" className="gallery-section section-padding">
      <div className="container">
        
        {/* Encabezado */}
        <div className="gallery-header">
          <div className="text-reveal-wrapper">
            <span className="manifesto-label text-reveal-item">Showcase del Proyecto</span>
          </div>
          <div className="text-reveal-wrapper" style={{ display: 'block' }}>
            <h2 className="manifesto-title text-reveal-item delay-1">
              Diseño que deslumbra.
            </h2>
          </div>
          <div className="text-reveal-wrapper" style={{ display: 'block', maxWidth: '720px', margin: '0 auto' }}>
            <p className="manifesto-text text-reveal-item delay-2">
              Explora nuestra biblioteca de renders en alta definición. Una muestra visual del lenguaje arquitectónico contemporáneo, interiores de lujo e instalaciones diseñadas para cautivar al mercado premium.
            </p>
          </div>
        </div>

        {/* Botones de Categorías */}
        <div className="gallery-filters reveal-fade-in delay-1" style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleTabChange(cat.id)}
              style={{
                background: activeTab === cat.id ? 'var(--color-primary)' : 'transparent',
                color: activeTab === cat.id ? 'var(--color-text-light)' : 'var(--color-primary)',
                border: '1px solid var(--color-primary)',
                padding: '0.6rem 1.8rem',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                cursor: 'pointer',
                transition: 'all 0.35s ease'
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grilla de renders */}
        <div className={`gallery-grid${animateGrid ? ' gallery-grid--animating' : ''}`} style={{
          opacity: animateGrid ? 0 : 1,
          transform: animateGrid ? 'translateY(15px)' : 'translateY(0)',
          transition: 'opacity 0.35s ease, transform 0.35s ease'
        }}>
          {filteredImages.map((img, i) => (
            <div
              key={i}
              className={`gallery-item reveal-mask${img.span ? ` gallery-item--${img.span}` : ''}`}
              onClick={() => setActiveImg(img)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActiveImg(img)}
              aria-label={`Ver imagen: ${img.alt}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery-item-overlay">
                <span>{img.alt}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="gallery-disclaimer" style={{
          fontSize: '0.68rem',
          color: 'rgba(30, 37, 32, 0.45)',
          textAlign: 'center',
          marginTop: '2.5rem',
          fontWeight: '300',
          fontStyle: 'italic',
          lineHeight: '1.4',
          maxWidth: '800px',
          margin: '2.5rem auto 0'
        }}>
          *Las imágenes, diseño, áreas y precios son únicamente de referencia y son sensibles a modificaciones en el proceso de desarrollo arquitectónico y constructivo.
        </p>
      </div>

      {/* Lightbox / Zoom */}
      {activeImg && (
        <div
          className="gallery-lightbox"
          onClick={() => setActiveImg(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="lightbox-close"
            onClick={() => setActiveImg(null)}
            aria-label="Cerrar"
          >
            ×
          </button>
          <img src={activeImg.src} alt={activeImg.alt} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
};

export default Gallery;
