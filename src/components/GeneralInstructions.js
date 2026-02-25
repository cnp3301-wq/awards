import React from 'react';

const eligibilityItems = [
  'Must be currently employed in an academic institution',
  'Minimum 5 years of teaching/research experience',
  'Outstanding track record in respective field',
  'Significant contributions to academic community'
];

function GeneralInstructions() {
  return (
    <section className="instructions-section">
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
        }}>Eligibility</span> Criteria
      </h2>
      <p style={{
        textAlign: 'center',
        color: '#64748b',
        fontSize: '1.1rem',
        marginBottom: '3rem'
      }}>
        Requirements for award nomination
      </p>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
        padding: '0 1rem'
      }}>
        {eligibilityItems.map((item, index) => (
          <div key={index} style={{
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '1.5rem',
            border: '1px solid rgba(16, 185, 129, 0.1)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #3b82f6 100%)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: '700',
              fontSize: '1.1rem',
              flexShrink: 0
            }}>
              {index + 1}
            </div>
            <p style={{ color: '#0f172a', fontSize: '1rem', margin: 0, lineHeight: '1.6' }}>
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GeneralInstructions;
