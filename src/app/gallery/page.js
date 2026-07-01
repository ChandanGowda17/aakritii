import Image from "next/image";

const galleryItems = [
  {
    title: "Community Outreach",
    category: "Community",
    image: "/img/community-1.png",
  },
  {
    title: "Education Programme",
    category: "Education",
    image: "/img/education-1.png",
  },
  {
    title: "Health Camp",
    category: "Health",
    image: "/img/health-1.png",
  },
  {
    title: "Environment Drive",
    category: "Environment",
    image: "/img/environment-1.png",
  },
  {
    title: "Student Activities",
    category: "Education",
    image: "/img/education-2.png",
  },
  {
    title: "Community Support",
    category: "Community",
    image: "/img/community-2.jpg",
  },
  {
    title: "Learning Sessions",
    category: "Education",
    image: "/img/education-3.png",
  },
  {
    title: "Health Awareness",
    category: "Health",
    image: "/img/health-2.png",
  },
  {
    title: "Volunteer Moments",
    category: "Community",
    image: "/img/community-3.png",
  },
];

export default function GalleryPage() {
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
            Moments that move us forward
          </h1>

          <p className="mt-10 max-w-3xl text-[#5E5045] text-xl leading-10">
            A glimpse into our programs, partnerships and people.
          </p>
      </div>
      </div>
      <br/><br/>
      </section>

      <section className="border-t border-[#E6DACB] py-12 md:py-20">
        <div className="site-container">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[26px] border border-[#E8DCCE] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-[#EFE2D4]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                 <div style={{ padding: "2rem" }} className="flex flex-col flex-grow">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D46C32]">
                    {item.category}
                  </p>
                  <h2 className="mt-3 text-xl font-semibold leading-snug text-[#5A2E16]">
                    {item.title}
                  </h2>
                </div>
              </article>
            ))}
          </div>
        </div>
        <br/> <br/>
      </section>
    </main>
  );
}
