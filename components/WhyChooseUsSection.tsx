import Image from "next/image";

const strengths = [
  {
    number: "1",
    title: "Free Samples",
    description:
      "Trial packs available for buyer validation before large-volume orders.",
  },
  {
    number: "2",
    title: "Good Products",
    description:
      "Consistent quality sourced from trusted farms with strict grading standards.",
  },
  {
    number: "3",
    title: "Fast Delivery",
    description:
      "Optimized logistics and export workflows ensure timely international dispatch.",
  },
  {
    number: "4",
    title: "Good Services",
    description:
      "Dedicated support for documentation, updates, and post-shipment coordination.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="buyers" className="scroll-mt-32 bg-[#efefef]">
      <div className="relative h-[220px] w-full overflow-hidden sm:h-[260px]">
        <Image
          src="/buyerbg.avif"
          alt="Agricultural farm landscape"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,51,24,0.24),rgba(12,51,24,0.34))]" />
        <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
          <h2 className="font-sans text-[clamp(1.6rem,4vw,3rem)] font-bold tracking-[-0.02em] text-white">
            Why Choose Us
          </h2>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
        <p className="mx-auto mb-10 max-w-[900px] text-center text-[19px] leading-[1.65] text-[#8f8f8f] sm:text-[21px]">
          Decades of expertise, international standards, and an unwavering
          commitment to quality makes us the preferred agricultural export
          partner.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((item) => (
            <article key={item.number} className="text-center">
              <div className="relative mx-auto h-48 w-48 sm:h-52 sm:w-52">
                <Image
                  src="/ring.avif"
                  alt=""
                  fill
                  className="object-contain"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="font-serif text-[84px] leading-none pb-5 text-[#7da61f] sm:text-[96px]">
                    {item.number}
                  </span>
                </div>
              </div>
              <h3 className="mt-5 text-[28px] font-semibold tracking-[-0.01em] text-[#7da61f] sm:text-[34px]">
                {item.title}
              </h3>
              <p className="mx-auto mt-3 max-w-[320px] text-[16px] leading-[1.6] text-[#8a8a8a] sm:text-[17px]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
