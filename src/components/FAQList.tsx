"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What types of businesses do you work with?",
    answer:
      "We work with startups, growing companies, and established organizations that need sharper strategy, stronger operations, or support through a major growth phase.",
  },
  {
    question: "How do you approach a new project?",
    answer:
      "Every engagement starts with discovery. We learn the business, identify the highest-impact opportunities, then build a practical roadmap with clear ownership and measurable milestones.",
  },
  {
    question: "What results can we expect?",
    answer:
      "Results depend on the scope, but our work is built around measurable improvements such as revenue growth, cost reduction, stronger processes, better reporting, and clearer decision-making.",
  },
  {
    question: "How long does a typical engagement last?",
    answer:
      "Focused strategy projects can take a few weeks, while implementation and transformation work often runs for several months. We shape the timeline around the problem and your team capacity.",
  },
  {
    question: "Do you offer ongoing support after a project ends?",
    answer:
      "Yes. We can stay involved through advisory check-ins, performance reviews, implementation support, or embedded support for teams that need continued momentum.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Pricing depends on scope, complexity, and the level of support required. After an initial consultation, we provide a clear proposal with deliverables, timeline, and investment.",
  },
  {
    question: "How can we get started?",
    answer:
      "Start with a consultation. We will discuss your current challenges, goals, timing, and whether our approach is the right fit for what you need.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. We support clients across locations and can structure collaboration around remote workshops, async reviews, and timezone-friendly operating rhythms.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "Our work spans SaaS, retail, manufacturing, financial services, construction, and service businesses, with a focus on strategy, operations, finance, and digital transformation.",
  },
  {
    question: "How is Stratwell different from other consulting firms?",
    answer:
      "We combine strategic clarity with hands-on implementation. The goal is not a slide deck that sits on a shelf, but a practical path your team can execute with confidence.",
  },
];

export default function FAQList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto flex w-full max-w-[860px] flex-col gap-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={faq.question}
            className="overflow-hidden rounded-[24px] bg-white shadow-[0_8px_30px_rgba(13,27,42,0.02)]"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex min-h-[76px] w-full items-center justify-between gap-5 px-5 py-4 text-left md:min-h-[86px] md:px-8"
            >
              <span className="font-serif text-[24px] leading-[1.15] text-brand-navy-dark md:text-[30px]">
                {faq.question}
              </span>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white">
                <Plus
                  size={22}
                  className={`transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                />
              </span>
            </button>

            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-6 text-[16px] leading-[1.7] text-text-one md:px-8 md:pb-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
