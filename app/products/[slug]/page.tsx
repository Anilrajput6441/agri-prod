import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../../../data/products";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { FaArrowLeft, FaBoxOpen, FaLeaf, FaMapMarkerAlt, FaShip, FaCertificate, FaSeedling } from "react-icons/fa";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-32 pb-20">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8 lg:px-12">

          {/* Back */}
          <Link href="/#products" className="inline-flex items-center gap-2 text-[15px] font-medium text-[#7b3f12] transition-opacity hover:opacity-70">
            <FaArrowLeft className="h-3.5 w-3.5" />
            Back to Products
          </Link>

          {/* Hero grid */}
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
            <div className="relative mx-auto aspect-square w-full max-w-[480px]">
              <Image src={product.src} alt={product.name} fill sizes="(max-width: 1024px) 90vw, 480px" className="object-contain" />
            </div>

            <div>
              <p className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.35em] text-[#9f6c35]">
                <FaLeaf className="h-3 w-3" /> Alif Agro Nutrition
              </p>
              <h1 className="mt-3 font-serif text-[clamp(2.4rem,4vw,4rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-[#3e2d20]">
                {product.name}
              </h1>
              <p className="mt-2 text-[18px] italic text-[#9f6c35]">{product.tagline}</p>
              <p className="mt-4 text-[17px] leading-[1.85] text-[#5d5349]">{product.description}</p>

              <ul className="mt-5 space-y-2">
                {product.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-[16px] text-[#5d5349]">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#7ab56e]" />{h}
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-3 border-t border-[#e8ddd2] pt-6">
                <div>
                  <p className="flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-[#9f6c35]"><FaMapMarkerAlt className="h-3 w-3" />Origin</p>
                  <p className="mt-1 text-[15px] font-semibold text-[#3e2d20]">{product.origin}</p>
                </div>
                <div>
                  <p className="flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-[#9f6c35]"><FaBoxOpen className="h-3 w-3" />Packaging</p>
                  <p className="mt-1 text-[15px] font-semibold text-[#3e2d20]">{product.packaging}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/#contact" className="inline-flex items-center justify-center rounded-full bg-[#7b3f12] px-8 py-3.5 text-[16px] font-semibold text-white shadow-[0_10px_28px_rgba(123,63,18,0.28)] transition-transform hover:-translate-y-0.5">
                  Enquire Now
                </Link>
                <Link href="/#products" className="inline-flex items-center justify-center rounded-full border border-[#c8b49a] px-8 py-3.5 text-[16px] font-medium text-[#7b3f12] transition-colors hover:bg-[#f5f0ea]">
                  View All Products
                </Link>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-16 h-px w-full bg-[#e8ddd2]" />

          {/* Technical Specs */}
          <div className="mt-12">
            <h2 className="font-serif text-[clamp(1.6rem,2.5vw,2.4rem)] font-semibold text-[#3e2d20]">Technical Specifications</h2>
            <p className="mt-1 text-[15px] text-[#9f6c35]">Verified parameters for international procurement</p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-[15px]">
                <thead>
                  <tr className="border-b-2 border-[#7b3f12]">
                    <th className="pb-3 pr-8 text-[12px] uppercase tracking-[0.2em] text-[#7b3f12]">Parameter</th>
                    <th className="pb-3 text-[12px] uppercase tracking-[0.2em] text-[#7b3f12]">Value / Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {product.specs.map((row, i) => (
                    <tr key={row.parameter} className={`border-b border-[#e8ddd2] ${i % 2 === 0 ? "bg-[#faf7f4]" : "bg-white"}`}>
                      <td className="py-3 pr-8 font-medium text-[#3e2d20]">{row.parameter}</td>
                      <td className="py-3 text-[#5d5349]">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Varieties & Grading + Harvest */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="font-serif text-[clamp(1.4rem,2vw,2rem)] font-semibold text-[#3e2d20]">Variety & Grading</h2>
              <div className="mt-4 space-y-2">
                {product.varieties.map((v) => (
                  <div key={v} className="flex items-center gap-3 text-[15px] text-[#5d5349]">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#7ab56e]" />{v}
                  </div>
                ))}
              </div>
              <div className="mt-4 border-t border-[#e8ddd2] pt-4">
                <p className="text-[12px] uppercase tracking-[0.18em] text-[#9f6c35]">Grading</p>
                <p className="mt-1 text-[15px] font-semibold text-[#3e2d20]">{product.grading}</p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-[clamp(1.4rem,2vw,2rem)] font-semibold text-[#3e2d20]">
                <span className="inline-flex items-center gap-2"><FaSeedling className="h-5 w-5 text-[#7ab56e]" />Harvest Calendar</span>
              </h2>
              <p className="mt-4 text-[16px] leading-[1.7] text-[#5d5349]">{product.harvestSeason}</p>
            </div>
          </div>

          {/* Shipping & Logistics */}
          <div className="mt-12 border-t border-[#e8ddd2] pt-12">
            <h2 className="font-serif text-[clamp(1.6rem,2.5vw,2.4rem)] font-semibold text-[#3e2d20]">
              <span className="inline-flex items-center gap-3"><FaShip className="h-6 w-6 text-[#7b3f12]" />Shipping & Logistics</span>
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { label: "Loadability", value: product.shipping.loadability },
                { label: "Incoterms", value: product.shipping.incoterms },
                { label: "Port of Loading", value: product.shipping.ports },
                { label: "Lead Time", value: product.shipping.leadTime },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-[#7b3f12] pl-4">
                  <p className="text-[12px] uppercase tracking-[0.18em] text-[#9f6c35]">{item.label}</p>
                  <p className="mt-1 text-[15px] font-semibold text-[#3e2d20]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-12 border-t border-[#e8ddd2] pt-12">
            <h2 className="font-serif text-[clamp(1.6rem,2.5vw,2.4rem)] font-semibold text-[#3e2d20]">
              <span className="inline-flex items-center gap-3"><FaCertificate className="h-6 w-6 text-[#7b3f12]" />Quality & Certifications</span>
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {product.certifications.map((cert) => (
                <span key={cert} className="inline-flex items-center gap-2 rounded-full border border-[#c8b49a] px-4 py-2 text-[14px] font-medium text-[#7b3f12]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7ab56e]" />{cert}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 border-t border-[#e8ddd2] pt-12 text-center">
            <h3 className="font-serif text-[clamp(1.6rem,2.5vw,2.4rem)] font-semibold text-[#3e2d20]">Ready to place an order?</h3>
            <p className="mt-2 text-[16px] text-[#5d5349]">Contact us for pricing, samples, and custom specifications.</p>
            <Link href="/#contact" className="mt-6 inline-flex items-center justify-center rounded-full bg-[#7b3f12] px-10 py-4 text-[17px] font-semibold text-white shadow-[0_10px_28px_rgba(123,63,18,0.28)] transition-transform hover:-translate-y-0.5">
              Get in Touch
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
