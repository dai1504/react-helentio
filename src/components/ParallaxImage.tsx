"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image, { ImageProps } from "next/image";

gsap.registerPlugin(ScrollTrigger);

type ParallaxImageProps = {
    src: ImageProps["src"];
    alt?: string;
    children?: React.ReactNode;
    className?: string;
    imgClassName?: string;
    sizes?: string;
    priority?: boolean;
};

export default function ParallaxImage({
    src,
    alt = "",
    children,
    className = "",
    imgClassName = "",
    sizes = "2048px",
    priority = false,
}: ParallaxImageProps) {
    const figureRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const element = figureRef.current;
        if (!element) return;
        const bgImage = element.querySelector("img");
        if (!bgImage) return;

        const parallax = gsap.fromTo(
            bgImage,
            { y: "-20%", scale: 1.15 },
            { y: "20%", scale: 1, duration: 1, ease: "none" }
        );

        const trigger = ScrollTrigger.create({
            trigger: element,
            start: "top 100%",
            end: () => `+=${element.offsetHeight + window.innerHeight}`,
            animation: parallax,
            scrub: true,
        });

        return () => {
            trigger.kill();
            parallax.kill();
        };
    }, []);

    return (
        <figure
            ref={figureRef}
            className={`parallax-item-img has-parallax d-flex align-items-center ${className}`}
        >
            <Image
                src={src}
                alt={alt}
                fill
                sizes={sizes}
                priority={priority}
                className={imgClassName}
            />
            {children && (
                <div className="parallax-image-content content-full-width text-center">
                    {children}
                </div>
            )}
        </figure>
    );
}
