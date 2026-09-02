"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SupportSection() {
  const [startIndex, setStartIndex] = useState(0);

  const cards = [
    { id: 1, src: "/img/beautification.jpeg", alt: "Environment" },
    { id: 2, src: "/img/womens-day-5.jpg", alt: "Health" },
    { id: 3, src: "/img/education-4.png", alt: "Education" },
    { id: 4, src: "/img/house-for-wings-1.jpg", alt: "House for Wings" },
    { id: 5, src: "/img/soul-and-soil-1.jpg", alt: "sould and soil" },
    { id: 6, src: "/img/polio-1.jpeg", alt: "Polio Drive" },
  ];

  // The 3 visual positions
  const cardStyles = [
    // Back Left
    "absolute w-[55%] sm:w-[50%] h-[60%] bg-white p-3 sm:p-4 rounded-2xl shadow-2xl -rotate-6 -translate-x-[25%] -translate-y-[15%] transition-all duration-500 hover:-rotate-12 hover:-translate-x-[30%] hover:-translate-y-[20%] hover:scale-105 z-10 cursor-pointer",

    // Back Right
    "absolute w-[55%] sm:w-[50%] h-[65%] bg-white p-3 sm:p-4 rounded-2xl shadow-2xl rotate-12 translate-x-[25%] -translate-y-[5%] transition-all duration-500 hover:rotate-[16deg] hover:translate-x-[30%] hover:-translate-y-[10%] hover:scale-105 z-20 cursor-pointer",

    // Front
    "absolute w-[60%] sm:w-[55%] h-[75%] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] z-30 transition-all duration-500 hover:-translate-y-[5%] hover:scale-105 cursor-pointer",
  ];

  // Get 3 cards currently visible
  const visibleCards = [
    cards[startIndex % cards.length],
    cards[(startIndex + 1) % cards.length],
    cards[(startIndex + 2) % cards.length],
  ];

  const handleCardClick = () => {
    // Move to the next image
    setStartIndex((prev) => (prev + 1) % cards.length);
  };

  return (
    <section
      id="support"
      className="bg-[#f6efe6] min-h-screen py-20 md:py-32 px-4 md:px-6 overflow-hidden flex justify-center items-center md:mt-40"
    >
      <div className="max-w-[1120px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20">

          {/* Left Side */}
          <div className="w-full lg:w-[45%] z-10 text-center lg:text-left flex flex-col items-center lg:items-start">
            <br />
            <br />

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-serif text-[#81503b] leading-tight mb-8">
              Your Chance To
              <br className="hidden lg:block" /> Transform Lives
            </h2>

            <p className="text-[#81503b] text-lg md:text-xl mb-12 max-w-[45ch] leading-relaxed text-center lg:text-left">
              We rely on your support to drive change. Help us provide
              education, improve health, and protect our environment.
              Every contribution makes an impact.
            </p>

            <Link
              href="/join"
              className="flex justify-center items-center h-12 w-40 bg-[#e8372b] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-[#d12f24] transition-all hover:-translate-y-1 shadow-[0_10px_20px_rgba(232,55,43,0.3)]"
            >
              Join Us
            </Link>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-[45%] relative h-[450px] sm:h-[550px] lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0">

            {visibleCards.map((card, index) => (
              <div
                key={card.id}
                className={cardStyles[index]}
                onClick={handleCardClick}
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    className="object-cover"
                    sizes="500px"
                  />
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}