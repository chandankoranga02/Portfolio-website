import React from 'react'
import client from '../assets/client.png'

export default function Work() {
  return (
    <div>
      

  <section
    id="experience"
    className="min-h-screen bg-gradient-to-br from-black via-[#020617] to-[#07122a] text-white px-6 sm:px-10 lg:px-20 py-24 relative overflow-hidden"
  >
    {/* Background Glow */}
    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/10 blur-[130px] rounded-full"></div>

    {/* Heading */}
    <div className="text-center mb-16 relative z-10">
      <p className="text-yellow-400 uppercase tracking-[7px] text-sm mb-3 font-semibold">
        PROFESSIONAL JOURNEY
      </p>

      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
        Work <span className="text-yellow-400">Experience</span>
      </h2>

      <div className="w-24 h-1 bg-yellow-400 mx-auto mt-5 rounded-full"></div>
    </div>

    {/* Experience Grid */}
    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 relative z-10 max-w-6xl mx-auto">

      {[
        {
          role: "Frontend Developer",
          company: "Client Lawyer Portfolio Project",
          duration: "Freelance Project",
          desc: "Designed and developed a premium responsive portfolio website for a legal professional to establish strong online presence and credibility. Built modern UI sections including hero banner, services, achievements, testimonials and contact forms with mobile-first optimization, clean navigation, smooth user experience and performance-focused frontend architecture.",
          tech: ["React", "Tailwind CSS", "Vite", "Responsive Design", "Vercel", "Custom Domain", "EmailJS"],
          image: client,
          live: "#",
        },
      ].map((job, index) => (
        <div
          key={index}
          className="group min-h-[760px] max-w-[520px] mx-auto flex flex-col bg-white/[0.04] border border-white/10 rounded-[32px] overflow-hidden backdrop-blur-2xl hover:-translate-y-3 hover:border-yellow-400/70 hover:shadow-[0_0_45px_rgba(59,130,246,0.18)] transition-all duration-500"
        >
          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={job.image}
              alt={job.company}
              className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
            />
          </div>

          {/* Content */}
          <div className="p-7 flex flex-col flex-1">
            <span className="text-yellow-400 text-sm font-semibold mb-2 tracking-wide">
              {job.duration}
            </span>

            <h3 className="text-3xl font-bold mb-2 group-hover:text-yellow-400 transition">
              {job.role}
            </h3>

            <h4 className="text-lg text-gray-300 mb-4">
              {job.company}
            </h4>

            <p className="text-gray-300 text-sm leading-7 mb-6 min-h-[170px]">
              {job.desc}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-7">
              {job.tech.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Button */}
            <a
              href={job.live}
              target="_blank"
              rel="noreferrer"
              className="mt-auto text-center py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:scale-105 transition"
            >
              View Project
            </a>
          </div>
        </div>
      ))}

    </div>
  </section>


    </div>
  )
}
