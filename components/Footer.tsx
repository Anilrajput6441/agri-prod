import Image from "next/image";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const productLinks = [
  "Corn Silage",
  "Wheat Maize",
  "Wheat",
  "Onion",
  "Jaw",
  "Wheat Flour",
  "Bajra",
];

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Partnership", href: "#network" },
  { label: "Why Choose Us", href: "#buyers" },
  { label: "Contact", href: "#contact" },
];

const certifications = [
  "APEDA Certified",
  
];

export default function Footer() {
  return (
    <footer className="bg-[#ece7df]">
      <div className="w-full overflow-hidden border border-[#22553e]/55 bg-[linear-gradient(120deg,#03241a_0%,#073120_55%,#03251a_100%)] px-5 py-8 text-[#d7d8cf] shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:px-8 sm:py-10 lg:px-10">
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">

          {/* Brand + Contact */}
          <div>
            <Image
              src="/aliflogo2-20260524.png"
              alt="Nature International"
              width={160}
              height={64}
              className="h-14 w-auto sm:h-16"
              style={{ width: "auto" }}
            />

            <p className="mt-4 max-w-[470px] text-[16px] leading-[1.6] text-[#a8b7af]">
              Nature International — connecting India&apos;s finest agricultural
              produce to global markets. Certified quality, trusted exports,
              international partnerships.
            </p>

            <div className="mt-5 space-y-3">
              <a
                href="mailto:natureintt@gmail.com"
                className="flex items-center gap-3 text-[15px] text-[#b0bcb5] transition-colors hover:text-[#f3f0e4]"
              >
                <FaEnvelope className="h-4 w-4 shrink-0 text-[#7ab56e]" />
                natureintt@gmail.com
              </a>
              <div className="flex items-start gap-3 text-[15px] text-[#b0bcb5]">
                <FaPhoneAlt className="mt-0.5 h-4 w-4 shrink-0 text-[#7ab56e]" />
                <div className="space-y-1">
                  <p>Yawar Khan — <a href="tel:+918182019713" className="hover:text-[#f3f0e4]">+91 81820 19713</a></p>
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
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

          {/* Company */}
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

          {/* Certifications */}
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
          <p>© 2025 Nature International. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
