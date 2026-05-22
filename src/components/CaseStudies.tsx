"use client";

import { type ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import LabelPill from "./LabelPill";
import AnimatedButton from "./AnimatedButton";

const caseStudies = [
  {
    id: 1,
    tags: [
      { label: "Business Strategy", active: true },
      { label: "SaaS Startup", active: false },
    ],
    title: "Helped a SaaS startup grow revenue 65% in 12 months.",
    description:
      "We helped a fast-growing SaaS company refine its go-to-market strategy, resulting in a 65% revenue increase in just 12 months.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
  },
  {
    id: 3,
    tags: [
      { label: "Operations Optimization", active: true },
      { label: "Manufacturing", active: false },
    ],
    title: "Get 20% Cost Savings & Efficiency for Manufacturing company",
    description:
      "Through a detailed operations audit, process redesign, and automation of key workflows, we reduced overhead by 20% while improving on-time delivery rates and overall efficiency.",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&q=80",
  },
  {
    id: 4,
    tags: [
      { label: "Digital Transformation", active: true },
      { label: "Retail", active: false },
    ],
    title: "Led a complete digital transformation for a retail chain.",
    description:
      "Migrated legacy systems and implemented an omnichannel experience that boosted online sales by 120%.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
  },
  {
    id: 5,
    tags: [
      { label: "Financial Advisory", active: true },
      { label: "Fintech", active: false },
    ],
    title: "Guided a fintech through Series B funding of $25M.",
    description:
      "Provided financial modeling, investor deck strategy, and due diligence support resulting in a successful $25M raise.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  },
];

interface CaseStudiesProps {
  label?: string;
  title?: ReactNode;
  description?: string;
  showViewMore?: boolean;
}

// Individual card with scroll-linked scale animation
function CaseStudyCard({
  study,
}: {
  study: (typeof caseStudies)[0];
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  // Width grows from 80% → 100% as card scrolls into top of viewport
  const width = useTransform(scrollYProgress, [0, 1], ["80%", "100%"]);

  return (
    <div
      ref={ref}
      className="relative mb-6 flex justify-center last:mb-0 md:sticky"
      style={{ top: "16px" }}
    >
      <motion.div
        style={{ width }}
        className="relative h-[640px] rounded-[2rem] overflow-hidden shadow-lg md:h-[100vh]"
      >
        {/* Background Image */}
        <img
          src={study.img}
          alt={study.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

        {/* Top Tags */}
        <div className="absolute top-5 left-5 right-5 flex flex-wrap gap-3 z-20 md:top-6 md:left-6 md:right-auto">
          {study.tags.map((tag) => (
            <div
              key={tag.label}
              className={`px-4 py-2 rounded-full text-[11px] md:text-[12px] font-bold tracking-wide uppercase shadow-sm transition-colors duration-300 ${
                tag.active
                  ? "bg-brand-blue text-white"
                  : "bg-white text-brand-navy-dark"
              }`}
            >
              {tag.label}
            </div>
          ))}
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-5 md:p-8 flex flex-col md:flex-row items-stretch md:items-end justify-between gap-5 md:gap-8">
          {/* Glass Card */}
          <div className="w-full md:max-w-[550px] lg:max-w-[600px] rounded-[24px] bg-[#3a3b40]/60 backdrop-blur-[16px] border border-white/10 p-6 md:p-8 flex flex-col gap-5 md:gap-6 shadow-2xl">
            <h3 className="text-[30px] md:text-[40px] font-serif font-normal leading-[1.1] text-white">
              {study.title}
            </h3>
            <p className="text-[16px] leading-[1.6] text-white/90 font-sans font-normal">
              {study.description}
            </p>
          </div>

          {/* Button */}
          <AnimatedButton
            text="View Case Study"
            className="h-[56px] w-full md:w-max p-[8px] pl-[20px] shrink-0 bg-white"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default function CaseStudies({
  label = "CASE STUDIES",
  title = (
    <>
      Proven <span className="italic text-brand-blue">Results</span> Across Industries
    </>
  ),
  description,
  showViewMore = true,
}: CaseStudiesProps) {
  return (
    <section id="case-studies" className="w-full px-6 lg:px-12 py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-6">

        {/* Header */}
        <div className="flex flex-col items-center gap-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <LabelPill text={label} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-[42px] md:text-[56px] lg:text-[64px] leading-[1.1] tracking-[-0.01em] font-serif text-brand-navy-dark"
          >
            {title}
          </motion.h2>
          {description ? (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
              className="max-w-[620px] text-[17px] leading-[1.7] text-text-one"
            >
              {description}
            </motion.p>
          ) : null}
        </div>

        {/* Sticky Stacking Cards */}
        <div className="w-full pb-[30px]">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>

        {/* View More Button */}
        {showViewMore ? (
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center"
        >
          <button className="group flex h-[56px] w-full max-w-[320px] items-center justify-center gap-3 rounded-full bg-[#121b60] pl-6 pr-2 text-[16px] font-medium text-white transition-colors duration-300 hover:bg-black md:w-auto md:max-w-none">
            View More Case Studies
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={20} className="text-[#121b60]" />
            </div>
          </button>
        </motion.div>
        ) : null}
      </div>
    </section>
  );
}
