export default function ProgramsSection() {
    const programs = [
        {
            title: "Education & Child Development",
            description:
                "Supporting access to education, creative learning, and overall child development to help young minds grow with confidence and curiosity.",
        },
        {
            title: "Health, Well-being & Compassion",
            description:
                "Promoting physical and mental well-being through awareness, care initiatives, and compassion-driven action.",
        },
        {
            title: "Environment & Sustainability",
            description:
                "Encouraging environmental responsibility through awareness programs, clean-up drives, and sustainable community practices.",
        },
        {
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
        <section className="bg-[#4b200c] py-28">
            <div className="programs-content ">
                <div className="grid lg:grid-cols-[420px_1fr] gap-20 items-center">

                    <div>
                        <h2 className="text-white text-7xl font-light leading-none">
                            Our
                            <br />
                            Programmes
                        </h2>

                        <p className="mt-8 text-white text-2xl leading-relaxed">
                            We work at the intersection of community needs, volunteer energy,
                            and institutional support to drive inclusive development.
                        </p>
                    </div>

                    <div>
                        {programs.map((program, index) => (
                            <div
                                key={index}
                                className={`pt-8 pb-12 ${index !== programs.length - 1
                                    ? "border-b border-[#6B3B7F]"
                                    : ""
                                    }`}
                            >
                                <h3 className="text-white text-2xl font-semibold mb-3">
                                    {program.title}
                                </h3>

                                <p className="text-white/90 text-lg leading-8">
                                    {program.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>


            <div className="mx-auto w-full max-w-[1040px] px-6 mt-28">
                <h2 className="text-center text-white text-4xl md:text-5xl font-bold uppercase leading-tight">
                    Towards Achieving
                    <br />
                    Sustainable Development Goals
                </h2>

                <div className="mt-12">
                    <img
                        src="/img/sdg-goals.png"
                        alt="Sustainable Development Goals"
                        className="w-full h-auto"
                    />
                </div>
            </div>





        </section>




    );
}