"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "92%",
    description: "Of clients report measurable performance improvements within year.",
  },
  {
    value: "$50M",
    description: "In revenue growth generated across client portfolios in the last 3 years.",
  },
  {
    value: "100+",
    description: "Businesses advised across industries from tech startups to established enterprises.",
  },
  {
    value: "15+",
    description: "Years of combined expertise guiding business strategy and execution.",
  },
];

export default function IntroStats() {
  return (
    <section className="w-full px-6 lg:px-12 pt-20 lg:pt-28">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12 lg:gap-16 pb-20 lg:pb-28 border-b border-brand-navy-dark/10">
        {/* Intro Top */}
        <div className="flex flex-col gap-8 lg:gap-10">
          {/* Label Pill */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-brand-navy-dark/15">
              <div className="w-[8px] h-[8px] rounded-full bg-brand-blue"></div>
              <span className="text-[12px] font-medium tracking-wide text-brand-navy-dark uppercase">
                Who We Are
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="max-w-[1150px]"
          >
            <h2 className="text-[40px] md:text-[56px] lg:text-[72px] leading-[1.1] tracking-[-0.01em] font-serif text-brand-navy-dark">
              Stratwell Consulting is a <span className="italic text-brand-blue">results-driven</span> business consultancy <span className="italic text-brand-blue">helping</span> leaders <span className="italic text-brand-blue">navigate</span> complexity, <span className="italic text-brand-blue">refine</span> strategy, and <span className="italic text-brand-blue">achieve</span> sustainable growth.
            </h2>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {stats.map((stat, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: "easeOut" }}
              key={index}
              className="bg-white rounded-[24px] p-8 md:p-8 flex flex-col gap-6 shadow-sm"
            >
              <h3 className="text-[56px] md:text-[64px] font-serif font-normal leading-[1] text-brand-navy-dark tracking-[-0.02em]">
                {stat.value}
              </h3>
              <p className="text-[16px] leading-relaxed text-brand-navy-dark/80 font-normal pr-4">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
