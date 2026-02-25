import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    institution: '',
    category: '',
    password: '',
    confirmPassword: '',
    terms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Registration submitted:', formData);
  };

  return (
    <div className="auth-page">
      <Link to="/" className="back-link">
        <i className="fas fa-arrow-left"></i> Back to Home
      </Link>
      
      <div className="auth-container" style={{ maxWidth: '520px' }}>
        <div className="auth-header">
          <div className="auth-logo">CAS</div>
          <h1>Create Account</h1>
          <p>Register for KPRCAS Legacy Awards 2026</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <div className="input-icon">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <div className="input-icon">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-icon">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <div className="input-icon">
              <i className="fas fa-phone"></i>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="institution">Institution</label>
            <div className="input-icon">
              <i className="fas fa-building"></i>
              <input
                type="text"
                id="institution"
                name="institution"
                placeholder="Enter your institution name"
                value={formData.institution}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="category">Award Category</label>
            <div className="input-icon">
              <i className="fas fa-award"></i>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select award category</option>
                <option value="research">Excellence in Research Award</option>
                <option value="professor">Distinguished Professor Award</option>
                <option value="rising-star">Rising Star Award</option>
                <option value="alumni">Star Alumni Award</option>
                <option value="hall-of-fame">Hall of Fame</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-icon">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Create password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="input-icon">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="terms">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              required
            />
            <label htmlFor="terms">
              I agree to the <a href="#terms">Terms and Conditions</a> and{' '}
              <a href="#privacy">Privacy Policy</a>
            </label>
          </div>

          <button type="submit" className="auth-btn" style={{ marginTop: '1.5rem' }}>
            Create Account <i className="fas fa-user-plus"></i>
          </button>
        </form>

        <div className="auth-footer">
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Register;
