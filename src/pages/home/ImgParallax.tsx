'use client'

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import Image from "next/image";
import ParallaxImage from '@/components/ParallaxImage';

export default function ImgParallax() {
  
    return (
        <ParallaxImage src="/images/home/7.jpg" alt="Ảnh parallax">
          <div></div>
        </ParallaxImage>
    );
}