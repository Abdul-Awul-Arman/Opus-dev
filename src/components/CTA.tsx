"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative w-full pt-10">
      {/* Background Split */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-surface-main" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-brand-navy-dark" />

      <div className="relative max-w-[calc(100%-2rem)] lg:max-w-[calc(100%-4rem)] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-[32px] overflow-hidden group shadow-2xl"
        >
          {/* Background Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#c9d4e5] to-[#8fa7c9] transition-transform duration-1000 group-hover:scale-105" />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-brand-navy-dark/40" />

          {/* Glass Card Overlay */}
          <div className="absolute top-1/2 left-6 md:left-12 lg:left-24 -translate-y-1/2 w-[calc(100%-3rem)] max-w-[480px]">
            <div className="rounded-[24px] bg-[#2a2c33]/70 backdrop-blur-md border border-white/10 p-8 md:p-10 flex flex-col gap-6 shadow-2xl">
              <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-serif font-normal leading-[1.05] text-white tracking-[-0.01em]">
                Ready to <span className="italic">Transform</span><br />
                Your Business?
              </h2>
              
              <p className="text-[15px] leading-relaxed text-white/80 font-medium">
                Schedule a free consultation and discover how Stratwell Consulting can streamline your operations, optimize performance, and deliver measurable results.
              </p>
              
              <button className="flex items-center gap-4 bg-white text-[16px] rounded-full text-brand-navy-dark font-bold hover:bg-[#eaeff5] transition-all transform hover:scale-105 h-[56px] pl-6 pr-2 w-max group/btn mt-2">
                Get Started Today
                <div className="w-10 h-10 bg-brand-navy-dark rounded-full flex items-center justify-center text-white transition-transform group-hover/btn:rotate-45 shadow-sm">
                  <ArrowUpRight size={20} strokeWidth={2.5} />
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
