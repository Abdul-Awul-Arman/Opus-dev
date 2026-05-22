import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import LabelPill from "@/components/LabelPill";
import FAQList from "@/components/FAQList";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FAQs - Opus",
  description: "Answers to common questions about working with Opus.",
};

export default function FAQsPage() {
  return (
    <main className="min-h-screen bg-surface-main text-brand-navy-dark">
      <section className="p-0 xl:p-4">
        <div className="dark-contrast relative flex h-[374px] w-full items-center justify-center overflow-hidden bg-brand-navy-dark md:h-[540px] lg:h-[680px] xl:h-[calc(100vh-2rem)] xl:rounded-[1.5rem]">
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1800&q=85"
            alt="Consulting team discussion"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#080e29]/55" />
          <SiteHeader />
          <h1 className="relative z-10 px-6 pt-[76px] text-center font-serif text-[48px] leading-[1.05] tracking-[-0.01em] text-white md:text-[72px] lg:text-[80px]">
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 lg:gap-16">
          <div className="flex max-w-[780px] flex-col items-center gap-6 text-center">
            <LabelPill text="FAQs" />
            <h2 className="font-serif text-[42px] leading-[1.1] tracking-[-0.01em] text-brand-navy-dark md:text-[56px] lg:text-[64px]">
              Answers to Common Questions About Working with Us
            </h2>
          </div>

          <FAQList />

          <Link
            href="/#contact"
            className="group flex h-[56px] w-[320px] max-w-full items-center justify-between gap-3 rounded-full bg-[#121b60] pl-6 pr-2 text-[16px] font-bold text-white whitespace-nowrap transition-colors duration-300 hover:bg-black md:w-max md:max-w-none"
          >
            Book a Free Consultation
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={20} className="text-[#121b60]" />
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
