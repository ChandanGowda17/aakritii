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
                    Women's Day.
            </h1>
          </div>
        </div>

        <br /><br />
        <div className="site-container pb-20 md:pb-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden rounded-md bg-[#E8DCCE] shadow-sm">
              <img
                src="/img/womens-day-1.jpg"
                alt="Women's Day"
                className="h-[320px] w-full object-cover md:h-[370px]"
              />
            </div>

            <div className="text-[#5E5045]">
              <p className="text-lg leading-8 md:text-xl md:leading-9">
                Women's Day gets a lot of flowers and captions. We wanted to do something that actually helped someone's week. So we did two things. We handed out groceries to women in the community. And we went into a local school and gave out sanitary pads to young girls, along with a conversation most of them never get to have openly.
              </p>
            </div>
          </div>
          <br />

          {/* Text below - hidden on mobile by default, shown when expanded */}
          <div className={`${isExpanded ? 'block' : 'hidden'} lg:block mt-10`}>
            <p className="max-w-full text-[#5E5045] text-xl leading-10">
              Periods are still something a lot of girls learn to be quiet about. Not because anyone tells them to be, but because nobody tells them otherwise. A pad in hand and a straightforward conversation about it does more to chip away at that silence than any poster ever could. Neither part of the day was complicated. Food doesn't need an explanation, and pads don't either. But the reactions told us it mattered. Some girls asked questions they'd clearly been sitting on for a while. Some women just said thank you and meant it. None of it fixes things overnight. But a straightforward conversation, held often enough, does more than silence ever did. Because a period shouldn't be something anyone has to whisper about.
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
