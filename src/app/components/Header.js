"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "../../img/logo.jpeg";

const navItems = [
  { label: "Home", href: "/#home", active: true },
  { label: "About Us", href: "/#about" },
  { label: "Programmes", href: "/#programmes" },
];

const pageDropdownItems = [
  { label: "Education", href: "/education" },
  { label: "Health", href: "/#health" },
  { label: "Environment", href: "/#environment" },
  { label: "Community", href: "/#community" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const pagesDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pagesDropdownRef.current && !pagesDropdownRef.current.contains(event.target)) {
        setPagesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const updateHash = () => setActiveHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobilePagesOpen(false);
  };

  const isPageActive = (href) => activeHash && href === `/${activeHash}`;

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

          <span className="text-[23px] font-extrabold uppercase leading-none tracking-[-0.01em] text-white max-sm:text-[18px]">
            Aakritii NGO
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

            <div className="relative overflow-visible" ref={pagesDropdownRef}>
            <button
  type="button"
  className="flex h-[46px] min-w-[100px] items-center justify-between gap-3 rounded-full bg-[#401905] px-5 text-[15px] font-bold normal-case text-white transition"
  aria-expanded={pagesDropdownOpen}
  aria-haspopup="true"
  onClick={() => setPagesDropdownOpen((open) => !open)}
>
  <span className="transition-colors duration-200 pl-5 hover:text-[#ad8e73] flex h-[24px] items-center text-[18px] font-extrabold uppercase">
    Pages
  </span>

  <svg
    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
      pagesDropdownOpen ? "rotate-180" : ""
    }`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 9l6 6 6-6"
    />
  </svg>
</button>

{pagesDropdownOpen && (
  <div className="absolute left-0 top-[calc(100%+10px)] z-60 w-[260px] rounded-[28px] bg-[#401905] px-6 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
    <div className="flex flex-col gap-3">
      {pageDropdownItems.map((item) => {
        const active = isPageActive(item.href);

        return (
          <a
            key={item.label}
            href={item.href}
            className={`block rounded-lg px-8 py-6 text-[18px] leading-relaxed transition-all duration-200 pl-10${
              active
                ? "font-semibold text-white"
                : "font-medium text-white/90 hover:text-[#b08b6d]"
            }`}
            onClick={() => setPagesDropdownOpen(false)}
          >
            {item.label}
          </a>
        );
      })}
    </div>
  </div>
)} 
            </div>
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
        <div className="w-full bg-[#401905] px-5 pb-5 lg:hidden">
          <nav className="flex flex-col gap-4 border-t border-white/10 pt-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-base font-extrabold uppercase text-white"
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            ))}

            <div>
              <button
                type="button"
                className="flex h-[46px] w-full max-w-[220px] items-center justify-between rounded-full bg-[#9b7d63] px-5 text-[15px] font-bold normal-case text-white shadow-[0_4px_14px_rgba(0,0,0,0.2)]"
                aria-expanded={mobilePagesOpen}
                onClick={() => setMobilePagesOpen((open) => !open)}
              >
                Pages
                <svg
                  className={`h-4 w-4 shrink-0 transition-transform duration-200 ${mobilePagesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {mobilePagesOpen && (
                <div className="mt-2 max-w-[220px] rounded-2xl bg-white p-2 shadow-[0_12px_36px_rgba(0,0,0,0.16)]">
                  {pageDropdownItems.map((item) => {
                    const active = isPageActive(item.href);

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className={`block rounded-xl px-4 py-3 text-[15px] leading-snug transition-colors ${
                          active
                            ? "bg-[#f6efe6] font-bold text-[#7a5438]"
                            : "font-medium text-[#555555] hover:bg-[#f6efe6] hover:text-[#7a5438]"
                        }`}
                        onClick={closeMobileMenu}
                      >
                        {item.label}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            <a
              href="/#contact"
              className="mt-1 flex h-12 w-full max-w-[220px] items-center justify-center gap-3 rounded-full bg-[#9b7d63] text-base font-extrabold uppercase text-white"
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
