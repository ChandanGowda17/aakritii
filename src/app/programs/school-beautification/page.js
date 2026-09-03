'use client';

import { useState } from 'react';

export default function SchoolBeautificationPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <main className="bg-[#F8F1E6] text-[#4b200c] pt-[86px] max-lg:pt-[72px]">
      <section className="education-info-section h-full px-8 sm:px-10 md:px-12 lg:px-20 bg-[#f6efe6] overflow-hidden" style={{ paddingTop: '86px' }}>
        <div className="site-container mb-20 text-left">
          <div className="pt-16 pb-10 justify-start">
            <div className="h-10"></div>
            <p className="text-[#D46C32] uppercase tracking-[0.35em] text-sm font-semibold">
              Our Programs
            </p>
            <br />
            <h1 className="mt-6 text-[#7A4A2B] text-5xl md:text-6xl lg:text-7xl font-light font-serif leading-[1.05]">
                    School Beautification.
            </h1>
          </div>
        </div>

        <br /><br />
        <div className="site-container pb-20 md:pb-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden rounded-md bg-[#E8DCCE] shadow-sm">
              <img
                src="/img/beautification.jpeg"
                alt="School Beautification"
                className="h-[320px] w-full object-cover md:h-[370px]"
              />
            </div>

            <div className="text-[#5E5045]">
              <p className="text-lg leading-8 md:text-xl md:leading-9">
                Kids notice a lot more than we think. A cracked wall, a board that's faded for years, a corridor that's been the same dull grey since forever. They don't say anything about it, but they notice. Sir.MV Educational Trust in Shivalli is a government school, and like most schools, paint and touch-ups usually wait their turn behind bigger priorities. Walls fade a bit, corners chip, and it stays that way simply because there's always something more pressing to spend on first.
              </p>
            </div>
          </div>
          <br />

          {/* Text below - hidden on mobile by default, shown when expanded */}
          <div className={`${isExpanded ? 'block' : 'hidden'} lg:block mt-10`}>
            <p className="max-w-full text-[#5E5045] text-xl leading-10">
              So we picked up brushes for a day and did something about it. 20 of us, students and working professionals, spent a day painting walls, brightening corridors, turning bare corners into something a kid might actually enjoy looking at on the way to class. 72 volunteer hours later, close to 400 children had a school that looked like somewhere worth showing up to. Paint doesn't fix a leaking roof or stretch a tight budget. But it does something else, it makes a kid walk in one morning and notice that someone spent a day making the place look better, just for them. A repainted wall isn't going to end up in any newspaper. But if you ask a child which classroom they'd rather sit in though, the dull one or the one that just got some color, they’d pick the colourful one, every single time. And that's the whole reason we spent a day with paint on our hands.
            </p>
          </div>

          {/* Mobile-only read more button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="lg:hidden mt-6 px-6 py-2 bg-[#D46C32] text-white rounded hover:bg-[#b85a2a] transition-colors"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
        <br /><br /><br /><br /><br /><br />
      </section>
    </main>
  );
}
