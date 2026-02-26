import React, { useState } from 'react';

const awards = [
  {
    title: 'Excellence in Research Award',
    description: 'For outstanding contributions in research and innovation.',
    gradient: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
    icon: '🔬'
  },
  {
    title: 'Distinguished Professor Award',
    description: 'Recognizing excellence in teaching and academic leadership.',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    icon: '📚'
  },
  {
    title: 'Rising Star Award',
    description: 'For emerging talents showing exceptional promise.',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)',
    icon: '⭐'
  },
  {
    title: 'Star Alumni Award',
    description: 'Celebrating distinguished alumni achievements.',
    gradient: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
    icon: '🎓'
  },
  {
    title: 'Hall of Fame',
    description: 'Lifetime achievement recognition for extraordinary contributions to education and research.',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #10b981 100%)',
    icon: '🏛️'
  },
  {
    title: 'Youth Entrepreneur Award',
    description: 'Celebrating young innovators and entrepreneurs who demonstrate exceptional business acumen, creativity, and leadership in launching successful ventures.',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
    icon: '💡'
  }
];

function AwardCategories() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="awards-section" id="awards">
      <h2 style={{
        textAlign: 'center',
        fontSize: '2.5rem',
        marginBottom: '0.5rem',
        fontWeight: '700',
        color: '#0f172a',
        animation: 'fadeInUp 0.8s ease forwards'
      }}>
        <span style={{
          background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
          backgroundSize: '200% 200%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'gradientFlow 3s ease infinite'
        }}>Award</span> Categories
      </h2>
      <p style={{
        textAlign: 'center',
        color: '#64748b',
        fontSize: '1.1rem',
        marginBottom: '3rem',
        animation: 'fadeInUp 0.8s ease forwards',
        animationDelay: '0.2s',
        opacity: 0,
        animationFillMode: 'forwards'
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
          <div 
            key={index} 
            style={{
              background: hoveredIndex === index ? '#ffffff' : 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '1.5rem',
              border: hoveredIndex === index ? '1px solid transparent' : '1px solid rgba(16, 185, 129, 0.1)',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              transform: hoveredIndex === index ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
              boxShadow: hoveredIndex === index 
                ? '0 25px 60px rgba(59, 130, 246, 0.2)' 
                : '0 4px 20px rgba(16, 185, 129, 0.1)',
              animation: `slideInScale 0.8s ease forwards`,
              animationDelay: `${index * 0.1}s`,
              opacity: 0,
              animationFillMode: 'forwards'
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Gradient border effect */}
            <div style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '20px',
              padding: '2px',
              background: award.gradient,
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              opacity: hoveredIndex === index ? 1 : 0,
              transition: 'opacity 0.4s ease'
            }}/>
            
            {/* Top gradient bar */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: award.gradient,
              transform: hoveredIndex === index ? 'scaleX(1)' : 'scaleX(0.3)',
              transition: 'transform 0.4s ease',
              transformOrigin: 'left'
            }}/>
            
            {/* Icon */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1rem'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: award.gradient,
                backgroundSize: '200% 200%',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                animation: hoveredIndex === index ? 'gradientFlow 2s ease infinite, wiggle 0.5s ease' : 'none',
                transition: 'all 0.4s ease',
                transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
                boxShadow: hoveredIndex === index 
                  ? '0 10px 30px rgba(16, 185, 129, 0.3)' 
                  : '0 4px 15px rgba(16, 185, 129, 0.15)'
              }}>
                {award.icon}
              </div>
              <h3 style={{ 
                background: award.gradient,
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: '1.2rem', 
                fontWeight: '700',
                margin: 0,
                animation: hoveredIndex === index ? 'gradientFlow 2s ease infinite' : 'none'
              }}>
                {award.title}
              </h3>
            </div>
            
            <p style={{ 
              color: '#64748b', 
              fontSize: '0.95rem', 
              lineHeight: '1.6',
              margin: 0,
              transition: 'color 0.3s ease'
            }}>
              {award.description}
            </p>
            
            {/* Learn more link */}
            <div style={{
              marginTop: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              opacity: hoveredIndex === index ? 1 : 0,
              transform: hoveredIndex === index ? 'translateX(0)' : 'translateX(-10px)',
              transition: 'all 0.4s ease'
            }}>
              <span style={{
                background: award.gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '600',
                fontSize: '0.9rem'
              }}>
                Learn More
              </span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="url(#grad1)" strokeWidth="2">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AwardCategories;
