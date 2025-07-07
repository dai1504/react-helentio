"use client";
import { useEffect } from "react";
import $ from "jquery";
import { Fancybox } from "@fancyapps/ui";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

// Extend Window interface to include ScrollEffects
declare global {
  interface Window {
    ScrollEffects: () => void;
  }
}

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function ScriptLoader() {
    useEffect(() => {
      Fancybox.bind("[data-fancybox]", {
        // Your custom options
      });

      require("bootstrap/dist/js/bootstrap.bundle.min.js");
      
      const addScript = (src: string) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = false; 
        document.body.appendChild(script);
      };
      window.ScrollEffects = function () {
        gsap.defaults({ overwrite: "auto" });
        gsap.registerPlugin(ScrollTrigger, Flip);
        gsap.config({ nullTargetWarn: false });
        const fadeInElements = gsap.utils.toArray('.anim-fadein') as HTMLElement[];
        fadeInElements.forEach((element, index) => { 
          let tl_FadeIn = gsap.timeline({
            scrollTrigger: {
              trigger: this,
              start: "top bottom",
              markers: false,
            },
          });
      
          tl_FadeIn.from(
            this,
            {
              duration: 2.5,
              autoAlpha: 0,
              opacity: 0,
              ease: "Expo.easeOut",
              clearProps: "all",
            },
            "+=0.3"
          );
        });
        
        
      }
      var ScrollEffects = window.ScrollEffects;
      

      // Initialize animations after a short delay to ensure DOM is ready
     

      // Re-initialize animations when new content is loaded (for dynamic content)
  

    
   
      return () => {
        
        // Kill all ScrollTriggers
      

        document.body.querySelectorAll("script").forEach((script) => {
          if (script.src.includes("/js/")) script.remove();
        });
        
        
      };
    }, []);
  
    return null;
  }
