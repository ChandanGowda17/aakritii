"use contract";
"use client";

import Link from "next/link";
import { useState, useEffect } from 'react';

const carouselItems = [
  {
    id: 1,
    image: "/img/home-landing-1.png",
    title: "Education and Child Development",
    description: "Building stronger communities through education, healthcare, and sustainable development initiatives.",
    link: "pages/education"
  },
  {
    id: 2,
    image: "/img/community-1.png",
    title: "Community Development",
    description: "Creating opportunities for social engagement and skill development across underserved areas.",
    link: "pages/community"
  },
  {
    id: 3,
    image: "/img/home-landing-3.jpg",
    title: "Environmental Sustainability",
    description: "Driving positive change through tree plantations, awareness programs, and eco-friendly practices.",
    link: "pages/environment"
  },
  {
    id: 4,
    image: "/img/home-landing-4.jpg",
    title: "Health and Well Being",
    description: "Providing quality education and holistic development opportunities for all the children in need.",
   link: "pages/health"
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <section id="home" className="hero-section relative pt-24 min-h-screen bg-[#3A2312] overflow-hidden">
      {/* Curved Container Matching your Screen */}
      <div className="hero-shell relative w-full min-h-[85vh] lg:min-h-[90vh] bg-[#4E3629] curved-hero-container flex items-center justify-center py-16 px-6">

        {/* Image Carousel Background */}
        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
          {carouselItems.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentIndex
                  ? 'opacity-100 translate-x-0'
                  : index === (currentIndex - 1 + carouselItems.length) % carouselItems.length
                  ? 'opacity-0 translate-x-[-100%]'
                  : 'opacity-0 translate-x-full'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#401905]/85 via-[#5a2d14]/50 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Hero Grid Content */}
        <div
          className="hero-content site-container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full"
          style={{ paddingTop: isMobile ? '96px' : undefined }}
        >

          {/* Left Text Block */}
          <div className="hero-copy lg:col-span-8 flex flex-col gap-6 text-left w-full">

            <div className="flex flex-col gap-2">
              <h1 className="hero-title text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-light font-serif">
                Aakritii NGO
              </h1>
              <h2 className="hero-subtitle text-sm sm:text-xl font-light font-serif font-extrabold text-white/90 tracking-wide font-sans">
                Empower. Transform. Inspire
              </h2>
            </div>

            {/* Scrolling Carousel Text */}
            <div className="mt-8 overflow-hidden">
              <div
                key={currentIndex}
                className="transition-all duration-500 ease-in-out"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 font-light font-serif">
                  {carouselItems[currentIndex].title}
                </h3>
                <p className="font-light font-serif hero-description text-[0.95rem] sm:text-[1.05rem] text-neutral-300 leading-relaxed max-w-2xl font-light">
                  {carouselItems[currentIndex].description}
                </p>
              </div>
            </div>

            <p className="hero-description hero-description-strong font-light font-serif text-[0.95rem] sm:text-[1.05rem] font-bold text-white max-w-2xl leading-relaxed mt-2">
              Whether you are an individual volunteer, a student group, or a corporate organisation, there is a place for you at Aakritii NGO.
            </p>

            

            {/* Carousel Indicators */}
            <div className="flex gap-2 mt-4">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-white w-8' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>

            {/* double pill action buttons */}
            <div className="hero-actions flex flex-wrap gap-4 mt-6">
             <a
  href={carouselItems[currentIndex].link}
  className="hero-action-link px-8 py-3.5 rounded-full border-2 border-white/60 bg-white/5 hover:bg-white/10 text-white font-extrabold text-[0.8rem] tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:border-white text-center min-w-[160px]"
>
  KNOW MORE
</a>
             
            </div>
          </div>



        </div>
      </div>
    </section>
  );
}
