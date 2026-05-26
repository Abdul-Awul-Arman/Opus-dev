"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import LabelPill from "./LabelPill";
import AnimatedButton from "./AnimatedButton";

const services = [
  {
    title: "Brand Strategy & Consultancy",
    description: "Shaping brand direction, identity systems, and communication plans from the ground up.",
    icon: "/services/Business Strategy.svg",
  },
  {
    title: "Creative & Advertising Solutions",
    description: "Developing campaign ideas, visual communication, marketing materials, and brand stories.",
    icon: "/services/Operations Optimization.svg",
  },
  {
    title: "Digital & Social Media Marketing",
    description: "Planning and producing digital communication that keeps brands active, visible, and relevant.",
    icon: "/services/Digital Transformation.svg",
  },
  {
    title: "Web, Mobile & Desktop App Development",
    description: "Building practical websites, mobile apps, desktop tools, dashboards, and software systems for business workflows.",
    icon: "/services/Digital Transformation.svg",
  },
  {
    title: "Activation, BTL & Event Management",
    description: "Bringing brands alive through activations, events, exhibitions, and promotional production.",
    icon: "/services/Financial Advisory.svg",
  }
];

export default function Services() {
  return (
    <section id="services" className="w-full px-6 py-20 lg:px-12 lg:py-28">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12 lg:gap-16">

        {/* Header */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <LabelPill text="Our Services" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-[44px] leading-[1.1] tracking-[-0.01em] font-serif text-brand-navy-dark md:text-[56px] lg:text-[64px]"
          >
            What We <span className="italic">Create</span>
          </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left Side - 4 Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  key={index}
                  className="group bg-white rounded-[24px] p-[24px] flex flex-col gap-8 cursor-pointer transition-transform duration-300 hover:scale-[0.97]"
                >
                  <div className="flex justify-between items-start">
                    <div className="text-brand-blue">
                      <img src={service.icon} alt={service.title} className="w-14 h-14" />
                    </div>
                    <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white opacity-0 scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-[28px] md:text-[32px] font-serif font-normal leading-tight text-brand-navy-dark">
                      {service.title}
                    </h3>
                    <p className="text-[16px] leading-[1.6] text-text-one font-sans font-normal pr-4">
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
            className="lg:col-span-1 relative rounded-[24px] overflow-hidden min-h-[430px] md:min-h-[500px] flex flex-col justify-end group shadow-sm"
          >
            {/* Background Image */}
            <img
              src="/images/services-bg.avif"
              alt="Creative agency project showcase"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay Gradient (just to ensure readability) */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#080e29]/0 to-[#080e29]/70" />

            {/* Bottom Glass Card */}
            <div className="relative z-10 p-4">

              <div className="w-full rounded-[20px] bg-[#5c616f]/80 backdrop-blur-[16px] border border-white/10 p-[16px] flex flex-col gap-8 shadow-2xl">
                <h3 className="text-[32px] font-serif font-normal leading-[1.05] text-white">
                  Start Your <span className="italic">Brand</span> Journey
                </h3>

                <AnimatedButton text="Get in Touch" className="h-[56px] max-w-[189px] p-[8px] pl-[20px]" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
