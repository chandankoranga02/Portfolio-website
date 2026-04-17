import React from 'react'
import profileImg from '../assets/PROFILE.png'

export default function Hero() {
  return (
    <>
<div className="relative min-h-screen bg-gradient-to-br from-black via-gray-950 to-black text-white px-6 sm:px-10 lg:px-24 py-14 flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-24 overflow-hidden">

    {/* Background Glow */}
    <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/20 blur-[140px] rounded-full"></div>
    <div className="absolute bottom-10 right-20 w-80 h-80 bg-purple-600/20 blur-[160px] rounded-full"></div>

    {/* Left Content */}
    <div className="relative z-10 w-full lg:w-1/2 max-w-2xl text-center lg:text-left">

        <p className="text-sm sm:text-base uppercase tracking-[5px] text-blue-400 mb-4 font-semibold">
            Welcome to my portfolio
        </p>

        <h2 className="text-2xl sm:text-3xl text-gray-300 font-medium mb-2">
            Hi, I am
        </h2>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
            Chandan Koranga
        </h1>

        <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            I build premium digital products, solve real-world problems, and create impactful experiences through modern web technologies.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">

            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:border-blue-400 transition-all">
                Full Stack Developer
            </span>

            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:border-cyan-400 transition-all">
                MERN Stack Developer
            </span>

            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:border-purple-400 transition-all">
                Backend Developer
            </span>

        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

            <a
                href="#Projects"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 font-semibold shadow-xl hover:scale-105 transition-all duration-300"
            >
                View Projects
            </a>

            <button
                className="px-8 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/30 transition-all duration-300"
            >
                Download Resume
            </button>

        </div>

    </div>

    {/* Right Image */}
    <div className="relative z-10 w-full lg:w-1/2 flex justify-center">

        <div className="relative w-72 h-[24rem] sm:w-80 sm:h-[28rem] lg:w-[24rem] lg:h-[34rem] rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_rgba(59,130,246,0.25)] hover:scale-[1.02] transition-all duration-500">

            {/* Top Shine */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-blue-400/10 z-10"></div>

            {/* Border Glow */}
            <div className="absolute -inset-[1px] rounded-[2rem] border border-white/10"></div>

            <img
                src={profileImg}
                alt="Chandan Koranga"
                className="w-full h-full object-cover object-top"
            />

        </div>

    </div>

</div>

    </>
  )
}
