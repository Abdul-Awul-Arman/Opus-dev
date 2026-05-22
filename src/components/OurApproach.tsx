"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Lightbulb, BarChart3, Rocket, LineChart } from "lucide-react";
import LabelPill from "./LabelPill";

const approaches = [
  {
    id: "01",
    title: "Understand",
    description: "We immerse ourselves in your business to uncover challenges and opportunities.",
    icon: Lightbulb,
  },
  {
    id: "02",
    title: "Strategize",
    description: "We design tailored strategies that align with your goals and available resources.",
    icon: BarChart3,
  },
  {
    id: "03",
    title: "Implement",
    description: "We guide execution to ensure solutions are practical, effective, and sustainable.",
    icon: Rocket,
  },
  {
    id: "04",
    title: "Measure",
    description: "We monitor performance, refine processes, and deliver clear, tangible results.",
    icon: LineChart,
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

  // Grow width from 85% to 100% as it scrolls in
  const width = useTransform(scrollYProgress, [0, 1], ["85%", "100%"]);

  return (
    <div
      ref={ref}
      className="sticky mb-8 last:mb-0 w-full flex justify-center"
      style={{ top: `${48 + index * 40}px` }}
    >
      <motion.div
        style={{ width }}
        className="bg-white rounded-[32px] p-8 md:p-10 border border-white/40"
      >
        <div className="flex justify-between items-start mb-6">
          <div className="w-12 h-12 flex items-center justify-center text-brand-blue">
            <item.icon size={40} strokeWidth={1.5} />
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
      <div className="max-w-[1200px] mx-auto flex flex-col gap-16 lg:gap-20">
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
            className="text-[64px] w-full leading-[1.15] tracking-[-0.01em] font-serif text-brand-navy-dark"
          >
            At Stratwell Consulting, we believe that <span className="italic text-brand-blue">strategy</span> should do more than <span className="italic text-brand-navy-muted">sit on paper</span> — it should drive <span className="italic text-brand-blue">measurable</span> change.
          </motion.h2>
        </div>

        {/* Content Split */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Left: Sticky Image */}
          <div className="w-full lg:w-[45%] sticky top-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[3/4] rounded-[32px] overflow-hidden shadow-xl"
            >
              <img
                src="/images/approach-img.jpg"
                alt="Our Approach"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right: Stacking Cards */}
          <div className="w-full lg:w-[55%] flex flex-col pb-[10vh]">
            {approaches.map((item, index) => (
              <ApproachCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
