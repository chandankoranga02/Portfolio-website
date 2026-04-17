import React from 'react'

export default function Education() {
    return (
        <div>

            <section
                id="education"
                className="min-h-screen bg-gradient-to-br from-black via-[#020617] to-[#07122a] text-white px-6 sm:px-10 lg:px-20 py-24 relative overflow-hidden"
            >
                {/* Background Glow */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/10 blur-[130px] rounded-full"></div>

                {/* Heading */}
                <div className="text-center mb-16 relative z-10">
                    <p className="text-yellow-400 uppercase tracking-[7px] text-sm mb-3 font-semibold">
                        ACADEMIC JOURNEY
                    </p>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                        My <span className="text-yellow-400">Education</span>
                    </h2>

                    <div className="w-32 h-2 bg-yellow-400 mx-auto mt-5 rounded-full"></div>
                </div>

                {/* Timeline */}
                <div className="max-w-5xl mx-auto relative z-10">

                    {/* Center Line */}
                    <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-white/10"></div>

                    {[
                        {
                            year: "2025 - Present",
                            title: "Computer Science & Enginnering(Btech) ",
                            institute: "G. B. Pant Institute of Engineering & Technology , Pauri",
                            desc: "Currently pursuing B.Tech in Computer Science & Engineering with focus on full stack development, problem solving, software engineering and real-world project building.",
                        },

                        {
                            year: "2023 - 2024",
                            title: "Intermediate (12th)",
                            institute: "Maharshi Vidya Mandir , Haldwani",
                            desc: "Completed higher secondary education with strong academic foundation in mathematics, computer fundamentals and analytical reasoning.",
                        },

                        {
                            year: "2021 - 2022",
                            title: "High School (10th)",
                            institute: "Maharshi Vidya Mandir , Haldwani",
                            desc: "Completed secondary education while building early interest in computers, technology and technical learning.",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`mb-12 md:flex md:items-center md:justify-between ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                        >
                            {/* Empty side */}
                            <div className="hidden md:block w-[48%]"></div>

                            {/* Dot */}
                            <div className="hidden md:flex w-10 justify-center">
                                <div className="w-4 h-4 rounded-full bg-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.8)]"></div>
                            </div>

                            {/* Card */}
                            <div className="w-full md:w-[48%]">
                                <div className="group bg-white/[0.04] border border-white/10 rounded-3xl p-6 backdrop-blur-2xl hover:-translate-y-2 hover:border-yellow-400/70 hover:shadow-[0_0_35px_rgba(59,130,246,0.12)] transition-all duration-500">

                                    <span className="text-yellow-400 text-sm font-semibold tracking-wide">
                                        {item.year}
                                    </span>

                                    <h3 className="text-2xl font-bold mt-2 mb-2 group-hover:text-yellow-400 transition">
                                        {item.title}
                                    </h3>

                                    <h4 className="text-gray-300 text-lg mb-4">
                                        {item.institute}
                                    </h4>

                                    <p className="text-gray-400 text-sm leading-7">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </section>

        </div>
    )
}
