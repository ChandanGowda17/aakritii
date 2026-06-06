"use contract";
"use client";

import { useState, useEffect } from 'react';

export default function Hero() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="home" className="hero-section relative pt-24 min-h-screen bg-[#3A2312] overflow-hidden">
      {/* Curved Container Matching your Screen */}
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

        {/* Ambient Dark Overlay to ensure 100% white text contrast */}
        <div className="absolute inset-y-0 left-0 z-0 w-[62%] bg-gradient-to-r from-[#401905]/80 via-[#5a2d14]/45 to-transparent max-lg:w-full max-lg:from-[#401905]/75 max-lg:via-[#5a2d14]/40 max-lg:to-transparent"></div>

        {/* Hero Grid Content */}
        <div
          className="hero-content site-container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10"
          style={{ paddingTop: isMobile ? '96px' : undefined }}
        >

          {/* Left Text Block */}
          <div className="hero-copy lg:col-span-8 flex flex-col gap-6 text-left">

            <div className="flex flex-col gap-2">
              <h1 className="hero-title text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
                Aakritii NGO
              </h1>
              <h2 className="hero-subtitle text-2xl sm:text-4xl font-extrabold text-white/90 tracking-wide font-sans">
                Empower. Transform. Inspire
              </h2>
            </div>

            <p className="hero-description text-[0.95rem] sm:text-[1.05rem] text-neutral-300 leading-relaxed max-w-2xl font-light">
              Aakritii NGO is a Bengaluru-based, registered non-profit organisation working to empower underserved communities through education, awareness, social immersion, and grassroots engagement. We collaborate with volunteers, institutions, and corporate partners to design meaningful interventions that create measurable and lasting impact.
            </p>

            <p className="hero-description hero-description-strong text-[0.95rem] sm:text-[1.05rem] font-bold text-white max-w-2xl leading-relaxed mt-2">
              Whether you are an individual volunteer, a student group, or a corporate organisation, there is a place for you at Aakritii NGO.
            </p>

            {/* double pill action buttons */}
            <div className="hero-actions flex flex-wrap gap-4 mt-6">
              <a
                href="#about"
                className="hero-action-link px-8 py-3.5 rounded-full border-2 border-white/60 bg-white/5 hover:bg-white/10 text-white font-extrabold text-[0.8rem] tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:border-white text-center min-w-[160px]"
              >
                KNOW MORE
              </a>
              <a
                href="#donate"
                className="hero-action-link px-8 py-3.5 rounded-full border-2 border-white/40 bg-white/15 hover:bg-white/25 text-white font-extrabold text-[0.8rem] tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:border-white text-center min-w-[190px]"
              >
                CSR PARTNERSHIPS
              </a>
            </div>
          </div>



        </div>
      </div>
    </section>
  );
}
