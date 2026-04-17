import React from 'react'
import UrlShortener from '../assets/urlShortner.png'
import portfolio from '../assets/portfolio.png'
import toursimUk from '../assets/UKtourism.png'
import todo from '../assets/todo.jpg'
import newsapp from '../assets/newsAPP.png'
import textAnalyzer from '../assets/textAnalyzer.jpg'
import amazonclone from '../assets/amazonclone.jpg'



export default function Projects() {
  return (
    <div>
      <section
        id="projects"
        className="min-h-screen bg-gradient-to-br from-black via-[#020617] to-[#07122a] text-white px-6 sm:px-10 lg:px-20 py-24 relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/10 blur-[130px] rounded-full"></div>

        {/* Heading */}
        <div className="text-center mb-16 relative z-10">
          <p className="text-yellow-400 uppercase tracking-[7px] text-sm mb-3 font-semibold">
            MY WORK
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Featured <span className="text-yellow-400">Projects</span>
          </h2>

          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 relative z-10">

          {[
            {
              name: "Advanced URL Shortener",
              desc: "Modern short link platform designed with analytics dashboard, QR code generation, password-protected URLs, custom aliases, expiry controls and fast secure redirection for better link management experience.",
              tech: ["React", "Node.js", "Express", "MongoDB"],
              image: UrlShortener,
              github: "#",
              live: "#",
            },

            {
              name: "Portfolio Website",
              desc: "Premium responsive developer portfolio featuring smooth animations, project showcase cards, modern dark UI theme, contact integration and recruiter-focused clean personal branding experience.",
              tech: ["React", "Tailwind", "Vite"],
              image: portfolio,
              github: "#",
              live: "#",
            },

            {
              name: "Text Analyzer Pro",
              desc: "Advanced text utility application offering word count, character insights, uppercase/lowercase conversion, reading analysis and productivity tools for daily writing tasks.",
              tech: ["React", "Bootstrap", "JavaScript"],
              image: textAnalyzer,
              github: "#",
              live: "#",
            },

            {
              name: "UK Tourism Static Site",
              desc: "Responsive tourism website built to showcase Uttarakhand destinations, scenic places, travel highlights, culture and attractive landing page experience for visitors.",
              tech: ["HTML", "CSS", "JavaScript"],
              image: toursimUk,
              github: "#",
              live: "#",
            },
            {
              name: "NewsApp SPA",
              desc: "Modern single page news application built with React featuring category-based headlines, top news sections, live API data fetching, responsive layout and smooth dark mode experience.",
              tech: ["React", "JavaScript", "API", "CSS"],
              image: newsapp,
              github: "#",
              live: "#",
            },

            {
              name: "Amazon Homepage Clone",
              desc: "Frontend clone of Amazon homepage focused on accurate layout recreation, navigation bar structure, product sections and responsive user interface design practice.",
              tech: ["HTML", "CSS"],
              image: amazonclone,
              github: "#",
              live: "#",
            },

            {
              name: "Todo Web App",
              desc: "Simple and clean task manager web app that allows users to add, complete, remove and organize daily tasks efficiently with smooth interaction.",
              tech: ["HTML", "CSS", "JavaScript"],
              image: todo,
              live: "#",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="group min-h-[620px] flex flex-col bg-white/[0.04] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-2xl hover:-translate-y-3 hover:border-yellow-400/70 hover:shadow-[0_0_35px_rgba(59,130,246,0.12)] transition-all duration-500"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-60 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition">
                  {project.name}
                </h3>

                <p className="text-gray-300 text-sm leading-7 mb-5 min-h-[110px]">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-3 rounded-xl border border-white/10 hover:border-yellow-400 hover:text-yellow-400 transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:scale-105 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  )
}
