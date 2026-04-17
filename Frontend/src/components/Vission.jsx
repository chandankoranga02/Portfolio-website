import React from 'react'

export default function Vission() {
  return (

   <>
<section className="bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white px-6 sm:px-10 lg:px-20 py-12 lg:py-16 flex items-center">

    <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

        {/* Left Side */}
        <div className="lg:pr-6">

            <p className="text-lg sm:text-xl uppercase tracking-[6px] text-yellow-400 font-bold mb-4 text-left">
                My Vision
            </p>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
                Build. Innovate. Contribute.
            </h2>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 max-w-xl">
                I aspire to build my own startup with an engineering mindset — creating practical solutions that solve meaningful real-world problems.
            </p>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl">
                My goal is to contribute to India’s future growth, generate opportunities, and create lasting impact in society through technology.
            </p>

        </div>

        {/* Right Side */}
        <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md p-7 sm:p-8 shadow-2xl">

            <div className="space-y-5">

                <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                        Startup Mindset
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                        Ownership, risk-taking, execution, and solving problems at scale.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                        Nation Contribution
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                        Helping India grow through innovation, jobs, and technology.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                        Real Impact
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                        Building products that improve lives and matter in reality.
                    </p>
                </div>

            </div>

        </div>

    </div>

</section>
</> 
  )
}
