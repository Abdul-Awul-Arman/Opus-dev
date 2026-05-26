"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import LabelPill from "./LabelPill";

const stats = [
  {
    value: "14+",
    countTo: 14,
    suffix: "+",
    description: "Years of creative, strategic, and marketing communication experience.",
  },
  {
    value: "360",
    countTo: 360,
    suffix: "°",
    description: "Degree creative services from brand strategy to launch, activation, and production.",
  },
  {
    value: "7",
    countTo: 7,
    description: "Core service areas across branding, digital, events, exhibitions, and content creation.",
  },
  {
    value: "Multi",
    description: "Sector experience with corporate, financial, industrial, government, and consumer brands.",
  },
];

function CountUpStat({
  value,
  countTo,
  suffix = "",
}: {
  value: string;
  countTo?: number;
  suffix?: string;
}) {
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
    <motion.h3
      onViewportEnter={startCount}
      viewport={{ once: true, margin: "-80px" }}
      className="text-[56px] md:text-[64px] font-serif font-normal text-brand-navy-dark"
    >
      {displayValue}
    </motion.h3>
  );
}

export default function IntroStats() {
  return (
    <section className="w-full px-[24px] py-20 md:py-[120px] landing-[76px]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10 md:gap-[48px]">
        {/* Intro Top */}
        <div className="flex flex-col gap-[24px] ">
          {/* Label Pill */}
          <LabelPill text="Who We Are" />

          {/* Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.05, delayChildren: 0.1 }
              }
            }}
            className="max-w-[1150px]"
          >
            <h2 className="text-[44px] leading-[1.08] tracking-[-0.01em] font-serif text-brand-navy-dark md:text-[56px] xl:text-display-2 xl:leading-[1.1]">
              {"Opus Communications began its journey on July 1, 2012, building *brand stories*, *creative assets*, and *marketing communication* that help organizations connect with their audiences."
                .split(" ")
                .map((word, i, arr) => {
                  const hasItalicStyle = word.includes("*");
                  const cleanWord = word.replace(/\*/g, "");
                  return (
                    <span key={i}>
                      <motion.span
                        variants={{
                          hidden: { opacity: 0, y: 30 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.8, ease: "easeOut" },
                          },
                        }}
                        className={`inline-block ${hasItalicStyle ? "italic text-brand-blue" : ""
                          }`}
                      >
                        {cleanWord}
                      </motion.span>
                      {i !== arr.length - 1 && " "}
                    </span>
                  );
                })}
            </h2>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}

          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-[28px] p-[24px] flex flex-col gap-6 shadow-[0_8px_30px_rgba(13,27,42,0.02)] border border-brand-navy-dark/[0.04]"
            >
              <CountUpStat value={stat.value} countTo={stat.countTo} suffix={stat.suffix} />
              <p className="text-[16px]  leading-[1.6] text-text-one font-sans font-normal">
                {stat.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
