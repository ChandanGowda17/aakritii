"use client";

import { useState, useEffect } from "react";
import ImpactShowcase from "../../components/ImpactShowcase";

export default function Education() {
  const programs = [
    {
      id: 1,
      title: "Foundational Learning",
      image: "/img/education-1.png",
      description:
        "Helping children build strong reading, writing, numeracy, and classroom confidence through consistent learning support.",
      stat1: "5000+",
      stat1Label: "Children Supported",
      stat2: "120+",
      stat2Label: "Learning Sessions",
    },
    {
      id: 2,
      title: "Holistic Development",
      image: "/img/education-2.png",
      description:
        "Creating space for creativity, values, life skills, and emotional growth so children can thrive beyond textbooks.",
      stat1: "85+",
      stat1Label: "Activity Drives",
      stat2: "40+",
      stat2Label: "Partner Schools",
    },
    {
      id: 3,
      title: "Mentorship & Guidance",
      image: "/img/education-3.png",
      description:
        "Connecting students with mentors who encourage regular attendance, goal setting, career awareness, and personal confidence.",
      stat1: "300+",
      stat1Label: "Mentor Hours",
      stat2: "1500+",
      stat2Label: "Students Guided",
    },
    {
      id: 4,
      title: "Access & Retention",
      image: "/img/education-4.png",
      description:
        "Supporting children from vulnerable communities with the encouragement, resources, and family engagement needed to stay in school.",
      stat1: "92%",
      stat1Label: "Attendance Focus",
      stat2: "60+",
      stat2Label: "Community Visits",
    },
  ];

  
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
      id="education"
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
          <source src="/img/landing.mp4" type="video/mp4" />
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
              <h1 className="hero-title text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-serif">
Education and Child Development              </h1>
              
            </div>

            <p className="hero-description text-[0.95rem] sm:text-[1.05rem] text-neutral-300 leading-relaxed max-w-2xl font-light">
             Education is at the heart of Aakritii NGO’s mission to create lasting social change. We work to ensure that children from underserved and vulnerable communities have access to quality learning opportunities, holistic development, and a supportive environment to thrive. Through educational programs, mentorship, skill-building initiatives, and community engagement, we empower young minds with the knowledge, confidence, and values needed to shape a brighter future.

            </p>
          </div>
          
</div>
      </div>
    </section>
<br/>
      <div className="education-program-section relative z-10 flex flex-col items-center justify-center w-full">
        <div className="education-program-title flex justify-center items-center text-[#4b200c] text-2xl md:text-3xl lg:text-6xl font-light h-20 mt-20 px-6 sm:px-8 md:px-4 text-center">EDUCATION AND CHILD DEVELOPMENT</div>
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

      {/* WHY EDUCATION SECTION */}
      <section className="education-info-section h-full px-8 sm:px-10 md:px-12 lg:px-20 bg-[#f6efe6] overflow-hidden">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="max-w-7xl mx-auto w-full">

          <div className="mb-16 md:mb-24">
            <br/><br/>
            <h2 className="text-[#4b200c] text-4xl sm:text-5xl md:text-7xl font-light font-serif leading-tight">
              WHY Education
            </h2>
<br/>
            <p className="mt-8 text-[#4b200c] text-lg sm:text-xl md:text-2xl leading-relaxed">
              If we need to address healthcare, poverty, population control,
              unemployment and human rights, there's no better way to start than
              providing education to children in need.
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
            <h2 className="text-[#4b200c] text-4xl sm:text-5xl md:text-7xl font-light font-serif leading-tight">
              WHAT WE DO
            </h2>
<br/>
            <p className="mt-8 text-[#4b200c] text-lg sm:text-xl md:text-2xl leading-relaxed">
              Aakritii NGO's flagship programme, Mission Education, focuses on
              empowering underprivileged children through education, nutrition,
              and holistic development.
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

      <ImpactShowcase />
    </section>
  );
}
