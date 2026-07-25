'use client';

import { useState } from 'react';

export default function ProgramPage() {
  const [isExpanded, setIsExpanded] = useState(false);

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
      </div>
      </div>
        
        
        
<br/><br/>
          <div className="site-container pb-20 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-md bg-[#E8DCCE] shadow-sm">

            <h1 className="mt-6 text-[#7A4A2B] text-3xl md:text-6xl lg:text-5xl font-light font-serif leading-[1.05]">
            Polio Drive.
          </h1>

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
<br/>
        
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
That's the quiet, unglamorous work behind polio eradication. Not one big campaign, but small ones, ward by ward, making sure every child under five gets covered. Kodigehalli was our ward this time. More are planned across Bangalore. From 30th June to 4th July 2026, our team set out to vaccinate every child between 0 and 5.5 years in the area. 20 volunteers and 5 interns went street by street, house by house, keeping track of every child, every dose, every family that needed convincing or just a reminder. By the end of five days, we had vaccinated 5,400 children.           </p>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/>


               <div className="site-container pb-20 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-md bg-[#E8DCCE] shadow-sm">

            <h1 className="mt-6 text-[#7A4A2B] text-3xl md:text-6xl lg:text-5xl font-light font-serif leading-[1.05]">
            Eye Camps.
          </h1>

            <img
              src="/img/eye-camp-1.jpg"
              alt="Eye Camp"
              className="h-[320px] w-full object-cover md:h-[370px]"
            />
          </div>

          <div className="text-[#5E5045]">
            <p className="text-lg leading-8 md:text-xl md:leading-9">
There's a particular look on someone's face when they see clearly again after years of squinting. It's not dramatic. Just a small pause, then a smile, like something clicked back into place. Vision loss creeps up slowly with age. Most elderly people just live with it. They stop reading, stop recognizing faces from a distance, and assume that's what getting old feels like. Many never get checked because a private eye doctor visit costs money they'd rather spend elsewhere. Or because nobody in the family thought to take them.             </p>
          </div>
 

        </div>
<br/>
        
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
So we ran a free eye checkup camp for elderly residents at the Government Primary School in Mangala village, Mandya taluk. Doctors and volunteers went through eye tests one by one, checking vision, noting who needed glasses, talking them through simple eye care habits. By the end of the day, over 200 elderly people had gotten a free eye checkup. More than 150 walked away with a pair of glasses at no cost. Our founder, Manasa M.K., spoke about how protecting eyesight is something every person has a role in, not just doctors.           </p>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/>



               <div className="site-container pb-20 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-md bg-[#E8DCCE] shadow-sm">

            <h1 className="mt-6 text-[#7A4A2B] text-3xl md:text-6xl lg:text-5xl font-light font-serif leading-[1.05]">
            Clean and Drive Trek.
          </h1>

            <img
              src="/img/environment/env-8.png"
              alt="Clean and Drive Trek"
              className="h-[320px] w-full object-cover md:h-[370px]"
            />
          </div>

          <div className="text-[#5E5045]">
            <p className="text-lg leading-8 md:text-xl md:leading-9">
There's a certain quiet you find on a hill trail. Birds, wind, the sound of your own breathing as you climb. It's part of why so many of us fall for trekking in the first place. Lately, that quiet keeps getting interrupted. Wrappers stuck between rocks, bottles left behind, garbage sitting in the exact places we go to get away from it all. It adds up more than people realize. Plastic doesn't disappear. It just sits there for years. Rain carries it into streams animals drink from. Cattle and wildlife end up eating what isn't food. One wrapper doesn't look like much, until a hillside is covered in them.             </p>
          </div>
 

        </div>
<br/>
        
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
The numbers back this up. In one clean-up drive in Uttarakhand, a group collected 274 kg of waste from a single hotspot in just an hour. Elsewhere in Himachal Pradesh, six people picked up around 50 kg of trash covering barely 500 metres of trail. Most of it was food packaging, and much of that kind of plastic can't even be recycled because it's made of multiple layers stuck together. This isn't a one-off problem either. One Himalayan cleanup group has collected over 800,000 kg of waste since 2016, running 40 to 50 cleanup treks every year. Closer home, groups clearing trails near Bengaluru have been hauling away tonnes of waste from popular hiking spots. The scale tells you this isn't a few careless people. It's a habit that's built up over years, trek after trek.           </p>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/>
       
      </section>
    </main>
  );
}
