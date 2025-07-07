'use client'

import { ReactNode, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function FadeInSection({ children, className = "" }: { children: ReactNode, className?: string }) {
  const main = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray('.anim-fadein');
      boxes.forEach((el) => {
        gsap.to(el, {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          clearProps: "all",
          autoAlpha: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            
            scrub: true,
            markers: true,
          },
        });
      });
    },
    { scope: main }
  );

  return (
    <div ref={main} className={className}>
      {children}
    </div>
  );
}

