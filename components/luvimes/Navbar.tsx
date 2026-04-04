"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function LuvimesNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToFooter = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f8faf6]/90 backdrop-blur-md text-[#1a1a1a] py-4 border-b border-[#eef4ea]">
      <div className="section-container flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-[#3a5a34]"
        >
          LUVIMES
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#1a1a1a]/70 hover:text-[#3a5a34] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={scrollToFooter}
            className="hidden sm:block px-6 py-2 rounded-full font-semibold text-sm bg-[#3a5a34] text-white hover:bg-[#5a8a52] transition-colors"
          >
            Contact Us
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 hover:bg-[#eef4ea] rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#f8faf6] border-t border-[#eef4ea] transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 visible h-auto py-8"
            : "opacity-0 invisible h-0 overflow-hidden"
        }`}
      >
        <div className="section-container flex flex-col gap-6 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-[#1a1a1a]/70 hover:text-[#3a5a34] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={scrollToFooter}
            className="px-6 py-2 rounded-full font-semibold bg-[#3a5a34] text-white mx-auto"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}
