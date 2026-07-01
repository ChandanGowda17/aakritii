"use client";
import Image from "next/image";
import Link from "next/link";

const pressReleases = [
  {
    id: 1,
    title: "Aakritii Launches New Education Initiative in Rural Areas",
    date: "October 15, 2025",
    excerpt: " In our latest effort to bridge the educational divide, we have launched a comprehensive learning program reaching over 5,000 children across 20 villages.",
    image: "/img/news-1.png",
    link: "#"
  },
  {
    id: 2,
    title: "Annual Health & Wellness Camp Reaches Record Numbers",
    date: "August 22, 2025",
    excerpt: "Our dedicated team of medical volunteers successfully organized a massive health camp, providing free checkups and medication to underserved communities.",
    image: "/img/health-2.png",
    link: "#"
  },
  {
    id: 3,
    title: "Community Driven Tree Plantation Drive Hits Milestone",
    date: "June 05, 2025",
    excerpt: "On World Environment Day, Aakritii NGO along with hundreds of volunteers successfully planted over 10,000 saplings to promote environmental sustainability.",
    image: "/img/environment-1.png",
    link: "#"
  }
];

export default function PressRelease() {
  return (
    <section id="press-release" className="bg-white py-20 md:py-32 min-h-screen flex items-center">
      <div className="press-release-inner">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center justify-between gap-4 mt-4 md:mt-0 mb-4">
              <div className="flex items-center gap-4">
                <span className="news-blink-dot w-3 h-3 rounded-full bg-[#e8372b]"></span>
                <h3 className="text-[#e8372b] uppercase tracking-widest font-bold text-sm md:text-base">In The News</h3>
              </div>

              <Link href="/press-releases" className="inline-flex md:hidden items-center gap-2 text-[#81503b] font-bold uppercase tracking-wider text-xs hover:text-[#e8372b] transition-colors">
                View All News
                <span>→</span>
              </Link>
            </div>
            <br/>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4b200c] leading-tight break-words">
              Press Releases
            </h2>
            <br/>
          </div>

          <Link href="/press-releases" className="hidden md:flex items-center gap-2 text-[#81503b] font-bold uppercase tracking-wider hover:text-[#e8372b] transition-colors group md:-translate-y-4">
            View All News
            <span className="transform transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pressReleases.map((item) => (
            <article key={item.id} className="bg-[#f6efe6] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col h-full border border-[#81503b]/10">
              {/* Image Container */}
              <div className="relative h-80 md:h-64 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4 bg-[#ffe300] text-[#4b200c] py-2 h-6 w-fit px-4 flex items-center justify-center rounded-sm text-xs font-bold uppercase tracking-wide shadow-md">
                  {item.date}
                </div>
              </div>

              {/* Content Container */}
              <div style={{ padding: "2rem" }} className="flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-[#4b200c] mb-3 line-clamp-2 group-hover:text-[#e8372b] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#81503b] leading-relaxed mb-6 flex-grow line-clamp-3 text-sm sm:text-base">
                  {item.excerpt}
                </p>
                <Link href={item.link} className="inline-flex items-center gap-2 text-[#e8372b] font-bold uppercase tracking-widest text-xs sm:text-sm hover:gap-3 transition-all mt-auto w-fit">
                  Read Article
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
