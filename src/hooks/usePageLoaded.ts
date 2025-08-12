'use client';

import { useEffect, useState } from 'react';

export default function usePageLoaded() {
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const handleLoad = () => setHasLoaded(true);

        if (document.readyState === 'complete') {
            setHasLoaded(true);
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, []);

    useEffect(() => {
        if (hasLoaded) {
            document.body.classList.add('page-loaded');
        }
    }, [hasLoaded]);

  return hasLoaded;
}
