"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import AnimatedButton from "./AnimatedButton";

export default function CTA() {
  return (
    <section className="relative w-full pt-10">
      {/* Background Split */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-surface-main" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-brand-navy-muted" />

      <div className="relative max-w-[calc(100%-2rem)] lg:max-w-[calc(100%-4rem)] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-[32px] overflow-hidden group shadow-2xl"
        >
          <img
            src="/images/cta-bg-2.jpg"
            alt="CTA Background"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-brand-navy-dark/40" />

          {/* Glass Card Overlay */}
          <div className="absolute top-100 left-34 -translate-y-1/2 w-[564px] max-w-[480px]">
            <div className="rounded-[12px] bg-white/12 backdrop-blur-[16px] will-change-transform opacity-100 transform-none border border-white/10 p-[24px] flex flex-col gap-6 ">
              <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-serif font-normal leading-[1.05] text-white tracking-[-0.01em]">
                Ready to <span className="italic">Transform</span><br />
                Your Business?
              </h2>

              <p className="text-[15px] leading-relaxed text-white/80 font-medium">
                Schedule a free consultation and discover how Stratwell Consulting can streamline your operations, optimize performance, and deliver measurable results.
              </p>

              <AnimatedButton text="Get Started Today"/>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
