"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SupportSection() {
  const [positions, setPositions] = useState([0, 1, 2]);

  const cards = [
    { id: 1, src: "/img/community-4.png", alt: "Environment" },
    { id: 2, src: "/img/health-2.png", alt: "Health" },
    { id: 3, src: "/img/education-4.png", alt: "Education" }
  ];

  const cardStyles = [
    // 0: Back Left
    "absolute w-[55%] sm:w-[50%] h-[60%] bg-white p-3 sm:p-4 rounded-2xl shadow-2xl -rotate-6 -translate-x-[25%] -translate-y-[15%] transition-all duration-500 hover:-rotate-12 hover:-translate-x-[30%] hover:-translate-y-[20%] hover:scale-105 z-10 cursor-pointer",
    // 1: Back Right
    "absolute w-[55%] sm:w-[50%] h-[65%] bg-white p-3 sm:p-4 rounded-2xl shadow-2xl rotate-12 translate-x-[25%] -translate-y-[5%] transition-all duration-500 hover:rotate-[16deg] hover:translate-x-[30%] hover:-translate-y-[10%] hover:scale-105 z-20 cursor-pointer",
    // 2: Front
    "absolute w-[60%] sm:w-[55%] h-[75%] bg-white p-3 sm:p-4 rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] z-30 transition-all duration-500 hover:-translate-y-[5%] hover:scale-105 cursor-pointer"
  ];

  const handleCardClick = (cardIndex) => {
    const clickedPosition = positions[cardIndex];
    
    if (clickedPosition === 2) {
      // If clicking the front card, cycle all cards forward
      const newPositions = positions.map(pos => (pos + 1) % 3);
      setPositions(newPositions);
      return;
    }

    const newPositions = [...positions];
    const indexOfFrontCard = positions.indexOf(2);

    // Swap the clicked card to the front
    newPositions[cardIndex] = 2;
    newPositions[indexOfFrontCard] = clickedPosition;
    
    setPositions(newPositions);
  };

  return (
    <section id="support" className="bg-[#f6efe6] min-h-screen py-20 md:py-32 px-4 md:px-6 overflow-hidden flex justify-center items-center md:mt-40">
      <div className="max-w-[1120px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20">
          
          {/* Left Side */}
          <div className="w-full lg:w-[45%] z-10 text-center lg:text-left flex flex-col items-center lg:items-start">
            <br/> <br/><h2 className="text-4xl md:text-5xl font-light font-serif lg:text-7xl font-bold text-#81503b leading-tight mb-8">
              Your Chance To <br className="hidden lg:block"/> Transform Lives
            </h2>
            
            <p className="text-#81503b text-lg md:text-xl mb-12 max-w-[45ch] leading-relaxed text-center lg:text-left">
              We rely on your support to drive change. Help us provide education, improve health, and protect our environment. Every contribution makes an impact.
            </p>
            <br/>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              
              <Link href="/join" className="flex justify-center items-center h-12 w-40 bg-[#e8372b] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-[#d12f24] transition-all hover:-translate-y-1 shadow-[0_10px_20px_rgba(232,55,43,0.3)]">
                Join Us
              </Link>
            </div>
          </div>
          
          {/* Right Side - Overlapping Card Design */}
          <div className="w-full lg:w-[45%] relative h-[450px] sm:h-[550px] lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0">
            {cards.map((card, index) => {
              const pos = positions[index];
              return (
                <div 
                  key={card.id} 
                  className={cardStyles[pos]}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                     <Image src={card.src} alt={card.alt} fill className="object-cover" sizes="500px" />
                  </div>
                  
                 
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}
