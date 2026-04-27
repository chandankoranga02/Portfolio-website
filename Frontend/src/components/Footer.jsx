import React from 'react'

export default function Footer() {
  return (
    <div>
      
<footer className="bg-gradient-to-br from-black via-[#020617] to-[#07122a] text-white pt-20 pb-10 px-6 sm:px-10 lg:px-20 relative overflow-hidden border-t border-white/10">

  {/* Glow */}
  <div className="absolute top-0 left-10 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>
  <div className="absolute bottom-0 right-10 w-80 h-80 bg-indigo-500/10 blur-[130px] rounded-full"></div>

  <div className="max-w-7xl mx-auto relative z-10">

    {/* Top */}
    <div className="text-center border-b border-white/10 pb-12">

      <h2 className="text-4xl font-bold mb-4">
        Chandan<span className="text-yellow-400">.</span>
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto leading-7 mb-8">
        Passionate developer building premium web experiences,
        modern products and scalable digital solutions.
      </p>

      {/* Social Icons */}
      <div className="flex flex-wrap justify-center gap-4">

        {[
          {
            name: "AppNest",
            link: "www.appnests.in",
            icon: "https://img.icons8.com/fluency/96/domain.png",
          },
          {
            name: "Instagram",
            link: "https://www.instagram.com/chandan.koranga02/",
            icon: "https://img.icons8.com/fluency/96/instagram-new.png",
          },
          {
            name: "Facebook",
            link: "#",
            icon: "https://img.icons8.com/fluency/96/facebook-new.png",
          },
          {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/chandan-singh-koranga-919989364",
            icon: "https://img.icons8.com/color/96/linkedin.png",
          },
          {
            name: "HackerRank",
            link: "https://www.hackerrank.com/profile/chandan_koranga2",
            icon: "https://img.icons8.com/color/96/hackerrank.png",
          },
          {
            name: "LeetCode",
            link: "https://leetcode.com/u/Chandankoranga02/",
            icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
          },
          {
            name: "GitHub",
            link: "https://github.com/chandankoranga02",
            icon: "https://img.icons8.com/ios-glyphs/90/ffffff/github.png",
          },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            title={item.name}
            className="group relative w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center hover:border-yellow-400 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(250,204,21,0.25)] transition-all duration-300"
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-7 h-7 object-contain"
            />

            {/* Tooltip */}
            <span className="absolute -top-10 scale-0 group-hover:scale-100 transition bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-lg whitespace-nowrap">
              {item.name}
            </span>
          </a>
        ))}

      </div>
    </div>

    {/* Bottom */}
    <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

      <p className="text-gray-500 text-sm text-center md:text-left">
        © 2026 Chandan Singh Koranga. All Rights Reserved.
      </p>

      <p className="text-gray-500 text-sm">
        Built with <span className="text-yellow-400">React + Tailwind</span>
      </p>

    </div>

  </div>
</footer>

    </div>
  )
}
