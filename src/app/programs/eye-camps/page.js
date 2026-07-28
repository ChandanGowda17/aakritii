'use client';

import { useState } from 'react';

export default function EyeCampsPage() {
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
              Eye Camps.
            </h1>
          </div>
        </div>

        <br /><br />
        <div className="site-container pb-20 md:pb-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden rounded-md bg-[#E8DCCE] shadow-sm">
              <img
                src="/img/eye-camp-1.jpg"
                alt="Eye Camp"
                className="h-[320px] w-full object-cover md:h-[370px]"
              />
            </div>

            <div className="text-[#5E5045]">
              <p className="text-lg leading-8 md:text-xl md:leading-9">
                There's a particular look on someone's face when they see clearly again after years of squinting. It's not dramatic. Just a small pause, then a smile, like something clicked back into place. Vision loss creeps up slowly with age. Most elderly people just live with it. They stop reading, stop recognizing faces from a distance, and assume that's what getting old feels like. Many never get checked because a private eye doctor visit costs money they'd rather spend elsewhere. Or because nobody in the family thought to take them.
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
              So we ran a free eye checkup camp for elderly residents at the Government Primary School in Mangala village, Mandya taluk. Doctors and volunteers went through eye tests one by one, checking vision, noting who needed glasses, talking them through simple eye care habits. By the end of the day, over 200 elderly people had gotten a free eye checkup. More than 150 walked away with a pair of glasses at no cost. Our founder, Manasa M.K., spoke about how protecting eyesight is something every person has a role in, not just doctors.
            </p>
          </div>
        </div>
        <br /><br /><br /><br /><br /><br />
      </section>
    </main>
  );
}
