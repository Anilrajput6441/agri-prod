import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";

export default function ProductSection() {
  return (
    <section
      id="products"
      className="scroll-mt-32 bg-white px-5 py-16 text-[#453b33] sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.42em] text-[#7b3f12]">
            Our Products
          </p>
          <h2 className="mt-4 font-serif text-[clamp(2rem,3.8vw,4rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-[#7b3f12]">
            Fresh produce, export ready.
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-[16px] leading-[1.8] text-[#6b6259] sm:text-[18px]">
            Click on any product to learn more about its quality, origin, and packaging options.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <article key={product.slug} className="text-center">
              <Link href={`/products/${product.slug}`} className="block">
                <div className="relative mx-auto aspect-[1/1] w-full max-w-[320px] transition-all duration-300 ease-out hover:-translate-y-3 hover:drop-shadow-[0_24px_20px_rgba(123,63,18,0.22)] hover:[filter:drop-shadow(0_24px_20px_rgba(123,63,18,0.22))_drop-shadow(0_6px_6px_rgba(0,0,0,0.10))]">
                  <Image
                    src={product.src}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 320px"
                    className="object-contain"
                  />
                </div>
              </Link>
              <h3 className="mt-4 text-[18px] font-medium text-[#5a5148] sm:text-[20px]">
                {product.name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
