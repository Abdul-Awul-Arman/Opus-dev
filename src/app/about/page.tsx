import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import LabelPill from "@/components/LabelPill";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";

export const metadata: Metadata = {
  title: "About Us - Opus",
  description: "Learn about the consulting team, mission, and values behind Opus.",
};

const stats = [
  {
    value: "92%",
    description: "Of clients report measurable performance improvements within year.",
  },
  {
    value: "$50M",
    description: "In revenue growth generated across client portfolios in the last 3 years.",
  },
  {
    value: "100+",
    description: "Businesses advised across industries from tech startups to established enterprises.",
  },
  {
    value: "15+",
    description: "Years of combined expertise guiding business strategy and execution.",
  },
];

const team = [
  {
    name: "Jane Smith",
    role: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "David Lee",
    role: "Head of Operations",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Maria Gonzalez",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Alex Johnson",
    role: "Marketing Lead",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Mary Jane",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Ethan Brooks",
    role: "Lead Developer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
  },
];

function StatCard({
  value,
  description,
}: {
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-[28px] border border-brand-navy-dark/[0.04] bg-white p-6 shadow-[0_8px_30px_rgba(13,27,42,0.02)]">
      <h3 className="font-serif text-[56px] font-normal leading-none text-brand-navy-dark md:text-[64px]">
        {value}
      </h3>
      <p className="mt-8 text-[16px] leading-[1.6] text-text-one">
        {description}
      </p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-surface-main text-brand-navy-dark">
      <section className="p-0 xl:p-4">
        <div className="dark-contrast relative flex h-[374px] w-full items-center justify-center overflow-hidden bg-brand-navy-dark md:h-[540px] lg:h-[680px] xl:h-[calc(100vh-2rem)] xl:rounded-[1.5rem]">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=85"
            alt="Consulting team workshop"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#080e29]/55" />
          <SiteHeader />
          <h1 className="relative z-10 px-6 pt-[76px] text-center font-serif text-[52px] leading-none tracking-[-0.01em] text-white md:text-[72px] lg:text-[80px]">
            About Us
          </h1>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1420px] gap-10 lg:grid-cols-[0.68fr_1fr] lg:gap-20">
          <div className="flex flex-col gap-10">
            <LabelPill text="Stratwell Consulting" />
            <h2 className="font-serif text-[44px] leading-[1.08] tracking-[-0.01em] text-brand-navy-dark md:text-[56px] lg:text-[64px]">
              Who We Are
            </h2>
          </div>

          <div className="flex max-w-[850px] flex-col gap-7 text-[18px] leading-[1.5] text-text-one md:text-[22px] md:leading-[1.42]">
            <p>
              We are a dedicated team of experienced consultants, strategists, and problem-solvers who bring both insight and practical execution to every challenge. Our collective expertise spans strategy, operations, finance, and digital transformation, equipping us with the depth and versatility to tackle complex problems from multiple perspectives.
            </p>
            <p>
              What truly sets us apart is our collaborative mindset. We don&apos;t just provide recommendations from the sidelines — we immerse ourselves in your organization, working hand-in-hand with your team to implement strategies effectively. From identifying opportunities to navigating challenges and driving sustainable change, we are committed to turning ideas into tangible results.
            </p>
            <p className="font-bold text-text-one">
              Let&apos;s build <span className="italic text-brand-blue">the future</span> — together.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      <section className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-2 lg:items-stretch">
          <div className="relative min-h-[420px] overflow-hidden rounded-[28px] shadow-sm lg:min-h-[620px] lg:rounded-[32px]">
            <img
              src="/images/goal-img.jpg"
              alt="Advisory conversation"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center gap-6 rounded-[28px] bg-white p-6 lg:rounded-[32px] lg:p-10">
            <LabelPill text="Our Mission" />
            <h2 className="font-serif text-[42px] leading-[1.08] tracking-[-0.01em] text-brand-navy-dark md:text-[56px] lg:text-[64px]">
              Driven by <span className="italic text-brand-blue">Purpose</span>
            </h2>
            <div className="flex flex-col gap-6 text-[17px] leading-[1.7] text-text-one">
              <p>
                We help organizations create sustainable growth through clear strategy, disciplined execution, and honest collaboration.
              </p>
              <p>
                Our focus is on solutions that address today&apos;s challenges while creating the structure and confidence needed for long-term progress.
              </p>
            </div>
            <Link
              href="/#services"
              className="group mt-4 flex h-[56px] w-full max-w-[230px] items-center justify-center gap-3 rounded-full bg-[#121b60] pl-6 pr-2 text-[16px] font-bold text-white transition-colors hover:bg-black md:w-max"
            >
              View Our Services
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={20} className="text-[#121b60]" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-12 lg:pb-28">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10 lg:gap-14">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="flex flex-col gap-6">
              <LabelPill text="Our Vision" />
              <h2 className="max-w-[900px] font-serif text-[42px] leading-[1.12] tracking-[-0.01em] text-brand-navy-dark md:text-[56px] lg:text-[64px]">
                Our <span className="italic text-brand-blue">mission</span> is simple: to help ambitious organizations simplify complexity, unlock growth, and scale with <span className="italic text-brand-blue">confidence</span>.
              </h2>
            </div>
            <div className="relative min-h-[320px] overflow-hidden rounded-[28px] shadow-sm lg:min-h-[420px] lg:rounded-[32px]">
              <img
                src="/images/services-bg.avif"
                alt="Business planning session"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.value} {...stat} />
            ))}
          </div>
        </div>
      </section>

      <Divider />

      <section className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 lg:gap-16">
          <div className="flex max-w-[760px] flex-col items-center gap-6 text-center">
            <LabelPill text="Meet Our Team" />
            <h2 className="font-serif text-[42px] leading-[1.1] tracking-[-0.01em] text-brand-navy-dark md:text-[56px] lg:text-[64px]">
              The <span className="italic">Faces</span> of Our Company
            </h2>
            <p className="text-[17px] leading-[1.7] text-text-one">
              Get to know the people who make our work meaningful and who are ready to help you write your own success story.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {team.map((person) => (
              <article
                key={person.name}
                className="group relative h-[470px] overflow-hidden rounded-[28px] shadow-sm md:h-[520px] lg:rounded-[32px]"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-[20px] border border-white/10 bg-[#2a2c33]/70 p-6 text-center text-white shadow-2xl backdrop-blur-md">
                  <h3 className="font-serif text-[32px] leading-none text-white">
                    {person.name}
                  </h3>
                  <p className="mt-4 text-[15px] font-bold text-white/85">
                    {person.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
