
"use client";
import HeroNavbar from "@/components/HeroNavba";
import Footer from "@/components/Footer";

const experiences = [
  {
    period: "2022 — Present",
    role: "Senior Frontend Engineer",
    company: "Tech Innovators Inc.",
    description:
      "Leading frontend architecture for a suite of fintech products. Implemented micro-frontend architecture, reduced bundle size by 40%, and mentored a team of 5 developers.",
    technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
    current: true,
  },
  {
    period: "2020 — 2022",
    role: "Frontend Engineer",
    company: "Digital Solutions Co.",
    description:
      "Built and maintained multiple React applications for enterprise clients. Introduced automated testing practices that improved code coverage to 85%.",
    technologies: ["React", "Redux", "Jest", "Cypress"],
    current: false,
  },
  {
    period: "2019 — 2020",
    role: "Junior Developer",
    company: "StartUp Labs",
    description:
      "Contributed to the development of a SaaS platform from MVP to production. Collaborated with designers to implement pixel-perfect UI components.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    current: false,
  },
  {
    period: "2018 — 2019",
    role: "Freelance Developer",
    company: "Self-Employed",
    description:
      "Delivered custom web solutions for small businesses and startups. Built 15+ websites and applications from design to deployment.",
    technologies: ["JavaScript", "PHP", "WordPress", "MySQL"],
    current: false,
  },
];

const Experience = () => {
  return (
    <div>
     <HeroNavbar />
    <section
      id="experience"
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-cyan-500/10 blur-3xl rounded-full -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-cyan-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Career Journey
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-5 leading-tight">
            Experience that
            <span className="block text-cyan-400 italic font-light mt-2">
              speaks volumes.
            </span>
          </h2>

          <p className="text-gray-400 mt-6 text-base sm:text-lg leading-relaxed">
            A timeline of my professional growth, from curious beginner to
            senior engineer building scalable products and leading teams.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-linear-to-b from-cyan-400/80 via-cyan-400/30 to-transparent md:-translate-x-1/2" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 md:gap-16"
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 top-8 w-4 h-4 bg-cyan-400 rounded-full md:-translate-x-1/2 z-10 shadow-[0_0_20px_rgba(34,211,238,0.8)]">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-70" />
                  )}
                </div>

                {/* Card */}
                <div
                  className={`pl-14 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 hover:border-cyan-400/40 transition-all duration-300">
                    {/* Period */}
                    <span className="text-cyan-400 text-sm font-semibold tracking-wide">
                      {exp.period}
                    </span>

                    {/* Role */}
                    <h3 className="text-2xl font-bold mt-3">{exp.role}</h3>

                    {/* Company */}
                    <p className="text-gray-400 mt-1">{exp.company}</p>

                    {/* Description */}
                    <p className="text-gray-400 mt-5 leading-relaxed text-sm sm:text-base">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div
                      className={`flex flex-wrap gap-3 mt-6 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </div>
  );
};
 

export default Experience;