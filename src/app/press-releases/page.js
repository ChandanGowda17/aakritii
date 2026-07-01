import Image from "next/image";
import Link from "next/link";

const pressItems = [
  {
    title: "Aakritii Launches New Education Initiative in Rural Areas",
    date: "October 15, 2025",
    category: "Education",
    image: "/img/news-1.png",
    excerpt:
      "Aakritii expands its learning support efforts with community-led programmes for children across rural areas.",
  },
  {
    title: "Annual Health & Wellness Camp Reaches Record Numbers",
    date: "August 22, 2025",
    category: "Health",
    image: "/img/health-2.png",
    excerpt:
      "Medical volunteers and local partners came together to provide checkups, awareness, and support to underserved families.",
  },
  {
    title: "Community Driven Tree Plantation Drive Hits Milestone",
    date: "June 05, 2025",
    category: "Environment",
    image: "/img/environment-1.png",
    excerpt:
      "Volunteers marked World Environment Day with a plantation drive focused on long-term environmental care.",
  },
  {
    title: "Youth Volunteers Lead Community Awareness Activities",
    date: "April 18, 2025",
    category: "Community",
    image: "/img/community-1.png",
    excerpt:
      "Young volunteers supported outreach activities designed to strengthen awareness and participation in local communities.",
  },
  {
    title: "Students Participate in Skill-Building Workshop",
    date: "March 12, 2025",
    category: "Education",
    image: "/img/education-2.png",
    excerpt:
      "Aakritii hosted a practical learning workshop to help students build confidence, communication, and life skills.",
  },
  {
    title: "Local Partners Join Hands for Community Wellbeing",
    date: "January 26, 2025",
    category: "Community",
    image: "/img/community-3.png",
    excerpt:
      "Collaborative efforts with local partners helped strengthen outreach across health, education, and community support.",
  },
];

const categories = ["All", "Education", "Health", "Environment", "Community"];

export default function PressReleasesPage() {
  return (
    <main className="bg-[#F8F1E6] text-[#4b200c]">
      <section className="border-b border-[#E6DACB] pt-36 pb-16 md:pt-44 md:pb-24">
        <div className="site-container">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="news-blink-dot h-3 w-3 rounded-full bg-[#e8372b]"></span>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#e8372b]">
                In The News
              </p>
            </div>

            <h1 className="text-5xl font-light leading-tight text-[#7A4A2B] md:text-7xl">
              Press Releases
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#5E5045] md:text-xl md:leading-10">
              Stories, announcements, and media updates from Aakritii&apos;s work across education,
              health, environment, and community development.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="site-container">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                className="shrink-0 rounded-full border border-[#DCCBBB] bg-white px-5 py-2 text-sm font-semibold uppercase tracking-wider text-[#81503b] transition-colors hover:border-[#e8372b] hover:text-[#e8372b]"
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="site-container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pressItems.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[28px] border border-[#E8DCCE] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-64 w-full overflow-hidden bg-[#EFE2D4]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-[#ffe300] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#4b200c]">
                    {item.category}
                  </span>
                </div>

                <div className="flex min-h-[290px] flex-col p-6 md:p-8">
                  <p className="text-sm font-semibold uppercase tracking-widest text-[#e8372b]">
                    {item.date}
                  </p>

                  <h2 className="mt-4 text-2xl font-bold leading-snug text-[#4b200c] transition-colors group-hover:text-[#e8372b]">
                    {item.title}
                  </h2>

                  <p className="mt-4 flex-grow text-base leading-7 text-[#62564B]">
                    {item.excerpt}
                  </p>

                  <Link
                    href="#"
                    className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#e8372b] transition-all hover:gap-3"
                  >
                    Read More
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
