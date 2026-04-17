import React from 'react'


export default function Skills() {
    return (
<div>
  <section
    id="skills"
    className="min-h-screen bg-gradient-to-br from-black via-[#020617] to-[#07122a] text-white px-6 sm:px-10 lg:px-20 py-24 relative overflow-hidden"
  >
    {/* Background Glow */}
    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/10 blur-[130px] rounded-full"></div>

    {/* Heading */}
    <div className="text-center mb-16 relative z-10">
      <p className="text-yellow-400 uppercase tracking-[7px] text-sm mb-3 font-semibold">
        MY EXPERTISE
      </p>

      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
        Skills & <span className="text-yellow-400">Tools</span>
      </h2>

      <div className="w-24 h-1 bg-yellow-400 mx-auto mt-5 rounded-full"></div>
    </div>

    {/* Skills Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 relative z-10">

      {/* Frontend */}
      <div className="group relative bg-white/[0.04] border border-white/10 rounded-3xl p-6 backdrop-blur-2xl hover:border-yellow-400/70 hover:-translate-y-3 hover:shadow-[0_0_35px_rgba(59,130,246,0.12)] transition-all duration-500">
        <h3 className="text-2xl font-semibold text-yellow-400 mb-6">
          Frontend
        </h3>

        <div className="grid grid-cols-2 gap-4">
          {[
            { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Tailwind", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
            { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-2 flex flex-col items-center gap-2 hover:bg-yellow-400 hover:text-black hover:scale-105 transition-all duration-300"
            >
              <img src={item.logo} alt={item.name} className="w-9 h-9 object-contain" />
              <span className="text-sm font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Backend */}
      <div className="group relative bg-white/[0.04] border border-white/10 rounded-3xl p-6 backdrop-blur-2xl hover:border-yellow-400/70 hover:-translate-y-3 hover:shadow-[0_0_35px_rgba(59,130,246,0.12)] transition-all duration-500">
        <h3 className="text-2xl font-semibold text-yellow-400 mb-6">
          Backend
        </h3>

        <div className="grid grid-cols-2 gap-4">
          {[
            { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
            { name: "REST API", logo: "https://img.icons8.com/fluency/96/api-settings.png" },
            { name: "WebSockets", logo: "https://img.icons8.com/color/96/network-card.png" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-2 flex flex-col items-center gap-2 hover:bg-yellow-400 hover:text-black hover:scale-105 transition-all duration-300"
            >
              <img src={item.logo} alt={item.name} className="w-9 h-9 object-contain bg-white rounded-full p-1" />
              <span className="text-sm font-medium text-center">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Database */}
      <div className="group relative bg-white/[0.04] border border-white/10 rounded-3xl p-6 backdrop-blur-2xl hover:border-yellow-400/70 hover:-translate-y-3 hover:shadow-[0_0_35px_rgba(59,130,246,0.12)] transition-all duration-500">
        <h3 className="text-2xl font-semibold text-yellow-400 mb-6">
          Database
        </h3>

        <div className="grid grid-cols-2 gap-4">
          {[
            { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-2 flex flex-col items-center gap-2 hover:bg-yellow-400 hover:text-black hover:scale-105 transition-all duration-300"
            >
              <img src={item.logo} alt={item.name} className="w-9 h-9 object-contain" />
              <span className="text-sm font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="group relative bg-white/[0.04] border border-white/10 rounded-3xl p-6 backdrop-blur-2xl hover:border-yellow-400/70 hover:-translate-y-3 hover:shadow-[0_0_35px_rgba(59,130,246,0.12)] transition-all duration-500">
        <h3 className="text-2xl font-semibold text-yellow-400 mb-6">
          Tools
        </h3>

        <div className="grid grid-cols-2 gap-4">
          {[
            { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
            { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
            { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
            { name: "Excel", logo: "https://img.icons8.com/color/96/microsoft-excel-2019--v1.png" },
            { name: "Word", logo: "https://img.icons8.com/color/96/microsoft-word-2019--v1.png" },
            { name: "PowerPoint", logo: "https://img.icons8.com/color/96/microsoft-powerpoint-2019.png" },
            { name: "Vercel", logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" },
            { name: "Render", logo: "https://seeklogo.com/images/R/render-logo-113CDAA5E8-seeklogo.com.png" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-2 flex flex-col items-center gap-2 hover:bg-yellow-400 hover:text-black hover:scale-105 transition-all duration-300"
            >
              <img src={item.logo} alt={item.name} className="w-9 h-9 object-contain" />
              <span className="text-xs font-medium text-center">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
</div>
    )
}
