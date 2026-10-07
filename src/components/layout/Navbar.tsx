"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { name: "HOME", href: "#home" },
  { name: "SPECIAL", href: "#special" },
  { name: "MENU", href: "#menu" },
  { name: "GALLERY", href: "#gallery" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-dark py-4 px-6 md:px-12 lg:px-24">
      <div className="flex items-center justify-between max-w-7xl mx-auto relative">
        {/* Logo */}
        <Link href="/" className="relative w-20 h-20 md:w-24 md:h-24 hover:opacity-80 transition-opacity -mt-2">
          <Image src="/images/decafe-logo.png" alt="DCafe Logo" fill sizes="96px" className="object-contain" priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="bg-gold hover:bg-gold-hover text-dark px-6 py-2 rounded-full text-sm font-extrabold tracking-wider transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gold" 
          aria-label="Menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-dark border-t border-gray-800 py-4 flex flex-col items-center gap-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gold px-6 py-2 rounded-full text-sm font-extrabold tracking-wider transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
