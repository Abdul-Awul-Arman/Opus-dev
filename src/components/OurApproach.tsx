"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LabelPill from "./LabelPill";

const approaches = [
  {
    id: "01",
    title: "Plan",
    description: "We study the brand, market, audience, and ambition so every concept starts with a clear direction.",
    icon: "/images/approach-icons/understand.svg",
  },
  {
    id: "02",
    title: "Create",
    description: "Our creative team turns insights into design, copy, campaigns, content, and communication assets.",
    icon: "/images/approach-icons/strategize.svg",
  },
  {
    id: "03",
    title: "Deliver",
    description: "We prepare the work for real audience impact, from rollout materials to events, exhibitions, and production.",
    icon: "/images/approach-icons/implement.svg",
  },
  {
    id: "04",
    title: "Measure / Support",
    description: "We review the outcome, support the brand after launch, and keep communication moving forward.",
    icon: "/images/approach-icons/measure.svg",
  },
];

function ApproachCard({
  item,
  index,
}: {
  item: (typeof approaches)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const width = useTransform(scrollYProgress, [0, 0.85, 1], ["86%", "98%", "100%"]);

  return (
    <div
      ref={ref}
      style={{ zIndex: index + 1 }}
      className="relative mb-5 flex w-full justify-center last:mb-0 lg:sticky lg:top-4 lg:mb-6"
    >
      <motion.div
        style={{ width, transformOrigin: "center top" }}
        className="w-full rounded-[28px] border border-white/40 bg-white p-6 will-change-transform md:p-8 lg:rounded-[32px]"
      >
        <div className="flex justify-between items-start mb-6">
          <div className="h-14 w-14 flex items-center justify-center text-brand-blue">
            <img
              src={item.icon}
              alt=""
              aria-hidden="true"
              className="h-14 w-14"
            />
          </div>
          <span className="text-[40px] md:text-[48px] font-serif text-brand-navy-dark opacity-80 leading-none">
            {item.id}
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-[28px] md:text-[32px] font-serif text-brand-navy-dark">
            {item.title}
          </h3>
          <p className="text-[16px] leading-[1.6] text-text-one font-sans max-w-[400px]">
            {item.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function OurApproach() {
  return (
    <section className="w-full px-6 lg:px-12 py-20 lg:py-28 relative">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-4 lg:gap-5">
        {/* Header */}
        <div className="flex flex-col items-start gap-6 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <LabelPill text="OUR APPROACH" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-[42px] md:text-[56px] lg:text-[64px] w-full leading-[1.04] tracking-[-0.01em] font-serif text-brand-navy-dark"
          >
            Opus turns <span className="italic text-brand-blue">insight</span> into creative communication that works in the <span className="italic text-brand-navy-muted">audience&apos;s perspective</span> and brings brands to life.
          </motion.h2>
        </div>

        {/* Content Split */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Left: Sticky Image */}
          <div className="w-full lg:w-[45%] lg:sticky lg:top-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[3/4] rounded-[32px] overflow-hidden"
            >
              <img
                src="/images/approach-img.jpg"
                alt="Opus creative approach"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right: Cards */}
          <div className="flex w-full flex-col pb-[10vh] lg:w-[55%]">
            {approaches.map((item, index) => (
              <ApproachCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
