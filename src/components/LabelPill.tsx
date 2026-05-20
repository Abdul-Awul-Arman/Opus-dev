"use client";

import { motion } from "framer-motion";

interface LabelPillProps {
  text: string;
}

export default function LabelPill({ text }: LabelPillProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="inline-flex justify-center items-center text-[14px] w-[142px] h-[33px] gap-1 px-2 py-2 rounded-full border border-brand-navy-dark/15">
        <div className="w-[12px] h-[12px] rounded-full bg-brand-blue"></div>
        <span className="font-medium tracking-wide text-brand-navy-dark uppercase">
          {text}
        </span>
      </div>
    </motion.div>
  );
}
