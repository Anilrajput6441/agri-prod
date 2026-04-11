import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../../../data/products";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { FaArrowLeft, FaBoxOpen, FaLeaf, FaMapMarkerAlt } from "react-icons/fa";

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

          {/* Back link */}
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 text-[15px] font-medium text-[#7b3f12] transition-opacity hover:opacity-70"
          >
            <FaArrowLeft className="h-3.5 w-3.5" />
            Back to Products
          </Link>

          {/* Hero grid */}
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">

            {/* Image */}
            <div className="relative mx-auto aspect-square w-full max-w-[480px] rounded-3xl border border-[#e8ddd2] bg-[#f7f2ec] p-8 shadow-[0_20px_60px_rgba(57,38,15,0.1)]">
              <Image
                src={product.src}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-contain p-6"
              />
            </div>

            {/* Details */}
            <div>
              <p className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.35em] text-[#9f6c35]">
                <FaLeaf className="h-3 w-3" />
                Alif Agro Nutrition
              </p>

              <h1 className="mt-3 font-serif text-[clamp(2.4rem,4vw,4rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-[#3e2d20]">
                {product.name}
              </h1>

              <p className="mt-3 text-[18px] italic text-[#9f6c35]">
                {product.tagline}
              </p>

              <p className="mt-5 text-[17px] leading-[1.85] text-[#5d5349]">
                {product.description}
              </p>

              {/* Highlights */}
              <ul className="mt-6 space-y-2">
                {product.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-[16px] text-[#5d5349]">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#7ab56e]" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Meta */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-[#e8ddd2] bg-[#f7f2ec] px-4 py-4">
                  <div className="flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-[#9f6c35]">
                    <FaMapMarkerAlt className="h-3 w-3" />
                    Origin
                  </div>
                  <p className="mt-1.5 text-[15px] font-semibold text-[#3e2d20]">
                    {product.origin}
                  </p>
                </div>
                <div className="rounded-2xl border border-[#e8ddd2] bg-[#f7f2ec] px-4 py-4">
                  <div className="flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-[#9f6c35]">
                    <FaBoxOpen className="h-3 w-3" />
                    Packaging
                  </div>
                  <p className="mt-1.5 text-[15px] font-semibold text-[#3e2d20]">
                    {product.packaging}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#7b3f12] px-8 py-3.5 text-[16px] font-semibold text-white shadow-[0_10px_28px_rgba(123,63,18,0.28)] transition-transform hover:-translate-y-0.5"
                >
                  Enquire Now
                </Link>
                <Link
                  href="/#products"
                  className="inline-flex items-center justify-center rounded-full border border-[#c8b49a] px-8 py-3.5 text-[16px] font-medium text-[#7b3f12] transition-colors hover:bg-[#f5f0ea]"
                >
                  View All Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
