'use client'

import { ReactNode, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import usePageLoaded from '@/hooks/usePageLoaded';

gsap.registerPlugin(ScrollTrigger);

export function FadeInSection({ children, className = "" }: { children: ReactNode, className?: string }) {
  const main = useRef<HTMLDivElement>(null);
  const hasLoaded = usePageLoaded();

  useGSAP(
    () => {
      if (!main.current) return;
      if (main.current.classList.contains('anim-fadein')) {
        gsap.fromTo(
          main.current,
          { y: 40, opacity: 0, autoAlpha: 0 },
          {
            y: 0,
            opacity: 1,
            autoAlpha: 1,
            duration: 1.2,
            ease: 'power2.out',
            clearProps: 'all',
            scrollTrigger: {
              trigger: main.current,
              start: 'top 90%',
              // markers: true,
              toggleActions: 'play none none none',
            },
          }
        );
      }
    },
    { scope: main, dependencies: [hasLoaded]}
  );

  return (
    <div ref={main} className={className}>
      {children}
    </div>
  );
}

