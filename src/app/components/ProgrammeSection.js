"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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

            <div className="bg-[#4b200c] pt-24 md:pt-40 px-4 md:px-20">
            <div className="mb-16 md:mb-20 gap-12 md:gap-20 items-center text-center md:pt-40 "><br/>
                <h2 className="text-center text-white text-2xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight">
                    
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