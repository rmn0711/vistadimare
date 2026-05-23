import React, { useState, useEffect } from 'react';
import '../styles/components.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}>
      <div className="navbar-container">
        <a href="#hero" className="logo" onClick={close} style={{ display: 'flex', alignItems: 'center', fontFamily: 'var(--font-serif)', fontSize: '1.75rem', textTransform: 'none', letterSpacing: '0.02em', fontWeight: '400', color: 'currentColor' }}>
          <div style={{ 
            width: '38px', 
            height: '38px', 
            borderRadius: '50%', 
            background: scrolled ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.18)', 
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginRight: '12px',
            boxShadow: scrolled ? '0 4px 15px rgba(25, 47, 34, 0.2)' : '0 4px 10px rgba(0,0,0,0.12)',
            transition: 'all 0.4s var(--ease-premium)',
            flexShrink: 0,
            border: scrolled ? '1px solid rgba(212, 184, 149, 0.3)' : '1px solid rgba(255, 255, 255, 0.25)'
          }}>
            <svg 
              viewBox="0 0 512 512" 
              fill="none" 
              style={{ 
                width: '24px', 
                height: '24px',
                transition: 'transform 0.6s var(--ease-premium)' 
              }} 
              className="logo-svg"
            >
              {/* Gold Sunburst Rays */}
              {/* North */}
              <path d="M256 40 L272 220 L256 256 L240 220 Z" fill="var(--color-secondary)"/>
              <path d="M256 40 L256 256 L240 220 Z" fill="#B59873" opacity="0.85"/>
              {/* South */}
              <path d="M256 472 L240 292 L256 256 L272 292 Z" fill="var(--color-secondary)"/>
              <path d="M256 472 L256 256 L272 292 Z" fill="#B59873" opacity="0.85"/>
              {/* East */}
              <path d="M472 256 L292 272 L256 256 L292 240 Z" fill="var(--color-secondary)"/>
              <path d="M472 256 L256 256 L292 240 Z" fill="#B59873" opacity="0.85"/>
              {/* West */}
              <path d="M40 256 L220 240 L256 256 L220 272 Z" fill="var(--color-secondary)"/>
              <path d="M40 256 L256 256 L220 272 Z" fill="#B59873" opacity="0.85"/>
              
              {/* Diagonal Rays */}
              {/* NE */}
              <path d="M408 104 L316 228 L256 256 L288 196 Z" fill="var(--color-accent)"/>
              <path d="M408 104 L256 256 L288 196 Z" fill="#A05A38" opacity="0.85"/>
              {/* SW */}
              <path d="M104 408 L196 284 L256 256 L224 316 Z" fill="var(--color-accent)"/>
              <path d="M104 408 L256 256 L224 316 Z" fill="#A05A38" opacity="0.85"/>
              {/* SE */}
              <path d="M408 408 L284 316 L256 256 L316 284 Z" fill="var(--color-accent)"/>
              <path d="M408 408 L256 256 L316 284 Z" fill="#A05A38" opacity="0.85"/>
              {/* NW */}
              <path d="M104 104 L228 196 L256 256 L196 228 Z" fill="var(--color-accent)"/>
              <path d="M104 104 L256 256 L196 228 Z" fill="#A05A38" opacity="0.85"/>
              
              {/* Central Core */}
              <circle cx="256" cy="256" r="48" fill={scrolled ? '#192F22' : '#101E16'} stroke="var(--color-secondary)" strokeWidth="6"/>
              <circle cx="256" cy="256" r="20" fill="var(--color-secondary)"/>
            </svg>
          </div>
          <span>Vista Di Mare</span>
        </a>

        <button
          className="hamburger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links${menuOpen ? ' nav-links--open' : ''}`}>
          <a href="#manifiesto" onClick={close}>Concepto</a>
          <a href="#why-puerto" onClick={close}>Destino</a>
          <a href="#simulador"  onClick={close}>Rentabilidad</a>
          <a href="#lofts"      onClick={close}>Modelos</a>
          <a href="#amenidades" onClick={close}>Amenidades</a>
          <a href="#galeria"    onClick={close}>Galería</a>
          <a href="#faq"        onClick={close}>Preguntas</a>
          <a href="#contacto"   onClick={close} className="nav-btn">Invertir</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
