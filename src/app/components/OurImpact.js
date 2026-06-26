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

const CountUp = ({ value, visible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) return;

    const target = parseInt(match[1], 10);

    if (!visible) {
      setCount(0);
      return;
    }

    let startTimestamp = null;
    const duration = 2000; // 2 seconds

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOutProgress = progress * (2 - progress);
      
      setCount(Math.floor(easeOutProgress * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [value, visible]);

  const match = value.match(/^(\d+)(.*)$/);
  const suffix = match ? match[2] : "";

  return <>{count}{suffix}</>;
};

export default function OurImpact() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="our-impact-section px-4 md:px-6" ref={sectionRef}>
      <div className="our-impact-inner mb-3">
        <h2 className="our-impact-title">Our Impact</h2>
        <div className="our-impact-grid">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`our-impact-stat${visible ? " is-visible" : ""}`}
              style={{ transitionDelay: `${idx * 0.12}s` }}
            >
              <span className="our-impact-number">
                <CountUp value={stat.number} visible={visible} />
              </span>
              <strong className="our-impact-label">{stat.label}</strong>
              <p className="our-impact-description">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>




    </section >
  );
}
