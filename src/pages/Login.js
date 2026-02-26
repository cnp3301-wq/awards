import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log('Login submitted:', formData);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="auth-page">
      {/* Animated background particles */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            background: `linear-gradient(135deg, rgba(16,185,129,${0.05 + Math.random() * 0.1}) 0%, rgba(59,130,246,${0.05 + Math.random() * 0.1}) 100%)`,
            borderRadius: '50%',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `floatParticle ${8 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`
          }}/>
        ))}
      </div>
      
      <Link 
        to="/" 
        className="back-link"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#10b981';
          e.currentTarget.style.transform = 'translateX(-5px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#64748b';
          e.currentTarget.style.transform = 'translateX(0)';
        }}
      >
        ← Back to Home
      </Link>
      
      <div 
        className="auth-container"
        style={{
          animation: 'fadeInUp 0.8s ease forwards'
        }}
      >
        <div className="auth-header" style={{ animation: 'fadeInDown 0.8s ease forwards' }}>
          <div 
            className="auth-logo"
            style={{
              animation: 'scaleIn 0.6s ease forwards, glow 3s ease-in-out infinite',
              background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #3b82f6 100%)',
              backgroundSize: '200% 200%'
            }}
          >
            🏆
          </div>
          <h1 style={{ 
            background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'gradientFlow 3s ease infinite'
          }}>
            Welcome Back
          </h1>
          <p>Login to your KPRCAS Awards account</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div 
            className="form-group"
            style={{
              animation: 'fadeInUp 0.6s ease forwards',
              animationDelay: '0.2s',
              opacity: 0,
              animationFillMode: 'forwards'
            }}
          >
            <label htmlFor="email">Email Address</label>
            <div 
              className="input-icon"
              style={{
                transform: focusedField === 'email' ? 'scale(1.02)' : 'scale(1)',
                transition: 'all 0.3s ease'
              }}
            >
              <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }}>📧</span>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                required
                style={{
                  paddingLeft: '3rem',
                  borderColor: focusedField === 'email' ? '#10b981' : 'rgba(16, 185, 129, 0.2)',
                  boxShadow: focusedField === 'email' ? '0 0 0 4px rgba(16, 185, 129, 0.15)' : 'none',
                  transition: 'all 0.3s ease'
                }}
              />
            </div>
          </div>

          <div 
            className="form-group"
            style={{
              animation: 'fadeInUp 0.6s ease forwards',
              animationDelay: '0.3s',
              opacity: 0,
              animationFillMode: 'forwards'
            }}
          >
            <label htmlFor="password">Password</label>
            <div 
              className="input-icon"
              style={{
                transform: focusedField === 'password' ? 'scale(1.02)' : 'scale(1)',
                transition: 'all 0.3s ease'
              }}
            >
              <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }}>🔒</span>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField(null)}
                required
                style={{
                  paddingLeft: '3rem',
                  borderColor: focusedField === 'password' ? '#10b981' : 'rgba(16, 185, 129, 0.2)',
                  boxShadow: focusedField === 'password' ? '0 0 0 4px rgba(16, 185, 129, 0.15)' : 'none',
                  transition: 'all 0.3s ease'
                }}
              />
            </div>
          </div>

          <div 
            className="forgot-password"
            style={{
              animation: 'fadeInUp 0.6s ease forwards',
              animationDelay: '0.4s',
              opacity: 0,
              animationFillMode: 'forwards'
            }}
          >
            <a 
              href="#forgot"
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                transition: 'all 0.3s ease'
              }}
            >
              Forgot Password?
            </a>
          </div>

          <button 
            type="submit" 
            className="auth-btn"
            disabled={isSubmitting}
            style={{
              animation: 'fadeInUp 0.6s ease forwards',
              animationDelay: '0.5s',
              opacity: 0,
              animationFillMode: 'forwards',
              background: isSubmitting 
                ? 'linear-gradient(135deg, #6b7280 0%, #9ca3af 100%)'
                : 'linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #3b82f6 100%)',
              backgroundSize: '200% 200%',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              if (!isSubmitting) {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(16, 185, 129, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {isSubmitting ? (
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <span style={{ animation: 'rotate 1s linear infinite', display: 'inline-block' }}>⏳</span>
                Logging in...
              </span>
            ) : (
              <span>Login →</span>
            )}
          </button>
        </form>

        <div 
          className="auth-footer"
          style={{
            animation: 'fadeInUp 0.6s ease forwards',
            animationDelay: '0.6s',
            opacity: 0,
            animationFillMode: 'forwards'
          }}
        >
          <p>Don't have an account? <Link to="/register" style={{
            background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: '600'
          }}>Register</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
