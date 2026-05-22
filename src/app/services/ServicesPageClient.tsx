"use client";

import { motion } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import LabelPill from "@/components/LabelPill";
import CaseStudies from "@/components/CaseStudies";
import TrustedBy from "@/components/TrustedBy";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";
import AnimatedButton from "@/components/AnimatedButton";

const services = [
  {
    title: "Business Strategy",
    icon: "/services/Business Strategy.svg",
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1200&q=85",
    why:
      "A well-crafted business strategy provides clarity, reduces uncertainty, and positions your organization to seize opportunities in a competitive landscape.",
    included: [
      "Market Research & Competitive Analysis",
      "Business Planning & Goal Setting",
      "Strategic Roadmap Development",
      "Risk Assessment & Mitigation",
      "Performance Tracking & KPIs",
    ],
  },
  {
    title: "Operations Optimization",
    icon: "/services/Operations Optimization.svg",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85",
    why:
      "Optimized operations reduce costs, improve productivity, and help your organization operate efficiently while responding faster to market changes.",
    included: [
      "Process Mapping & Workflow Analysis",
      "Operational Efficiency Audits",
      "Resource Allocation & Capacity Planning",
      "Automation & Technology Integration",
      "Continuous Improvement Strategies",
    ],
  },
  {
    title: "Digital Transformation",
    icon: "/services/Digital Transformation.svg",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    why:
      "Digital transformation helps businesses unlock agility, improve customer experiences, and build scalable systems for long-term growth.",
    included: [
      "Technology Assessment & Strategy",
      "System Integration & Cloud Solutions",
      "Digital Tools & Automation Implementation",
      "Data Management & Analytics",
      "Change Management & Training Support",
    ],
  },
  {
    title: "Financial Advisory",
    icon: "/services/Financial Advisory.svg",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85",
    why:
      "Effective financial management gives leaders the insight needed to make confident decisions, optimize resources, and sustain growth.",
    included: [
      "Financial Planning & Forecasting",
      "Budgeting & Cost Optimization",
      "Investment Analysis & Risk Management",
      "Cash Flow & Capital Management",
      "Financial Reporting & Performance Metrics",
    ],
  },
];

export default function ServicesPageClient() {
  return (
    <main className="min-h-screen bg-surface-main text-brand-navy-dark">
      <section className="p-0 xl:p-4">
        <div className="dark-contrast relative flex h-[374px] w-full items-center justify-center overflow-hidden bg-brand-navy-dark md:h-[540px] lg:h-[680px] xl:h-[calc(100vh-2rem)] xl:rounded-[1.5rem]">
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1800&q=85"
            alt="Consultants planning services"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#080e29]/55" />
          <SiteHeader />
          <h1 className="relative z-10 px-6 pt-[76px] text-center font-serif text-[52px] leading-none tracking-[-0.01em] text-white md:text-[72px] lg:text-[80px]">
            Our Expertise
          </h1>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-12 lg:gap-16">
          <div className="mx-auto flex max-w-[780px] flex-col items-center gap-6 text-center">
            <LabelPill text="Our Services" />
            <h2 className="font-serif text-[44px] leading-[1.08] tracking-[-0.01em] text-brand-navy-dark md:text-[56px] lg:text-[64px]">
              Solutions We Provide
            </h2>
          </div>

          <div className="flex flex-col gap-12">
            {services.map((service, index) => (
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                key={service.title}
                className="grid gap-6 lg:grid-cols-[0.78fr_1.12fr] lg:items-stretch"
              >
                <div className="relative min-h-[420px] overflow-hidden rounded-[28px] shadow-sm lg:min-h-[442px] lg:rounded-[24px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-x-4 bottom-4 rounded-[18px] border border-white/10 bg-white/[0.12] p-4 shadow-2xl backdrop-blur-[16px] md:p-6">
                    <h3 className="font-serif text-[36px] leading-[1.05] text-white md:text-[48px]">
                      {service.title}
                    </h3>
                    <AnimatedButton
                      className="mt-6 w-[290px] text-[16px] font-semibold"
                      text="Book a Free Consultation"
                      href="/#contact"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center gap-8 rounded-[28px] bg-white p-6 shadow-[0_8px_30px_rgba(13,27,42,0.02)] md:p-8 lg:rounded-[24px] lg:p-10">
                  <div className="flex flex-col gap-4">
                    <h3 className="font-serif text-[30px] leading-[1.1] text-brand-navy-dark md:text-[32px]">
                      Why It Matters:
                    </h3>
                    <p className="text-[16px] leading-[1.6] text-text-one">
                      {service.why}
                    </p>
                  </div>

                  <div className="flex flex-col gap-5">
                    <h3 className="font-serif text-[30px] leading-[1.1] text-brand-navy-dark md:text-[32px]">
                      What&apos;s Included:
                    </h3>
                    <ul className="flex flex-col gap-4 text-[15px] leading-[1.5] text-text-one md:text-[16px]">
                      {service.included.map((item) => (
                        <li key={item} className="flex gap-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 18 17.144"
                            aria-hidden="true"
                            className="mt-1 h-[17px] w-[18px] shrink-0"
                          >
                            <path
                              d="M 17.921 0.397 C 13.135 4.574 9.168 10.546 6.221 17.012 C 6.186 17.092 6.107 17.144 6.02 17.144 C 5.933 17.144 5.854 17.092 5.819 17.012 C 4.042 12.988 2.187 10.032 0.091 8.486 C -0.094 8.349 0.025 8.052 0.248 8.08 C 2.526 8.373 5.016 9.88 6.02 11.426 C 8.774 6.533 12.619 2.899 17.669 0.031 C 17.901 -0.101 18.123 0.22 17.921 0.397 Z"
                              fill="rgb(23,53,221)"
                            />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Divider />
      <CaseStudies
        label="Our Works"
        title="Our Success Stories"
        description="Discover how we have helped businesses and organizations achieve remarkable results."
      />
      <Divider />
      <TrustedBy />
      <Divider />
      <CTA />
      <Footer />
    </main>
  );
}
