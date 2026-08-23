"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ProgramsSection() {
    const programs = [
        {
            id: "education",
            title: "EDUCATION",
            description:
                "Supporting access to education, creative learning, and overall child development to help young minds grow with confidence and curiosity.",
            logo: "/img/education-logo.png",
        },
        {
            id: "health",
            title: "HEALTHCARE",
            description:
                "Promoting physical and mental well-being through awareness, care initiatives, and compassion-driven action.",
            logo: "/img/healthcare-logo.png",
        },
        {
            id: "environment",
            title: "ENVIRONMENT",
            description:
                "Encouraging environmental responsibility through awareness programs, clean-up drives, and sustainable community practices.",
            logo: "/img/environment-logo.png",
        },
        {
            id: "community",
            title: "COMMUNITY",
            description:
                "Working closely with communities to strengthen participation, self-reliance, and long-term development.",
            logo: "/img/community-logo.png",
        },
        {
            id: "social",
            title: "SOCIAL",
            description:
                "Creating meaningful volunteering opportunities that foster social responsibility and active engagement.",
            logo: "/img/social-logo.png",
        },
    ];

    const sdgImages = Array.from({ length: 17 }, (_, i) => ({
        id: i + 1,
        src: `/img/sdg-${i + 1}.png`,
        alt: `SDG ${i + 1}`
    }));

    return (
        <>
            <style>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-25%);
                    }
                }
                .animate-marquee {
                    animation: marquee 90s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>


            <section id="programmes" className="bg-[#f6efe6] py-16 md:py-28">
            <div className="programs-content px-4 md:px-6">
                <div className="text-center mb-12 md:mb-16">
                    <h1 className="font-light font-serif text-#81503b text-5xl md:text-5xl sm:text-4xl lg:text-6xl font-light leading-none">
                        Our Programmes
                    </h1>
<br />
                    <p className="mt-6 md:mt-8 text-#81503b text-lg md:text-xl lg:text-xl leading-relaxed max-w-6xl ">
                        We work at the intersection of community needs, volunteer energy,
                        and institutional support to drive <br/>inclusive development.
                    </p>
                    <br /> <br />
                </div>

                <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
                    {programs.map((program) => (
                        <div
                            key={program.id}
                            className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)] rounded-2xl p-8 transition-shadow duration-300"
                        >
                            <div className="w-full h-20 mx-auto mb-6 flex items-center justify-center">
                                <Image
                                    src={program.logo}
                                    alt={program.title}
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                            <br/>
                            <h3 className="text-#81503b text-xl font-bold text-center mb-4">
                                {program.title}
                            </h3>
                            <p className="text-#81503b text-base leading-relaxed text-center">
                                {program.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-[#4b200c] pt-24 md:pt-40 px-4 md:px-20">
            <div className="mb-16 md:mb-20 gap-12 md:gap-20 items-center text-center md:pt-40 "><br/>
                <h2 className="font-light font-serif text-center text-white text-2xl md:text-4xl lg:text-5xl font-bold  leading-tight">
                    
                 <br/>
                    Sustainable &nbsp; Development &nbsp; Goals
                </h2>
<br/>   <br /> <br/> <br/>
         <div className="relative mt-24 md:mt-32 overflow-hidden py-4">
          <div className="animate-marquee flex w-max gap-18 ">
            {[...sdgImages, ...sdgImages, ...sdgImages, ...sdgImages].map((sdg, index) => (
              <div
                key={`${sdg.id}-${index}`}
                className="relative flex  h-28 w-28 md:h-40 md:w-40 shrink-0 items-center justify-center rounded-xl bg-white mx-4 md:mx-6 shadow-sm overflow-hidden"
              >
                <Image
                  src={sdg.src}
                  alt={sdg.alt}
                  fill
                  className="object-cover"
                  sizes="160px" 
                  
                />
              </div>
            ))}
          </div>
        </div>
<div className="mt-20 md:mt-30 border-t border-none w-full"></div>
            </div>

            <div className="h-24 md:h-40"></div>

            </div>
        </section>
        </>
    );
}