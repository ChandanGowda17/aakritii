"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { BrickWall, ChevronLeft, ChevronRight, Sprout, Wind } from "lucide-react";

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
      Icon: BrickWall,
      images: [1, 2, 3, 4, 5, 6]
    },
    {
      name: "Soul & Soil",
      Icon: Sprout,
      images: [
        "/img/soul-and-soil-1.jpg",
        "/img/soul-and-soil-2.jpg",
        "/img/soul-and-soil-3.jpg",
        "/img/soul-and-soil-4.jpg",
        "/img/soul-and-soil-5.jpg",
        "/img/soul-and-soil-6.jpg"
      ]
    },
    {
      name: "Home for Wings",
      Icon: Wind,
      images: [
        "/img/house-for-wings-1.jpg",
        "/img/house-for-wings-2.jpg",
        "/img/house-for-wings-3.jpg",
        "/img/house-for-wings-4.jpg",
        "/img/house-for-wings-5.jpg",
        "/img/house-for-wings-6.jpg"
      ]
    },
    {
      name: "Clean and Drive",
      Icon: Wind,
      images: [
        "/img/clean-and-drive-1.png",
        "/img/clean-and-drive-2.png",
        "/img/clean-and-drive-3.png",
        "/img/clean-and-drive-4.png",
        "/img/clean-and-drive-5.png",
        "/img/clean-and-drive-6.png"
      ]
    },
    {
      name: "Women's Day",
      Icon: Wind,
      images: [
        "/img/womens-day-1.jpg",
        "/img/womens-day-2.jpg",
        "/img/womens-day-3.jpg",
        "/img/womens-day-4.jpg",
        "/img/womens-day-5.jpg",
        "/img/womens-day-6.jpg"
      ]
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
            <ChevronLeft onClick={scrollReelsLeft} className="h-8 w-8 cursor-pointer text-white md:h-10 md:w-10" />
            <div ref={reelsScrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide w-full snap-x snap-mandatory">
              {reels.map((reel) => (
                <div
                  key={reel.id}
                  onClick={() => setSelectedVideo(reel)}
                  className="flex-shrink-0 w-[150px] md:w-[205px] h-[300px] bg-white rounded-lg border-2 border-[#D46C32] overflow-hidden cursor-pointer snap-center"
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
            <ChevronRight onClick={scrollReelsRight} className="h-8 w-8 cursor-pointer text-white md:h-10 md:w-10" />
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
          <div className="mt-10 flex w-[calc(100vw-24px)] max-w-[420px] flex-wrap justify-center gap-2 mx-auto sm:gap-4 md:grid md:w-full md:max-w-none md:grid-cols-5 md:gap-6">
            {campaigns.map((campaign, index) => {
              const Icon = campaign.Icon;
              const isActive = activeCampaign === index;

              return (
                <button
                  key={index}
                  onClick={() => setActiveCampaign(index)}
                  className={`group flex h-[108px] w-[calc((100vw_-_40px)/3)] min-w-0 flex-col items-center justify-center gap-2 rounded-[20px] border-2 px-1.5 text-center shadow-[0_10px_18px_rgba(75,32,12,0.18)] transition-all duration-200 hover:-translate-y-1 sm:w-[calc((100%_-_32px)/3)] sm:rounded-[28px] md:h-16 md:w-auto md:max-w-none md:flex-row md:justify-center md:gap-0 md:rounded-full md:px-6 md:py-3 md:text-center md:shadow-none md:hover:translate-y-0 ${isActive ? "border-[#F45B0B] bg-white text-[#F45B0B] md:border-[#D46C32] md:text-[#D46C32]" : "border-[#7A4A2B] bg-[#7A4A2B] text-white hover:bg-[#693d20]"}`}
                  aria-pressed={isActive}
                >
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full sm:h-12 sm:w-12 md:hidden ${isActive ? "border-2 border-[#F45B0B] bg-white text-[#F45B0B]" : "bg-white text-[#7A4A2B]"}`}>
                    <Icon className="h-5 w-5 sm:h-7 sm:w-7" strokeWidth={1.8} />
                  </span>
                  <span className="min-w-0 max-w-full whitespace-normal break-words text-[11px] font-semibold leading-tight tracking-normal sm:text-[14px] md:text-base md:font-semibold">
                    {campaign.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div> <br />   <br /><br />
      </section>

      <section className="bg-[#F8F1E6] w-full py-20">
        <br /><br />
        <div className="site-container">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full mx-auto">
            {(viewAll ? campaigns.flatMap(campaign => campaign.images) : campaigns[activeCampaign].images).map((img, index) => (
              <div key={index} className="relative aspect-square md:aspect-[4/3] bg-white rounded-lg border-2 border-[#D46C32] overflow-hidden flex items-center justify-center text-[#4b200c] text-2xl font-semibold">
                {typeof img === "string" ? (
                  <Image
                    src={img}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover"
                  />
                ) : (
                  <>Image {img}</>
                )}
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
