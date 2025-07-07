import { useState, useEffect } from "react";

export default function useResponsive() {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
        
        const handleResize = () => setIsMobile(window.innerWidth < 768);

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Return false during SSR and before hydration to prevent mismatch
    return { isMobile: isHydrated ? isMobile : false };
}