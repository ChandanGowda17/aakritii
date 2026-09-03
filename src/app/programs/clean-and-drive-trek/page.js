'use client';

import { useState } from 'react';

export default function CleanAndDriveTrekPage() {
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
              Clean and Drive Trek.
            </h1>
          </div>
        </div>

        <br /><br />
        <div className="site-container pb-20 md:pb-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden rounded-md bg-[#E8DCCE] shadow-sm">
              <img
                src="/img/environment/env-8.png"
                alt="Clean and Drive Trek"
                className="h-[320px] w-full object-cover md:h-[370px]"
              />
            </div>

            <div className="text-[#5E5045]">
              <p className="text-lg leading-8 md:text-xl md:leading-9">
                There's a certain quiet you find on a hill trail. Birds, wind, the sound of your own breathing as you climb. It's part of why so many of us fall for trekking in the first place. Lately, that quiet keeps getting interrupted. Wrappers stuck between rocks, bottles left behind, garbage sitting in the exact places we go to get away from it all. It adds up more than people realize. Plastic doesn't disappear. It just sits there for years. Rain carries it into streams animals drink from. Cattle and wildlife end up eating what isn't food. One wrapper doesn't look like much, until a hillside is covered in them.
              </p>
            </div>
          </div>
          <br />

          {/* Text below - hidden on mobile by default, shown when expanded */}
          <div className={`${isExpanded ? 'block' : 'hidden'} lg:block mt-10`}>
            <p className="max-w-full text-[#5E5045] text-xl leading-10">
              The numbers back this up. In one clean-up drive in Uttarakhand, a group collected 274 kg of waste from a single hotspot in just an hour. Elsewhere in Himachal Pradesh, six people picked up around 50 kg of trash covering barely 500 metres of trail. Most of it was food packaging, and much of that kind of plastic can't even be recycled because it's made of multiple layers stuck together. This isn't a one-off problem either. One Himalayan cleanup group has collected over 800,000 kg of waste since 2016, running 40 to 50 cleanup treks every year. Closer home, groups clearing trails near Bengaluru have been hauling away tonnes of waste from popular hiking spots. The scale tells you this isn't a few careless people. It's a habit that's built up over years, trek after trek.
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
