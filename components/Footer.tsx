import { FaBoxOpen, FaGlobe, FaLink, FaPhoneAlt, FaSeedling } from "react-icons/fa";

const productLinks = [
  "Banana",
  "Grapes",
  "Mango",
  "Onion",
  "Pineapple",
  "Rice",
  "Sugar",
  "Wheat",
];

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Partnership", href: "#network" },
  { label: "Why Choose Us", href: "#buyers" },
  { label: "Contact", href: "#contact" },
];

const certifications = [
  "APEDA Certified",
  "ISO 22000",
  "Global GAP",
  "FSSAI Approved",
  "HACCP Compliant",
];

export default function Footer() {
  return (
    <footer className="bg-[#ece7df]">
      <div className="w-full overflow-hidden border border-[#22553e]/55 bg-[linear-gradient(120deg,#03241a_0%,#073120_55%,#03251a_100%)] px-5 py-8 text-[#d7d8cf] shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:px-8 sm:py-10 lg:px-10">
        <div className="grid gap-9 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-[#e0b24f] text-[#12452f] shadow-[0_10px_24px_rgba(224,178,79,0.28)]">
                <FaSeedling className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-[28px] font-bold tracking-[0.08em] text-[#f2f0e7] sm:text-[30px]">
                  AGROVISTA
                </h3>
                <p className="text-[12px] uppercase tracking-[0.26em] text-[#85998d]">
                  Exports & Partnerships
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-[470px] text-[17px] leading-[1.6] text-[#a8b7af] sm:text-[18px]">
              Connecting India&apos;s finest agricultural produce to global
              markets. Certified quality, trusted exports, international
              partnerships.
            </p>

            <div className="mt-6 flex gap-3">
              {[
                { icon: FaLink, label: "Website" },
                { icon: FaPhoneAlt, label: "Phone" },
                { icon: FaGlobe, label: "Global" },
                { icon: FaBoxOpen, label: "Products" },
              ].map((item) => (
                <button
                  key={item.label}
                  type="button"
                  aria-label={item.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/14 bg-white/8 text-[#d8d8cd] transition-colors hover:bg-white/16"
                >
                  <item.icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[20px] font-semibold uppercase tracking-[0.16em] text-[#f0c760] sm:text-[22px]">
              Products
            </h4>
            <ul className="mt-4 space-y-2.5 text-[17px] text-[#b0bcb5] sm:text-[18px]">
              {productLinks.map((product) => (
                <li key={product} className="leading-[1.45]">
                  <span className="mr-1 text-[#7ab56e]">•</span>
                  {product}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[20px] font-semibold uppercase tracking-[0.16em] text-[#f0c760] sm:text-[22px]">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5 text-[17px] sm:text-[18px]">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="leading-[1.45] text-[#b0bcb5] transition-colors hover:text-[#f3f0e4]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[20px] font-semibold uppercase tracking-[0.16em] text-[#f0c760] sm:text-[22px]">
              Certifications
            </h4>
            <ul className="mt-4 space-y-2.5 text-[17px] text-[#b0bcb5] sm:text-[18px]">
              {certifications.map((item) => (
                <li key={item} className="leading-[1.45]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 text-[14px] text-[#93a198] sm:flex sm:items-center sm:justify-between sm:text-[15px]">
          <p>© 2025 AgroVista Exports. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Partner: International Nature | Made in India</p>
        </div>
      </div>
    </footer>
  );
}
