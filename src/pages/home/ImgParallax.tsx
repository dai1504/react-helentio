'use client'

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import Image from "next/image";

export default function ImgParallax() {
  useEffect(() => {
 
    const timeout = setTimeout(() => {
      const hasParallax = gsap.utils.toArray('.has-parallax');

      hasParallax.forEach((hParallax) => {
        const bgImage = hParallax.querySelector('img');

        if (!bgImage) return;

        const parallax = gsap.fromTo(
          bgImage,
          {
            y: '-20%',
            scale: 1.15,
          },
          {
            y: '20%',
            scale: 1,
            duration: 1,
            ease: 'none',
          }
        );

        ScrollTrigger.create({
          trigger: hParallax,
          start: 'top 100%', 
          end: () => `+=${hParallax.offsetHeight + window.innerHeight}`,
          animation: parallax,
          scrub: true,
          
        });
      });
    }, 300); 

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
    return (
        <section className="parallax-img-section section-img-big">
            <figure className="parallax-item-img has-parallax has-parallax-content d-flex align-items-center" data-delay="100"> 
                <Image src="/images/home/7.jpg" alt="" fill sizes="2048px" priority />
                <div className="parallax-image-content content-full-width text-center"></div>
            </figure>
        </section>
    );
}