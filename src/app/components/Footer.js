import Image from "next/image";
import Link from "next/link";
import logo from "../../img/logo.jpeg";

const exploreLinks = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about" },
  { label: "Programs", href: "/#programmes" },
  { label: "Gallery", href: "/gallery" },
  { label: "Volunteer", href: "/join" },
  
];

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M14.5 8.2V6.8c0-.7.5-1.2 1.3-1.2h1.7V2.7c-.8-.1-1.7-.2-2.6-.2-2.7 0-4.6 1.6-4.6 4.5v1.2H7.5v3.3h2.8V22h3.4V11.5h2.8l.5-3.3h-3.5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.7 8.8H3.4V21h3.3V8.8ZM5.1 3C4 3 3.2 3.8 3.2 4.9s.8 1.9 1.9 1.9S7 6 7 4.9 6.2 3 5.1 3Zm7.3 5.8H9.2V21h3.3v-6.4c0-1.7.8-2.7 2.2-2.7 1.3 0 1.9.9 1.9 2.7V21h3.3v-7.1c0-3.5-1.9-5.4-4.5-5.4-1.6 0-2.5.8-3 1.6V8.8Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#7A4724] text-[#F2E4D6]">
      <br/> <br/> 
      <div className="site-container py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_0.6fr_1fr] md:gap-16">
          <div>
            <Link href="/#home" className="inline-flex items-center gap-4" aria-label="Aakritii NGO Home">
              <span className="relative h-[70px] w-[70px] overflow-hidden rounded-sm bg-[#9A6A45]">
                <Image src={logo} alt="Aakritii NGO logo" fill sizes="70px" className="object-cover" />
              </span>

              <span>
                <span className="block font-serif text-3xl leading-none text-white">Aakritii NGO</span>
                <span className="mt-2 block text-sm font-semibold uppercase tracking-[0.35em] text-[#E8D3C1]">
                  Empower · Transform · Inspire
                </span>
              </span>
            </Link>
<br/><br/>
            <p className="mt-8 max-w-xl text-lg font-semibold leading-8 text-[#E8D3C1]">
              A Bengaluru-based registered non-profit empowering underserved communities through
              education, awareness, and grassroots engagement.
            </p>
<br/>
            <div className="mt-8 flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                >
                  <span className="h-6 w-6">{social.icon}</span>
                </Link>
                
              ))}
            </div>
            <br/>
          </div>

          <nav className="hidden md:block" aria-label="Footer explore links">
            <h2 className="font-serif text-2xl text-white">Explore</h2>
            <br/>
            <ul className="mt-7 space-y-4">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-lg font-semibold text-[#E8D3C1] transition hover:text-white">
                    {link.label}
                  </Link><br/>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-serif text-2xl text-white">Contact</h2><br/>
            <ul className="mt-7 space-y-5 text-lg font-semibold text-[#E8D3C1]">
              <li className="flex gap-4">
                <span aria-hidden="true">⌖</span>
                <span>Bengaluru, Karnataka, India</span>
              </li><br/>
              <li className="flex gap-4">
                <span aria-hidden="true">✉</span>
                <a href="mailto:contact@aakritii.org" className="transition hover:text-white">
                  contact@aakritii.org
                </a>
              </li><br/>
              <li className="flex gap-4">
                <span aria-hidden="true">✉</span>
                <a href="mailto:manasa@aakritii.org" className="transition hover:text-white">
                  manasa@aakritii.org
                </a>
              </li><br/>
              <li className="flex gap-4">
                <span aria-hidden="true">☎</span>
                <a href="tel:+919800000000" className="transition hover:text-white">
                  +91 90195-42024
                </a>
              </li><br/>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10"><br/>
        <div className="site-container flex flex-col gap-3 py-7 text-sm font-semibold text-[#E8D3C1] md:flex-row md:items-center md:justify-between md:text-base">
          <p>© 2026 Aakritii NGO. All rights reserved.</p>
          <p>Registered Non-Profit Organisation</p>
        </div><br/>
      </div>
    </footer>
  );
}
