import React from 'react';

const awards = [
  {
    title: 'Excellence in Research Award',
    description: 'For outstanding contributions in research and innovation.',
    gradient: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)'
  },
  {
    title: 'Distinguished Professor Award',
    description: 'Recognizing excellence in teaching and academic leadership.',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)'
  },
  {
    title: 'Rising Star Award',
    description: 'For emerging talents showing exceptional promise.',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)'
  },
  {
    title: 'Star Alumni Award',
    description: 'Celebrating distinguished alumni achievements.',
    gradient: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)'
  },
  {
    title: 'Hall of Fame',
    description: 'Lifetime achievement recognition for extraordinary contributions to education and research.',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #10b981 100%)'
  },
  {
    title: 'Youth Entrepreneur Award',
    description: 'Celebrating young innovators and entrepreneurs who demonstrate exceptional business acumen, creativity, and leadership in launching successful ventures.',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)'
  }
];

function AwardCategories() {
  return (
    <section className="awards-section">
      <h2 style={{
        textAlign: 'center',
        fontSize: '2.5rem',
        marginBottom: '0.5rem',
        fontWeight: '700',
        color: '#0f172a'
      }}>
        <span style={{
          background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>Award</span> Categories
      </h2>
      <p style={{
        textAlign: 'center',
        color: '#64748b',
        fontSize: '1.1rem',
        marginBottom: '3rem'
      }}>
        Recognizing excellence across multiple domains
      </p>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '1.5rem',
        padding: '0 1rem'
      }}>
        {awards.map((award, index) => (
          <div key={index} style={{
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '1.5rem',
            border: '1px solid rgba(16, 185, 129, 0.1)',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: award.gradient
            }}></div>
            <h3 style={{ 
              background: award.gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontSize: '1.2rem', 
              marginBottom: '0.75rem',
              fontWeight: '700'
            }}>
              {award.title}
            </h3>
            <p style={{ 
              color: '#64748b', 
              fontSize: '0.95rem', 
              lineHeight: '1.6',
              margin: 0
            }}>
              {award.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AwardCategories;
