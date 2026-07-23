"use client";

import { useState } from "react";
import Image from "next/image";

export default function GalleryPage() {
  const [activeCampaign, setActiveCampaign] = useState(0);

  const campaigns = [
    {
      name: "Bricks & Brilliance",
      images: [1, 2, 3, 4, 5, 6]
    },
    {
      name: "Soul & Soil",
      images: [7, 8, 9, 10, 11, 12]
    },
    {
      name: "Flow Forward",
      images: [13, 14, 15, 16, 17, 18]
    },
    {
      name: "Flow Forward",
      images: [19, 20, 21, 22, 23, 24]
    },
    {
      name: "Flow Forward",
      images: [25, 26, 27, 28, 29, 30]
    }
  ];
  return (
    <main className="bg-[#F8F1E6] text-[#4b200c] pt-24">

     
      <section className="bg-[#F8F1E6] border-t border-[#E6DACB] w-full" style={{ paddingTop: '86px' }}>
      <div className="site-container mb-20 text-left">

        {/* Hero */}
     
        <div className="pt-16 pb-10 justify-start">
          <div className="h-10"></div>
          <p className="text-[#D46C32] uppercase tracking-[0.35em] text-sm font-semibold">
            Gallery
          </p>
          <br/>

          <h1 className="mt-6 text-[#7A4A2B] text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05]">
            Moments that move us forward.
          </h1>
<br/>
          <p className="mt-10 max-w-3xl mx-auto text-[#5E5045] text-xl leading-10 text-center">
            A glimpse into our programs, partnerships and people.
          </p>
      </div><br />
      </div>
      </section>

      <section className="bg-[#7A4A2B] text-white w-full py-20">
        <br /><br />
        <div className="site-container text-left">
          <div className="mt-10 grid grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="w-full h-100 bg-white rounded-lg border-2 border-[#D46C32] flex items-center justify-center text-[#4b200c] text-2xl font-semibold">
                Reel {item}
              </div>
            ))}
          </div>
        </div><br /><br />
      </section>

      <section className="bg-white w-full py-20">
        <div className="site-container text-center">
          <h2 className="text-[#4b200c] text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05]">
            By Campaign
          </h2>
          <br />
          <p className="mt-10 w-full mx-auto text-[#5E5045] text-xl leading-10">
            Check out behind the scenes and the process of our events categorized by campaign
          </p> <br />
          <div className="mt-10 grid grid-cols-5 gap-6">
            {campaigns.map((campaign, index) => (
              <button
                key={index}
                onClick={() => setActiveCampaign(index)}
                className={`w-full h-16 px-4 py-3 rounded-full border-2 ${activeCampaign === index ? "border-[#D46C32] text-[#D46C32] bg-white" : "border-[#7A4A2B] bg-[#7A4A2B] text-white"} text-base font-semibold transition-colors`}
              >
                {campaign.name}
              </button>
            ))}
          </div>
        </div> <br />   <br /><br />
      </section>

      <section className="bg-[#F8F1E6] w-full py-20">
        <br /><br />
        <div className="site-container">
          <div className="grid grid-cols-3 gap-6">
            {campaigns[activeCampaign].images.map((img, index) => (
              <div key={index} className="aspect-square bg-white rounded-lg border-2 border-[#D46C32] flex items-center justify-center text-[#4b200c] text-2xl font-semibold">
                Image {img}
              </div>
            ))}
          </div>
        </div>   <br /><br />   <br /><br />
      </section>

    </main>
  );
}
