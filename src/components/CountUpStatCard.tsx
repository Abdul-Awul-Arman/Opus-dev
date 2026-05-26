"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface CountUpStatCardProps {
  value: string;
  countTo?: number;
  suffix?: string;
  description: string;
}

export default function CountUpStatCard({
  value,
  countTo,
  suffix = "",
  description,
}: CountUpStatCardProps) {
  const [displayValue, setDisplayValue] = useState(countTo === undefined ? value : `0${suffix}`);
  const hasAnimated = useRef(false);

  const startCount = () => {
    if (hasAnimated.current || countTo === undefined) {
      return;
    }

    hasAnimated.current = true;
    const duration = 1400;
    const startedAt = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const nextValue = Math.round(easedProgress * countTo);

      setDisplayValue(`${nextValue}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  };

  return (
    <div className="rounded-[28px] border border-brand-navy-dark/[0.04] bg-white p-6 shadow-[0_8px_30px_rgba(13,27,42,0.02)]">
      <motion.h3
        onViewportEnter={startCount}
        viewport={{ once: true, margin: "-80px" }}
        className="font-serif text-[56px] font-normal leading-none text-brand-navy-dark md:text-[64px]"
      >
        {displayValue}
      </motion.h3>
      <p className="mt-8 text-[16px] leading-[1.6] text-text-one">
        {description}
      </p>
    </div>
  );
}
