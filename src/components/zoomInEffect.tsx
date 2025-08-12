"use client";
import { ReactNode, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import usePageLoaded from "@/hooks/usePageLoaded";

gsap.registerPlugin(ScrollTrigger);

function ZoomInSection({ children }: { children: ReactNode }) {
  const el = useRef<HTMLDivElement>(null);
  const hasLoaded = usePageLoaded();
  useGSAP(
    () => {
      if (!el.current) return;
      if (!el.current) return;
      requestAnimationFrame(() => {
        gsap.fromTo(
          el.current,
          { autoAlpha: 0, scale: 1.2 },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el.current,
              start: "top 90%",
              // markers: true,
              toggleActions: "play none none none",
            },
          }
        );
        ScrollTrigger.refresh();
      });
    },
    { scope: el, dependencies: [hasLoaded] }
  );

  return (
    <div ref={el} className="anim-zoomin-wrap">
      {children}
    </div>
  );
}

export default ZoomInSection;
