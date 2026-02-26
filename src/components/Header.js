import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`header ${scrolled ? 'scrolled' : ''}`}
      style={{
        padding: scrolled ? '0.7rem 2rem' : '1rem 2rem',
        background: scrolled 
          ? 'rgba(255,255,255,0.98)' 
          : 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(236,253,245,0.95) 100%)',
        boxShadow: scrolled 
          ? '0 8px 40px rgba(16, 185, 129, 0.15)' 
          : '0 4px 30px rgba(16, 185, 129, 0.1)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div className="header-container">
        <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
          <div 
            className="logo-icon"
            style={{
              transform: scrolled ? 'scale(0.9)' : 'scale(1)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          </div>
          <div>
            <span className="logo-text" style={{ 
              transition: 'all 0.3s ease',
              fontSize: scrolled ? '1rem' : '1.1rem'
            }}>
              KPR Legacy Awards
            </span>
            <span className="logo-subtitle" style={{
              opacity: scrolled ? 0.7 : 1,
              transition: 'all 0.3s ease'
            }}>
              Excellence in Education
            </span>
          </div>
        </Link>

      </div>
    </header>
  );
}

export default Header;
