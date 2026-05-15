
"use client";

import HeroNavbar from "@/components/HeroNavba";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working closely with teams to bring creative ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Exploring modern technologies and best development practices.",
  },
];

const About = () => {
  return (
    <div>
        <HeroNavbar />
    <section
      id="about"
      className="relative bg-black text-white py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Small Heading */}
            <div>
              <span className="text-cyan-400 uppercase tracking-[0.25em] text-sm font-semibold">
                About Me
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Building the future,
              <span className="block text-cyan-400 italic font-light mt-2">
                one component at a time.
              </span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-5 text-gray-400 text-base sm:text-lg leading-relaxed">
              <p>
                I'm a passionate frontend developer with over 5 years of
                experience building modern digital experiences that are fast,
                responsive, and user-friendly.
              </p>

              <p>
                I specialize in React, Next.js, TypeScript, and Tailwind CSS —
                creating everything from beautiful landing pages to complex web
                applications with clean and scalable architecture.
              </p>

              <p>
                Beyond coding, I enjoy exploring new technologies, contributing
                to open-source projects, and helping other developers grow in
                the tech community.
              </p>
            </div>

            {/* Quote Card */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 shadow-lg">
              <p className="text-lg italic text-gray-200 leading-relaxed">
                “My mission is to create digital products that are not only
                functional but also beautiful, intuitive, and memorable.”
              </p>
            </div>
          </div>

          {/* Right Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 hover:border-cyan-400/40 hover:translate-y-1.25 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center mb-5">
                  <item.icon className="w-7 h-7 text-cyan-400" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default About;