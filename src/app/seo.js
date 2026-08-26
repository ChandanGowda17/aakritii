export const siteUrl = "https://aakritii.org";

const defaultTitle = "Aakritii NGO | Empower, Transform, Inspire";
const defaultDescription =
  "Aakritii NGO is a Bengaluru-based registered non-profit empowering communities through education, healthcare, environmental action, and volunteer-led social impact.";

export const seoPages = [
  {
    path: "/",
    title: defaultTitle,
    description: defaultDescription,
  },
  {
    path: "/about-us",
    title: "About Aakritii NGO | Community-Led Social Impact",
    description:
      "Learn about Aakritii NGO's mission, story, values, and community-led work across education, healthcare, environment, and social empowerment.",
  },
  {
    path: "/know-more",
    title: "Know More About Aakritii NGO | Vision, Mission & Work",
    description:
      "Explore Aakritii NGO's vision, mission, lifecycle approach, philosophy of change, and the way we work with communities and volunteers.",
  },
  {
    path: "/programs",
    title: "Aakritii NGO Programmes | Education, Health & Environment",
    description:
      "Discover Aakritii NGO programmes including education support, health initiatives, environmental action, community development, and volunteer projects.",
  },
  {
    path: "/programs/polio-drive",
    title: "Polio Drive Programme | Aakritii NGO",
    description:
      "See how Aakritii NGO supports polio awareness, prevention, and community healthcare outreach through volunteer-led public health action.",
  },
  {
    path: "/programs/eye-camps",
    title: "Eye Camps Programme | Aakritii NGO",
    description:
      "Learn about Aakritii NGO eye camp initiatives that improve access to basic vision screening, awareness, and community healthcare support.",
  },
  {
    path: "/programs/clean-and-drive-trek",
    title: "Clean and Drive Trek | Aakritii NGO Environment Programme",
    description:
      "Explore Aakritii NGO's clean and drive trek activities that promote environmental responsibility, clean-up action, and community participation.",
  },
  {
    path: "/programs/seed-ball-making",
    title: "Seed Ball Making Programme | Aakritii NGO Environment Initiative",
    description:
      "Learn about Aakritii NGO's seed ball making activities that promote reforestation, environmental awareness, and community participation in greening initiatives.",
  },
  {
    path: "/programs/popcorn-and-purpose",
    title: "Popcorn and Purpose | Aakritii NGO Community Programme",
    description:
      "Discover Aakritii NGO's Popcorn and Purpose initiative that brings joy and community bonding through movie outings and recreational activities for children.",
  },
  {
    path: "/programs/school-beautification",
    title: "School Beautification Programme | Aakritii NGO Education Initiative",
    description:
      "See how Aakritii NGO's school beautification projects improve learning environments, foster pride, and create welcoming spaces for students and communities.",
  },
  {
    path: "/programs/soul-and-soil",
    title: "Soul and Soil Programme | Aakritii NGO Environment Initiative",
    description:
      "Discover Aakritii NGO's Soul and Soil programme that connects people with nature through gardening, farming, and environmental stewardship activities.",
  },
  {
    path: "/programs/stitch-and-sustain",
    title: "Stitch and Sustain Programme | Aakritii NGO Skill Development Initiative",
    description:
      "Learn about Aakritii NGO's Stitch and Sustain programme that empowers women through sewing skills, entrepreneurship, and sustainable livelihood opportunities.",
  },
  {
    path: "/programs/womens-day",
    title: "Women's Day Celebration | Aakritii NGO Empowerment Initiative",
    description:
      "See how Aakritii NGO celebrates Women's Day with events that honor, empower, and support women in communities through recognition and skill-building activities.",
  },
  {
    path: "/pages/education",
    title: "Education and Child Development | Aakritii NGO",
    description:
      "Aakritii NGO supports children's learning, mentorship, holistic development, access, and retention through education-focused community programmes.",
  },
  {
    path: "/pages/health",
    title: "Health and Well-Being Programmes | Aakritii NGO",
    description:
      "Aakritii NGO promotes health and well-being through awareness, care initiatives, wellness support, prevention, and community outreach.",
  },
  {
    path: "/pages/environment",
    title: "Environment and Sustainability | Aakritii NGO",
    description:
      "Aakritii NGO encourages environmental sustainability through tree plantation, waste management, awareness programmes, and clean community practices.",
  },
  {
    path: "/pages/community",
    title: "Community Empowerment | Aakritii NGO",
    description:
      "Aakritii NGO works with communities to strengthen participation, self-reliance, health, learning, empowerment, and long-term development.",
  },
  {
    path: "/gallery",
    title: "Gallery | Aakritii NGO Events and Impact",
    description:
      "View photos and videos from Aakritii NGO initiatives, campaigns, community programmes, school activities, and volunteer-led events.",
  },
  {
    path: "/press-releases",
    title: "Press Releases and Updates | Aakritii NGO",
    description:
      "Read the latest updates, news, and press releases from Aakritii NGO's education, healthcare, environment, and community initiatives.",
  },
  {
    path: "/join",
    title: "Join Aakritii NGO | Volunteer, Intern or Partner",
    description:
      "Join Aakritii NGO as an individual volunteer, student intern, skill-based contributor, or corporate partner to support community impact.",
  },
  {
    path: "/contact",
    title: "Contact Aakritii NGO | Bengaluru Non-Profit",
    description:
      "Contact Aakritii NGO in Bengaluru to volunteer, partner, ask questions, or support education, healthcare, environment, and community programmes.",
  },
];

export function createPageMetadata({ path, title, description }) {
  const canonicalPath = path === "/" ? "/" : `${path}/`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: canonicalPath,
      siteName: "Aakritii NGO",
      type: "website",
      images: [
        {
          url: "/img/know-more-landing.png",
          width: 1200,
          height: 630,
          alt: "Aakritii NGO community programme",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/img/know-more-landing.png"],
    },
  };
}

export const defaultMetadata = createPageMetadata({
  path: "/",
  title: defaultTitle,
  description: defaultDescription,
});
