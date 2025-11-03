'use client';

import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation(threshold = 0.1, rootMargin = '0px 0px -100px 0px') {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold,
        rootMargin, // Trigger when element approaches viewport
      }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, isVisible]);

  return { ref, isVisible };
}
