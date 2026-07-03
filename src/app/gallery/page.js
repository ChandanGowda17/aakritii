"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const galleryCategories = [
  {
    title: "Education",
    image: "/img/education-1.png",
    images: [
      "/img/education-1.png",
      "/img/education-2.png",
      "/img/education-3.png",
      "/img/education-4.png",
    ],
  },
  {
    title: "Health",
    image: "/img/health-1.png",
    images: ["/img/health-1.png", "/img/health-2.png"],
  },
  {
    title: "Environment",
    image: "/img/environment/env-1.png",
    images: [
      "/img/environment/env-1.png",
      "/img/environment/env-2.png",
      "/img/environment/env-3.png",
      "/img/environment/env-4.png",
      "/img/environment/env-5.png",
      "/img/environment/env-6.png",
      "/img/environment/env-7.png",
      "/img/environment/env-8.png",
    ],
  },
  {
    title: "Community",
    image: "/img/community-1.png",
    images: [
      "/img/community-1.png",
      "/img/community-2.jpg",
      "/img/community-3.png",
      "/img/community-4.png",
    ],
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openCarousel = (category) => {
    setActiveCategory(category);
    setActiveImageIndex(0);
  };

  const closeCarousel = () => {
    setActiveCategory(null);
    setActiveImageIndex(0);
  };

  const showPreviousImage = () => {
    if (!activeCategory) return;

    setActiveImageIndex((currentIndex) =>
      currentIndex === 0 ? activeCategory.images.length - 1 : currentIndex - 1
    );
  };

  const showNextImage = () => {
    if (!activeCategory) return;

    setActiveImageIndex((currentIndex) =>
      currentIndex === activeCategory.images.length - 1 ? 0 : currentIndex + 1
    );
  };

  useEffect(() => {
    if (!activeCategory) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeCarousel();
      }

      if (event.key === "ArrowLeft") {
        showPreviousImage();
      }

      if (event.key === "ArrowRight") {
        showNextImage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeCategory]);

  return (
    <main className="bg-[#F8F1E6] text-[#4b200c]">
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
          <p className="mt-10 max-w-3xl text-[#5E5045] text-xl leading-10">
            A glimpse into our programs, partnerships and people.
          </p>
      </div>

<div className="h-20"></div>
      </div>


        <div className="site-container">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2">
            {galleryCategories.map((category) => (
              <button
                key={category.title}
                type="button"
                onClick={() => openCarousel(category)}
                className="group overflow-hidden rounded-lg border border-[#E8DCCE] bg-white text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#D46C32]/25"
              >
                <span className="relative block aspect-[4/3] w-full overflow-hidden bg-[#EFE2D4]">
                  <Image
                    src={category.image}
                    alt={`${category.title} gallery`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </span>

                <span className="block p-6 md:p-8">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D46C32]">
                    View Gallery
                  </span>
                  <span className="mt-3 block text-2xl font-semibold leading-snug text-[#5A2E16]">
                    {category.title}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
        <br/> <br/> <br/> <br/>
      </section>

      {activeCategory && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeCategory.title} image carousel`}
          onClick={closeCarousel}
        >
          <div
            className="relative flex h-full max-h-[760px] w-full max-w-6xl flex-col overflow-hidden rounded-md bg-[#1d1713] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-white md:px-5">
              <div className="w-40">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#F0B27A] ">
                  &nbsp;&nbsp;&nbsp;{activeCategory.title}
                </p>
                <p className="mt-1 text-sm text-white/70">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{activeImageIndex + 1} / {activeCategory.images.length}
                </p>
              </div>

              <button
                type="button"
                onClick={closeCarousel}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60"
                aria-label="Close gallery carousel"
              >
                <X size={20} />
              </button>
            </div>

            <div className="relative min-h-0 flex-1 bg-black">
              <Image
                src={activeCategory.images[activeImageIndex]}
                alt={`${activeCategory.title} gallery image ${activeImageIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />

              {activeCategory.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPreviousImage}
                    className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-[#421c08] shadow-lg transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white md:left-5 md:h-12 md:w-12"
                    aria-label="Show previous image"
                  >
                    <ChevronLeft size={26} />
                  </button>

                  <button
                    type="button"
                    onClick={showNextImage}
                    className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-[#421c08] shadow-lg transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white md:right-5 md:h-12 md:w-12"
                    aria-label="Show next image"
                  >
                    <ChevronRight size={26} />
                  </button>
                </>
              )}
            </div>

            {activeCategory.images.length > 1 && (
              <div className="flex justify-center gap-2 border-t border-white/10 px-4 py-4">
                {activeCategory.images.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setActiveImageIndex(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      index === activeImageIndex
                        ? "w-8 bg-[#F0B27A]"
                        : "w-2.5 bg-white/35 hover:bg-white/60"
                    }`}
                    aria-label={`Show image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
