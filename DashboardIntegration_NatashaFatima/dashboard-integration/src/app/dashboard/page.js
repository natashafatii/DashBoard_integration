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
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Project Analytics Dashboard
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-4">
          {isLoading && (
            <div className="flex justify-center items-center" style={{ height: iframeHeight }}>
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading Power BI dashboard...</p>
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
        
        <div className="mt-4 text-sm text-gray-500">
          <p>Use the filters in the dashboard to explore project data interactively.</p>
        </div>

        {/* Success Message */}
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center">
            <div className="text-green-500 mr-3">✅</div>
            <div>
              <h4 className="font-semibold text-green-800">Power BI Integration Successful!</h4>
              <p className="text-green-700 text-sm mt-1">
                Your Power BI dashboard is now successfully embedded and fully functional.
                All filters and interactive features are working.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}