"use client";

import { motion } from "framer-motion";
import { Command, Eclipse, Hexagon, Layers, Cpu, Cloud, GitMerge, Fingerprint } from "lucide-react";

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
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-brand-navy-dark/15">
              <div className="w-[8px] h-[8px] rounded-full bg-brand-blue"></div>
              <span className="text-[12px] font-medium tracking-wide text-brand-navy-dark uppercase">
                We Work With
              </span>
            </div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-[44px] md:text-[56px] lg:text-[72px] leading-[1.1] tracking-[-0.01em] font-serif text-brand-navy-dark"
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
                className="bg-white rounded-[24px] h-[100px] md:h-[120px] flex items-center justify-center gap-3 shadow-sm text-brand-navy-dark hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <Icon size={28} strokeWidth={2.5} />
                <span className="font-bold text-[18px] md:text-[22px] tracking-tight">{logo.text}</span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
