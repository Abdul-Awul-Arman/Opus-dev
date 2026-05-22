import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import TrustedBy from "@/components/TrustedBy";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";

export const metadata: Metadata = {
  title: "Case Studies - Opus",
  description: "Explore consulting success stories and client results from Opus.",
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-surface-main text-brand-navy-dark">
      <section className="p-0 xl:p-4">
        <div className="dark-contrast relative flex h-[374px] w-full items-center justify-center overflow-hidden bg-brand-navy-dark md:h-[540px] lg:h-[680px] xl:h-[calc(100vh-2rem)] xl:rounded-[1.5rem]">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85"
            alt="Consultants reviewing business results"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#080e29]/55" />
          <SiteHeader />
          <h1 className="relative z-10 px-6 pt-[76px] text-center font-serif text-[52px] leading-none tracking-[-0.01em] text-white md:text-[72px] lg:text-[80px]">
            Case Studies
          </h1>
        </div>
      </section>

      <CaseStudies
        label="Our Works"
        title="Our Success Stories"
        description="Discover how we have helped businesses and organizations achieve remarkable results."
        showViewMore={false}
      />

      <Divider />
      <Testimonials />
      <Divider />
      <TrustedBy />
      <Divider />
      <CTA />
      <Footer />
    </main>
  );
}
