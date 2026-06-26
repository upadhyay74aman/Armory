// src/hooks/useBentoState.js
import { useState, useEffect } from 'react';

export function useBentoState(mobileBreakpoint = 768) {
  // This state is the context lock. It persists across viewports.
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${mobileBreakpoint}px)`);
    
    // Initialize the layout state
    setIsMobile(mediaQuery.matches);

    // Event listener for layout thrashing/resizes
    const handleResize = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, [mobileBreakpoint]);

  return { activeIndex, setActiveIndex, isMobile };
}