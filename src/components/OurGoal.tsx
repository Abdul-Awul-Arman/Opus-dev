"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import LabelPill from "./LabelPill";

export default function OurGoal() {
  return (
    <section className="w-full px-6 lg:px-12 py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-6">

        {/* Left Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full lg:w-1/2 bg-white rounded-[32px] p-[24px] flex flex-col justify-center gap-6"
        >
          <LabelPill text="Our Goal" />

          <h2 className="text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.05] tracking-[-0.01em] font-serif text-brand-navy-dark mb-6">
            <span className="italic">Transforming</span> Strategy<br />
            into <span className="italic">Results</span>
          </h2>

          <p className="text-[16px] leading-[1.7] text-text-one font-medium mb-10 max-w-[480px]">
            Our team brings together expertise in strategy, operations, finance, and digital transformation, with one shared mission: to simplify complexity and deliver results that last. Whether it's entering new markets, streamlining processes, or guiding organizational change, we focus on creating solutions that are practical, actionable, and aligned with your goals.
          </p>

          <button className="group flex items-center gap-3 bg-[#121b60] text-white text-[16px] font-bold rounded-full h-[56px] pl-6 pr-2 hover:bg-black transition-colors duration-300 w-max">
            Meet Our Team
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={20} className="text-[#121b60]" />
            </div>
          </button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="relative w-full lg:w-1/2 min-h-[400px] lg:min-h-full rounded-[32px] overflow-hidden shadow-sm"
        >
          <img
            src="/images/goal-img.jpg"
            alt="Our Goal"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}
