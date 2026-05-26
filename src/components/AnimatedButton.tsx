"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface AnimatedButtonProps {
  text?: string;
  delay?: number;
  className?: string;
  href?: string;
}

export default function AnimatedButton({
  text = "Start a Project",
  delay = 1.4,
  className = "",
  href,
}: AnimatedButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="w-max max-w-full"
    >
      <Link
        href={href || "/contact"}
        className={`group/btn flex h-[56px] min-w-[200px] max-w-full items-center justify-center gap-3 rounded-full bg-[#ebf1f8] p-3 text-[16px] font-bold text-brand-navy-dark transition-all duration-300 hover:bg-white ${className}`}
      >
        {text}
        <span className="ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy-dark text-white transition-colors duration-300 group-hover/btn:bg-black">
          <ArrowRight size={20} className="-rotate-45 transform transition-transform duration-300 group-hover/btn:rotate-0" />
        </span>
      </Link>
    </motion.div>
  );
}
