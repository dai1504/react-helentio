'use client';

import { motion } from "motion/react";
import { ReactNode } from "react";
import useInViewOnce from "@/hooks/useInViewOnce";
import usePageLoaded from "@/hooks/usePageLoaded";

export default function FadeInUp({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const hasLoaded = usePageLoaded();
  const { ref, inView } = useInViewOnce<HTMLDivElement>({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={hasLoaded && inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
