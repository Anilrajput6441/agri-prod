import Image from "next/image";
import type { IconType } from "react-icons";
import {
  FaBoxOpen,
  FaCheckCircle,
  FaFlask,
  FaGlobe,
  FaIndustry,
  FaShip,
} from "react-icons/fa";

const allianceCards: Array<{
  icon: IconType;
  title: string;
  text: string;
}> = [
  {
    icon: FaGlobe,
    title: "International Nature",
    text: "Core global distribution & trade compliance partner across EU, UK & GCC markets",
  },
  {
    icon: FaShip,
    title: "Global Logistics Network",
    text: "Cold-chain shipping, port handling & customs clearance across 30+ countries",
  },
  {
    icon: FaFlask,
    title: "Certified Testing Labs",
    text: "Third-party quality verification meeting EU, US-FDA and GCC food safety standards",
  },
];

const metricCards: Array<{
  icon: IconType;
  value: string;
  label: string;
}> = [
  { icon: FaGlobe, value: "30+", label: "Countries Reached" },
  { icon: FaBoxOpen, value: "500+", label: "Shipments/Year" },
  { icon: FaCheckCircle, value: "100%", label: "Certified Compliant" },
  { icon: FaIndustry, value: "5", label: "Processing Units" },
];

export default function GlobalNetworkSection() {
  return (
    <section id="network" className="scroll-mt-32 bg-[#e9ddd0]">
      <div className="mx-auto max-w-[1560px]">
        <div className="relative overflow-hidden rounded-[22px] border border-[#d2bca4]/45 bg-[#ede0d2] shadow-[0_26px_70px_rgba(59,43,29,0.22)]">
          <div className="absolute inset-0">
            <Image
              src="/trade.png"
              alt="Global agricultural trade"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(243,229,212,0.48),rgba(233,216,196,0.58))]" />
          </div>

          <div className="relative bg-[radial-gradient(circle_at_15%_10%,rgba(191,143,81,0.18),transparent_34%),linear-gradient(180deg,rgba(243,230,214,0.82)_0%,rgba(233,217,198,0.88)_100%)] px-5 py-10 sm:px-8 lg:px-10 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div>
                <p className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.35em] text-[#9f6c35]">
                  <span className="h-px w-8 bg-[#9f6c35]" />
                  Global Network
                </p>
                <h2 className="mt-4 max-w-[520px] font-serif text-[clamp(2.2rem,4vw,4.1rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-[#3e2d20]">
                  Powered by
                  <span className="block italic text-[#ad7436]">
                    International
                  </span>
                  Partnerships
                </h2>
                <p className="mt-6 max-w-[640px] text-[18px] leading-[1.6] text-[#5e4b3d]/88">
                  Alif Agro Nutrition operates in strategic alliance with
                  Tabbasum Export and Nature International, globally recognized
                  trade and distribution organizations. Together, we create a
                  seamless bridge between Indian agricultural excellence and
                  international buyers, ensuring compliance, quality, and trust
                  at every step.
                </p>

                <div className="mt-8 space-y-4">
                  {allianceCards.map((card) => (
                    <article
                      key={card.title}
                      className="rounded-3xl border border-[#b89977]/36 bg-[#f7ecdf]/78 p-4 backdrop-blur-sm"
                    >
                      <div className="flex items-start gap-4">
                        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#d29c2f] text-white">
                          <card.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-[#3f2e20]">
                            {card.title}
                          </h3>
                          <p className="mt-1 text-[18px] leading-6 text-[#5f4c3d]/78">
                            {card.text}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="lg:pt-10">
                <article className="rounded-3xl border border-[#c6a07a]/35 bg-[#f3e3d1]/84 p-6 text-center backdrop-blur-sm sm:p-8">
                  <p className="text-3xl font-semibold text-[#a66d31]">TE · NI</p>
                  <h3 className="mt-3 text-[clamp(1.4rem,2.4vw,2.6rem)] font-semibold tracking-[-0.02em] text-[#ad7436]">
                    TABBASUM EXPORT &
                    <span className="block">NATURE INTERNATIONAL</span>
                  </h3>
                  <p className="mt-2 text-[12px] uppercase tracking-[0.25em] text-[#6f5a47]/74">
                    Our Global Partner
                  </p>
                </article>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  {metricCards.map((metric) => (
                    <article
                      key={metric.label}
                      className="rounded-3xl border border-[#b89977]/35 bg-[#f7ecdf]/76 p-6 text-center"
                    >
                      <metric.icon className="mx-auto h-8 w-8 text-[#a66d31]" />
                      <p className="mt-3 text-[clamp(2rem,2.8vw,3.3rem)] font-semibold text-[#ad7436]">
                        {metric.value}
                      </p>
                      <p className="mt-1 text-[12px] uppercase tracking-[0.18em] text-[#6f5a47]/74">
                        {metric.label}
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
