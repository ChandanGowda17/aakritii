'use client';

import { useState } from 'react';

export default function SeedBallMakingPage() {
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
                    Stitch and Sustain.
            </h1>
          </div>
        </div>

        <br /><br />
        <div className="site-container pb-20 md:pb-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden rounded-md bg-[#E8DCCE] shadow-sm">
              <img
                src="/img/stitch-and-sustain.jpeg"
                alt="Stitch and Sustain"
                className="h-[320px] w-full object-cover md:h-[370px]"
              />
            </div>

            <div className="text-[#5E5045]">
              <p className="text-lg leading-8 md:text-xl md:leading-9">
                We started tailoring classes for women in the community. Not a one-off workshop. Regular sessions, cutting and stitching until it became a skill they actually owned, not just something they sat through once. The reason is simple. Tailoring is work you can do from home, on your own schedule, without asking anyone for permission. That's rare. Most of the women who joined had never had a skill that could earn them money independently.
              </p>
            </div>
          </div>
          <br />

          {/* Mobile-only read more button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="lg:hidden mt-6 px-6 py-2 bg-[#D46C32] text-white rounded hover:bg-[#b85a2a] transition-colors"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>

          {/* Text below - hidden on mobile by default, shown when expanded */}
          <div className={`${isExpanded ? 'block' : 'hidden'} lg:block mt-10`}>
            <p className="max-w-full text-[#5E5045] text-xl leading-10">
              A few weeks in, some were already altering clothes for neighbors and charging for it. Small amounts, but their own. It's not a fix for everything. One set of classes doesn't change a household overnight. But it gives someone a way to earn that didn't exist before, and that tends to stick around longer than the program does.
            </p>
          </div>
        </div>
        <br /><br /><br /><br /><br /><br />
      </section>
    </main>
  );
}
