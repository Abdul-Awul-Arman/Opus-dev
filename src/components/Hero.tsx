"use client";

import Image from "next/image";
import AnimatedButton from "./AnimatedButton";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";




const Hero = () => {
  return (
    <section className="p-4 md:p-4">
      {/* Outer Rounded Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative w-full h-[100vh] rounded-[1.5rem] overflow-hidden bg-brand-navy-dark  dark-contrast flex flex-col"
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-[center_10%]"
        >
          <source src="https://framerusercontent.com/assets/wgHWlu6sTglBDJ9jxgyB4tfvEY.mp4" type="video/mp4" />
        </video>

        {/* Dark Navy Gradient Overlay */}
        <div className="absolute inset-0 bg-[#080e2980]" />

        {/* Navbar */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="absolute top-6 left-1/2 -translate-x-1/2 w-[1152px]  h-[80px] z-50 flex items-center justify-between p-[16px] rounded-[16px] border border-white/15 bg-white/12  backdrop-blur-[16px] "
        >
          <div className="flex items-center gap-4">
            <div className="relative w-26 h-24 flex items-center justify-center">
              <Image
                src="/logo.svg"
                alt="Opus Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

          </div>

          <div className="flex items-center gap-[40px] text-white  font-medium tracking-wide">
            {["Home", "Services", "About Us", "Case Studies", "FAQs"].map((link) => (
              <a
                key={link}
                href="#"
                className="relative group text-white tracking-[-1%] transition-opacity text-[16px]"
              >
                {link}
                <span className="absolute -bottom-1.5 left-0 w-full h-[1px] bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
            ))}
          </div>

          <button className="bg-[#EAEFF5] text-brand-navy-dark px-6 py-3 rounded-full text-base font-bold hover:bg-[#ebf1f8] transition-all transform hover:scale-105 shadow-xl">
            Contact Us
          </button>
        </motion.nav>

        {/* Hero Content */}
        <div className="relative z-10 mt-auto pb-30 w-full px-40 flex flex-row md:items-end justify-between">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.8,
                }
              }
            }}
            className="max-w-3xl"
          >
            <h1 className="text-[80px] leading-[100px] tracking-[-1%]">
              <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } } }}>
                Strategy That <br />
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } } }}>
                Powers <span className="font-serif italic">Your Next</span> <br />
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } } }}>
                <span className="font-serif italic">Level</span> of <span className="font-serif">Growth</span>.
              </motion.div>
            </h1>
          </motion.div>

          <div className="w-[440px] flex flex-col gap-8 pb-4">
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.25, ease: "easeOut" }}
              className="text-white text-[18px] "
            >
              We help businesses unlock opportunities, scale faster, and achieve measurable results through data-driven strategies.
            </motion.p>

            <AnimatedButton />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
