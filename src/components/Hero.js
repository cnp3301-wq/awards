import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div className="hero-trophy" style={{ marginBottom: '2rem' }}>
          <div style={{
            width: '140px',
            height: '140px',
            background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #3b82f6 100%)',
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 20px 60px rgba(16, 185, 129, 0.3)'
          }}>
            <svg viewBox="0 0 24 24" width="80" height="80" fill="#ffffff">
              <path d="M12 2C13.1 2 14 2.9 14 4V5H17C18.1 5 19 5.9 19 7V9C19 11.21 17.21 13 15 13H14.54C14.19 14.14 13.67 15.17 13 16.07V18H15C16.1 18 17 18.9 17 20V22H7V20C7 18.9 7.9 18 9 18H11V16.07C10.33 15.17 9.81 14.14 9.46 13H9C6.79 13 5 11.21 5 9V7C5 5.9 5.9 5 7 5H10V4C10 2.9 10.9 2 12 2M7 7V9C7 10.1 7.9 11 9 11V7H7M15 7V11C16.1 11 17 10.1 17 9V7H15Z"/>
            </svg>
          </div>
        </div>
        <div className="hero-text" style={{ maxWidth: '700px' }}>
          <h1>
            <span style={{
              background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>KPRCAS</span>
            Legacy Awards 2026
          </h1>
          <p>
            Recognizing excellence in academia and celebrating the outstanding 
            contributions of educators who shape the future of education.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
