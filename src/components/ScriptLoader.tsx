"use client";
import { useEffect } from "react";
import $ from "jquery";
import { Fancybox } from "@fancyapps/ui";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  






   
      return () => {
        document.body.querySelectorAll("script").forEach((script) => {
          if (script.src.includes("/js/")) script.remove();
        });
      };
    }, []);
  
    return null;
  }
