import React, { useState } from 'react';

const dates = [
  {
    icon: 'fas fa-calendar-check',
    title: 'Shortlisted Candidates Announcement',
    date: 'April 26, 2026',
    emoji: '📋'
  },
  {
    icon: 'fas fa-user-tie',
    title: 'Personal Interview',
    date: 'May 5, 2026',
    emoji: '👔'
  },
  {
    icon: 'fas fa-trophy',
    title: 'Awardees Announcement',
    date: 'May 10, 2026',
    emoji: '🏆'
  },
  {
    icon: 'fas fa-clock',
    title: 'Application Deadline',
    date: 'May 20, 2026',
    emoji: '⏰'
  }
];

function ImportantDates() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="important-dates" id="dates">
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
        }}>Important</span> Dates
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
        Mark your calendar for these key milestones
      </p>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem',
        padding: '0 1rem'
      }}>
        {dates.map((item, index) => (
          <div 
            key={index} 
            style={{
              background: hoveredIndex === index ? '#ffffff' : 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '2rem',
              textAlign: 'center',
              border: '1px solid rgba(16, 185, 129, 0.1)',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: hoveredIndex === index ? 'translateY(-15px) scale(1.02)' : 'translateY(0) scale(1)',
              boxShadow: hoveredIndex === index 
                ? '0 25px 50px rgba(16, 185, 129, 0.2)' 
                : '0 4px 20px rgba(16, 185, 129, 0.1)',
              animation: `slideInScale 0.8s ease forwards`,
              animationDelay: `${index * 0.15}s`,
              opacity: 0,
              animationFillMode: 'forwards',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer'
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Top gradient bar */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #3b82f6 100%)',
              transform: hoveredIndex === index ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'transform 0.4s ease',
              transformOrigin: 'left'
            }}/>
            
            <div style={{
              width: '70px',
              height: '70px',
              background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #3b82f6 100%)',
              backgroundSize: '200% 200%',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              fontSize: '2rem',
              color: '#fff',
              animation: 'gradientFlow 4s ease infinite',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: hoveredIndex === index ? 'scale(1.15) rotate(15deg)' : 'scale(1) rotate(0)',
              boxShadow: hoveredIndex === index 
                ? '0 15px 40px rgba(16, 185, 129, 0.3)' 
                : '0 5px 20px rgba(16, 185, 129, 0.2)'
            }}>
              {item.emoji}
            </div>
            <h4 style={{ 
              color: '#0f172a', 
              fontSize: '1rem', 
              marginBottom: '0.5rem', 
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}>
              {item.title}
            </h4>
            <p style={{ 
              background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: '700', 
              fontSize: '1.1rem',
              animation: hoveredIndex === index ? 'gradientFlow 2s ease infinite' : 'none'
            }}>
              {item.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ImportantDates;
