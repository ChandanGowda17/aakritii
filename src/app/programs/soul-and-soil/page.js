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
                    Soul and Soil.
            </h1>
          </div>
        </div>

        <br /><br />
        <div className="site-container pb-20 md:pb-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden rounded-md bg-[#E8DCCE] shadow-sm">
              <img
                src="/img/soul-and-soil.jpeg"
                alt="Soul and Soil"
                className="h-[320px] w-full object-cover md:h-[370px]"
              />
            </div>

            <div className="text-[#5E5045]">
              <p className="text-lg leading-8 md:text-xl md:leading-9">
                We took a group of volunteers out to a farm and had them plant rice. Not watch, not photograph from the edge of the field. Actually step into the mud and do it alongside the farmers who do this every day. Most people showed up without knowing what they were getting into. Rice planting is bent-over, ankledeep work. It's slow, and your back feels it within the first twenty minutes.
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
              That was kind of the point. It's easy to talk about farmers and food security in the abstract. It's harder to plant one row and realize how much labor sits behind something as ordinary as a plate of rice. The farmers didn't need the help. They were faster and better at it than any of us. But they were patient, showed people how to hold the seedlings, corrected a lot of bad form. By the end, a few volunteers could actually keep pace. Nobody left with sore muscles and a changed life. But most left with a different sense of what farming actually costs, and a little more respect for the people who do it without anyone watching.
            </p>
          </div>
        </div>
        <br /><br /><br /><br /><br /><br />
      </section>
    </main>
  );
}
