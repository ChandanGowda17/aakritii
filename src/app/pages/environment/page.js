"use client";

import { useState, useEffect } from "react";
import ImpactShowcase from "../../components/ImpactShowcase";

export default function Environment() {
  const programs = [
    {
      id: 1,
      title: "Tree Plantation",
      image: "/img/environment-1.png",
      description:
        "Planting native tree species to restore ecosystems, improve air quality, and combat climate change in rural and urban areas.",
      stat1: "50K+",
      stat1Label: "Trees Planted",
      stat2: "100+",
      stat2Label: "Plantation Sites",
    },
    {
      id: 2,
      title: "Waste Management",
      image: "/img/environment-2.png",
      description:
        "Implementing sustainable waste management practices including recycling, composting, and awareness campaigns for cleaner communities.",
      stat1: "500+",
      stat1Label: "Waste Drives",
      stat2: "25K+",
      stat2Label: "Kg Waste Managed",
    },
    {
      id: 3,
      title: "Water Conservation",
      image: "/img/environment-3.png",
      description:
        "Building rainwater harvesting systems, restoring water bodies, and promoting water-saving practices in drought-prone regions.",
      stat1: "75+",
      stat1Label: "Water Structures",
      stat2: "15K+",
      stat2Label: "Beneficiaries",
    },
    {
      id: 4,
      title: "Awareness Programs",
      image: "/img/environment-4.png",
      description:
        "Educating communities about environmental protection, sustainable living, and climate action through workshops and campaigns.",
      stat1: "200+",
      stat1Label: "Workshops",
      stat2: "30K+",
      stat2Label: "People Reached",
    },
  ];

  
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [activeProgramId, setActiveProgramId] = useState(1);

  const activeProgram =
    programs.find((p) => p.id === activeProgramId) || programs[0];

  return (
    <section
      id="environment"
      className="relative bg-[#f6f2eb] min-h-screen"
    >
          <section id="home" className="hero-section relative pt-24 min-h-screen bg-[#3A2312] overflow-hidden">
      <div className="hero-shell relative w-full min-h-[85vh] lg:min-h-[90vh] bg-[#4E3629] curved-hero-container flex items-center justify-center py-16 px-6">

        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-bg-video absolute inset-0 z-0 h-full w-full object-cover"
        >
          <source src="/img/2.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-y-0 left-0 z-0 w-[62%] bg-gradient-to-r from-[#401905]/80 via-[#5a2d14]/45 to-transparent max-lg:w-full max-lg:from-[#401905]/75 max-lg:via-[#5a2d14]/40 max-lg:to-transparent"></div>

        {/* Hero Grid Content */}
        <div
          className="hero-content site-container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full"
          style={{ paddingTop: isMobile ? '96px' : undefined }}
        >

          {/* Left Text Block */}
          <div className="hero-copy lg:col-span-8 flex flex-col gap-6 text-left w-full">

            <div className="flex flex-col gap-2">
              <h1 className="hero-title text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
                Aakritii NGO
              </h1>
              <h2 className="hero-subtitle text-2xl sm:text-4xl font-extrabold text-white/90 tracking-wide font-sans">
                Empower. Transform. Inspire
              </h2>
            </div>

            <p className="hero-description text-[0.95rem] sm:text-[1.05rem] text-neutral-300 leading-relaxed max-w-2xl font-light">
             Environmental sustainability is at the heart of Aakritii NGO's mission to create lasting change. We work to protect and restore our planet through tree plantations, waste management, water conservation, and community awareness programs. By engaging communities in sustainable practices, we aim to build a greener, healthier future for generations to come.

            </p>
          </div>
</div>
      </div>
    </section>

      <br/>
      <div className="education-program-section relative z-10 flex flex-col items-center justify-center w-full">
        <div className="education-program-title flex justify-center items-center text-[#4b200c] text-2xl md:text-3xl lg:text-6xl font-light h-20 mt-20 px-6 sm:px-8 md:px-4 text-center">ENVIRONMENT AND SUSTAINABILITY</div>
        <div className="education-program-container mx-auto max-w-7xl px-6 sm:px-8 md:px-6 py-12 md:py-24 w-full">
        <div className="education-program-grid grid lg:grid-cols-[320px_1fr] gap-6 md:gap-8 lg:gap-12">

          {/* LEFT TABS */}
          <div className="education-program-tabs grid grid-cols-2 gap-3 lg:flex lg:flex-col lg:h-full lg:gap-0 lg:border-t lg:border-[#d7cfc5] lg:order-1 order-1">
            {programs.map((program) => (
              <button
                key={program.id}
                type="button"
                onClick={() => setActiveProgramId(program.id)}
                className={`flex min-h-10 w-full items-center rounded-md border border-[#d7cfc5] bg-white px-3 py-2 text-left transition-all duration-300 sm:px-4 lg:flex-1 lg:rounded-none lg:border-x-0 lg:border-t-0 lg:bg-transparent lg:px-0 lg:py-0 ${
                  activeProgramId === program.id
                    ? "border-[#401905] text-[#401905] shadow-sm lg:border-[#d7cfc5] lg:shadow-none"
                    : "text-[#7b7068] hover:text-[#401905]"
                }`}
              >&nbsp;
                <span
                  className={`block whitespace-nowrap leading-tight ${
                    activeProgramId === program.id
                      ? "text-[14px] font-bold sm:text-base md:text-xl lg:text-3xl"
                      : "text-[14px] font-light sm:text-base md:text-lg lg:text-3xl"
                  }`}
                >
                  {program.title}
                </span>
              </button>
            ))}
          </div>

          {/* RIGHT CONTENT */}
          <div className="education-program-card overflow-hidden rounded-[32px] bg-white shadow-xl lg:order-2 order-2">

            <div className="grid lg:grid-cols-[1fr_280px] md:grid-cols-1">

              {/* IMAGE with CONTENT overlay */}
              <div className="relative h-[300px] md:h-[500px] lg:h-[650px] w-full md:col-span-1 lg:col-span-1">
                <img
                  src={activeProgram.image}
                  alt={activeProgram.title}
                  className="h-full w-full object-cover transition-all duration-500"
                />

                {/* CONTENT - Overlay on top of image */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#401905]/70 via-[#401905]/40 to-transparent p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-xs md:text-sm uppercase tracking-[3px] text-white/90 font-semibold">
                    Our Program
                  </span>

                  <h2 className="mt-4 text-2xl md:text-3xl lg:text-5xl font-bold leading-tight text-white">
                    {activeProgram.title}
                  </h2>

                  <p className="mt-6 md:mt-8 text-base md:text-lg leading-relaxed text-white/90">
                    {activeProgram.description}
                  </p>

                 
                </div>
              </div>

              {/* STATS - Right side column */}
              <div className="bg-[#faf8f5] p-4 md:p-5 pt-2 md:pt-4 mt-4 lg:mt-0 flex flex-row md:flex-col lg:flex-col gap-3 md:gap-5 lg:gap-5 md:col-span-1 lg:col-span-1 items-center justify-center">
                <div className=" p-4 md:p-6 lg:p-8 flex-1 flex flex-col items-center justify-center text-center">
                  <p className="text-xs md:text-sm uppercase tracking-wide text-[#5a3a2a] font-semibold">
                    Impact
                  </p>

                  <h3 className="mt-2 md:mt-4 text-3xl md:text-4xl lg:text-6xl font-bold text-[#401905]">
                    {activeProgram.stat1}
                  </h3>

                  <p className="mt-2 md:mt-3 text-sm md:text-base text-[#5b4b42]">
                    {activeProgram.stat1Label}
                  </p>
                </div>

                <div className=" p-4 md:p-6 lg:p-8 flex-1 flex flex-col items-center justify-center text-center">
                  <p className="text-xs md:text-sm uppercase tracking-wide text-[#5a3a2a] font-semibold">
                    Reach
                  </p>

                  <h3 className="mt-2 md:mt-4 text-3xl md:text-4xl lg:text-6xl font-bold text-[#401905]">
                    {activeProgram.stat2}
                  </h3>

                  <p className="mt-2 md:mt-3 text-sm md:text-base text-[#5b4b42]">
                    {activeProgram.stat2Label}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      </div>

      {/* WHY Environment SECTION */}
      <section className="education-info-section h-full px-8 sm:px-10 md:px-12 lg:px-20 bg-[#f6efe6] overflow-hidden">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="max-w-7xl mx-auto w-full">

          <div className="mb-16 md:mb-24">
            <br/><br/>
            <h2 className="text-[#4b200c] text-4xl sm:text-5xl md:text-7xl font-light leading-tight">
              WHY Environment
            </h2>
<br/>
            <p className="mt-8 text-[#4b200c] text-lg sm:text-xl md:text-2xl leading-relaxed">
              Protecting the environment is essential for building healthy, sustainable, and resilient communities. Rapid urbanization, deforestation, pollution, and climate change continue to threaten natural ecosystems and the well-being of future generations. By encouraging environmental awareness and responsible practices, we can preserve biodiversity, improve public health, and create greener spaces for everyone.
            </p>
<br/>
            <p className="mt-8 text-[#4b200c] text-lg sm:text-xl md:text-2xl leading-relaxed">
              Education empowers children with knowledge, confidence, and the
              opportunity to build a brighter future while becoming responsible
              citizens of society.
            </p>
          </div>
<br/><br/>
          <div>
            <h2 className="text-[#4b200c] text-4xl sm:text-5xl md:text-7xl font-light leading-tight">
              WHAT WE DO
            </h2>
<br/>
            <p className="mt-8 text-[#4b200c] text-lg sm:text-xl md:text-2xl leading-relaxed">
             At Aakritii NGO, we work to inspire environmental responsibility through community-driven initiatives that promote conservation, sustainability, and climate awareness. Our programmes focus on tree plantation drives, waste management awareness, water conservation, clean-up campaigns, and environmental education that encourage individuals to become active stewards of nature.
            </p>
<br/>
            <p className="mt-8 text-[#4b200c] text-lg sm:text-xl md:text-2xl leading-relaxed">
              We work with children from vulnerable communities including remote
              villages, tribal regions, and underserved urban areas, ensuring
              every child gets an opportunity to learn and succeed.
            </p>
          </div>
<br/><br/>
        </div>
        </div>
      </section>

    </section>
  );
}






