import Hero from "@/components/Hero";
import IntroStats from "@/components/IntroStats";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import OurGoal from "@/components/OurGoal";
import TrustedBy from "@/components/TrustedBy";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <IntroStats />
      <Services />
      <Testimonials />
      <OurGoal />
      <TrustedBy />
      <CTA />
      <Footer />
    </main>
  );
}
