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
    <Link href={href || "#"}>
    <motion.button
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
      className={`group/btn flex justify-center pl-3 w-[239px] h-[56px] items-center gap-3 bg-[#ebf1f8] text-[16px] rounded-full text-brand-navy-dark font-bold hover:bg-white transition-all duration-300 transform  ${className}`}
    >
      {text}
      <div className="w-10 h-10 bg-brand-navy-dark rounded-full flex items-center justify-center text-white ml-2 group-hover/btn:bg-black">
        <ArrowRight size={20} className="transition-transform duration-300 transform -rotate-45 group-hover/btn:rotate-0" />
      </div>
    </motion.button>
    </Link>
  );
}
