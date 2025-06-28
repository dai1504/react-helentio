import { useState, useEffect } from "react";

export default function useResponsive() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleResize = () => setIsMobile(window.innerWidth < 768);

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return { isMobile };
}