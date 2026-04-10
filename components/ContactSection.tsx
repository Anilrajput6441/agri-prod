import type { IconType } from "react-icons";
import {
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { products } from "../data/products";

const reachItems: Array<{
  icon: IconType;
  label: string;
  value: string;
}> = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "exports@agrovista.in",
  },
  {
    icon: FaPhoneAlt,
    label: "Phone / WhatsApp",
    value: "+91 98765 43210",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Office",
    value: "Kanpur, Uttar Pradesh, India",
  },
  {
    icon: FaGlobe,
    label: "Partnership",
    value: "International Nature - Global Partner",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-32 bg-[#ece7df] px-5 py-14 text-[#244f35] sm:px-8 lg:px-12 lg:py-20"
    >
      <div className="mx-auto max-w-[1320px] rounded-[22px] border border-[#d7c8b0] bg-[#ebe5dc] p-6 shadow-[0_20px_55px_rgba(66,46,27,0.12)] sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <aside>
            <p className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#2d8a57]">
              <span className="h-px w-8 bg-[#2d8a57]" />
              Reach Us
            </p>

            <h2 className="mt-4 font-serif text-[clamp(2rem,4.4vw,4.1rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-[#195032]">
              Let&apos;s Build a
              <span className="block italic text-[#bf8a33]">Partnership</span>
            </h2>

            <p className="mt-5 max-w-[540px] text-[18px] leading-[1.6] text-[#5f7668]">
              Whether you&apos;re a global distributor, importer, or retail
              chain, we are ready to fulfill your agricultural supply needs
              with reliable, certified, premium Indian produce.
            </p>

            <div className="mt-8 space-y-3">
              {reachItems.map((item) => (
                <article
                  key={item.label}
                  className="flex items-center gap-4 rounded-2xl border border-[#d7c8b0] bg-[#f1ede7] px-4 py-4"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#e2e4e3] text-[#2f7a4f]">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[12px] uppercase tracking-[0.16em] text-[#73887b]">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-[19px] font-semibold text-[#234e35] sm:text-[21px]">
                      {item.value}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </aside>

          <div className="rounded-[26px] border border-[#d7c8b0] bg-[#f3f2f0] p-5 sm:p-7 lg:p-8">
            <h3 className="font-serif text-[clamp(2rem,3.1vw,3rem)] font-semibold text-[#1d4e33]">
              Contact Us
            </h3>
            <p className="mt-1 text-[17px] text-[#6f8278]">
              We respond within 24 hours, including weekends.
            </p>

            <form className="mt-7 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-[16px] text-[#1f4d34]">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="mt-4 w-full border-0 border-b-4 border-[#1f1f1f] bg-transparent pb-2 text-[18px] text-[#27372f] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[16px] text-[#1f4d34]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="mt-4 w-full border-0 border-b-4 border-[#1f1f1f] bg-transparent pb-2 text-[18px] text-[#27372f] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[16px] text-[#1f4d34]">Email *</label>
                <input
                  type="email"
                  className="mt-4 w-full border-0 border-b-4 border-[#1f1f1f] bg-transparent pb-2 text-[18px] text-[#27372f] outline-none"
                />
              </div>

              <div>
                <label className="block text-[16px] text-[#1f4d34]">
                  Product Interest *
                </label>
                <select className="mt-4 w-full border-0 border-b-4 border-[#1f1f1f] bg-transparent pb-2 text-[18px] text-[#27372f] outline-none">
                  <option value="">Select a product</option>
                  {products.map((product) => (
                    <option key={product.name} value={product.name}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[16px] text-[#1f4d34]">
                  Write a message
                </label>
                <textarea
                  rows={4}
                  className="mt-4 w-full resize-none border-0 border-b-4 border-[#1f1f1f] bg-transparent pb-2 text-[18px] text-[#27372f] outline-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex min-w-[210px] items-center justify-center rounded-full bg-black px-10 py-4 text-[22px] font-semibold text-white transition-transform hover:-translate-y-0.5"
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
