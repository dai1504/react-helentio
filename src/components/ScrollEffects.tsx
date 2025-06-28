"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollEffects = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return; // Tránh chạy khi SSR
  
    gsap.registerPlugin(ScrollTrigger);
    const fadeElements = document.querySelectorAll(".anim-fadein");
  
    fadeElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reset",
          },
        }
      );
    });
  }, []);

  return null;
};

export default ScrollEffects;
