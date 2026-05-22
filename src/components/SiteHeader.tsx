"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "FAQs", href: "/faqs" },
];

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="fixed top-0 left-0 z-50 flex h-[76px] w-full items-center justify-between border-b border-white/10 bg-brand-navy-muted px-6 py-3 xl:absolute xl:top-6 xl:left-1/2 xl:h-[80px] xl:w-[1152px] xl:-translate-x-1/2 xl:rounded-[16px] xl:border xl:border-white/15 xl:bg-white/12 xl:p-[16px] xl:backdrop-blur-[16px]"
      >
        <Link href="/" className="flex items-center gap-4" aria-label="Go to homepage">
          <div className="relative flex h-[48px] w-[132px] items-center justify-center xl:h-24 xl:w-26">
            <Image
              src="/logo.svg"
              alt="Opus Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <div className="hidden items-center gap-[40px] text-white font-medium tracking-wide xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative group text-[16px] tracking-[-1%] text-white transition-opacity"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-[1px] w-full bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
          ))}
        </div>

        <Link
          href="/#contact"
          className="hidden rounded-full bg-[#EAEFF5] px-6 py-3 text-base font-bold text-brand-navy-dark shadow-xl transition-all hover:scale-105 hover:bg-[#ebf1f8] xl:block"
        >
          Contact Us
        </Link>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 xl:hidden"
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={32} />}
        </button>
      </motion.nav>

      {isMenuOpen && (
        <div className="fixed left-0 right-0 top-[76px] z-40 border-b border-white/10 bg-brand-navy-muted px-6 py-6 xl:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-[18px] font-medium text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 flex h-[52px] w-full items-center justify-center rounded-full bg-[#EAEFF5] px-6 text-base font-bold text-brand-navy-dark"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
