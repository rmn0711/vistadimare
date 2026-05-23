import React, { useEffect, useState, useRef } from 'react';

const statsData = [
  {
    target: 85,
    suffix: '%',
    label: 'Ocupación promedio\nAirbnb · Pradomar',
  },
  {
    target: 19,
    suffix: '',
    label: 'Unidades exclusivas\ndisponibles',
  },
  {
    target: 1,
    suffix: 'km',
    label: 'Del Faro de\nPuerto Colombia',
  },
  {
    target: 100,
    suffix: '%',
    label: 'Rentas cortas\nhabilitadas por escritura',
  },
];

const StatItem = ({ target, suffix, label, start, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    const duration = 1500; // Duración total de 1.5 segundos

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercent = Math.min(progress / duration, 1);
      
      // Easing out cubic: desaceleración suave al final
      const easeProgress = 1 - Math.pow(1 - progressPercent, 3);
      
      setCount(Math.floor(easeProgress * target));

      if (progress < duration) {
        window.requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    const timer = setTimeout(() => {
      window.requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [start, target, delay]);

  return (
    <div className="stat-item">
      <div className="stat-item-inner" style={{ opacity: start ? 1 : 0, transform: start ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: `${delay}ms` }}>
        <span className="stat-value">
          {count}
          {suffix}
        </span>
        <p className="stat-label">{label}</p>
      </div>
    </div>
  );
};

const Stats = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target); // Dejamos de observar para no repetir
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-grid container">
        {statsData.map((stat, i) => (
          <StatItem
            key={i}
            target={stat.target}
            suffix={stat.suffix}
            label={stat.label}
            start={inView}
            delay={i * 150} // Efecto cascada
          />
        ))}
      </div>
    </section>
  );
};

export default Stats;
