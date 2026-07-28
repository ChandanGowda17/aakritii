'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProgramPage() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeProgram, setActiveProgram] = useState(0);

  const programs = [
    {
      id: 1,
      name: "Polio Drive",
      image: "/img/community-4.png",
      slug: "polio-drive"
    },
    {
      id: 2,
      name: "Eye Camps",
      image: "/img/eye-camp-1.jpg",
      slug: "eye-camps"
    },
    {
      id: 3,
      name: "Clean and Drive Trek",
      image: "/img/environment/env-8.png",
      slug: "clean-and-drive-trek"
    },
    {
      id: 1,
      name: "Polio Drive",
      image: "/img/community-4.png",
      slug: "polio-drive"
    },
    {
      id: 2,
      name: "Eye Camps",
      image: "/img/eye-camp-1.jpg",
      slug: "eye-camps"
    },
    {
      id: 3,
      name: "Clean and Drive Trek",
      image: "/img/environment/env-8.png",
      slug: "clean-and-drive-trek"
    }
  ];

 return (
    <main className="bg-[#F8F1E6] text-[#4b200c] pt-[86px] max-lg:pt-[72px]">
<section className="education-info-section h-full px-8 sm:px-10 md:px-12 lg:px-20 bg-[#f6efe6] overflow-hidden" style={{ paddingTop: '86px' }}>
        
        <div className="site-container mb-20 text-left">

        {/* Hero */}
     
        <div className="pt-16 pb-10 justify-start">
          <div className="h-10"></div>
          <p className="text-[#D46C32] uppercase tracking-[0.35em] text-sm font-semibold">
            Our Programs
          </p>
          <br/>

          <h1 className="mt-6 text-[#7A4A2B] text-5xl md:text-6xl lg:text-7xl font-light font-serif leading-[1.05]">
            Why Aakritii.
          </h1>

          <p className="mt-10 max-w-full text-[#5E5045] text-xl leading-10">
            We started small, and honestly, we still are. What we do changes month to month, depending on what needs doing. One month it's a vaccination drive in a ward that doesn't get enough attention. Another month it's a trek where we spend half the day picking up someone else's trash off a hillside. Sometimes it's a village school, doctors and volunteers checking eyes one by one, handing out glasses to people who've squinted their way through years without knowing they didn't have to.
          </p>
      </div><br /><br /><br />
      </div>

      {/* Program Buttons */}
      <section className="bg-white w-full py-20">
        <div className="site-container text-center"><br /><br />
          <h2 className="text-[#4b200c] text-5xl md:text-6xl lg:text-7xl font-light font-serif leading-[1.05]">
            By Program
          </h2>
          <br />
          <p className="mt-10 w-full mx-auto text-[#5E5045] text-xl leading-10">
            Explore our various programs and initiatives
          </p>
          <br />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-full mx-auto">
            {programs.map((program, index) => (
              <Link key={index} href={`/programs/${program.slug}`} className="cursor-pointer">
                <div className={`overflow-hidden rounded-lg border-2 transition-all duration-300 border-[#E8DCCE] hover:border-[#D46C32]`}>
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-[200px] object-cover"
                  />
                </div><br />
                <button
                  className="mt-4 w-full h-14 px-4 py-2 rounded-lg border-2 border-[#7A4A2B] bg-[#7A4A2B] text-white text-sm font-semibold transition-colors hover:border-[#D46C32] hover:text-[#D46C32] hover:bg-white"
                >
                  {program.name}
                </button>
              </Link>
            ))}
          </div>
        </div>
        <br /><br />
      </section>

      </section>
    </main>
  );
}
