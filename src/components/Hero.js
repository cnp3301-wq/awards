import React from 'react';

function Hero() {
  return (
    <section className="hero">
      {/* Animated Particles */}
      <div className="particles">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <div className="hero-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div className="hero-trophy animate-scale-in" style={{ marginBottom: '2rem' }}>
          <div style={{
            width: '140px',
            height: '140px',
            background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #3b82f6 100%)',
            backgroundSize: '200% 200%',
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 20px 60px rgba(16, 185, 129, 0.3)',
            animation: 'gradientFlow 4s ease infinite, glow 3s ease-in-out infinite',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
            e.currentTarget.style.boxShadow = '0 30px 80px rgba(16, 185, 129, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
            e.currentTarget.style.boxShadow = '0 20px 60px rgba(16, 185, 129, 0.3)';
          }}
          >
            <svg viewBox="0 0 24 24" width="80" height="80" fill="#ffffff" style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}>
              <path d="M12 2C13.1 2 14 2.9 14 4V5H17C18.1 5 19 5.9 19 7V9C19 11.21 17.21 13 15 13H14.54C14.19 14.14 13.67 15.17 13 16.07V18H15C16.1 18 17 18.9 17 20V22H7V20C7 18.9 7.9 18 9 18H11V16.07C10.33 15.17 9.81 14.14 9.46 13H9C6.79 13 5 11.21 5 9V7C5 5.9 5.9 5 7 5H10V4C10 2.9 10.9 2 12 2M7 7V9C7 10.1 7.9 11 9 11V7H7M15 7V11C16.1 11 17 10.1 17 9V7H15Z"/>
            </svg>
          </div>
        </div>
        <div className="hero-text" style={{ maxWidth: '700px' }}>
          <h1 style={{ animation: 'fadeInUp 1s ease forwards', opacity: 0, animationDelay: '0.2s' }}>
            <span style={{
              background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #3b82f6 100%)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradientFlow 3s ease infinite'
            }}>KPRCAS</span>
            Legacy Awards 2026
          </h1>
          <p style={{ animation: 'fadeInUp 1s ease forwards', opacity: 0, animationDelay: '0.4s' }}>
            Recognizing excellence in academia and celebrating the outstanding 
            contributions of educators who shape the future of education.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', animation: 'fadeInUp 1s ease forwards', opacity: 0, animationDelay: '0.6s' }}>
            <a href="#awards" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Explore Awards
            </a>
            <a href="#dates" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              View Dates
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'bounce 2s ease-in-out infinite',
        opacity: 0.7
      }}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
