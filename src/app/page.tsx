import Hero from "@/components/Hero";
import IntroStats from "@/components/IntroStats";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
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
      <Testimonials />
      <Divider />
      <OurGoal />
      <Divider />
      <TrustedBy />
      <Divider />
      <CTA />
      <Footer />
    </main>
  );
}
