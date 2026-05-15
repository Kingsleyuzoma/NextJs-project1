

"use client";
import HeroNavbar from "@/components/HeroNavba";
import { ArrowUpRight,  } from "lucide-react";


const projects = [
  {
    title: "Fintech Dashboard",
    description:
      "A comprehensive financial analytics platform with real-time data visualization, portfolio management, and AI-powered insights.",
    image: "/projects/project1.png",
    tags: ["React", "TypeScript", "NodeJS"],
    link: "#",
    github: "#",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with inventory management, payment processing, and analytics dashboard.",
    image: "/projects/project2.png",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    link: "#",
    github: "#",
  },
  {
    title: "AI Writing Assistant",
    description:
      "An intelligent writing tool powered by GPT-4, helping users create better content faster.",
    image: "/projects/project3.png",
    tags: ["React", "OpenAI", "Python", "FastAPI"],
    link: "#",
    github: "#",
  },
  {
    title: "Project Management Tool",
    description:
      "A collaborative workspace for teams with real-time updates, task tracking, and integrations.",
    image: "/projects/project4.png",
    tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
    link: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <div>
      <HeroNavbar />
    <section
      id="projects"
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-10 left-0 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-cyan-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Featured Work
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-5 leading-tight">
            Projects that
            <span className="block text-cyan-400 italic font-light mt-2">
              make an impact.
            </span>
          </h2>

          <p className="text-gray-400 mt-6 text-base sm:text-lg leading-relaxed">
            A selection of modern web applications and digital products built
            with performance, scalability, and user experience in mind.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Hover Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300">
                  <a
                    href={project.link}
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>

                  <a
                    href={project.github}
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition"
                  >
                   
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-5">
                {/* Title */}
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold group-hover:text-cyan-400 transition">
                    {project.title}
                  </h3>

                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:-translate-y-1 group-hover:translate-x-1 transition duration-300" />
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-14">
          <button className="group inline-flex items-center gap-3 border border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition duration-300">
            View All Projects
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300" />
          </button>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Projects;