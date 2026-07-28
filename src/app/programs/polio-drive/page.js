'use client';

import { useState } from 'react';

export default function PolioDrivePage() {
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
              Polio Drive.
            </h1>
          </div>
        </div>

        <br /><br />
        <div className="site-container pb-20 md:pb-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden rounded-md bg-[#E8DCCE] shadow-sm">
              <img
                src="/img/community-4.png"
                alt="Polio Drive"
                className="h-[320px] w-full object-cover md:h-[370px]"
              />
            </div>

            <div className="text-[#5E5045]">
              <p className="text-lg leading-8 md:text-xl md:leading-9">
                There's a certain kind of relief you feel watching a child cry for two seconds after a vaccine, then run right back to playing. It's such a small moment. But it means something big happened. India has been polio-free since 2014. That's not a small thing either. It took decades of door-to-door drives, drops given twice, three times, sometimes more, to make sure not a single child was missed. But polio-free doesn't mean the job is done. As long as the virus exists anywhere in the world, every unvaccinated child is still at risk. And for a disease where 1 in 200 infections can cause permanent paralysis, that risk isn't one anyone can afford to ignore.
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
              That's the quiet, unglamorous work behind polio eradication. Not one big campaign, but small ones, ward by ward, making sure every child under five gets covered. Kodigehalli was our ward this time. More are planned across Bangalore. From 30th June to 4th July 2026, our team set out to vaccinate every child between 0 and 5.5 years in the area. 20 volunteers and 5 interns went street by street, house by house, keeping track of every child, every dose, every family that needed convincing or just a reminder. By the end of five days, we had vaccinated 5,400 children.
            </p>
          </div>
        </div>
        <br /><br /><br /><br /><br /><br />
      </section>
    </main>
  );
}
