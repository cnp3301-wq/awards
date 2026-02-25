import React from 'react';

const youthAwardDetails = [
  {
    title: 'Innovative Startup',
    description: 'For entrepreneurs who have launched groundbreaking startups with innovative solutions.',
    gradient: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)'
  },
  {
    title: 'Social Impact Entrepreneur',
    description: 'Recognizing young entrepreneurs creating positive social change through their ventures.',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)'
  },
  {
    title: 'Tech Innovation Award',
    description: 'For outstanding technological innovations and digital solutions.',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)'
  },
  {
    title: 'Emerging Business Leader',
    description: 'Celebrating young leaders demonstrating exceptional business acumen and growth.',
    gradient: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)'
  },
  {
    title: 'Sustainable Enterprise Award',
    description: 'For entrepreneurs building environmentally sustainable and eco-friendly businesses.',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #10b981 100%)'
  }
];

const eligibilityCriteria = [
  'Age between 18 to 35 years',
  'Must be the founder or co-founder of a registered business',
  'Business should be operational for at least 1 year',
  'Demonstrated innovation and creativity in business model',
  'Positive impact on employment generation or community'
];

function YouthEntrepreneurAward() {
  return (
    <section className="awards-section" style={{ background: 'linear-gradient(180deg, #ecfdf5 0%, #cffafe 50%, #dbeafe 100%)' }}>
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
        }}>Youth Entrepreneur</span> Award
      </h2>
      <p style={{
        textAlign: 'center',
        color: '#64748b',
        fontSize: '1.1rem',
        marginBottom: '3rem',
        maxWidth: '700px',
        margin: '0 auto 3rem'
      }}>
        Celebrating young innovators and entrepreneurs who demonstrate exceptional business acumen, 
        creativity, and leadership in launching successful ventures.
      </p>

      {/* Award Categories Grid */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto 3rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
        padding: '0 1rem'
      }}>
        {youthAwardDetails.map((award, index) => (
          <div key={index} style={{
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '1.5rem',
            border: '1px solid rgba(16, 185, 129, 0.1)',
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
            <h4 style={{ 
              background: award.gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontSize: '1.1rem', 
              marginBottom: '0.5rem',
              fontWeight: '600'
            }}>
              {award.title}
            </h4>
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

      {/* Eligibility Criteria */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        padding: '2rem',
        border: '1px solid rgba(16, 185, 129, 0.1)'
      }}>
        <h3 style={{
          background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontSize: '1.3rem',
          marginBottom: '1.5rem',
          fontWeight: '600',
          textAlign: 'center'
        }}>
          Eligibility Criteria
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {eligibilityCriteria.map((criteria, index) => (
            <p key={index} style={{ 
              color: '#0f172a', 
              fontSize: '1rem', 
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem 1rem',
              background: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(59,130,246,0.08) 100%)',
              borderRadius: '10px'
            }}>
              <span style={{ 
                background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '700' 
              }}>{index + 1}.</span>
              {criteria}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default YouthEntrepreneurAward;
