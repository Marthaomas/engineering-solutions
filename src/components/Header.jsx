
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.PNG";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [marketsOpen, setMarketsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const services = [
    {
      name: "Engineering Solutions",
      href: "/#engineering-environment",
    },
    {
      name: "Environmental Engineering Support",
      href: "/#engineering-support",
    },
    {
      name: "Project Management",
      href: "/#project-management",
    },
    {
      name: "Licensing, Compliance & Program Management",
      href: "/#licensing-regulatory-support",
    },
  ];

  const markets = [
    { name: "Government & Public Sector", id: "government-public-sector" },
    { name: "Nuclear Energy", id: "nuclear-energy" },
    { name: "Power Generation", id: "power-generation" },
    { name: "Life Sciences & Healthcare", id: "life-sciences-healthcare" },
    { name: "Data Centres", id: "data-centres" },
    {
      name: "Life Sciences & Biotechnology",
      id: "life-sciences-biotechnology",
    },
    {
      name: "Transportation & Mobility",
      id: "transportation-mobility",
    },
    {
      name: "Power Delivery & Grid Infrastructure",
      id: "power-delivery-grid-infrastructure",
    },
    { name: "Oil & Gas", id: "oil-gas" },
    { name: "Department of Energy", id: "department-of-energy" },
  ];

  // SCROLL TO A SERVICE SECTION ON THE HOMEPAGE
  const handleServiceClick = (href) => {
    const hash = href.split("#")[1];

    setMobileMenu(false);
    setMarketsOpen(false);

    if (location.pathname === "/") {
      const target = document.getElementById(hash);

      if (target) {
        

        const targetPosition =
          target.getBoundingClientRect().top +
          window.scrollY -
          110;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }

      return;
    }

    navigate(`/#${hash}`);

    window.setTimeout(() => {
      const target = document.getElementById(hash);

      if (!target) return;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        110;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }, 500);
  };

  // NAVIGATE TO A MARKET SECTION
  const handleMarketClick = (id) => {
    setMarketsOpen(false);
    setMobileMenu(false);

    navigate(`/markets#${id}`);

    window.setTimeout(() => {
      const target = document.getElementById(id);

      if (!target) return;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        110;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }, 500);
  };

  // CONTACT NAVIGATION
  const handleContactClick = (e) => {
    e.preventDefault();

    setMobileMenu(false);
    setMarketsOpen(false);

    if (location.pathname === "/") {
      const target = document.getElementById("contact");

      if (target) {
        

        const targetPosition =
          target.getBoundingClientRect().top +
          window.scrollY -
          110;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }

      return;
    }

    navigate("/#contact");
  };

  const handleMobileClick = () => {
    setMobileMenu(false);
    setMarketsOpen(false);
  };

  // ACTIVE NAVIGATION STATE
  const isActive = (section) => {
    if (section === "about") {
      return location.pathname === "/about";
    }

    if (section === "markets") {
      return location.pathname === "/markets";
    }

    if (section === "careers") {
      return location.pathname === "/careers";
    }

    if (section.startsWith("#")) {
      return (
        location.pathname === "/" &&
        location.hash === section
      );
    }

    return false;
  };

  const navLinkClass = (section) =>
    `group relative whitespace-nowrap py-2 text-[12px] xl:text-[13px] font-medium transition-colors duration-200 ${
      isActive(section)
        ? "text-[#0d5c48]"
        : "text-[#304c44] hover:text-[#0d5c48]"
    }`;

  const activeLine = (section) => (
    <span
      className={`absolute bottom-0 left-0 h-[2px] bg-[#16745a] transition-all duration-300 ${
        isActive(section) ? "w-full" : "w-0"
      }`}
    />
  );

  const mobileLinkClass = (section) =>
    `block rounded-xl px-4 py-3.5 text-[14px] font-medium transition-all duration-200 ${
      isActive(section)
        ? "bg-[#e3eee9] text-[#0d5c48]"
        : "text-[#304c44] hover:bg-[#edf2ef] hover:text-[#0d5c48]"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#dfe5df] bg-[#f5f5ef]/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-[82px] max-w-[1600px] items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-8 xl:px-10">
        {/* LOGO */}
        <a
          href="/"
          onClick={handleMobileClick}
          className="flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="Archridge Dynamics"
            className="h-auto w-[125px] object-contain xl:w-[150px]"
          />
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center justify-end gap-x-4 xl:gap-x-5 lg:flex">
          {/* ABOUT */}
          <a
            href="/about"
            className={navLinkClass("about")}
          >
            About
            {activeLine("about")}
          </a>

          {/* INDIVIDUAL SERVICE LINKS */}
          {services.map((service) => {
            const hash = `#${service.href.split("#")[1]}`;

            return (
              <a
                key={service.name}
                href={service.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleServiceClick(service.href);
                }}
                className={navLinkClass(hash)}
              >
                {service.name}
                {activeLine(hash)}
              </a>
            );
          })}

          {/* MARKETS DROPDOWN */}
          <div className="relative shrink-0">
            <button
              type="button"
              onClick={() => setMarketsOpen((prev) => !prev)}
              className={navLinkClass("markets")}
            >
              <span className="flex items-center gap-1">
                Markets
                <span
                  className={`h-[6px] w-[6px] rotate-45 border-b-[1.5px] border-r-[1.5px] border-current transition-transform duration-300 ${
                    marketsOpen
                      ? "-translate-y-[1px] rotate-[225deg]"
                      : "translate-y-[-2px]"
                  }`}
                />
              </span>
              {activeLine("markets")}
            </button>

            {marketsOpen && (
              <div className="absolute right-0 top-[42px] z-50 w-[310px] rounded-2xl border border-[#dce5df] bg-[#f8f8f3] p-2 shadow-[0_18px_50px_rgba(16,47,40,0.12)]">
                {markets.map((market) => (
                  <button
                    key={market.id}
                    type="button"
                    onClick={() => handleMarketClick(market.id)}
                    className="block w-full rounded-xl px-4 py-3 text-left text-[13px] font-medium text-[#304c44] transition-colors duration-200 hover:bg-[#e3eee9] hover:text-[#0d5c48]"
                  >
                    {market.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CAREERS */}
          <a
            href="/careers"
            className={navLinkClass("careers")}
          >
            Careers
            {activeLine("careers")}
          </a>

          {/* CONTACT */}
          <a
            href="/#contact"
            onClick={handleContactClick}
            className="shrink-0 rounded-xl border border-[#0d5c48] bg-[#0d5c48] px-3 py-2.5 text-[12px] font-semibold text-white transition-all duration-300 hover:bg-transparent hover:text-[#0d5c48] xl:px-4 xl:text-[13px]"
          >
            Contact Us
          </a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => {
            setMobileMenu((prev) => !prev);
            setMarketsOpen(false);
          }}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenu}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#0d4035] transition-all duration-200 hover:bg-[#e3eee9] hover:text-[#0d5c48] active:scale-90 lg:hidden"
        >
          <span className="text-[24px] leading-none">
            {mobileMenu ? "×" : "☰"}
          </span>
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {mobileMenu && (
        <div className="max-h-[75vh] overflow-y-auto border-t border-[#e4e9e4] bg-[#f5f5ef] px-5 pb-6 pt-4 lg:hidden">
          <nav className="flex flex-col gap-2">
            {/* ABOUT */}
            <a
              href="/about"
              onClick={handleMobileClick}
              className={mobileLinkClass("about")}
            >
              About
            </a>

            {/* INDIVIDUAL SERVICE LINKS */}
            {services.map((service) => {
              const hash = `#${service.href.split("#")[1]}`;

              return (
                <a
                  key={service.name}
                  href={service.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleServiceClick(service.href);
                  }}
                  className={mobileLinkClass(hash)}
                >
                  {service.name}
                </a>
              );
            })}

            {/* MARKETS */}
            <button
              type="button"
              onClick={() => setMarketsOpen((prev) => !prev)}
              className={`${mobileLinkClass(
                "markets"
              )} flex w-full items-center justify-between text-left`}
            >
              <span>Markets</span>
              <span
                className={`h-[7px] w-[7px] rotate-45 border-b-[1.5px] border-r-[1.5px] border-current transition-transform duration-300 ${
                  marketsOpen
                    ? "-translate-y-[1px] rotate-[225deg]"
                    : "translate-y-[-2px]"
                }`}
              />
            </button>

            {marketsOpen && (
              <div className="ml-3 flex flex-col gap-1 border-l border-[#d5e0da] pl-3">
                {markets.map((market) => (
                  <button
                    key={market.id}
                    type="button"
                    onClick={() => handleMarketClick(market.id)}
                    className="w-full rounded-lg px-3 py-2.5 text-left text-[13px] text-[#304c44] transition-colors duration-200 hover:bg-[#e3eee9] hover:text-[#0d5c48]"
                  >
                    {market.name}
                  </button>
                ))}
              </div>
            )}

            {/* CAREERS */}
            <a
              href="/careers"
              onClick={handleMobileClick}
              className={mobileLinkClass("careers")}
            >
              Careers
            </a>

            {/* CONTACT */}
            <a
              href="/#contact"
              onClick={handleContactClick}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-[#0d5c48] bg-[#0d5c48] px-5 py-3.5 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-transparent hover:text-[#0d5c48]"
            >
              Contact Us
              <span className="text-[16px]">→</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
