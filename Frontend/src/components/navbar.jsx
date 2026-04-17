import React from 'react'

export default function Navbar() {
    return (
        <>

<div className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-7 py-4 bg-black/95 backdrop-blur-xl border-b border-white/10 text-white shadow-lg">

    <div className="flex justify-between items-center">

        {/* Logo */}
        <div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-500 tracking-wide cursor-pointer hover:text-blue-400 transition-all duration-300">
                www.chandankoranga.in
            </h2>
        </div>

        {/* Desktop + Tablet Menu */}
        <div className="hidden md:flex items-center gap-5 lg:gap-8 text-[16px] lg:text-[22px] font-medium">

            <a className="hover:text-blue-400 transition-all duration-300" href="#">Home</a>

            <a className="hover:text-blue-400 transition-all duration-300" href="#">Projects</a>

            <a className="hover:text-blue-400 transition-all duration-300" href="#">Skills</a>

            <a className="hover:text-blue-400 transition-all duration-300" href="#">Experience</a>

            <a className="hover:text-blue-400 transition-all duration-300" href="#">Education</a>

            <a className="hover:text-blue-400 transition-all duration-300" href="#">Certifications</a>

            <a className="hover:text-green-300 transition-all duration-300" href="#">Appnests</a>

            <a
                className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-4 lg:px-5 py-2 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-blue-500/30 transition-all duration-300 border border-white/10"
                href="#"
            >
                Hire Me
            </a>

        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-3xl cursor-pointer">
            ☰
        </div>

    </div>

</div>

        </>
    )
}
