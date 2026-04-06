"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
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
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Shop", href: "/shop" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#4B6F44]/90 backdrop-blur-md text-white py-3 md:py-4">
      <div className="section-container flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image width={90} height={45} src="/images/luaro 1.png" alt="Logo" className="md:w-[100px]" />
          </Link>
          <a
            href="https://luvimes.com"
            className="hidden sm:block text-[10px] font-medium text-white/50 hover:text-white/80 transition-colors border border-white/20 px-2 py-0.5 rounded-full"
          >
            A Luvimes Project
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-[var(--accent-green)] transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={scrollToFooter}
            className="hidden sm:block btn-primary bg-white text-[var(--primary-green)] hover:bg-[var(--accent-green)] hover:text-white text-sm"
          >
            Contact Us
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-[#4B6F44] border-t border-white/10 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible h-auto py-8' : 'opacity-0 invisible h-0 overflow-hidden'}`}>
        <div className="section-container flex flex-col gap-6 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium hover:text-[var(--accent-green)] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={scrollToFooter}
            className="btn-primary bg-white text-[var(--primary-green)] mx-auto"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}
