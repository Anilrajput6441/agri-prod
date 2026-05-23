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

const allianceItems: Array<{ icon: IconType; title: string; text: string }> = [
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

const metrics: Array<{ icon: IconType; value: string; label: string }> = [
  { icon: FaGlobe, value: "30+", label: "Countries" },
  { icon: FaBoxOpen, value: "500+", label: "Shipments/yr" },
  { icon: FaCheckCircle, value: "100%", label: "Certified" },
  { icon: FaIndustry, value: "5", label: "Units" },
];

export default function GlobalNetworkSection() {
  return (
    <section id="network" className="scroll-mt-32 bg-[#e9ddd0]">
      <div className="mx-auto max-w-[1560px]">
        <div className="relative overflow-hidden  bg-[#ede0d2] ">
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
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">

              {/* Left */}
              <div>
                <p className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.35em] text-[#9f6c35]">
                  <span className="h-px w-8 bg-[#9f6c35]" />
                  Global Network
                </p>
                <h2 className="mt-4 max-w-[520px] font-serif text-[clamp(2.2rem,4vw,4.1rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-[#3e2d20]">
                  Powered by
                  <span className="block italic text-[#ad7436]">International</span>
                  Partnerships
                </h2>
                <p className="mt-5 max-w-[620px] text-[17px] leading-[1.65] text-[#5e4b3d]/88">
                    Nature International operates in strategic alliance with Tabbasum Export
                    and Nature International, creating a seamless bridge between Indian
                    agricultural excellence and international buyers.
                </p>

                <div className="mt-8 space-y-6">
                  {allianceItems.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#d29c2f]/20 text-[#a66d31]">
                        <item.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="text-[16px] font-semibold text-[#3f2e20]">{item.title}</h3>
                        <p className="mt-0.5 text-[15px] leading-[1.55] text-[#5f4c3d]/78">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="lg:pt-10">
                {/* Partner name — no box, just styled text */}
                <div className="border-l-4 border-[#ad7436] pl-5">
                  <p className="text-[12px] uppercase tracking-[0.25em] text-[#6f5a47]/74">Our Global Partners</p>
                  <h3 className="mt-2 font-serif text-[clamp(1.4rem,2.2vw,2.2rem)] font-semibold leading-[1.15] text-[#ad7436]">
                    Tabbasum Export &<br />Nature International
                  </h3>
                </div>

                {/* Metrics — horizontal strip, no boxes */}
                <div className="mt-8 grid grid-cols-4 gap-0 divide-x divide-[#b89977]/40">
                  {metrics.map((m) => (
                    <div key={m.label} className="px-3 text-center first:pl-0 last:pr-0">
                      <m.icon className="mx-auto h-5 w-5 text-[#a66d31]" />
                      <p className="mt-2 text-[clamp(1.4rem,2.2vw,2.4rem)] font-semibold leading-none text-[#ad7436]">
                        {m.value}
                      </p>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-[#6f5a47]/74">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="mt-8 h-px w-full bg-[#b89977]/30" />

                <p className="mt-6 text-[15px] leading-[1.7] text-[#5e4b3d]/80">
                  Together we serve wholesalers, retailers, and food-industry importers
                  across 30+ countries with certified, traceable Indian produce — from
                  farm to port, every step is documented and verified.
                </p>

                <p className="mt-4 text-[15px] leading-[1.7] text-[#5e4b3d]/80">
                  Our partnerships with Tabbasum Export and Nature International give us
                  direct access to established distribution channels in the EU, UK, GCC,
                  and Southeast Asian markets, reducing lead times and ensuring
                  regulatory compliance at every destination.
                </p>

                <p className="mt-4 text-[15px] leading-[1.7] text-[#5e4b3d]/80">
                  With cold-chain logistics, third-party lab testing, and dedicated
                  export documentation support, we make international procurement
                  simple, reliable, and fully transparent for buyers of all scales.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
