// src/hooks/useBentoState.js
import { useState, useEffect, useCallback } from 'react';

export function useBentoState(mobileBreakpoint = 768) {
  // This state is the context lock. It persists across viewports.
  // null = nothing active/expanded. A number = that index is active/expanded.
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

  // Toggle logic: clicking the already-active index closes it (null),
  // clicking any other index opens that one instead.
  const toggleIndex = useCallback((index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  }, []);

  return { activeIndex, setActiveIndex, toggleIndex, isMobile };
}