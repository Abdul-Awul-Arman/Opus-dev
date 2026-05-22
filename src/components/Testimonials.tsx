"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import LabelPill from "./LabelPill";

const testimonials = [
  {
    quote: "What impressed us most was how their strategies turned into results across the business.",
    name: "John Linwood",
    role: "VP, Manufacturing Firm",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    quote: "Their expertise gave us the clarity to make smarter decisions and accelerate growth in record time.",
    name: "Vika Nightshade",
    role: "Founder, Retail Group",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    quote: "Stratwell gave us clarity when we needed it most—and results that exceeded expectations.",
    name: "Mike Scott",
    role: "CEO, Tech",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    quote: "Working with them gave us back valuable time, reduced expenses, and simplified everything.",
    name: "Anna White",
    role: "COO, Retail Group",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    quote: "The strategic insights provided a completely new perspective on our market positioning.",
    name: "David Chen",
    role: "Director, Global Logistics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export default function Testimonials() {
  return (
    <section className="w-full py-20 lg:py-28 overflow-hidden">
      
      {/* Header Container */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col items-center text-center gap-6 mb-12 lg:mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
         <LabelPill text="Testimonials" />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-[48px] md:text-[64px]  leading-[1.1] tracking-[-0.01em] font-serif text-brand-navy-dark"
        >
          What <span className="italic">Our Clients Say</span>
        </motion.h2>
      </div>

      {/* Carousel Container */}
      <div className="w-full relative mt-8">
        <style>{`
          @keyframes customMarquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-custom-marquee {
            animation: customMarquee 40s linear infinite;
          }
          .animate-custom-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="flex w-max animate-custom-marquee gap-6 px-6">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="relative shrink-0 w-[320px] md:w-[360px] lg:w-[400px] h-[500px] md:h-[540px] rounded-[28px] overflow-hidden group shadow-sm"
            >
              {/* Background Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#bccae0] to-[#8fa7c9] transition-transform duration-700 group-hover:scale-105" />
              
              {/* Dark Gradient Overlay for better contrast globally */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />
              
              {/* Content Glass Box */}
              <div className="absolute bottom-4 left-4 right-4 z-10 p-6 rounded-[20px] bg-[#2a2c33]/70 backdrop-blur-md border border-white/10 flex flex-col gap-6 shadow-2xl transition-all duration-300">
                <p className="text-white text-[15px] leading-[1.6] font-medium">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex justify-between items-end gap-4 mt-2">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[26px] font-serif text-white leading-none">
                      {testimonial.name}
                    </span>
                    <span className="text-[13px] text-white/70 font-medium">
                      {testimonial.role}
                    </span>
                  </div>
                  
                  <button className="w-[46px] h-[46px] rounded-full bg-white flex items-center justify-center transition-transform hover:scale-105 shrink-0 shadow-lg">
                    <Play className="text-brand-navy-dark w-5 h-5 ml-0.5" fill="currentColor" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
