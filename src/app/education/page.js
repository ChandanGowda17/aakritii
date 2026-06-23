"use client";

import { useState } from "react";

export default function Education() {
  const programs = [
    {
      id: 1,
      title: "Education & Child Development",
      image: "/img/education-1.png",
      description:
        "Providing quality education, nutrition and holistic development opportunities for children from underserved communities.",
      stat1: "5000+",
      stat1Label: "Children Supported",
      stat2: "120+",
      stat2Label: "Learning Centers",
    },
    {
      id: 2,
      title: "Health & Wellness",
      image: "/img/health-1.png",
      description:
        "Promoting healthcare access, preventive care and community wellness initiatives.",
      stat1: "20K+",
      stat1Label: "Beneficiaries",
      stat2: "300+",
      stat2Label: "Health Camps",
    },
    {
      id: 3,
      title: "Environment",
      image: "/img/environment-1.png",
      description:
        "Driving sustainability through tree plantations, awareness programs and eco-friendly practices.",
      stat1: "50K+",
      stat1Label: "Trees Planted",
      stat2: "100+",
      stat2Label: "Green Drives",
    },
    {
      id: 4,
      title: "Community Empowerment",
      image: "/img/community-1.png",
      description:
        "Creating opportunities for communities through skill development and social engagement.",
      stat1: "10K+",
      stat1Label: "Lives Impacted",
      stat2: "250+",
      stat2Label: "Programs",
    },
  ];

  const [activeProgramId, setActiveProgramId] = useState(1);

  const activeProgram =
    programs.find((p) => p.id === activeProgramId) || programs[0];

  return (
    <section
      id="education"
      className="relative bg-[#f6f2eb]"
    >
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex justify-center items-center text-[#4b200c] text-2xl md:text-3xl lg:text-6xl font-light h-20 mt-20 px-4 text-center">EDUCATION AND CHILD DEVELOPMENT</div>
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-24 w-full">
        <div className="grid lg:grid-cols-[320px_1fr] gap-8 lg:gap-12">

          {/* LEFT TABS */}
          <div className="border-t border-[#d7cfc5] flex flex-col h-full lg:order-1 order-2">
            {programs.map((program) => (
              <button
                key={program.id}
                type="button"
                onClick={() => setActiveProgramId(program.id)}
                className={`w-full border-b border-[#d7cfc5] flex-1 text-left transition-all duration-300 ${
                  activeProgramId === program.id
                    ? "text-[#401905]"
                    : "text-[#9a9a9a] hover:text-[#401905]"
                }`}
              >
                <span
                  className={`block leading-tight ${
                    activeProgramId === program.id
                      ? "font-bold text-xl md:text-2xl lg:text-4xl"
                      : "font-light text-lg md:text-xl lg:text-3xl"
                  }`}
                >
                  {program.title}
                </span>
              </button>
            ))}
          </div>

          {/* RIGHT CONTENT */}
          <div className="overflow-hidden rounded-[32px] bg-white shadow-xl lg:order-2 order-1">

            <div className="grid lg:grid-cols-[1.2fr_1fr_280px] md:grid-cols-1">

              {/* IMAGE */}
              <div className="overflow-hidden md:col-span-1 lg:col-span-1">
                <img
                  src={activeProgram.image}
                  alt={activeProgram.title}
                  className="h-[300px] md:h-[500px] lg:h-[650px] w-full object-cover transition-all duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="bg-[#F4EFE8] p-6 md:p-8 lg:p-12 flex flex-col justify-center md:col-span-1 lg:col-span-1">
                <span className="text-xs md:text-sm uppercase tracking-[3px] text-[#8a6a4a] font-semibold">
                  Our Program
                </span>

                <h2 className="mt-4 text-2xl md:text-3xl lg:text-5xl font-bold leading-tight text-[#401905]">
                  {activeProgram.title}
                </h2>

                <p className="mt-6 md:mt-8 text-base md:text-lg leading-relaxed text-[#5b4b42]">
                  {activeProgram.description}
                </p>

                <button className="mt-6 md:mt-10 text-left text-base md:text-lg font-semibold text-[#401905] hover:translate-x-2 transition-all">
                  Learn More →
                </button>
              </div>

              {/* STATS */}
              <div className="bg-[#faf8f5] p-4 md:p-5 flex flex-row md:flex-col gap-3 md:gap-5 md:col-span-1 lg:col-span-1">
                <div className="rounded-2xl md:rounded-3xl bg-white p-4 md:p-6 lg:p-8 shadow-md flex-1 md:flex-none">
                  <p className="text-xs md:text-sm uppercase tracking-wide text-[#8a6a4a]">
                    Impact
                  </p>

                  <h3 className="mt-2 md:mt-4 text-3xl md:text-4xl lg:text-6xl font-bold text-[#401905]">
                    {activeProgram.stat1}
                  </h3>

                  <p className="mt-2 md:mt-3 text-sm md:text-base text-[#5b4b42]">
                    {activeProgram.stat1Label}
                  </p>
                </div>

                <div className="rounded-2xl md:rounded-3xl bg-white p-4 md:p-6 lg:p-8 shadow-md flex-1 md:flex-none">
                  <p className="text-xs md:text-sm uppercase tracking-wide text-[#8a6a4a]">
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
      <section className="h-screen px-6 md:px-12 lg:px-20 bg-[#f6efe6]">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="max-w-7xl mx-auto">

          <div className="mb-24">
            <h2 className="text-[#4b200c] text-5xl md:text-7xl font-light">
              WHY Education
            </h2>

            <p className="mt-8 text-[#4b200c] text-xl md:text-2xl leading-relaxed">
              If we need to address healthcare, poverty, population control,
              unemployment and human rights, there's no better way to start than
              providing education to children in need.
            </p>

            <p className="mt-8 text-[#4b200c] text-xl md:text-2xl leading-relaxed">
              Education empowers children with knowledge, confidence, and the
              opportunity to build a brighter future while becoming responsible
              citizens of society.
            </p>
          </div>

          <div>
            <h2 className="text-[#4b200c] text-5xl md:text-7xl font-light">
              WHAT WE DO
            </h2>

            <p className="mt-8 text-[#4b200c] text-xl md:text-2xl leading-relaxed">
              Aakritii NGO's flagship programme, Mission Education, focuses on
              empowering underprivileged children through education, nutrition,
              and holistic development.
            </p>

            <p className="mt-8 text-[#4b200c] text-xl md:text-2xl leading-relaxed">
              We work with children from vulnerable communities including remote
              villages, tribal regions, and underserved urban areas, ensuring
              every child gets an opportunity to learn and succeed.
            </p>
          </div>

        </div>
        </div>
      </section>
    </section>
  );
}
