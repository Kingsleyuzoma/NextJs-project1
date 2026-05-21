
"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/About", label: "About" },
  { href: "/Projects", label: "Projects" },
  { href: "/Experience", label: "Experience" },
  { href: "/Testimonials", label: "Testimonials" },
  { href: "/Contact", label: "Contact" },
];

const HeroNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className=" bg-black text-white overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-black to-purple-500/10" />

      {/* Navbar */}
        <header
         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/70 backdrop-blur-lg shadow-lg py-3"
            : "bg-transparent py-5"
         }`}
         >
         <nav className="max-w-7xl mx-auto px-6  flex items-center justify-between ">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight hover:text-cyan-400 transition"
          >
            HOME<span className="text-cyan-400">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-3 py-2 ">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-4 py-2 rounded-full text-sm text-gray-300 hover:text-white hover:bg-white/10 transition duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link href="/Contact">
            <button className="bg-cyan-400 hover:bg-cyan-300 text-black px-5 py-2 rounded-full font-semibold transition duration-300">
              Contact Me
            </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg text-gray-300 hover:text-cyan-400 transition"
                >
                  {link.label}
                </a>
              ))}

              <Link href="/Contact">
                <button className="bg-cyan-400 hover:bg-cyan-300 text-black px-5 py-3 rounded-full font-semibold transition duration-300">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        )}
      </header>

      
    </section>
  );
};

export default HeroNavbar;