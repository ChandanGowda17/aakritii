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
              <h1 className="hero-title text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-serif">
Environmental sustainability             </h1>
              
            </div>

            <p className="hero-description text-[0.95rem] sm:text-[1.05rem] text-neutral-300 leading-relaxed max-w-2xl font-light">
Environmental sustainability is at the heart of Aakritii NGO's mission to create lasting change. We work to protect and restore our planet through tree plantations, waste management, water conservation, and community awareness programs. By engaging communities in sustainable practices, we aim to build a greener, healthier future for generations to come.
            </p>
          </div>
          
</div>
      </div>
    </section>
<br/>
      


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
            Environment and Sustainability
          </h1>
<br/>
          <p className="mt-10 max-w-3xl text-[#5E5045] text-xl leading-10">
            <span className="font-bold">Tree Plantation</span><br/>
Planting native tree species to restore ecosystems, improve air quality, and combat climate change in rural and urban areas.         </p>
      </div>
      </div>
<div className="h-10"></div>
      

      <div className="site-container pb-20 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-[20px] bg-[#E8DCCE] shadow-sm">
            <img
              src="/img/environment-1.png"
              alt="Children engaged in educational activities"
              className="h-[320px] w-full object-cover md:h-[370px]"
            />
          </div>

          <div className="text-[#5E5045]">
            <p className="text-lg leading-8 md:text-xl md:leading-9">
             <span className="font-bold">Waste Management</span><br/>
Implementing sustainable waste management practices including recycling, composting, and awareness campaigns for cleaner communities.            </p>

            <p className="mt-8 text-lg leading-8 md:text-xl md:leading-9">
              <span className="font-bold">Awareness Programs</span><br/>
Educating communities about environmental protection, sustainable living, and climate action through workshops and campaigns.<br/>
             
            </p>
          </div>
        </div>
      </div>

      </section>




      {/* WHY EDUCATION SECTION */}
      <section className="education-info-section h-full px-8 sm:px-10 md:px-12 lg:px-20 bg-[#f6efe6] overflow-hidden">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="max-w-7xl mx-auto w-full">

          <div className="mb-16 md:mb-24">
            <br/><br/>
            <h2 className="text-[#4b200c] text-3xl sm:text-5xl md:text-6xl font-light font-serif leading-tight">
              WHY Environment
            </h2>
<br/>
            <p className="mt-8 text-[#4b200c] text-lg sm:text-xl md:text-2xl leading-relaxed">
           Protecting the environment is essential for building healthy, sustainable, and resilient communities. Rapid urbanization, deforestation, pollution, and climate change continue to threaten natural ecosystems and the well-being of future generations. By encouraging environmental awareness and responsible practices, we can preserve biodiversity, improve public health, and create greener spaces for everyone.
            </p>
<br/>
            <p className="mt-8 text-[#4b200c] text-lg sm:text-xl md:text-2xl leading-relaxed">
              Education empowers children with knowledge, confidence, and the opportunity to build a brighter future while becoming responsible citizens of society.
            </p>
          </div>
<br/><br/>
          <div>
            <h2 className="text-[#4b200c] text-3xl sm:text-5xl md:text-6xl font-light font-serif leading-tight">
              WHAT WE DO
            </h2>
<br/>
            <p className="mt-8 text-[#4b200c] text-lg sm:text-xl md:text-2xl leading-relaxed">
              At Aakritii NGO, we work to inspire environmental responsibility through community-driven initiatives that promote conservation, sustainability, and climate awareness. Our programmes focus on tree plantation drives, waste management awareness, water conservation, clean-up campaigns, and environmental education that encourage individuals to become active stewards of nature.
            </p>
<br/>
            <p className="mt-8 text-[#4b200c] text-lg sm:text-xl md:text-2xl leading-relaxed">
         We work with children from vulnerable communities including remote villages, tribal regions, and underserved urban areas, ensuring every child gets an opportunity to learn and succeed.
            </p>
          </div>
<br/><br/>
        </div>
        </div>
      </section>
    </section>
  );
}
