import React from 'react';

const dates = [
  {
    icon: 'fas fa-calendar-check',
    title: 'Shortlisted Candidates Announcement',
    date: 'April 26, 2026'
  },
  {
    icon: 'fas fa-user-tie',
    title: 'Personal Interview',
    date: 'May 5, 2026'
  },
  {
    icon: 'fas fa-trophy',
    title: 'Awardees Announcement',
    date: 'May 10, 2026'
  },
  {
    icon: 'fas fa-clock',
    title: 'Application Deadline',
    date: 'May 20, 2026'
  }
];

function ImportantDates() {
  return (
    <section className="important-dates">
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
        }}>Important</span> Dates
      </h2>
      <p style={{
        textAlign: 'center',
        color: '#64748b',
        fontSize: '1.1rem',
        marginBottom: '3rem'
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
          <div key={index} style={{
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '2rem',
            textAlign: 'center',
            border: '1px solid rgba(16, 185, 129, 0.1)',
            transition: 'all 0.3s ease'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #3b82f6 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              fontSize: '1.5rem',
              color: '#fff'
            }}>
              <i className={item.icon}></i>
            </div>
            <h4 style={{ color: '#0f172a', fontSize: '1rem', marginBottom: '0.5rem', fontWeight: '600' }}>{item.title}</h4>
            <p style={{ 
              background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: '700', 
              fontSize: '1.1rem' 
            }}>{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ImportantDates;
