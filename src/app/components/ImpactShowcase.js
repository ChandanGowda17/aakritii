"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const impactStats = [
  { number: "1,85,000+", label: "children provided education" },
  { number: "68,000+", label: "students connected to digital learning" },
  { number: "1,000+", label: "government schools strengthened" },
  { number: "1,500+", label: "girls received scholarship for higher education" },
];

const CountUp = ({ value, visible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const numericString = value.replace(/,/g, "");
    const match = numericString.match(/^(\d+)(.*)$/);
    if (!match) {
      setCount(value);
      return;
    }

    const target = parseInt(match[1], 10);

    if (!visible) {
      setCount(0);
      return;
    }

    let startTimestamp = null;
    const duration = 2000;

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

  const formatNumber = (num) => {
    if (typeof num === "string") return num;
    return num.toLocaleString('en-IN');
  };

  const numericString = value.replace(/,/g, "");
  const match = numericString.match(/^(\d+)(.*)$/);
  const suffix = match ? match[2] : "";

  return <>{formatNumber(count)}{suffix}</>;
};

export default function ImpactShowcase() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="impact-showcase-section" ref={sectionRef}>
      <div className="impact-showcase-inner">
        {/* Left: Title + Photo */}
        <div className="impact-showcase-left">
          <h2 className={`impact-showcase-title${visible ? " is-visible" : ""}`}>Impact</h2>
          <div className={`impact-showcase-img-wrap${visible ? " is-visible" : ""}`}>
            <Image
              src="/img/our-impact.png"
              alt="Children at a government school"
              fill
              className="impact-showcase-img"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Right: Stats */}
        <div className="impact-showcase-stats">
          {impactStats.map((stat, idx) => (
            <div
              key={idx}
              className={`impact-showcase-stat${visible ? " is-visible" : ""}`}
              style={{ transitionDelay: `${idx * 0.15 + 0.1}s` }}
            >
              <span className="impact-showcase-number">
                <CountUp value={stat.number} visible={visible} />
              </span>
              <span className="impact-showcase-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
