"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function OurGoal() {
  return (
    <section className="w-full px-6 lg:px-12 py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-[32px] p-8 md:p-12 lg:p-14 flex flex-col justify-center shadow-sm"
        >
          <div className="inline-flex self-start items-center gap-2.5 px-4 py-1.5 rounded-full border border-brand-navy-dark/15 mb-10">
            <div className="w-[8px] h-[8px] rounded-full bg-brand-blue"></div>
            <span className="text-[12px] font-medium tracking-wide text-brand-navy-dark uppercase">
              Our Goal
            </span>
          </div>

          <h2 className="text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.05] tracking-[-0.01em] font-serif text-brand-navy-dark mb-6">
            <span className="italic">Transforming</span> Strategy<br />
            into <span className="italic">Results</span>
          </h2>

          <p className="text-[16px] leading-[1.7] text-brand-navy-dark/75 font-medium mb-10">
            Our team brings together expertise in strategy, operations, finance, and digital transformation, with one shared mission: to simplify complexity and deliver results that last. Whether it's entering new markets, streamlining processes, or guiding organizational change, we focus on creating solutions that are practical, actionable, and aligned with your goals.
          </p>

          <button className="flex items-center gap-4 bg-brand-navy-dark text-[16px] rounded-full text-white font-bold hover:bg-[#1f2b85] transition-all transform hover:scale-105 h-[56px] pl-6 pr-2 w-max group/btn">
            Meet Our Team
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-navy-dark transition-transform group-hover/btn:rotate-45 shadow-sm">
              <ArrowUpRight size={20} strokeWidth={2.5} />
            </div>
          </button>
        </motion.div>

        {/* Right Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="relative w-full min-h-[400px] lg:min-h-full rounded-[32px] overflow-hidden shadow-sm group bg-gradient-to-br from-[#c9d4e5] to-[#a3b7d6]"
        >
        </motion.div>

      </div>
    </section>
  );
}
