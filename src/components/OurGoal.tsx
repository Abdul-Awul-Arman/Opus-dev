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
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/2 bg-white rounded-[28px] lg:rounded-[32px] p-[24px] flex flex-col justify-center gap-6"
        >
          <LabelPill text="Our Mission" />

          <h2 className="text-[42px] sm:text-[56px] lg:text-[64px] leading-[1.05] tracking-[-0.01em] font-serif text-brand-navy-dark mb-6">
            Pioneering <span className="italic">Advertising</span><br />
            &amp; Visual <span className="italic">Communication</span>
          </h2>

          <p className="text-[16px] leading-[1.7] text-text-one font-medium mb-10 max-w-[480px]">
            Our commitment to clients is deeply ingrained in our culture. We tailor every branding, campaign, event, exhibition, and production assignment to the unique needs of the brand, with a result-oriented mindset and a long-term view of communication.
          </p>

          <button className="group flex h-[56px] w-full max-w-[240px] items-center justify-center gap-3 rounded-full bg-[#121b60] pl-6 pr-2 text-[16px] font-bold text-white transition-colors duration-300 hover:bg-black md:w-max md:max-w-none">
            Meet Opus
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={20} className="text-[#121b60]" />
            </div>
          </button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full lg:w-1/2 min-h-[360px] lg:min-h-full rounded-[28px] lg:rounded-[32px] overflow-hidden shadow-sm"
        >
          <img
            src="/images/goal-img.jpg"
            alt="Opus Communications mission"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}
