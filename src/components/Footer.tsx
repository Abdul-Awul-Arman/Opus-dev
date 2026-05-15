"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b1021] pt-20 pb-12 px-6 lg:px-12 text-white">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-20">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-8 pr-4 lg:pr-12">
            <div className="flex items-center gap-3">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 3H8L4 12H13L9 21H16L20 12H11L15 3Z" fill="white"/>
              </svg>
              <div className="flex flex-col">
                <span className="font-sans font-semibold text-[24px] leading-none tracking-tight">Stratwell</span>
                <span className="font-sans text-[11px] tracking-[0.15em] uppercase mt-1 text-white/80">Consulting</span>
              </div>
            </div>
            <p className="text-[15px] leading-[1.6] text-white/90 max-w-[340px] font-medium">
              Stratwell Consulting helps businesses streamline operations, optimize performance, and achieve measurable growth.
            </p>
            <button className="bg-white text-brand-navy-dark text-[15px] font-bold py-3.5 px-8 rounded-full w-max hover:bg-white/90 transition-colors mt-2">
              Contact Us
            </button>
          </div>

          {/* Menu */}
          <div className="flex flex-col gap-8">
            <h4 className="font-serif text-[32px] leading-none">Menu</h4>
            <ul className="flex flex-col gap-4">
              {["Home", "Services", "About Us", "Case Studies", "FAQs"].map(link => (
                <li key={link}>
                  <Link href="#" className="text-[15px] font-medium text-white/90 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-8">
            <h4 className="font-serif text-[32px] leading-none">Socials</h4>
            <ul className="flex flex-col gap-4">
              {["Instagram", "Facebook", "LinkedIn", "Twitter (X)"].map(link => (
                <li key={link}>
                  <Link href="#" className="text-[15px] font-medium text-white/90 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-8">
            <h4 className="font-serif text-[32px] leading-none">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li className="text-[15px] font-medium text-white/90 hover:text-white transition-colors cursor-pointer">+1 (555) 987-6543</li>
              <li className="text-[15px] font-medium text-white/90 hover:text-white transition-colors cursor-pointer">contact@stratwellconsulting.com</li>
              <li className="text-[15px] font-medium text-white/90 leading-relaxed mt-2">
                420 Stratwell Avenue, Suite 300,<br />
                Boston, MA 02116, USA
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4">
          <p className="text-[13px] font-medium text-white/90">
            © {new Date().getFullYear()} Stratwell Consulting Framer Template
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[13px] font-medium text-white/90">Privacy Policy | T&C | Built in Framer | Created by You</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
