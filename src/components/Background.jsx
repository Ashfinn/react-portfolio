import React, { useState, useEffect } from 'react';

const ZoomBackground = ({ children }) => {
  const [scale, setScale] = useState(1);
  
  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scale based on scroll position
      // Start at 1 and gradually increase as user scrolls down
      // You can adjust the divisor (4000) to control zoom speed
      const newScale = 1 + window.scrollY / 4000;
      setScale(newScale);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background container with dynamic scaling */}
      <div
        className="fixed inset-0 w-full h-full transition-transform duration-100 ease-linear"
        style={{
          backgroundImage: "url('/assets/hero-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#111827', /* Fallback color (Tailwind's gray-900) */
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
        }}
      />
      
      {/* Content container */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ZoomBackground;