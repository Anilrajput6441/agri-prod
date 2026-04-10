"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { products } from "../data/products";

const slides = [
  {
    src: "/hero.jpg",
    alt: "Agricultural products displayed on a wooden table",
  },
  {
    src: "/hero2.jpg",
    alt: "Agricultural packaging and product display",
  },
];

const partnerCards = [
  {
    title: "International Nature Alliance",
    subtitle: "Global Partnership · Certified Exporter",
  },
  {
    title: "European Distribution Network",
    subtitle: "UK · EU · Middle East Markets",
  },
];

const productTags = products.slice(0, 5);

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return undefined;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="scroll-mt-32 min-h-screen bg-[#0b1e12] px-3 py-3 sm:px-4 sm:py-4"
    >
      <div className="mx-auto flex min-h-[calc(100vh-1.5rem)] max-w-[1880px] flex-col overflow-hidden rounded-[28px] bg-[#10361f] shadow-[0_30px_90px_rgba(0,0,0,0.55)] sm:min-h-[calc(100vh-2rem)]">
        <div className="relative flex min-h-[calc(100vh-1.5rem)] flex-1 overflow-hidden rounded-[28px] border border-[#7fb36a]/15">
          {slides.map((slide, index) => (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                index === activeSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-cover object-center"
              />
            </div>
          ))}

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,17,9,0.58)_0%,rgba(11,43,24,0.62)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(120,200,106,0.16),transparent_20%),radial-gradient(circle_at_80%_20%,rgba(255,203,92,0.10),transparent_16%),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:100%_100%,100%_100%,140px_140px,140px_140px] opacity-65" />

          <div className="absolute left-4 top-4 z-20 hidden gap-2 sm:flex">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Show slide ${index + 1}`}
                onClick={() => setActiveSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeSlide
                    ? "w-10 bg-white"
                    : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          <div className="absolute inset-0 z-10 flex items-start px-5 pb-10 pt-32 sm:px-8 sm:pt-36 lg:px-12 lg:pt-40">
            <div className="grid w-full gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
              <div className="max-w-[680px]">
                <div className="inline-flex items-center gap-3 rounded-full border border-[#d4a84b]/55 bg-[#1e3f26]/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#f8cb64] shadow-[0_10px_20px_rgba(0,0,0,0.12)] backdrop-blur-sm sm:px-5">
                  <span className="h-2 w-2 rounded-full bg-[#f8cb64]" />
                  Trusted Global Agricultural Exporter
                </div>

                <h1 className="mt-5 max-w-[680px] font-serif text-[clamp(2.35rem,4.8vw,5.5rem)] leading-[0.92] tracking-[-0.05em] text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.22)]">
                  <span className="block">From India&apos;s</span>
                  <span className="block italic text-[#f8cb64]">Fertile Fields</span>
                  <span className="block">To Global</span>
                  <span className="block">Tables</span>
                </h1>

                <p className="mt-5 max-w-[600px] text-[15px] leading-[1.7] text-white/76 sm:text-[17px]">
                  Premium quality agricultural exports - connecting India&apos;s
                  finest produce with international markets. Certified,
                  trusted, and delivered with care across 30+ countries
                  worldwide.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-full bg-[#d49a2f] px-6 py-3 text-[16px] font-semibold text-white shadow-[0_18px_35px_rgba(0,0,0,0.18)] transition-transform hover:-translate-y-0.5 sm:min-w-[260px]"
                  >
                    🌿 Explore Products
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/5 px-6 py-3 text-[16px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-sm transition-colors hover:bg-white/10 sm:min-w-[260px]"
                  >
                    🤝 Our Partnerships
                  </a>
                </div>
              </div>

              <div className="lg:pl-4">
                <h2 className="text-[clamp(1.2rem,1.8vw,2.15rem)] font-semibold tracking-[-0.03em] text-[#f8cb64]">
                  International Partnership
                </h2>

                <ul className="mt-4 space-y-2 text-[15px] leading-[1.6] text-white/85 sm:text-[16px]">
                  {partnerCards.map((card) => (
                    <li key={card.title}>
                      <span className="font-semibold text-white">{card.title}</span>
                      <span className="text-white/68"> — {card.subtitle}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 grid grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-5">
                  {productTags.map((item) => (
                    <article key={item.name} className="text-center">
                      <div className="relative mx-auto h-16 w-full max-w-[88px] sm:h-20 sm:max-w-[96px]">
                        <Image
                          src={item.src}
                          alt={item.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="mt-2 text-[12px] text-white/78 sm:text-[13px]">
                        {item.name}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
