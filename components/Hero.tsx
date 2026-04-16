"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaHandshake, FaLeaf } from "react-icons/fa";
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

const chunkProducts = <T,>(items: T[], size: number) => {
  const chunks: T[][] = [];

  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }

  return chunks;
};

const productSlides = chunkProducts(products, 5);

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeProductSlide, setActiveProductSlide] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return undefined;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (productSlides.length < 2) return undefined;

    const interval = window.setInterval(() => {
      setActiveProductSlide((current) => (current + 1) % productSlides.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="scroll-mt-32 min-h-screen bg-[#0b1e12] px-0 py-0 "
    >
      <div className="mx-auto flex min-h-[calc(100vh-1.5rem)] max-w-[100vw] flex-col overflow-hidden bg-[#10361f] shadow-[0_30px_90px_rgba(0,0,0,0.55)] sm:min-h-[calc(100vh)]">
        <div className="relative flex min-h-[calc(100vh - 1rem)] flex-1 overflow-hidden ">
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
                sizes="100vw"
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

          <div className="absolute inset-0 z-10 flex flex-col justify-between px-5 pb-10 pt-28 sm:flex-row sm:items-start sm:px-8 sm:pt-36 lg:px-12 lg:pt-40">
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

                {/* Buttons — visible on sm+ inline with text column */}
                <div className="mt-7 hidden flex-col gap-3 sm:flex sm:flex-row">
                  <Link
                    href="/#products"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d49a2f] px-6 py-3 text-[16px] font-semibold text-white shadow-[0_18px_35px_rgba(0,0,0,0.18)] transition-transform hover:-translate-y-0.5 sm:min-w-[260px]"
                  >
                    <FaLeaf className="h-4 w-4" />
                    Explore Products
                  </Link>
                  <Link
                    href="/#network"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/5 px-6 py-3 text-[16px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-sm transition-colors hover:bg-white/10 sm:min-w-[260px]"
                  >
                    <FaHandshake className="h-4 w-4" />
                    Our Partnerships
                  </Link>
                </div>
              </div>

              <div className="lg:pl-4 hidden sm:block">
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

                <div className="mt-6 overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="grid min-h-[150px] grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-5">
                    {productSlides[activeProductSlide].map((item) => (
                      <article key={item.slug} className="text-center">
                        <Link href={`/products/${item.slug}`} className="block">
                          <div className="relative mx-auto h-16 w-full max-w-[88px] sm:h-20 sm:max-w-[96px]">
                            <Image
                              src={item.src}
                              alt={item.name}
                              fill
                              sizes="96px"
                              className="object-contain transition-transform duration-300 hover:scale-110"
                            />
                          </div>
                        </Link>
                        <p className="mt-2 text-[12px] text-white/78 sm:text-[13px]">
                          {item.name}
                        </p>
                      </article>
                    ))}
                  </div>

                  {productSlides.length > 1 ? (
                    <div className="mt-4 flex items-center justify-center gap-2">
                      {productSlides.map((_, index) => (
                        <button
                          key={`product-slide-${index}`}
                          type="button"
                          aria-label={`Show product slide ${index + 1}`}
                          onClick={() => setActiveProductSlide(index)}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            index === activeProductSlide
                              ? "w-8 bg-[#f8cb64]"
                              : "w-2 bg-white/35 hover:bg-white/60"
                          }`}
                        />
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            {/* Buttons — mobile only, pinned to bottom */}
            <div className="flex flex-col gap-3 sm:hidden">
              <Link
                href="/#products"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d49a2f] px-6 py-3 text-[16px] font-semibold text-white shadow-[0_18px_35px_rgba(0,0,0,0.18)] transition-transform hover:-translate-y-0.5"
              >
                <FaLeaf className="h-4 w-4" />
                Explore Products
              </Link>
              <Link
                href="/#network"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/5 px-6 py-3 text-[16px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                <FaHandshake className="h-4 w-4" />
                Our Partnerships
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
