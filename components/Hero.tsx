

import React from 'react'

const Hero = () => {
  return (
    <div>
      
       {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-4xl text-center">
          {/* Small Heading */}
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4 text-sm md:text-base">
            Frontend Developer
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight">
            Build Modern <br />
            <span className="text-cyan-400">Web Experiences</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            I create responsive, fast, and beautiful web applications using
            Next.js, React, Tailwind CSS, and modern frontend technologies.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-full font-semibold transition duration-300 w-full sm:w-auto">
              View Projects
            </button>

            <button className="border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 px-8 py-4 rounded-full font-semibold transition duration-300 w-full sm:w-auto">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
