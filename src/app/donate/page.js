"use client";

import { useEffect, useState } from "react";

export default function Donate() {
  return (
    <main className="bg-[#F8F1E6] text-[#4b200c]">
      <section className="bg-[#F8F1E6] border-t border-[#E6DACB] w-full" style={{ paddingTop: '86px' }}>
      <div className="site-container mb-20 text-left">

        {/* Hero */}
     
        <div className="pt-16 pb-10 justify-start">
          <div className="h-10"></div>
          <p className="text-[#D46C32] uppercase tracking-[0.35em] text-sm font-semibold">
            Donate
          </p>
          <br/>

          <h1 className="mt-6 text-[#7A4A2B] text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05]">
            Support Our Mission
          </h1>
<br/>
          <p className="mt-10 max-w-3xl text-[#5E5045] text-xl leading-10">
            Your contribution helps us create lasting change in communities through education, healthcare, and environmental initiatives.
          </p>
      </div>

<div className="h-20"></div>
      </div>
      </section>
    </main>
  );
}
