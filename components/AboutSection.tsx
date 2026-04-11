"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function SectionDivider() {
  return (
    <div className="mt-4 flex items-center justify-center gap-3 text-[#7b3f12]">
      <span className="h-px w-14 bg-[#7b3f12]" />
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 -translate-y-[1px]"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.8 3.4c-3.6-.2-7.4 1.4-9.9 4.1-2.1 2.2-3.4 4.9-4.2 7.8-.2.7-.4 1.5-.4 2.2 0 .4.2.8.5 1 .4.3.9.2 1.3 0 1.5-.7 2.9-1.6 4.2-2.7 1.5-1.2 3-2.6 4-4.1.7-1.1 1.2-2.3 1.6-3.6.1-.3.2-.6.2-.9.7.4 1.4.8 2.2 1 .4.1.9 0 1.2-.3.3-.3.4-.7.4-1.1-.1-1.2-.3-2.2-.9-3.4-.3-.6-.8-.9-1.6-1Z" />
      </svg>
      <span className="h-px w-14 bg-[#7b3f12]" />
    </div>
  );
}

const slides = [
  {
    src: "/farmer1.png",
    alt: "Industrial production line",
  },
  {
    src: "/farmer2.png",
    alt: "Farm production and agricultural processing",
  },
];

export default function AboutSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return undefined;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="scroll-mt-32 bg-white px-5 py-16 text-[#5b4631] sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="font-serif text-[clamp(2rem,4vw,4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-[#7b3f12]">
            Field to Feed Export: Largest Agriculture Products Export from
            India
          </h2>
          <SectionDivider />
          <p className="mx-auto mt-10 max-w-[1020px] text-left text-[17px] leading-[1.9] text-[#5d5349] sm:text-[18px]">
            Field to Feed Export is a premier leader among agricultural exporters
            in India, delivering export-dehydrated and superfoods. As one of
            India&apos;s top agricultural export companies, we connect global
            buyers with the finest agricultural export products from India,
            ensuring traceability from farm to port. Based in Indore, we excel
            in bulk supply, custom packaging, and sustainable sourcing. With
            strict quality control and international compliance, we serve
            wholesalers, retailers, and food-industry importers seeking reliable
            agri export partnerships.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:gap-12">
          <div className="relative overflow-hidden rounded-[2px] bg-[#eee6da] shadow-[0_14px_30px_rgba(57,38,15,0.1)]">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
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
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>

            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  aria-label={`Show slide ${index + 1}`}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeSlide
                      ? "w-8 bg-white"
                      : "w-2.5 bg-white/55"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="pt-2 lg:pt-6">
            <h3 className="font-serif text-[clamp(2.2rem,3.3vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[#7b3f12]">
              Why International Buyers
              <br />
              Should Trust Us
            </h3>

            <div className="mt-3 flex items-center gap-3 text-[#7b3f12]">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18.8 3.4c-3.6-.2-7.4 1.4-9.9 4.1-2.1 2.2-3.4 4.9-4.2 7.8-.2.7-.4 1.5-.4 2.2 0 .4.2.8.5 1 .4.3.9.2 1.3 0 1.5-.7 2.9-1.6 4.2-2.7 1.5-1.2 3-2.6 4-4.1.7-1.1 1.2-2.3 1.6-3.6.1-.3.2-.6.2-.9.7.4 1.4.8 2.2 1 .4.1.9 0 1.2-.3.3-.3.4-.7.4-1.1-.1-1.2-.3-2.2-.9-3.4-.3-.6-.8-.9-1.6-1Z" />
              </svg>
              <span className="h-px w-24 bg-[#7b3f12]" />
            </div>

            <p className="mt-10 max-w-[640px] text-[17px] leading-[1.95] text-[#5d5349] sm:text-[18px]">
              As one of the largest agricultural exporters from India, we earn
              international buyer confidence by offering consistent quality,
              compliance, and transparency. We hold FSSAI, FIEO, APEDA, Spice
              Board certifications, use accredited labs for testing, and
              maintain full batch traceability. Our export shipments meet
              rigorous standards including EU residue limits, Middle East halal
              guidelines and USDA-equivalence where required. We offer clear
              documentation, short lead times, and the flexibility to meet
              buyers&apos; specifications on packaging, certifications, and
              incoterms. Over 90% on-time delivery and responsive support
              further reinforce our reputation as a dependable agro products
              exporter.
            </p>

            <div className="mt-10">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-[2px] bg-[#79b96f] px-8 py-4 text-[16px] font-medium text-white shadow-[0_10px_22px_rgba(0,0,0,0.08)] transition-transform hover:-translate-y-0.5"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
