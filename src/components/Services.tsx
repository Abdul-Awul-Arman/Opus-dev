"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Settings, Network, Calculator } from "lucide-react";

const services = [
  {
    title: "Business Strategy",
    description: "Set the right direction with market insights and actionable roadmaps.",
    icon: TrendingUp,
  },
  {
    title: "Operations Optimization",
    description: "Streamline workflows, cut costs, and boost efficiency.",
    icon: Settings,
  },
  {
    title: "Digital Transformation",
    description: "Set the right direction with market insights and actionable roadmaps.",
    icon: Network,
  },
  {
    title: "Financial Advisory",
    description: "Improve performance, reduce risk, and unlock growth capital.",
    icon: Calculator,
  },
];

export default function Services() {
  return (
    <section className="w-full px-6 lg:px-12 py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12 lg:gap-16">
        
        {/* Header */}
        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-brand-navy-dark/15">
              <div className="w-[8px] h-[8px] rounded-full bg-brand-blue"></div>
              <span className="text-[12px] font-medium tracking-wide text-brand-navy-dark uppercase">
                Our Services
              </span>
            </div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-[48px] md:text-[64px] lg:text-[72px] leading-[1.1] tracking-[-0.01em] font-serif text-brand-navy-dark"
          >
            Our <span className="italic">Expertise</span>
          </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Side - 4 Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  key={index}
                  className="bg-white rounded-[24px] p-8 md:p-10 flex flex-col gap-8 shadow-sm"
                >
                  <div className="text-brand-blue">
                    <Icon strokeWidth={1.25} size={48} />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-[28px] md:text-[32px] font-serif font-normal leading-tight text-brand-navy-dark">
                      {service.title}
                    </h3>
                    <p className="text-[16px] leading-relaxed text-brand-navy-dark/70 font-medium pr-4">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side - Tall Image Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="lg:col-span-1 relative rounded-[24px] overflow-hidden min-h-[500px] flex flex-col justify-end group shadow-sm"
          >
            {/* Background Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#c9d4e5] to-[#a3b7d6] transition-transform duration-700 group-hover:scale-105" />
            
            {/* Overlay Gradient (just to ensure readability) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            
            {/* Bottom Glass Card */}
            <div className="relative z-10 p-4">
               <div className="w-full rounded-[20px] bg-[#3a3b40]/60 backdrop-blur-md border border-white/10 p-8 flex flex-col gap-8 shadow-2xl">
                 <h3 className="text-[36px] font-serif font-normal leading-[1.05] text-white">
                   Start Your <span className="italic">Growth</span> Journey
                 </h3>
                 
                 <button className="flex items-center gap-4 bg-surface-main text-[16px] rounded-full text-brand-navy-dark font-bold hover:bg-white transition-all transform hover:scale-105 h-[56px] pl-6 pr-2 w-max group/btn">
                   Get in Touch
                   <div className="w-10 h-10 bg-brand-navy-dark rounded-full flex items-center justify-center text-white transition-transform group-hover/btn:rotate-45">
                     <ArrowUpRight size={20} />
                   </div>
                 </button>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
