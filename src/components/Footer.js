import React, { useState } from 'react';

function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const links = [
    { href: '#privacy', label: 'Privacy Policy' },
    { href: '#terms', label: 'Terms of Service' },
    { href: '#contact', label: 'Contact Us' }
  ];

  return (
    <footer className="footer" style={{
      background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #3b82f6 100%)',
      backgroundSize: '200% 200%',
      animation: 'gradientFlow 6s ease infinite',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Shimmer effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '200%',
        height: '100%',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
        animation: 'shimmer 3s ease-in-out infinite'
      }}/>
      
      {/* Decorative circles */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '150px',
        height: '150px',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '50%',
        animation: 'pulse 4s ease-in-out infinite'
      }}/>
      <div style={{
        position: 'absolute',
        bottom: '-30px',
        left: '-30px',
        width: '100px',
        height: '100px',
        background: 'rgba(255,255,255,0.08)',
        borderRadius: '50%',
        animation: 'pulse 5s ease-in-out infinite reverse'
      }}/>
      
      <div className="footer-content" style={{ position: 'relative', zIndex: 1 }}>
        {/* Logo/Brand */}
        <div style={{ marginBottom: '1rem' }}>
          <span style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#fff',
            textShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            🏆 KPRCAS Legacy Awards
          </span>
        </div>
        
        <p style={{
          color: 'rgba(255,255,255,0.9)',
          fontSize: '1rem',
          fontWeight: '500',
          marginBottom: '1.5rem'
        }}>
          &copy; 2026 KPRCAS Legacy Awards. All rights reserved.
        </p>
        
        <div className="footer-links" style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          {links.map((link, index) => (
            <a 
              key={index}
              href={link.href}
              onMouseEnter={() => setHoveredLink(index)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                color: hoveredLink === index ? '#fff' : 'rgba(255, 255, 255, 0.85)',
                textDecoration: 'none',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                padding: '0.5rem 0',
                transform: hoveredLink === index ? 'translateY(-2px)' : 'translateY(0)'
              }}
            >
              {link.label}
              <span style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: hoveredLink === index ? '100%' : '0%',
                height: '2px',
                background: '#fff',
                transition: 'width 0.4s ease'
              }}/>
            </a>
          ))}
        </div>
        
        {/* Social icons placeholder */}
        <div style={{
          marginTop: '1.5rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem'
        }}>
          {['📧', '🐦', '📘', '📸'].map((icon, index) => (
            <span 
              key={index}
              style={{
                width: '40px',
                height: '40px',
                background: 'rgba(255,255,255,0.15)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '1.2rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
              }}
            >
              {icon}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
