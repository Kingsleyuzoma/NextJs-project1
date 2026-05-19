

 "use client";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Heart } from "lucide-react";
import Link from "next/link";
//  import { Github, Linkedin, Twitter, Heart } from "react-icons";

 const socialLinks = [
   { icon: FaGithub, href: "#", label: "GitHub" },
   { icon: FaLinkedin, href: "#", label: "LinkedIn" },
   { icon: FaTwitter, href: "#", label: "Twitter" },
 ];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white border-t border-white/10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 w-125 h-125 bg-cyan-500/10 rounded-full blur-3xl -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Top Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Logo & Description */}
          <div className="text-center md:text-left max-w-sm">
            <a
              href="#"
              className="text-3xl font-bold tracking-tight"
            >
              PM<span className="text-cyan-400">.</span>
            </a>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Building modern digital experiences with Next.js,
              React, and Tailwind CSS.
            </p>

            <p className="text-sm text-gray-500 mt-4">
              © {currentYear} Pedro Machado. All rights reserved.
            </p>
          </div>
          
          {/* Footer Links */}
          <nav className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 transition duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

           Social Links 
          <div className="flex items-center gap-4">
             {socialLinks.map((social) => ( 
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-cyan-400 hover:text-black transition duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-400 text-sm">
          <span>Made with</span>

          <Heart className="w-4 h-4 text-cyan-400 fill-cyan-400" />

          <span>using Next.js & Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
