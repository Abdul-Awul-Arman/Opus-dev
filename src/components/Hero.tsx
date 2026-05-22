"use client";

import AnimatedButton from "./AnimatedButton";
import SiteHeader from "./SiteHeader";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="p-0 xl:p-4">
      {/* Outer Rounded Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative w-full h-[645px] md:h-[590px] lg:h-[720px] xl:h-[100vh] rounded-none xl:rounded-[1.5rem] overflow-hidden bg-brand-navy-dark dark-contrast flex flex-col"
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

        <SiteHeader />

        {/* Hero Content */}
        <div className="relative z-10 flex h-full w-full flex-col justify-end gap-7 px-6 pb-12 pt-[96px] md:pb-24 lg:items-center lg:text-center xl:mt-auto xl:h-auto xl:flex-row xl:items-end xl:justify-between xl:gap-0 xl:px-40 xl:pb-30 xl:pt-0 xl:text-left">
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
            <h1 className="text-[44px] leading-[1.08] tracking-[-0.01em] sm:text-[52px] md:text-[52px] lg:text-[72px] xl:text-[80px] xl:leading-[100px]">
              <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } } }}>
                Strategy That <br className="hidden xl:block" />
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } } }}>
                Powers <span className="font-serif italic">Your Next</span> <br className="hidden xl:block" />
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } } }}>
                <span className="font-serif italic">Level</span> of <span className="font-serif">Growth</span>.
              </motion.div>
            </h1>
          </motion.div>

          <div className="flex w-full max-w-[520px] flex-col gap-7 pb-0 lg:items-center xl:w-[440px] xl:items-start xl:gap-8 xl:pb-4">
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.25, ease: "easeOut" }}
              className="text-white text-[18px] leading-[1.45]"
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
