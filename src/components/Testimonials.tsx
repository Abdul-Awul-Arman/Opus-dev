"use client";

import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import LabelPill from "./LabelPill";

const testimonials = [
  {
    quote: "Opus worked like an extension of our team, turning the brief into clear creative output and dependable delivery.",
    name: "Brand Partner",
    role: "Corporate Client",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    quote: "The team understood the brand quickly and translated it into materials that felt consistent, polished, and ready for market.",
    name: "Marketing Partner",
    role: "Branding Client",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    quote: "From fabrication planning to on-site coordination, Opus kept the exhibition experience organized and on brand.",
    name: "Exhibition Client",
    role: "Stall Fabrication",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    quote: "Their production support helped turn raw footage into a clean, engaging story for our audience.",
    name: "Production Client",
    role: "OVC & Motion Graphics",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    quote: "Opus brought practical creative thinking, timely execution, and a strong sense of brand detail to the project.",
    name: "Communication Partner",
    role: "Integrated Campaign",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

function MobileTestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  const updateActiveIndex = useCallback(() => {
    const visibleCards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

    if (visibleCards.length === 0) {
      return;
    }

    const viewportCenter = window.innerWidth / 2;
    const closestIndex = visibleCards.reduce(
      (closest, card, index) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        return distance < closest.distance ? { index, distance } : closest;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY }
    ).index;

    setActiveIndex(closestIndex);
  }, []);

  const scrollToCard = (index: number) => {
    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
    setActiveIndex(index);
  };

  return (
    <div className="md:hidden">
      <div
        onScroll={updateActiveIndex}
        className="mobile-testimonials-scroll flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-[max(24px,calc((100vw-328px)/2))]"
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.name}
            ref={(node) => {
              cardRefs.current[index] = node;
            }}
            className="relative h-[420px] w-[calc(100vw-48px)] max-w-[328px] shrink-0 snap-center overflow-hidden rounded-[28px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#9ba9bd] via-[#6f7e94] to-[#2b3142]" />
            <div className="absolute inset-x-0 top-0 h-1/2 bg-white/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-80" />

            <div className="absolute bottom-5 left-5 right-5 z-10 flex flex-col gap-5 rounded-[20px] border border-white/10 bg-[#2a2c33]/70 p-5 shadow-2xl backdrop-blur-md">
              <p className="text-[21px] font-medium leading-[1.35] text-white">
                &quot;{testimonial.quote}&quot;
              </p>

              <div className="mt-1 flex items-end justify-between gap-4">
                <div className="flex min-w-0 flex-col gap-1.5">
                  <span className="font-serif text-[26px] leading-none text-white">
                    {testimonial.name}
                  </span>
                  <span className="text-[16px] font-semibold text-white/85">
                    {testimonial.role}
                  </span>
                </div>

                <button className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full bg-white shadow-lg">
                  <Play
                    className="ml-0.5 h-8 w-8 text-brand-navy-dark"
                    fill="currentColor"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-7 flex items-center justify-center gap-3">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.name}
            type="button"
            aria-label={`Show testimonial ${index + 1}`}
            aria-current={activeIndex === index}
            onClick={() => scrollToCard(index)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              activeIndex === index ? "bg-brand-blue" : "bg-brand-blue-light/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

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
          className="text-[42px] md:text-[64px] leading-[1.1] tracking-[-0.01em] font-serif text-brand-navy-dark"
        >
          What <span className="italic">Partners Say</span>
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
          .mobile-testimonials-scroll {
            scrollbar-width: none;
          }
          .mobile-testimonials-scroll::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <MobileTestimonialsCarousel />
        <div className="hidden w-max animate-custom-marquee gap-6 px-6 md:flex">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="relative shrink-0 w-[312px] sm:w-[320px] md:w-[360px] lg:w-[400px] h-[500px] md:h-[540px] rounded-[28px] overflow-hidden group shadow-sm"
            >
              {/* Background Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#bccae0] to-[#8fa7c9] transition-transform duration-700 group-hover:scale-105" />
              
              {/* Dark Gradient Overlay for better contrast globally */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />
              
              {/* Content Glass Box */}
              <div className="absolute bottom-4 left-4 right-4 z-10 p-5 md:p-6 rounded-[20px] bg-[#2a2c33]/70 backdrop-blur-md border border-white/10 flex flex-col gap-6 shadow-2xl transition-all duration-300">
                <p className="text-white text-[15px] leading-[1.6] font-medium">
                  &quot;{testimonial.quote}&quot;
                </p>
                
                <div className="flex justify-between items-end gap-4 mt-2">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[24px] md:text-[26px] font-serif text-white leading-none">
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
