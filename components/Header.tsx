"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/#hero" },
  { label: "About Us", href: "/#about" },
  { label: "Our Products", href: "/#products" },
  { label: "Blogs", href: "/#network" },
  { label: "FAQ's", href: "/#about" },
  { label: "Contact Us", href: "/#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 80);
      // hide when scrolling down past 120px, show when scrolling up
      if (currentY > 120 && currentY > lastY) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 px-4 py-4 transition-transform duration-500 sm:px-7 sm:py-8 lg:px-10 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        className={`relative mx-auto flex max-w-[1880px] items-center rounded-full border px-4 py-3 backdrop-blur-md transition-all duration-500 sm:px-6 ${
          scrolled
            ? "border-white/5 bg-[#0f2d1c]/40 shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
            : "border-white/10 bg-[#0f2d1c]/65 shadow-[0_16px_40px_rgba(0,0,0,0.2)]"
        }`}
      >
        <Link href="/#hero" className="absolute left-4 md:-top-14 sm:left-6 lg:left-8">
          <Image
            src="/aliflogo2.png"
            alt="Nature International"
            width={160}
            height={80}
            className={`relative h-16 w-auto transition-all duration-500 sm:h-20 lg:h-40 ${
              scrolled ? "opacity-70" : "opacity-100"
            }`}
            style={{ width: "auto" }}
            priority
          />
        </Link>

        <div className="w-32 shrink-0 sm:w-40 lg:w-48" />

        {/* Nav — centred, desktop only */}
        <nav
          className={`hidden flex-1 items-center justify-center gap-6 text-[16px] transition-all duration-500 lg:flex xl:gap-9 ${
            scrolled ? "text-white/55" : "text-white/85"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="whitespace-nowrap font-[500] tracking-[-0.01em] transition-opacity hover:opacity-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Spacer — pushes hamburger to the right on mobile */}
        <div className="flex-1 lg:hidden" />

        {/* Hamburger — mobile/tablet */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[5px] rounded-full border transition-all duration-500 lg:hidden ${
            scrolled ? "border-white/8 bg-white/5" : "border-white/15 bg-white/8"
          }`}
        >
          <span className={`block h-[2px] w-5 rounded-full bg-white transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-[2px] w-5 rounded-full bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-5 rounded-full bg-white transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`mx-auto mt-2 max-w-[1880px] overflow-hidden rounded-2xl border border-white/10 bg-[#0f2d1c]/90 shadow-[0_16px_40px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-300 lg:hidden ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/8 py-3 text-[16px] font-medium text-white/88 transition-colors hover:text-white last:border-0"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
