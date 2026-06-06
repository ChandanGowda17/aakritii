"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    number: "5000+",
    label: "Children",
    description: "School programs and development activities"
  },
  {
    number: "3000+",
    label: "Volunteers",
    description: "Internship Programs and Volunteering Activities"
  },
  {
    number: "25+",
    label: "Schools",
    description: "Beautification and School Activities"
  },
  {
    number: "20+",
    label: "Projects",
    description: "Beautification and School Activities"
  },
  {
    number: "8+",
    label: "Villages",
    description: "Beautification and School Activities"
  }
];

export default function OurImpact() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="our-impact-section" ref={sectionRef}>
      <div className="our-impact-inner">
        <h2 className="our-impact-title">Our Impact</h2>
        <div className="our-impact-grid">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`our-impact-stat${visible ? " is-visible" : ""}`}
              style={{ transitionDelay: `${idx * 0.12}s` }}
            >
              <span className="our-impact-number">{stat.number}</span>
              <strong className="our-impact-label">{stat.label}</strong>
              <p className="our-impact-description">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
