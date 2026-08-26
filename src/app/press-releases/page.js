"use client";

import { useState } from "react";

export default function PressReleases() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/img/news-1.png",
    "/img/news-2.png",
    "/img/news-3.png",
    "/img/news-4.png",
    "/img/news-5.png"
  ];

  return (
    <section className="bg-[#F8F1E6] border-t border-[#E6DACB] w-full" style={{ paddingTop: '86px' }}>
      <div className="site-container mb-20 text-left">

        {/* Hero */}
     
        <div className="pt-16 pb-10 justify-start">
          <div className="h-10"></div>
          <p className="text-[#D46C32] uppercase tracking-[0.35em] text-sm font-semibold">
           Recent Stories
          </p>
          <br/>

          <h1 className="mt-6 text-[#7A4A2B] text-5xl md:text-6xl lg:text-7xl font-light font-serif leading-[1.05]">
            Press Releases.
          </h1>
<div className="h-10"></div>

          <p className="mt-10  text-[#5E5045] text-xl leading-10">
From local media features to newspaper clippings, these articles capture our ongoing work across different communities. Take a look at how our efforts are being reported in the press.          </p>
      </div>

      </div>

      
<section className="bg-[#F8F1E6] border-t border-[#E6DACB] w-full" style={{ paddingTop: '86px' }}>
  

      <div className="site-container  grid grid-cols-1 pb-20 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-[20px] bg-[#E8DCCE] shadow-sm order-1 lg:order-1 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer" onClick={() => setSelectedImage(images[0])}>
            <img
              src="/img/news-2.png"
              alt="Women participating in a community development activity"
              className="h-[320px] w-full object-cover md:h-[370px]"
            />
          </div> </div> </div>

      <div className="site-container pb-20 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          

          <div className="text-[#5E5045] order-2 lg:order-1">
      
          </div>

<div className="overflow-hidden rounded-[20px] bg-[#E8DCCE] shadow-sm order-1 lg:order-2 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer" onClick={() => setSelectedImage(images[1])}>
            <img
              src="/img/news-3.png"
              alt="Women participating in a community development activity"
              className="h-[320px] w-full object-cover md:h-[370px]"
            />
          </div>

        </div>
      </div>

  

      <div className="site-container pb-20 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-[20px] bg-[#E8DCCE] shadow-sm order-1 lg:order-1 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer" onClick={() => setSelectedImage(images[2])}>
            <img
              src="/img/news-4.png"
              alt="Women participating in a community development activity"
              className="h-[320px] w-full object-cover md:h-[370px]"
            />
          </div>

          <div className="text-[#5E5045] order-2 lg:order-2">
          
          </div>
        </div>
      </div>
      <br/> <br/> <br/>
</section>
      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-full max-h-full">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute -top-12 right-0 text-white text-5xl hover:text-gray-300 transition-colors z-10"
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

    </section>
  );
}
