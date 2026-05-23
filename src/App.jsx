import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Manifesto from './components/Manifesto';
import WhyPuertoColombia from './components/WhyPuertoColombia';
import InvestmentSimulator from './components/InvestmentSimulator';
import Lofts from './components/Lofts';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Location from './components/Location';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isCursorHidden, setIsCursorHidden] = useState(true);

  useEffect(() => {
    // Preloader: 1.0s de visualización, luego realiza el barrido hacia arriba
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Solo activamos el cursor premium en dispositivos de escritorio sin pantalla táctil
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    setIsCursorHidden(false);

    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      // Detectamos si el cursor está sobre enlaces, botones o elementos interactivos
      const isInteractive = target.closest('a, button, [role="button"], input, select, textarea, .faq-item, .gallery-item');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  useEffect(() => {
    if (loading) return;

    // IntersectionObserver configurado con un margen de aproximación óptimo y umbral ultra-bajo
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.01 // se dispara con apenas 1% visible para evitar retrasos
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Una vez revelado, dejamos de observar para economizar recursos en memoria
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const setupObserver = () => {
      const elements = document.querySelectorAll('.reveal-mask, .text-reveal-wrapper, .reveal-fade-in');
      elements.forEach((el) => {
        if (!el.classList.contains('is-visible')) {
          observer.observe(el);
        }
      });
    };

    // Lanzamos la detección inicial e intermedias para capturar el pintado del DOM
    setupObserver();
    const d1 = setTimeout(setupObserver, 100);
    const d2 = setTimeout(setupObserver, 400);
    const d3 = setTimeout(setupObserver, 900);

    // CONTROL DE SEGURIDAD (FALLBACK): 
    // Para resolver de manera definitiva los problemas de pantallas en blanco o elementos
    // bloqueados, si a los 2.5 segundos algún componente sigue invisible, forzamos su visualización.
    const safetyFallback = setTimeout(() => {
      const allElements = document.querySelectorAll('.reveal-mask, .text-reveal-wrapper, .reveal-fade-in');
      allElements.forEach((el) => {
        if (!el.classList.contains('is-visible')) {
          el.classList.add('is-visible');
        }
      });
    }, 2500);

    return () => {
      observer.disconnect();
      clearTimeout(d1);
      clearTimeout(d2);
      clearTimeout(d3);
      clearTimeout(safetyFallback);
    };
  }, [loading]);

  return (
    <>
      {/* Cursor Premium Flotante */}
      {!isCursorHidden && (
        <>
          <div 
            className={`custom-cursor-dot${isHovering ? ' hover' : ''}`}
            style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
          />
          <div 
            className={`custom-cursor-ring${isHovering ? ' hover' : ''}`}
            style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
          />
        </>
      )}

      {/* Preloader Premium */}
      <div className={`preloader${!loading ? ' is-hidden' : ''}`}>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 400,
            fontSize: 'clamp(2.2rem, 6vw, 3.6rem)',
            color: 'var(--color-text-light)',
            textAlign: 'center',
            textTransform: 'none',
            letterSpacing: '0.02em',
            marginBottom: '0.5rem'
          }}
        >
          Vista Di Mare
        </h1>
        <span
          style={{
            display: 'block',
            fontFamily: 'var(--font-body)',
            fontSize: '0.65rem',
            letterSpacing: '0.45em',
            color: 'var(--color-secondary)',
            textAlign: 'center',
            marginTop: '0.85rem',
            textTransform: 'uppercase',
            fontWeight: '400'
          }}
        >
          Puerto Colombia · Inversión Caribe
        </span>
        <div className="preloader-line" />
      </div>

      {/* Estructura del Sitio Premium */}
      <Navbar />
      <Hero />
      <Stats />
      <Manifesto />
      <WhyPuertoColombia />
      <InvestmentSimulator />
      <Lofts />
      <Amenities />
      <Gallery />
      <Location />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
