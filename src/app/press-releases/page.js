"use client";

import { useState } from "react";

export default function PressReleases() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/img/news-2.png",
    "/img/news-3.png",
    "/img/news-4.png"
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

          <p className="mt-10 max-w-3xl text-[#5E5045] text-xl leading-10">
From local media features to newspaper clippings, these articles capture our ongoing work across different communities. Take a look at how our efforts are being reported in the press.          </p>
      </div>

      </div>

      
<section className="bg-[#F8F1E6] border-t border-[#E6DACB] w-full" style={{ paddingTop: '86px' }}>
  

      <div className="site-container pb-20 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-[20px] bg-[#E8DCCE] shadow-sm order-1 lg:order-1 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer" onClick={() => setSelectedImage(images[0])}>
            <img
              src="/img/news-2.png"
              alt="Women participating in a community development activity"
              className="h-[320px] w-full object-cover md:h-[370px]"
            />
          </div>

          <div className="text-[#5E5045] order-2 lg:order-2">
            <p className="text-lg leading-8 md:text-xl md:leading-9">
           Aakritii NGO, in collaboration with healthcare professionals and community partners, successfully conducted a free eye screening camp to promote accessible vision care. The initiative provided comprehensive eye examinations, medical consultations, and guidance on preventive eye health for residents from underserved communities.
            </p>

            <p className="mt-8 text-lg leading-8 md:text-xl md:leading-9">
              The camp witnessed the participation of over 150 beneficiaries, with individuals requiring advanced treatment being referred to specialized healthcare facilities. Through initiatives like these, Aakritii NGO continues its commitment to improving community health and ensuring quality healthcare reaches those who need it most.
            </p>
          </div>
        </div>
      </div>
      <br/> <br/> <br/>
</section>


<section className="bg-[#F8F1E6] border-t border-[#E6DACB] w-full" style={{ paddingTop: '86px' }}>
  

      <div className="site-container pb-20 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          

          <div className="text-[#5E5045] order-2 lg:order-1">
            <p className="text-lg leading-8 md:text-xl md:leading-9">
         As part of its ongoing commitment to education and child development, Aakritii NGO organized a school bag distribution programme for children studying in government schools. The initiative aimed to encourage school attendance and provide students with essential learning materials for the academic year.
            </p>

            <p className="mt-8 text-lg leading-8 md:text-xl md:leading-9">
              The programme brought together volunteers, educators, community leaders, and supporters who joined hands to motivate children to continue their education with confidence. The distribution drive reflects Aakritii NGO's mission to create equal learning opportunities for every child.
            </p>
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
      <br/> <br/> <br/>
</section>

<section className="bg-[#F8F1E6] border-t border-[#E6DACB] w-full" style={{ paddingTop: '86px' }}>
  

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
            <p className="text-lg leading-8 md:text-xl md:leading-9">
             Aakritii NGO organized a free community health camp in collaboration with medical professionals to improve access to essential healthcare services. The programme offered general health consultations, medical screenings, health awareness sessions, and preventive healthcare guidance for community members.
            </p>

            <p className="mt-8 text-lg leading-8 md:text-xl md:leading-9">
             The initiative benefited hundreds of individuals by promoting early diagnosis, encouraging healthy lifestyles, and connecting patients with appropriate medical care whenever necessary. Through such healthcare initiatives, Aakritii NGO continues to strengthen community well-being and promote healthier, more resilient communities.
            </p>
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
