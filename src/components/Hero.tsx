"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const container = useRef<HTMLDivElement>(null);
  const heroContent = useRef<HTMLDivElement>(null);
  const navbar = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(container.current, {
      opacity: 0,
      scale: 0.98,
      duration: 1.2,
      ease: "power3.out",
    })
      .from(navbar.current, {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.8")
      .from(heroContent.current?.children || [], {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      }, "-=0.4");
  }, { scope: container });

  return (
    <section className="p-4 md:p-4">
      {/* Outer Rounded Container */}
      <div
        ref={container}
        className="relative w-full h-[100vh] rounded-[1.5rem] overflow-hidden bg-brand-navy-dark  dark-contrast"
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0  object-cover opacity-80"
        >
          <source src="https://framerusercontent.com/assets/wgHWlu6sTglBDJ9jxgyB4tfvEY.mp4" type="video/mp4" />
        </video>

        {/* Dark Navy Gradient Overlay */}
        <div className="absolute inset-0 bg-brand-navy-dark/30" />

        {/* Navbar */}
        <nav
          ref={navbar}
          className="absolute top-6 left-1/2 -translate-x-1/2 w-[78%] max-w-7xl z-50 flex items-center justify-between px-8 py-4 rounded-[1.25rem] border border-white/15 bg-white/12 backdrop-blur-xl shadow-2xl"
        >
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 bg-white flex items-center justify-center rounded-xl shadow-lg">
              <span className="text-brand-navy-dark font-black text-2xl">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl leading-none tracking-tight">Stratwell</span>
              <span className="text-white/70 text-[9px] font-bold uppercase tracking-[0.3em] mt-1">Consulting</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-12 text-white text-[16px] font-medium tracking-wide">
            {["Home", "Services", "About Us", "Case Studies", "FAQs"].map((link) => (
              <a 
                key={link} 
                href="#" 
                className="relative group transition-opacity hover:opacity-100 opacity-80"
              >
                {link}
                <span className="absolute -bottom-1.5 left-0 w-full h-[1px] bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
            ))}
          </div>

          <button className="bg-white text-brand-navy-dark px-6 py-3 rounded-full text-base font-bold hover:bg-[#ebf1f8] transition-all transform hover:scale-105 shadow-xl">
            Contact Us
          </button>
        </nav>

        {/* Hero Content */}
        <div
          ref={heroContent}
          className="absolute bottom-16 left-0 w-full px-8 md:px-16 flex flex-col md:flex-row md:items-end justify-between gap-12"
        >
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-[84px] leading-[0.95] tracking-tight">
              Strategy That <br />
              Powers <span className="font-serif italic">Your Next</span> <br />
              Level of Growth.
            </h1>
          </div>

          <div className="max-w-xs space-y-8">
            <p className="text-white/80 text-lg leading-relaxed">
              We help businesses unlock opportunities, scale faster, and achieve measurable results through data-driven strategies.
            </p>

            <button className="group flex items-center gap-3 bg-[#ebf1f8] px-8 py-4 rounded-full text-brand-navy-dark font-bold hover:bg-white transition-all transform hover:scale-105">
              Book a Consultation
              <div className="w-10 h-10 bg-brand-navy-dark rounded-full flex items-center justify-center text-white transition-transform group-hover:rotate-45 ml-2">
                <ArrowUpRight size={20} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
