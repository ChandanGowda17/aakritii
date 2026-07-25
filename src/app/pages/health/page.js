"use client";

import { useState, useEffect } from "react";

export default function Education() {
  const programs = [
    {
      id: 1,
      title: "Care",
      image: "/img/education-1.png",
      description:
"Providing access to medical consultations, health camps, screenings, and essential healthcare services for underserved communities.",
      stat1: "20K+",      
      stat1Label: "Children Supported",
      stat2: "120+",
      stat2Label: "Learning Centers",
    },
    {
      id: 2,
      title: "Educate",
      image: "/img/health-1.png",
      description:
        "Empowering individuals with knowledge about nutrition, mental health, sanitation, disease prevention, and healthy lifestyle practices.",
      stat1: "20K+",
      stat1Label: "Beneficiaries",
      stat2: "300+",
      stat2Label: "Health Camps",
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


    const cards = [
    {
      title: "Care ",
      description:
        "Providing access to medical consultations, health camps, screenings, and essential healthcare services for underserved communities.",
    },
    {
      title: "Educate",
      description:
        "Empowering individuals with knowledge about nutrition, mental health, sanitation, disease prevention, and healthy lifestyle practices.",
    },
    {
      title: "Empower",
      description:
        "Building healthier communities by encouraging self-care, community participation, and long-term wellness through sustainable healthcare initiatives.",
    },
    {
      title: "Prevent",
      description:
        "Reducing disease burden through early detection, health education, and preventive care programs.",
    },
    
  ];

  return (
    <section
      id="health"
      className="relative bg-[#f6f2eb] min-h-screen"
    >
          <section id="home" className="hero-section relative pt-12 min-h-screen bg-[#3A2312] overflow-hidden">
      <div className="hero-shell relative w-full min-h-[85vh] lg:min-h-[90vh] bg-[#4E3629] curved-hero-container flex items-start justify-center py-8 px-6 pt-4">

      <img src="/img/health-3.jpg" alt="Health" className="absolute inset-0 w-full h-full object-cover" />

        <div className="absolute inset-y-0 left-0 z-0 w-[62%] bg-gradient-to-r from-[#401905]/80 via-[#5a2d14]/45 to-transparent max-lg:w-full max-lg:from-[#401905]/75 max-lg:via-[#5a2d14]/40 max-lg:to-transparent"></div>

        {/* Hero Grid Content */}
        <div
          className="hero-content site-container grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10 w-full"
          style={{ paddingTop: isMobile ? '48px' : '120px' }}
        >

          {/* Left Text Block */}
<div className="hero-copy lg:col-span-8 flex flex-col gap-6 text-left w-full pt-20 lg:pt-28">

  <div className="flex flex-col gap-4">
    <h1 className="hero-title text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-serif">
      Health & Wellness
    </h1>
  </div>

  <p className="mt-4 text-[0.95rem] sm:text-[1.05rem] text-neutral-300 leading-relaxed max-w-2xl font-light">
  Promoting healthier communities through accessible healthcare, preventive care, wellness awareness, and compassionate community support.

    <br /><br />

    We work with underserved communities to improve access to essential health services, encourage healthy lifestyles, and strengthen overall well-being through sustainable, community-driven healthcare initiatives.
  </p>

</div>
</div>
      </div>
    </section>

<section className="bg-[#F8F1E6] border-t border-[#E6DACB] w-full" style={{ paddingTop: '86px' }}>
      <div className="site-container mb-20 text-left">

        {/* Hero */}
     
        <div className="pt-16 pb-10 justify-start">
          <div className="h-10"></div>
          <p className="text-[#D46C32] uppercase tracking-[0.35em] text-sm font-semibold">
            About Us
          </p>
          <br/>

          <h1 className="mt-6 text-[#7A4A2B] text-5xl md:text-6xl lg:text-7xl font-light font-serif leading-[1.05]">
            A healthier and more 
            <br />
            resilient society
          </h1>
<br/>
          <p className="mt-10 max-w-3xl text-[#5E5045] text-xl leading-10">
            Aakritii NGO was founded on a simple yet powerful belief: meaningful change happens when individuals come together with a shared purpose.
          </p>
      </div>

<div className="h-20"></div>
      </div>

      <div className="site-container pb-20 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-[20px] bg-[#E8DCCE] shadow-sm">
            <img
              src="/img/health-4.jpg"
              alt="Women participating in a community development activity"
              className="h-[320px] w-full object-cover md:h-[370px]"
            />
          </div>

          <div className="text-[#5E5045]">
            <p className="text-lg leading-8 md:text-xl md:leading-9">
              What began as a vision to contribute positively to society has evolved into a
              platform that connects people, resources and opportunities to create lasting
              community impact.
            </p>

            <p className="mt-8 text-lg leading-8 md:text-xl md:leading-9">
              Driven by compassion and a commitment to social responsibility, Aakritii
              works across education, health and well-being, environmental sustainability,
              community empowerment, and volunteer engagement.
            </p>
          </div>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/>
      <div className="bg-[#EFE3D3] py-16 md:py-24" style={{ paddingLeft: "clamp(18px, 4vw, 48px)", paddingRight: "clamp(18px, 4vw, 48px)" }}> <br/><br/><br/><br/><br/><br/>
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-[20px] border border-[#E2D2C0] bg-[#FFFCF8]" style={{ padding: "clamp(32px, 5vw, 56px)" }}>
              <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#D46C32]">
                Vision
              </p>

              <h2 className="mt-6 font-serif text-3xl leading-tight text-[#7A3F1E] md:text-4xl">
               A healthier and more resilient society
              </h2><br />

              <p className="mt-7 text-lg leading-8 text-[#4F4035] md:text-xl md:leading-9">
                To build healthy, informed, and empowered communities where every individual has access to quality healthcare, preventive services, and the knowledge needed to lead a healthy and dignified life.
              </p>
            </article>

            <article className="rounded-[20px] bg-[#7A4724] text-[#F4E6D8]" style={{ padding: "clamp(32px, 5vw, 56px)" }}>
              <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#D46C32]">
                Mission
              </p>

              <h2 className="mt-6 font-serif text-3xl leading-tight text-white md:text-4xl">
               Promote community health and well-being
              </h2><br />

              <ul className="mt-8 space-y-4 text-base font-semibold leading-7 md:text-lg">
                {[
                  "Improve access to quality healthcare services.",
                  "Enhance health, well-being and community care.",
                  "Promote preventive health and wellness awareness.",
                  "Build resilient and informed communities.",
                  "Foster compassionate and inclusive healthcare support.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#D46C32] text-xs text-[#D46C32]">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div><br/><br/><br/><br/><br/><br/><br/>
        </div>
      </div>


      </section>
      <div className="site-container mb-20 text-left"><br/> <br/>

        {/* Hero */}
     
        <div className="pt-16 pb-10 justify-start">
          <div className="h-10"></div>
          <p className="text-[#D46C32] uppercase tracking-[0.35em] text-sm font-semibold">
            The Lifecycle Approach
          </p>
          <br/>

          <h1 className="mt-6 text-[#7A4A2B] text-4xl md:text-5xl lg:text-6xl font-light font-serif leading-[1.05]">
           Supporting health at every <br/>stage of life.
          </h1>

          
      </div>
</div>
<br /><br/>
<div >
        <div className="site-container py-12 sm:py-20">

          <div className="grid gap-5 sm:gap-8 sm:grid-cols-2 xl:grid-cols-4 mt-4 sm:mt-10">

            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-white border border-[#E8DCCE] rounded-[24px] sm:rounded-[30px] w-full aspect-auto xl:aspect-square flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{ padding: "clamp(1.25rem, 5vw, 1.75rem)" }}
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#D46C32]">
                  <svg
                    className="h-5 w-5 text-[#D46C32]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                  
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  
                </div>
                <br/>
                {/* Title */}
                <h3 className="mt-5 text-[2rem] leading-snug font-semibold text-[#5A2E16]">
                  {card.title}
                </h3>

                {/* Content */}
                <p className="mt-3 text-[1.1rem] leading-6 text-[#62564B]">
                  {card.description}
                </p>
              </div>
            ))}

          </div>

        </div>
        <div className="h-25"></div>
      </div>
      


        

    </section>
  );
}

