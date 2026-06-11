"use client";

import { useState, useEffect } from "react";

export default function Education() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
    id="home"
    className="relative mt-20 pt-32 lg:pt-40 min-h-screen bg-[#3A2312] overflow-hidden"
  >
        
      <div className="relative w-full min-h-[85vh] lg:min-h-[90vh] bg-[#4E3629] curved-hero-container flex items-center justify-center py-16 px-6">
        
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 z-0 h-full w-full object-cover"
        >
          <source src="/img/6.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-y-0 left-0 z-0 w-[62%] bg-gradient-to-r from-[#401905]/80 via-[#5a2d14]/45 to-transparent lg:w-[62%] max-lg:w-full" />

        {/* Content */}
        <div
          className="site-container relative z-10 w-full max-w-7xl"
          style={{ paddingTop: isMobile ? "96px" : undefined }}
        >
          <div className="max-w-3xl flex flex-col gap-6">
            <div>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
                Education & Child Development
              </h1>


            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href="#about"
                className="px-8 py-3.5 rounded-full border-2 border-white/60 bg-white/5 hover:bg-white/10 text-white font-extrabold text-xs tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:border-white text-center min-w-[160px]"
              >
                Know More
              </a>
            </div>
          </div>
        </div>
      </div>


      <section className=" py-24 px-6 md:px-12 lg:px-20 pl-2 bg-[#f6efe6]">
      <div className="gap-20 programmes-section w-full">

        {/* WHY EDUCATION */}
        <div className="mb-20">
          <h2 className="text-4b200c text-7xl font-light leading-none">
            WHY Education
          </h2>

          <p className="mt-8 text-4b200c text-2xl">
            If we need to address healthcare, poverty, population control,
            unemployment and human rights, there's no better way to start than
            providing education to children in need. Education not only empowers
            children to have a secure future but also helps them grow up as
            responsible national and global citizens.
          </p>

          <p className="mt-8 text-4b200c text-2xl ">
            The Right to Education (RTE) Act made education free and compulsory
            for all children in the age group of 6–14 years. Yet many children
            continue to face barriers such as socio-economic challenges, lack of
            access, and inadequate learning environments.
          </p>
        </div>

        {/* WHAT WE DO */}
        <div>
          <h2 className="text-4b200c text-7xl font-light leading-none">
            WHAT WE DO
          </h2>

          <p className="mt-8 text-4b200c text-2xl ">
            Aakritii NGO's flagship programme, Mission Education, focuses on
            empowering underprivileged children through education, nutrition,
            and holistic development. The programme aligns with the National
            Education Policy (2020) and Sustainable Development Goal 4,
            promoting inclusive and equitable quality education.
          </p>

          <p className="mt-8 text-4b200c text-2xl">
            We work with children from vulnerable communities, including those
            living in remote villages, tribal belts, disaster-affected regions,
            and urban settlements, ensuring every child has an opportunity to
            learn, grow, and succeed.
          </p>
        </div>

      </div>
    </section>


    </section>



  );
}