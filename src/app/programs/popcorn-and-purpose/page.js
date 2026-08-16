'use client';

import { useState } from 'react';

export default function PopcornAndPurposePage() {
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
              Popcorn and Purpose.
            </h1>
          </div>
        </div>

        <br /><br />
        <div className="site-container pb-20 md:pb-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden rounded-md bg-[#E8DCCE] shadow-sm">
              <img
                src="/img/popcorn.jpeg"
                alt="Popcorn and Purpose"
                className="h-[320px] w-full object-cover md:h-[370px]"
              />
            </div>

            <div className="text-[#5E5045]">
              <p className="text-lg leading-8 md:text-xl md:leading-9">
Some of the kids we work with rarely get a day that's just for fun. Between school, chores, and everything else going on at home, a trip to the movies isn't something that comes up often, or at all. So we decided to make one happen.               </p>
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
              Popcorn & Purpose was exactly what it sounds like. Together with Priyadarshini School and Friendship Foundation in Hebbal, we took a group of kids out for a movie day at Bhartiya City Mall. 15 of us, students and working professionals, spent the day making sure it actually felt like a day out, not another errand with extra steps. There was popcorn, obviously. There was a movie. And there were about 600 kids getting a few hours that had nothing to do with responsibility or routine, just a screen, some snacks, and their friends sitting next to them. We picked Valavaara for the outing, a Kannada family drama about two young brothers and the bond between them, set against the hills of Sakleshpur. It's a gentle, slow-paced story about family, sibling rivalry, and growing up. Reviewers have called it a heart-warming, tender film that resists the usual over-the-top drama. It felt like the right kind of story to put in front of a room full of children, one about family and small joys of life.
            </p>
          </div>
        </div>
        <br /><br /><br /><br /><br /><br />
      </section>
    </main>
  );
}
