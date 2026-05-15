
"use client";
import HeroNavbar from "@/components/HeroNavba";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Pedro is one of the most talented engineers I've worked with. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable.",
    author: "Sarah Chen",
    role: "CTO, Tech Innovators Inc.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Working with Pedro was a game-changer for our project. He delivered ahead of schedule with code quality that set a new standard for our team.",
    author: "Michael Rodriguez",
    role: "Product Manager, Digital Solutions",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Pedro's expertise in React and TypeScript helped us rebuild our entire frontend in record time. His architectural decisions continue to pay dividends.",
    author: "Emily Watson",
    role: "Engineering Lead, StartUp Labs",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Not only is Pedro technically brilliant, but he's also a fantastic communicator and team player. He elevated everyone around him.",
    author: "David Kim",
    role: "CEO, Innovation Hub",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
];

const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div>
        <HeroNavbar />
    <section
      id="testimonials"
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-175 h-175 bg-cyan-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-cyan-400 uppercase tracking-[0.25em] text-sm font-semibold">
            What People Say
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-5 leading-tight">
            Kind words from
            <span className="block text-cyan-400 italic font-light mt-2">
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 sm:p-10 md:p-14 shadow-2xl">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-6 w-14 h-14 rounded-full bg-cyan-400 flex items-center justify-center shadow-lg">
              <Quote className="w-7 h-7 text-black" />
            </div>

            {/* Quote */}
            <blockquote className="text-lg sm:text-xl md:text-2xl leading-relaxed font-medium text-gray-200 pt-6">
              "{testimonials[activeIdx].quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4 mt-10">
              <img
                src={testimonials[activeIdx].avatar}
                alt={testimonials[activeIdx].author}
                className="w-14 h-14 rounded-full object-cover border-2 border-cyan-400"
              />

              <div>
                <h4 className="font-semibold text-lg">
                  {testimonials[activeIdx].author}
                </h4>

                <p className="text-gray-400 text-sm">
                  {testimonials[activeIdx].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-5 mt-10">
            {/* Previous Button */}
            <button
              onClick={previous}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIdx
                      ? "w-8 bg-cyan-400"
                      : "w-2 bg-gray-600 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
        </div>
  );
};

export default Testimonials;