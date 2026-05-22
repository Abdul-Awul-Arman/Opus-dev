"use client";

import { motion } from "framer-motion";
import LabelPill from "./LabelPill";

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
    <section className="w-full py-[120px] px-[24px] landing-[76px]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-[48px]  ">
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
            <h2 className="leading-[1.1] tracking-[-0.01em] font-serif text-brand-navy-dark">
              {"Stratwell Consulting is a *results-driven* business consultancy *helping* leaders *navigate* complexity, *refine* strategy, and *achieve* sustainable growth."
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
              <h3 className="text-[64px] font-serif font-normal  text-brand-navy-dark ">
                {stat.value}
              </h3>
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
