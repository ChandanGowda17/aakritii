export default function ProgramsSection() {
    const programs = [
        {
            title: "Education & Child Development",
            description:
                "Supporting access to education, creative learning, and overall child development to help young minds grow with confidence and curiosity.",
        },
        {
            id: "health",
            title: "Health, Well-being & Compassion",
            description:
                "Promoting physical and mental well-being through awareness, care initiatives, and compassion-driven action.",
        },
        {
            id: "environment",
            title: "Environment & Sustainability",
            description:
                "Encouraging environmental responsibility through awareness programs, clean-up drives, and sustainable community practices.",
        },
        {
            id: "community",
            title: "Community Development & Empowerment",
            description:
                "Working closely with communities to strengthen participation, self-reliance, and long-term development.",
        },
        {
            title: "Social Awareness & Volunteering",
            description:
                "Creating meaningful volunteering opportunities that foster social responsibility and active engagement.",
        },
    ];

    return (
        <section id="programmes" className="bg-[#f6efe6] py-16 md:py-28">
            <div className="programs-content px-4 md:px-6">
                <div className="grid lg:grid-cols-[420px_1fr] gap-12 md:gap-20 items-center">

                    <div className="text-center lg:text-left">
                        <h2 className="text-#81503b text-4xl md:text-5xl lg:text-7xl font-light leading-none">
                            Our
                            <br />
                            Programmes
                        </h2>

                        <p className="mt-6 md:mt-8 text-#81503b text-lg md:text-xl lg:text-2xl leading-relaxed">
                            We work at the intersection of community needs, volunteer energy,
                            and institutional support to drive inclusive development.
                        </p>
                    </div>

                    <div>
                        {programs.map((program, index) => (
                            <div
                                key={program.id || program.title}
                                id={program.id}
                                className={`pt-8 pb-12 scroll-mt-[142px] ${index !== programs.length - 1
                                    ? "border-b border-[#6B3B7F]"
                                    : ""
                                    }`}
                            >
                                <h3 className="text-#81503b text-2xl font-semibold mb-3">
                                    {program.title}
                                </h3>

                                <p className="text-#81503b text-lg leading-8">
                                    {program.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            <div className="bg-[#4b200c] pt-16 md:pt-20 px-4 md:px-20">
            <div className="mb-16 md:mb-20 gap-12 md:gap-20 items-center text-center">
                <h2 className="text-center text-white text-2xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight">
                    Towards Achieving
                    <br />
                    Sustainable Development Goals
                </h2>

           <div className="mt-8 md:mt-10 flex justify-center">
  <img
    src="/img/sdg-goals.png"
    alt="Sustainable Development Goals"
    className="w-[90%] md:w-[70%] h-auto"
  />
</div>
<div className="mt-20 md:mt-30 border-t border-none w-full"></div>
            </div>

            <div className="h-16 md:h-24"></div>

            </div>
        </section>
        



    );
}