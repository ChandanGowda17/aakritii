"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../img/logo.jpeg";


const navItems = [
  { label: "Home", href: "/#home", active: true },
  { label: "About Us", href: "/#about" },
  { label: "Programmes", href: "/#programmes" },
  { label: "Gallery", href: "/gallery" },
  { label: "Join", href: "/join" },
];


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");


  useEffect(() => {
    const updateHash = () => setActiveHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };


  return (
    <header className="fixed top-0 left-0 right-0 z-50 overflow-visible bg-[#401905]">
      <div
        className="site-header-inner flex h-[86px] items-center justify-between overflow-visible bg-[#401905] shadow-md max-lg:h-[72px]"
      >
        <a href="/#home" className="flex h-full items-center gap-[10px]" aria-label="Aakritii NGO Home">
          <span className="flex h-[62px] w-[62px]  items-center justify-center bg-[#8d6544] max-lg:h-[54px] max-lg:w-[54px]">
            <span className="relative flex h-[50px] w-[50px] items-center justify-center overflow-hidden bg-[#b99c7a] text-[10px] font-extrabold uppercase text-[#4b1f05] max-lg:h-[44px] max-lg:w-[44px]">
              <Image
                src={logo}
                alt="Aakritii NGO logo"
                fill
                sizes="(max-width: 1023px) 44px, 50px"
                className="object-cover"
                priority
              />
            </span>
          </span>

          <span className="flex flex-col gap-[3px]">
            <span className="text-[23px] font-extrabold uppercase leading-none tracking-[-0.01em] text-white max-sm:text-[18px]">
              Aakritii NGO
            </span>
            <span className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#c9a882] max-sm:text-[10px] max-sm:tracking-[0.12em]">
              Empower · Transform · Inspire
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-[58px] lg:flex max-xl:gap-8">
          <nav className="flex items-center gap-[30px] overflow-visible">
            {navItems.map((item) => (
             <a
  key={item.label}
  href={item.href}
  className="flex h-[24px] items-center text-[18px] font-extrabold uppercase leading-none text-white transition hover:text-[#b08b6d]"
>
  {item.label}
</a>
            ))}
          </nav>

          <a
            href="/#contact"
            className="flex h-[52px] min-w-[210px] items-center justify-center gap-[10px] rounded-full bg-[#9b7d63] px-7 text-[18px] font-extrabold uppercase leading-none text-white transition hover:bg-[#ad8e73]"
          >
            <svg
              className="h-[22px] w-[22px]"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74A1 1 0 0118 14.847V17a1 1 0 01-1 1h-1C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Contact
          </a>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center text-white lg:hidden"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={mobileMenuOpen ? 'M6 18 18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="w-full bg-[#9b7d63] pr-6 pb-8 lg:hidden" style={{ paddingLeft: "10px", paddingTop: "10px" ,paddingRight: "10px" }}>
          <nav className="flex flex-col gap-6 border-t border-white/10 pt-7">
            {navItems.map((item) => (
             <a
  key={item.label}
  href={item.href}
  className="block text-lg font-extrabold uppercase text-white"
  style={{ paddingLeft: "28px" }}
  onClick={closeMobileMenu}
>
  {item.label}
</a>
            ))}

            <a
              href="/#contact"
              className="mt-3 flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[#401905] text-base font-extrabold uppercase text-white mx-auto"
              onClick={closeMobileMenu}
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74A1 1 0 0118 14.847V17a1 1 0 01-1 1h-1C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
