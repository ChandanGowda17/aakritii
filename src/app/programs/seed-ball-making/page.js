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
                    Seed Ball Making.
            </h1>
          </div>
        </div>

        <br /><br />
        <div className="site-container pb-20 md:pb-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden rounded-md bg-[#E8DCCE] shadow-sm">
              <img
                src="/img/seedball.jpeg"
                alt="Seed Ball Making"
                className="h-[320px] w-full object-cover md:h-[370px]"
              />
            </div>

            <div className="text-[#5E5045]">
              <p className="text-lg leading-8 md:text-xl md:leading-9">
Hand a kid under ten a lump of wet mud and tell them to make something out of it. Half of them get straight to work. The other half just want to see how messy they can get. Both are fine by us. At the Government Lower Primary School in Amruthalli, we spent a day doing exactly that with a group of kids, most of them under ten. The idea was simple: seed balls, little pellets made of soil, compost, and native seeds, that get scattered on open land and left to do their own thing when the rains come. No digging, no planting rows, just mud, seeds, and a bit of throwing.              </p>
            </div>
          </div>
          <br />

          {/* Text below - hidden on mobile by default, shown when expanded */}
          <div className={`${isExpanded ? 'block' : 'hidden'} lg:block mt-10`}>
            <p className="max-w-full text-[#5E5045] text-xl leading-10">
Five of our interns spent close to 48 hours across the project, from prepping the material to running the actual session with the kids. Around 40 children took part, rolling mud between their palms, packing seeds inside, and lining up their little balls to dry, some neat, some barely holding together, all of them proud of what they'd made. We also handed out books while we were there, because a good day shouldn't end when the mud dries. It's a small activity on paper. A few kids, some seed balls, an afternoon. But somewhere out there, a patch of open land is going to have a few more trees than it would have otherwise, because a handful of eight year olds spent an afternoon getting their hands dirty for it. If you've got a free morning and don't mind mud under your nails, this is about as easy as volunteering gets.             </p>
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
