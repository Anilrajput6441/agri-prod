import type { IconType } from "react-icons";
import {
  FaCertificate,
  FaEnvelope,
  FaGlobe,
  FaIdCard,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { products } from "../data/products";

const reachItems: Array<{ icon: IconType; label: string; value: string }> = [
  { icon: FaEnvelope, label: "Email", value: "Natureintt@gmail.com" },
  { icon: FaPhoneAlt, label: "Yawar Khan", value: "+91 81820 19713" },
  { icon: FaMapMarkerAlt, label: "Company", value: "Nature International" },
  { icon: FaIdCard, label: "GST Number", value: "09AAVFN5082A1Z0" },
  { icon: FaCertificate, label: "Certification", value: "APEDA Certified" },
  { icon: FaGlobe, label: "IEC Number", value: "AAVFN5082A" },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-32 bg-[#ece7df] px-5 py-14 text-[#244f35] sm:px-8 lg:px-12 lg:py-20"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          {/* Left — info */}
          <aside>
            <p className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#2d8a57]">
              <span className="h-px w-8 bg-[#2d8a57]" />
              Reach Us
            </p>

            <h2 className="mt-4 font-serif text-[clamp(2rem,4.4vw,4.1rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-[#195032]">
              Let&apos;s Build a
              <span className="block italic text-[#bf8a33]">Partnership</span>
            </h2>

            <p className="mt-5 max-w-[540px] text-[17px] leading-[1.65] text-[#5f7668]">
              Whether you&apos;re a global distributor, importer, or retail
              chain, we are ready to fulfill your agricultural supply needs
              with reliable, certified, premium Indian produce.
            </p>

            <div className="mt-8 space-y-5">
              {reachItems.map((item) => (
                <div key={item.label} className="flex items-start gap-4 border-b border-[#d7c8b0]/60 pb-5 last:border-0 last:pb-0">
                  <item.icon className="mt-1 h-5 w-5 shrink-0 text-[#2f7a4f]" />
                  <div>
                    <p className="text-[12px] uppercase tracking-[0.16em] text-[#73887b]">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-[16px] font-semibold text-[#234e35]">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* Right — form */}
          <div>
            <h3 className="font-serif text-[clamp(2rem,3.1vw,3rem)] font-semibold text-[#1d4e33]">
              Contact Us
            </h3>
            <p className="mt-1 text-[17px] text-[#6f8278]">
              We respond within 24 hours, including weekends.
            </p>

            <form className="mt-8 space-y-7">
              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <label className="block text-[14px] uppercase tracking-[0.14em] text-[#5f7668]">First Name</label>
                  <input
                    type="text"
                    className="mt-3 w-full border-0 border-b-2 border-[#b0c4b8] bg-transparent pb-2 text-[17px] text-[#27372f] outline-none focus:border-[#2d8a57] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[14px] uppercase tracking-[0.14em] text-[#5f7668]">Last Name</label>
                  <input
                    type="text"
                    className="mt-3 w-full border-0 border-b-2 border-[#b0c4b8] bg-transparent pb-2 text-[17px] text-[#27372f] outline-none focus:border-[#2d8a57] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[14px] uppercase tracking-[0.14em] text-[#5f7668]">Email *</label>
                <input
                  type="email"
                  className="mt-3 w-full border-0 border-b-2 border-[#b0c4b8] bg-transparent pb-2 text-[17px] text-[#27372f] outline-none focus:border-[#2d8a57] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[14px] uppercase tracking-[0.14em] text-[#5f7668]">Product Interest *</label>
                <select className="mt-3 w-full border-0 border-b-2 border-[#b0c4b8] bg-transparent pb-2 text-[17px] text-[#27372f] outline-none focus:border-[#2d8a57] transition-colors">
                  <option value="">Select a product</option>
                  {products.map((product) => (
                    <option key={product.name} value={product.name}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[14px] uppercase tracking-[0.14em] text-[#5f7668]">Message</label>
                <textarea
                  rows={4}
                  className="mt-3 w-full resize-none border-0 border-b-2 border-[#b0c4b8] bg-transparent pb-2 text-[17px] text-[#27372f] outline-none focus:border-[#2d8a57] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-[#195032] px-10 py-4 text-[17px] font-semibold text-white shadow-[0_10px_28px_rgba(25,80,50,0.22)] transition-transform hover:-translate-y-0.5"
              >
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
