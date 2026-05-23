import React, { useState, useEffect } from 'react';

const loftOptions = [
  {
    name: 'Loft Tipo 7 (21.03 m²)',
    priceCop: 195000000,
    priceUsd: 48750,
    multiplier: 0.85,
    tag: 'Mejor Retorno por m²'
  },
  {
    name: 'Loft Tipo 10 (22.04 m²)',
    priceCop: 205000000,
    priceUsd: 51250,
    multiplier: 0.90,
    tag: 'Eficiencia y Flujo'
  },
  {
    name: 'Loft Tipo 5 (25.89 m²)',
    priceCop: 240000000,
    priceUsd: 60000,
    multiplier: 1.00,
    tag: 'Alta Ocupación'
  },
  {
    name: 'Loft Tipo 1 (36.50 m²)',
    priceCop: 320000000,
    priceUsd: 80000,
    multiplier: 1.25,
    tag: 'Lujo y Mayor Tarifa'
  }
];

const COP_EXCHANGE = 4000; // Cambio fijo USD to COP

const InvestmentSimulator = () => {
  const [selectedLoftIndex, setSelectedLoftIndex] = useState(2); // Default to Loft Tipo 5
  const [nightlyRateUsd, setNightlyRateUsd] = useState(75); // Tarifa base por noche
  const [occupancyRate, setOccupancyRate] = useState(70); // 70% ocupación

  const loft = loftOptions[selectedLoftIndex];

  // Cálculos financieros
  const effectiveNightlyRateUsd = nightlyRateUsd * loft.multiplier;
  const monthlyGrossUsd = effectiveNightlyRateUsd * 30 * (occupancyRate / 100);
  const monthlyGrossCop = monthlyGrossUsd * COP_EXCHANGE;
  
  const annualGrossUsd = monthlyGrossUsd * 12;
  const annualGrossCop = annualGrossUsd * COP_EXCHANGE;
  
  // Costos de operación estimados (Plataforma + Operador local + Servicios = 30%)
  const operationalCostFactor = 0.30;
  const annualNetUsd = annualGrossUsd * (1 - operationalCostFactor);
  const annualNetCop = annualGrossCop * (1 - operationalCostFactor);
  
  // ROI Estimado
  const estimatedRoi = (annualNetCop / loft.priceCop) * 100;

  const formatCurrency = (val, currency = 'COP') => {
    if (currency === 'USD') {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
    }
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section id="simulador" className="simulator-section section-padding" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-text-light)' }}>
      <div className="container">
        
        {/* Encabezado */}
        <div className="simulator-header" style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <span className="section-label" style={{ color: 'var(--color-secondary)' }}>Rendimiento Financiero</span>
          <div className="text-reveal-wrapper" style={{ display: 'block' }}>
            <h2 className="simulator-title text-reveal-item" style={{ color: 'var(--color-text-light)', fontSize: 'clamp(2.2rem, 4vw, 3.8rem)' }}>
              Simulador de Inversión
            </h2>
          </div>
          <p className="simulator-subtitle reveal-fade-in delay-1" style={{ color: 'rgba(250, 248, 245, 0.7)', maxWidth: '700px', margin: '1rem auto 0', fontWeight: '300' }}>
            Ajusta los valores para proyectar las ganancias mensuales y anuales de tu Loft operando en el mercado de rentas cortas.
          </p>
        </div>

        {/* Cuadro del simulador */}
        <div className="simulator-layout reveal-mask" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2.5rem',
          background: 'rgba(254, 254, 254, 0.04)',
          border: '1px solid rgba(254, 254, 254, 0.1)',
          padding: '1.25rem',
          borderRadius: '4px'
        }}>
          {/* Media Queries manuales vía Grid */}
          <style dangerouslySetInnerHTML={{__html: `
            @media (min-width: 768px) {
              .simulator-layout {
                grid-template-columns: 1.1fr 0.9fr !important;
                padding: 4rem !important;
              }
              .simulator-results {
                padding: 2.5rem !important;
              }
            }
          `}} />

          {/* Lado Izquierdo: Controles */}
          <div className="simulator-controls" style={{ display: 'flex', flexDirection: 'column', gap: '2.25rem' }}>
            
            {/* Selección de Loft */}
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-secondary)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
                1. Selecciona el Tipo de Loft
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
                {loftOptions.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedLoftIndex(idx)}
                    style={{
                      background: selectedLoftIndex === idx ? 'var(--color-secondary)' : 'transparent',
                      color: selectedLoftIndex === idx ? 'var(--color-primary)' : 'var(--color-text-light)',
                      border: selectedLoftIndex === idx ? '1px solid var(--color-secondary)' : '1px solid rgba(254, 254, 254, 0.2)',
                      padding: '1rem 0.75rem',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      textAlign: 'left',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      height: '80px'
                    }}
                  >
                    <span style={{ fontWeight: '600' }}>{opt.name.split(' (')[0]}</span>
                    <span style={{ fontSize: '0.65rem', opacity: 0.8 }}>{opt.tag}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Slider de Tarifa Nocturna */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-secondary)', fontFamily: 'var(--font-heading)' }}>
                  2. Tarifa Nocturna Promedio
                </label>
                <span style={{ fontSize: '1.25rem', fontWeight: '500', color: 'var(--color-text-light)', fontFamily: 'var(--font-heading)' }}>
                  {formatCurrency(nightlyRateUsd, 'USD')} <span style={{ fontSize: '0.75rem', color: 'rgba(250, 248, 245, 0.6)' }}>/ Noche</span>
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="150"
                value={nightlyRateUsd}
                onChange={(e) => setNightlyRateUsd(Number(e.target.value))}
                className="range-slider"
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'rgba(250, 248, 245, 0.5)' }}>
                <span>Min: $50 USD (~$200k COP)</span>
                <span>Equivale a: {formatCurrency(nightlyRateUsd * COP_EXCHANGE)} COP</span>
                <span>Max: $150 USD (~$600k COP)</span>
              </div>
            </div>

            {/* Slider de Tasa de Ocupación */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-secondary)', fontFamily: 'var(--font-heading)' }}>
                  3. Tasa de Ocupación Mensual
                </label>
                <span style={{ fontSize: '1.25rem', fontWeight: '500', color: 'var(--color-text-light)', fontFamily: 'var(--font-heading)' }}>
                  {occupancyRate}% <span style={{ fontSize: '0.75rem', color: 'rgba(250, 248, 245, 0.6)' }}>/ 30 Días</span>
                </span>
              </div>
              <input
                type="range"
                min="40"
                max="90"
                value={occupancyRate}
                onChange={(e) => setOccupancyRate(Number(e.target.value))}
                className="range-slider"
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'rgba(250, 248, 245, 0.5)' }}>
                <span>Baja Frecuencia (40%)</span>
                <span>Promedio Zona (68% - 75%)</span>
                <span>Alta Frecuencia (90%)</span>
              </div>
            </div>

          </div>

          {/* Lado Derecho: Resultados */}
          <div className="simulator-results glass-panel-dark" style={{
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '2rem',
            border: '1px solid rgba(254, 254, 254, 0.08)'
          }}>
            
            <div>
              <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--color-secondary)', display: 'block', marginBottom: '0.5rem' }}>
                Precio Proyectado del Inmueble
              </span>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-light)', fontSize: '1.8rem', fontWeight: '300', marginBottom: '1.5rem' }}>
                {formatCurrency(loft.priceCop)} <span style={{ fontSize: '0.85rem', color: 'rgba(250, 248, 245, 0.5)' }}>COP (~{formatCurrency(loft.priceUsd, 'USD')} USD)</span>
              </h3>
              
              <div style={{ borderTop: '1px solid rgba(254, 254, 254, 0.1)', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                <div>
                  <span style={{ fontSize: '0.7rem', color: 'rgba(250, 248, 245, 0.6)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Ingreso Bruto Mensual (Proyectado)
                  </span>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: '0.25rem' }}>
                    <span style={{ fontSize: '1.4rem', fontWeight: '500', color: 'var(--color-secondary)', fontFamily: 'var(--font-heading)' }}>
                      {formatCurrency(monthlyGrossCop)} COP
                    </span>
                    <span style={{ fontSize: '0.9rem', color: 'rgba(250, 248, 245, 0.7)' }}>
                      ~{formatCurrency(monthlyGrossUsd, 'USD')} USD
                    </span>
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: '0.7rem', color: 'rgba(250, 248, 245, 0.6)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Ingreso Neto Anual Proyectado (30% Gastos Operativos Deducidos)
                  </span>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: '0.25rem' }}>
                    <span style={{ fontSize: '1.4rem', fontWeight: '500', color: 'var(--color-secondary)', fontFamily: 'var(--font-heading)' }}>
                      {formatCurrency(annualNetCop)} COP
                    </span>
                    <span style={{ fontSize: '0.9rem', color: 'rgba(250, 248, 245, 0.7)' }}>
                      ~{formatCurrency(annualNetUsd, 'USD')} USD
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* ROI Final */}
            <div style={{
              background: 'rgba(212, 184, 149, 0.12)',
              padding: '1.5rem',
              textAlign: 'center',
              border: '1px dashed var(--color-secondary)'
            }}>
              <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-secondary)', display: 'block', marginBottom: '0.25rem' }}>
                Retorno Operativo Anual Estimado (ROI)
              </span>
              <span style={{ fontSize: '2.5rem', fontWeight: '600', color: 'var(--color-secondary)', fontFamily: 'var(--font-heading)', display: 'block', lineHeight: '1.1' }}>
                {estimatedRoi.toFixed(2)}%
              </span>
              <span style={{ fontSize: '0.65rem', color: 'rgba(250, 248, 245, 0.5)', display: 'block', marginTop: '0.5rem', fontStyle: 'italic' }}>
                * Excluye la valorización del lote / inmueble, que representa ganancias adicionales.
              </span>
            </div>

          </div>

        </div>

        {/* Nota Legal Inferior */}
        <p style={{ fontSize: '0.7rem', color: 'rgba(250, 248, 245, 0.4)', textAlign: 'center', marginTop: '2rem', fontWeight: '300', maxWidth: '800px', margin: '2rem auto 0' }}>
          Descargo de Responsabilidad: Las proyecciones financieras son simulaciones basadas en tarifas promedio estimadas de alojamiento vacacional en el corredor de Pradomar, Puerto Colombia. El rendimiento final puede variar debido a condiciones cambiantes del mercado turístico, canales de comercialización elegidos y la administración del inmueble.
        </p>

      </div>
    </section>
  );
};

export default InvestmentSimulator;
