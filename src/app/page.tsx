import Hero from "@/components/Hero";
import IntroStats from "@/components/IntroStats";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import OurApproach from "@/components/OurApproach";
import OurGoal from "@/components/OurGoal";
import TrustedBy from "@/components/TrustedBy";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <IntroStats />
      <Divider />
      <Services />
      <Divider />
      <CaseStudies />
      <Divider />
      <Testimonials />
      <Divider />
      <OurGoal />
      <Divider />
      <OurApproach />
      <Divider />
      <TrustedBy />
      <Divider />
      <CTA />
      <Footer />
    </main>
  );
}
