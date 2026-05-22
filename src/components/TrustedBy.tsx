"use client";

import { motion } from "framer-motion";
import { Command, Eclipse, Hexagon, Layers, Cpu, Cloud, GitMerge, Fingerprint } from "lucide-react";
import LabelPill from "./LabelPill";

const logos = [
  { icon: Command, text: "Logoipsum" },
  { icon: Eclipse, text: "logoipsum" },
  { icon: Hexagon, text: "LOGOIPSUM" },
  { icon: Layers, text: "logoipsum" },
  { icon: Cpu, text: "LOGOIPSUM" },
  { icon: Cloud, text: "LOGOIPSUM" },
  { icon: GitMerge, text: "logoipsum" },
  { icon: Fingerprint, text: "Logoipsum" },
];

export default function TrustedBy() {
  return (
    <section className="w-full px-6 lg:px-12 py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12 lg:gap-16">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <LabelPill text="We Work With" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-[44px] md:text-[64px] leading-[1.1] tracking-[-0.01em] font-serif text-brand-navy-dark"
          >
            Trusted By
          </motion.h2>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full">
          {logos.map((logo, index) => {
            const Icon = logo.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                key={index}
                className="bg-white rounded-[24px] h-[100px] md:h-[120px] flex items-center justify-center gap-2 p-3 text-brand-navy-dark md:gap-3"
              >
                <Icon size={28} strokeWidth={2.5} className="shrink-0" />
                <span className="min-w-0 break-words text-center font-bold text-[14px] tracking-tight sm:text-[18px] md:text-[22px]">{logo.text}</span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
