"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryPage() {
  const [activeCampaign, setActiveCampaign] = useState(0);
  const [viewAll, setViewAll] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const reelsScrollRef = useRef(null);

  const scrollReelsLeft = () => {
    if (reelsScrollRef.current) {
      reelsScrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollReelsRight = () => {
    if (reelsScrollRef.current) {
      reelsScrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

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

  const reels = [
    { id: 1, video: "/img/reel-1.mp4", thumbnail: "/img/reel-thumb-1.jpg" },
    { id: 2, video: "/img/reel-2.mp4", thumbnail: "/img/reel-thumb-2.jpg" },
    { id: 3, video: "/img/reel-3.mp4", thumbnail: "/img/reel-thumb-3.jpg" },
    { id: 4, video: "/img/reel-4.mp4", thumbnail: "/img/reel-thumb-4.jpg" },
    { id: 5, video: "/img/reel-5.mp4", thumbnail: "/img/reel-thumb-5.jpg" },
    { id: 6, video: "/img/reel-6.mp4", thumbnail: "/img/reel-thumb-6.jpg" },
    { id: 7, video: "/img/reel-7.mp4", thumbnail: "/img/reel-thumb-7.jpg" },
    { id: 8, video: "/img/reel-8.mp4", thumbnail: "/img/reel-thumb-8.jpg" }
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

          <h1 className="mt-6 text-[#7A4A2B] text-5xl md:text-6xl lg:text-7xl font-light font-serif leading-[1.05]">
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
        <div className="site-container">
          <div className="flex items-center gap-4">
            <ChevronLeft onClick={scrollReelsLeft} className="h-10 w-10 cursor-pointer text-white hidden md:block" />
            <div ref={reelsScrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide w-full snap-x snap-mandatory">
              {reels.map((reel) => (
                <div
                  key={reel.id}
                  onClick={() => setSelectedVideo(reel)}
                  className="flex-shrink-0 w-full md:w-[205px] h-[300px] bg-white rounded-lg border-2 border-[#D46C32] overflow-hidden cursor-pointer snap-center"
                >
                  <video
                    src={reel.video}
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <ChevronRight onClick={scrollReelsRight} className="h-10 w-10 cursor-pointer text-white hidden md:block" />
          </div>
        </div><br /><br />
      </section>

      <section className="bg-white w-full py-20">
        <div className="site-container text-center"><br /><br />
          <h2 className="text-[#4b200c] text-5xl md:text-6xl lg:text-7xl font-light font-serif leading-[1.05]">
            By Campaign
          </h2>
          <br />
          <p className="mt-10 w-full mx-auto text-[#5E5045] text-xl leading-10">
            Check out behind the scenes and the process of our events categorized by campaign
          </p> <br />
          <div className="mt-10 grid grid-cols-3 gap-6 md:grid-cols-5 w-full mx-auto">
            {campaigns.map((campaign, index) => (
              <button
                key={index}
                onClick={() => setActiveCampaign(index)}
                className={`w-full md:w-auto h-14 md:h-16 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-full border-2 ${activeCampaign === index ? "border-[#D46C32] text-[#D46C32] bg-white" : "border-[#7A4A2B] bg-[#7A4A2B] text-white"} text-sm md:text-base font-semibold transition-colors `}
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full mx-auto">
            {viewAll
              ? campaigns.flatMap(campaign => campaign.images).map((img, index) => (
                  <div key={index} className="aspect-square md:aspect-[4/3] bg-white rounded-lg border-2 border-[#D46C32] flex items-center justify-center text-[#4b200c] text-2xl font-semibold">
                    Image {img}
                  </div>
                ))
              : campaigns[activeCampaign].images.map((img, index) => (
                  <div key={index} className="aspect-square md:aspect-[4/3] bg-white rounded-lg border-2 border-[#D46C32] flex items-center justify-center text-[#4b200c] text-2xl font-semibold">
                    Image {img}
                  </div>
                ))}
          </div><br />
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setViewAll(!viewAll)}
              className="mt-10 h-10 w-50 inline-flex items-center justify-center rounded-md bg-[#D46C32] px-9 py-4 text-lg font-bold text-white transition hover:bg-[#B85A28]"
            >
              {viewAll ? 'View by Campaign' : 'View All Images'}
            </button>
          </div>
        </div>   <br /><br />   <br /><br />
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedVideo(null);
              }}
              className="absolute -top-12 right-0 text-white text-5xl hover:text-gray-300 transition-colors z-10"
            >
              ×
            </button>
            <video
              src={selectedVideo.video}
              autoPlay
              controls
              className="w-full h-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

    </main>
  );
}
