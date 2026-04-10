const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about" },
  { label: "Our Products", href: "#products" },
  { label: "Packaging Solution", href: "#network" },
  { label: "Catalogue", href: "#products" },
  { label: "Blogs", href: "#network" },
  { label: "FAQ's", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:px-7 sm:py-6 lg:px-10">
      <div className="mx-auto flex max-w-[1880px] items-center justify-between rounded-full border border-white/10 bg-[#0f2d1c]/65 px-4 py-3 shadow-[0_16px_40px_rgba(0,0,0,0.2)] backdrop-blur-md sm:px-6">
        <nav className="hidden flex-1 items-center justify-start gap-6 text-[17px] text-white/88 lg:flex xl:gap-10">
          {navItems.slice(0, 4).map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className="whitespace-nowrap font-[500] tracking-[-0.01em] transition-opacity hover:opacity-100"
            >
              {item.label}
              {index < 3 ? <span className="ml-1 text-white/55">▾</span> : null}
            </a>
          ))}
        </nav>

        <div className="flex flex-1 justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#f1cf7e]/55 bg-white/10 text-[#f6d57b] backdrop-blur-[2px] sm:h-16 sm:w-16">
            <span className="text-[28px] font-semibold leading-none tracking-[-0.08em] sm:text-[34px]">
              F
            </span>
          </div>
        </div>

        <nav className="hidden flex-1 items-center justify-end gap-6 text-[17px] text-white/88 lg:flex xl:gap-10">
          {navItems.slice(4).map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="whitespace-nowrap font-[500] tracking-[-0.01em] transition-opacity hover:opacity-100"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto mt-3 max-w-[1880px] lg:hidden">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-full border border-white/10 bg-[#0f2d1c]/55 px-4 py-3 text-[14px] text-white/84 shadow-[0_12px_30px_rgba(0,0,0,0.12)] backdrop-blur-md sm:text-[15px]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-medium tracking-[-0.01em]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
