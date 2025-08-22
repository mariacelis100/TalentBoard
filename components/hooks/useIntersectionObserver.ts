import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        
        if (isElementIntersecting && !hasTriggered) {
          setIsIntersecting(true);
          if (triggerOnce) {
            setHasTriggered(true);
          }
        } else if (!isElementIntersecting && !triggerOnce) {
          setIsIntersecting(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);

  return { elementRef, isIntersecting };
}

// Hook específico para animaciones de entrada
export function useFadeInAnimation(delay: number = 0) {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px',
    triggerOnce: true
  });

  const animationClasses = `
    transition-all duration-700 ease-out
    ${isIntersecting 
      ? 'opacity-100 translate-y-0' 
      : 'opacity-0 translate-y-8'
    }
  `;

  const style = {
    transitionDelay: `${delay}ms`
  };

  return { elementRef, animationClasses, style };
}

// Hook para animaciones de escala
export function useScaleAnimation(delay: number = 0) {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px',
    triggerOnce: true
  });

  const animationClasses = `
    transition-all duration-700 ease-out
    ${isIntersecting 
      ? 'opacity-100 scale-100' 
      : 'opacity-0 scale-95'
    }
  `;

  const style = {
    transitionDelay: `${delay}ms`
  };

  return { elementRef, animationClasses, style };
}

// Hook para animaciones de slide
export function useSlideAnimation(direction: 'left' | 'right' | 'up' | 'down' = 'up', delay: number = 0) {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px',
    triggerOnce: true
  });

  const getTransform = () => {
    if (!isIntersecting) {
      switch (direction) {
        case 'left': return 'translate-x-8';
        case 'right': return '-translate-x-8';
        case 'up': return 'translate-y-8';
        case 'down': return '-translate-y-8';
        default: return 'translate-y-8';
      }
    }
    return 'translate-x-0 translate-y-0';
  };

  const animationClasses = `
    transition-all duration-700 ease-out
    ${isIntersecting 
      ? 'opacity-100' 
      : 'opacity-0'
    }
    ${getTransform()}
  `;

  const style = {
    transitionDelay: `${delay}ms`
  };

  return { elementRef, animationClasses, style };
}
