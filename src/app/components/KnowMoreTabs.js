"use client";

import { useState, useEffect } from "react";
import { BookOpen, Eye, Target, Lightbulb, RefreshCw, Briefcase, ShieldCheck } from "lucide-react";

const sections = [
  {
    label: "Our Story",
    title: "Our Story",
    icon: BookOpen,
    paragraphs: [
      "Aakritii NGO was founded with a simple yet powerful belief: meaningful change happens when individuals come together with a shared purpose. What began as a vision to contribute positively to society has evolved into a platform that connects people, resources, and opportunities to create lasting community impact.",
      "Driven by compassion and a commitment to social responsibility, Aakritii works across diverse areas including education, health and well-being, environmental sustainability, community empowerment, and volunteer engagement. Through collaborative action and grassroots involvement, we strive to address real challenges while building stronger, more resilient communities."
    ]
  },
  {
    label: "Vision",
    title: "Vision",
    icon: Eye,
    paragraphs: [
      "To build an inclusive, empowered, and sustainable society where every individual has access to opportunities, resources, and support needed to lead a dignified and fulfilling life."
    ]
  },
  {
    label: "Mission",
    title: "Mission",
    icon: Target,
    paragraphs: [
      "To create positive and sustainable social impact by:"
    ],
    bullets: [
      "Promoting quality education and child development.",
      "Enhancing health, well-being, and community care.",
      "Encouraging environmental responsibility and sustainable practices.",
      "Empowering communities through participation and capacity building.",
      "Inspiring volunteerism and active citizenship."
    ],
    closingParagraphs: [
      "We aim to foster meaningful partnerships and community-driven solutions that create long-term transformation."
    ]
  },
  {
    label: "Philosophy of Change",
    title: "Philosophy of Change",
    icon: Lightbulb,
    paragraphs: [
      "At Aakritii NGO, we believe that sustainable development is achieved when people are empowered rather than merely supported. Our philosophy centers on enabling individuals and communities to become active participants in their own growth and development.",
      "By combining awareness, education, engagement, and action, we create opportunities for communities to identify challenges, build capabilities, and implement solutions that lead to lasting positive change. We focus not only on immediate needs but also on strengthening the foundations for future progress."
    ]
  },
  {
    label: "The Lifecycle Approach",
    title: "The Lifecycle Approach",
    icon: RefreshCw,
    paragraphs: [
      "We recognize that social development is interconnected and spans every stage of life. Our programs are designed to support individuals and communities through a holistic lifecycle approach:"
    ],
    subsections: [
      {
        title: "Learn",
        text: "Providing access to education, knowledge, and skills that unlock opportunities and personal growth."
      },
      {
        title: "Thrive",
        text: "Promoting health, well-being, and supportive environments that enable individuals to lead productive lives."
      },
      {
        title: "Participate",
        text: "Encouraging civic engagement, volunteerism, and community involvement to strengthen social responsibility."
      },
      {
        title: "Empower",
        text: "Building confidence, leadership, and self-reliance to create sustainable and community-led progress."
      },
      {
        title: "Sustain",
        text: "Fostering environmental awareness and sustainable practices that protect resources for future generations."
      }
    ]
  },
  {
    label: "How We Work",
    title: "How We Work",
    icon: Briefcase,
    subsections: [
      {
        title: "Community-Centric Approach",
        text: "We engage directly with communities to understand their unique needs, challenges, and aspirations."
      },
      {
        title: "Collaborative Partnerships",
        text: "We work alongside educational institutions, corporates, government bodies, volunteers, and local stakeholders to maximize impact."
      },
      {
        title: "Volunteer-Driven Action",
        text: "Our initiatives provide meaningful opportunities for individuals to contribute their time, skills, and expertise toward social causes."
      },
      {
        title: "Sustainable Solutions",
        text: "We focus on long-term outcomes by promoting awareness, capacity building, and self-sustaining community practices."
      },
      {
        title: "Measurable Impact",
        text: "We believe in accountability and continuously evaluate our programs to ensure effectiveness, transparency, and meaningful results."
      }
    ]
  },
  {
    label: "Why Trust Us?",
    title: "Why Trust Us?",
    icon: ShieldCheck,
    subsections: [
      {
        title: "Purpose-Led Organization",
        text: "Every initiative is guided by a genuine commitment to community welfare and sustainable development."
      },
      {
        title: "Community Impact Focus",
        text: "Our efforts are designed to create tangible improvements in education, health, environmental responsibility, and social engagement."
      },
      {
        title: "Strong Volunteer Network",
        text: "We bring together passionate volunteers, professionals, students, and partners who share a common goal of creating positive change."
      },
      {
        title: "Transparency & Accountability",
        text: "We value integrity, responsible resource utilization, and clear communication with our stakeholders and supporters."
      },
      {
        title: "Collaborative Ecosystem",
        text: "Through partnerships and community participation, we create solutions that are inclusive, scalable, and sustainable."
      },
      {
        title: "Commitment to Long-Term Change",
        text: "We look beyond short-term interventions and work toward building empowered communities capable of driving their own future development."
      }
    ]
  }
];

export default function KnowMoreTabs() {
  const [activeId, setActiveId] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => {
      const sectionId = section.label.toLowerCase().replace(/\s+/g, "-");
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY;
      // Scroll margin accounting for fixed header + sticky sub-nav
      const offsetMargin = window.innerWidth < 1024 ? 88 : 142;
      window.scrollTo({
        top: offsetTop - offsetMargin + 2,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="know-more-page">
      <section id="home" className="hero-section relative min-h-screen bg-[#3A2312] overflow-hidden">
        <div className="hero-shell relative w-full min-h-[85vh] lg:min-h-[90vh] bg-[#4E3629] curved-hero-container flex items-center justify-center py-16 px-6">
          <img
            src="/img/know-more-landing.png"
            alt="Aakritii NGO community education programme"
            className="hero-bg-video absolute inset-0 z-0 h-full w-full object-cover"
          />

          <div className="absolute inset-y-0 left-0 z-0 w-[62%] bg-gradient-to-r from-[#401905]/80 via-[#5a2d14]/45 to-transparent max-lg:w-full max-lg:from-[#401905]/75 max-lg:via-[#5a2d14]/40 max-lg:to-transparent"></div>

          <div
            className="hero-content site-container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10"
            style={{ paddingTop: isMobile ? "96px" : undefined }}
          >
            <div className="hero-copy lg:col-span-8 flex flex-col gap-6 text-left">
              <div className="flex flex-col gap-2">
                <h1 className="font-light font-serif hero-title text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
                Education Changes Everything
                </h1>
                <h2 className="font-light font-serif hero-subtitle text-2xl sm:text-4xl font-extrabold text-white/90 tracking-wide font-sans">
                Learn. Grow. Lead.
                </h2>
              </div>

              <p className="font-light font-serif hero-description text-[0.95rem] sm:text-[1.05rem] text-neutral-300 leading-relaxed max-w-2xl font-light">
              True change begins with education. It equips children with knowledge, confidence, and the power to break the cycle of poverty.

Aligned with India's vision for inclusive education and Sustainable Development Goal 4, our Mission Education programme supports children living in difficult circumstances—from remote villages and tribal regions to disaster-affected and underserved communities.
              </p>

              <p className="hero-description hero-description-strong text-[0.95rem] sm:text-[1.05rem] font-bold text-white max-w-2xl leading-relaxed mt-2">
              By ensuring access to learning, nutrition, and wellness, we help every child discover their potential and create a future filled with possibilities.
              </p>

          
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Navigation tab bar */}
      <div className="know-more-tabs-container know-more-tabs-desktop">
        <nav className="know-more-tabs" aria-label="Know more sections">
          {sections.map((section) => {
            const sectionId = section.label.toLowerCase().replace(/\s+/g, "-");
            const isActive = activeId === sectionId;
            return (
              <a
                key={section.label}
                href={`#${sectionId}`}
                className={`know-more-tab${isActive ? " is-active" : ""}`}
                onClick={(e) => handleScrollToSection(e, sectionId)}
              >
                {section.label}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Mobile Dropdown Navigation */}
      <div className="know-more-mobile-nav">
        {/* Active tab header — clicking toggles the dropdown */}
        <div className="know-more-mobile-nav-active">
          <span>{sections.find((s) => s.label.toLowerCase().replace(/\s+/g, "-") === activeId)?.label || sections[0].label}</span>
        </div>

        {/* Dropdown list */}
        <div className="know-more-mobile-nav-dropdown">
          {sections.map((section) => {
            const sectionId = section.label.toLowerCase().replace(/\s+/g, "-");
            const isActive = activeId === sectionId || (!activeId && section === sections[0]);
            if (isActive) return null;

            return (
              <a
                key={section.label}
                href={`#${sectionId}`}
                className="know-more-mobile-nav-item"
                onClick={(e) => handleScrollToSection(e, sectionId)}
              >
                {section.label}
              </a>
            );
          })}
        </div>
      </div>

      {/* Sequential Long-Form Sections */}
      <div className="know-more-sections-container">
        {sections.map((section) => {
          const sectionId = section.label.toLowerCase().replace(/\s+/g, "-");
          const IconComponent = section.icon;

          return (
            <section key={section.label} id={sectionId} className="know-more-section-block">
              <div className="know-more-tab-content-inner">
                
                {/* Left Column: Circular Graphic Icon */}
                <div className="know-more-left-visual">
                  <div className="know-more-circle-graphic">
                    {IconComponent && <IconComponent className="know-more-circle-icon" size={60} strokeWidth={1.5} />}
                  </div>
                </div>

                {/* Right Column: Text Content */}
                <article className="know-more-right-text">
                  <h2 className="know-more-content-title font-light font-serif">{section.title}</h2>
                  
                  {section.paragraphs && section.paragraphs.map((p, idx) => (
                    <p key={idx} className="know-more-paragraph">{p}</p>
                  ))}
                  
                  {section.bullets && (
                    <ul className="know-more-bullet-list">
                      {section.bullets.map((b, idx) => (
                        <li key={idx} className="know-more-bullet-item">{b}</li>
                      ))}
                    </ul>
                  )}
                  
                  {section.closingParagraphs && section.closingParagraphs.map((p, idx) => (
                    <p key={idx} className="know-more-paragraph">{p}</p>
                  ))}
                  
                  {section.subsections && (
                    <div className="know-more-subsections">
                      {section.subsections.map((sub, idx) => (
                        <div key={idx} className="know-more-subsection">
                          <h3 className="know-more-subsection-title">{sub.title}</h3>
                          <p className="know-more-subsection-text">{sub.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {section.quote && (
                    <div className="know-more-quote-container">
                      <blockquote className="know-more-blockquote">
                        "{section.quote}"
                      </blockquote>
                      {section.quoteAuthor && (
                        <cite className="know-more-quote-author">— {section.quoteAuthor}</cite>
                      )}
                    </div>
                  )}
                </article>

              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}