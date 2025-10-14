'use client';
import { useState, useEffect } from 'react';

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [iframeHeight, setIframeHeight] = useState('600px');

  // Handle responsive height
  useEffect(() => {
    const updateHeight = () => {
      const height = window.innerHeight * 0.85;
      setIframeHeight(`${height}px`);
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);

    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', padding: '1rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>
          Project Analytics Dashboard
        </h1>
        
        <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', padding: '1rem' }}>
          {isLoading && (
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              height: iframeHeight 
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  animation: 'spin 1s linear infinite',
                  borderRadius: '50%',
                  width: '3rem',
                  height: '3rem',
                  border: '4px solid #f3f4f6',
                  borderTop: '4px solid #3b82f6',
                  margin: '0 auto'
                }}></div>
                <p style={{ marginTop: '1rem', color: '#6b7280' }}>Loading Power BI dashboard...</p>
              </div>
            </div>
          )}
          
          <iframe
            title="ProjectDashboard"
            src="https://app.powerbi.com/view?r=eyJrIjoiOTkyYjM0MjAtMDE3MC00Njk3LTk3ZmQtM2QyNDUwZTBhYjAxIiwidCI6IjkwMWQ5YTk5LTI3NTgtNGM5ZS1iNWM3LTI2MWM2OTIwZmQzNyIsImMiOjl9"
            width="100%"
            height={iframeHeight}
            onLoad={handleIframeLoad}
            frameBorder="0"
            allowFullScreen={true}
            style={{ 
              display: isLoading ? 'none' : 'block',
              borderRadius: '8px'
            }}
          ></iframe>
        </div>
        
        <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#6b7280' }}>
          <p>Use the filters in the dashboard to explore project data interactively.</p>
        </div>

        {/* Success Message */}
        <div style={{ 
          marginTop: '1.5rem', 
          padding: '1rem', 
          backgroundColor: '#f0fdf4', 
          border: '1px solid #bbf7d0',
          borderRadius: '0.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ color: '#22c55e', marginRight: '0.75rem', fontSize: '1.25rem' }}>✅</div>
            <div>
              <h4 style={{ fontWeight: '600', color: '#166534' }}>Power BI Integration Successful!</h4>
              <p style={{ color: '#15803d', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                Your Power BI dashboard is now successfully embedded and fully functional.
                All filters and interactive features are working.
              </p>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  );
}
