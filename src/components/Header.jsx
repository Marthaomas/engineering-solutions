
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.PNG";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
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

  // SERVICES NAVIGATION
  const handleServiceClick = (href) => {
    const hash = href.split("#")[1];

    setServicesOpen(false);
    setMarketsOpen(false);
    setMobileMenu(false);

    if (location.pathname === "/") {
      const target = document.getElementById(hash);

      if (target) {
        window.history.pushState(null, "", `/#${hash}`);

        const headerOffset = 110;
        const targetPosition =
          target.getBoundingClientRect().top +
          window.scrollY -
          headerOffset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    } else {
      navigate(`/#${hash}`);
    }
  };

  
const handleMarketClick = (id) => {
  setMarketsOpen(false);
  setServicesOpen(false);
  setMobileMenu(false);

  // Navigate to the selected market section.
  navigate(`/markets#${id}`);

  // Scroll directly to the correct write-up after navigation.
  window.setTimeout(() => {
    const target = document.getElementById(id);

    if (!target) return;

    const headerOffset = 110;
    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      headerOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }, 500);
};


  // CONTACT BUTTON
  const handleContactClick = (e) => {
    e.preventDefault();

    setMobileMenu(false);
    setServicesOpen(false);
    setMarketsOpen(false);

    if (location.pathname === "/") {
      const target = document.getElementById("contact");

      if (target) {
        window.history.pushState(null, "", "/#contact");

        const headerOffset = 110;
        const targetPosition =
          target.getBoundingClientRect().top +
          window.scrollY -
          headerOffset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }

      return;
    }

    navigate("/#contact");
  };

  // CLOSE ALL DROPDOWNS
  const handleMobileClick = () => {
    setMobileMenu(false);
    setServicesOpen(false);
    setMarketsOpen(false);
  };

  // ACTIVE NAVIGATION STATE
  const isActive = (section) => {
    if (section === "home") {
      return location.pathname === "/" && !location.hash;
    }

    if (section === "about") {
      return location.pathname === "/about";
    }

    if (section === "services") {
      return (
        location.pathname === "/" &&
        [
          "#engineering-environment",
          "#engineering-support",
          "#project-management",
          "#licensing-regulatory-support",
        ].includes(location.hash)
      );
    }

    if (section === "markets") {
      return location.pathname === "/markets";
    }

    if (section === "careers") {
      return location.pathname === "/careers";
    }

    return false;
  };

  const navLinkClass = (section) =>
    `group relative py-2 text-[14px] font-medium transition-colors duration-200 ${
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
    `block rounded-xl px-4 py-3.5 text-[15px] font-medium transition-all duration-200 ${
      isActive(section)
        ? "bg-[#e3eee9] text-[#0d5c48]"
        : "text-[#304c44] hover:bg-[#edf2ef] hover:text-[#0d5c48]"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#dfe5df] bg-[#f5f5ef]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[82px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* LOGO */}
        <a
          href="/"
          onClick={handleMobileClick}
          className="flex items-center"
        >
          <img
            src={logo}
            alt="Archridge Dynamics"
            className="h-auto w-[150px] object-contain sm:w-[165px]"
          />
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-7 lg:flex xl:gap-8">
          {/* HOME */}
          <a href="/" className={navLinkClass("home")}>
            Home
            {activeLine("home")}
          </a>

          {/* ABOUT */}
          <a
            href="/about"
            className={navLinkClass("about")}
          >
            About
            {activeLine("about")}
          </a>

          {/* SERVICES DROPDOWN */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setServicesOpen((prev) => !prev);
                setMarketsOpen(false);
              }}
              className={navLinkClass("services")}
            >
              <span className="flex items-center gap-1.5">
                Services
                <span
                  className={`ml-1 h-[6px] w-[6px] rotate-45 border-b-[1.5px] border-r-[1.5px] border-current transition-transform duration-300 ${
                    servicesOpen
                      ? "-translate-y-[1px] rotate-[225deg]"
                      : "translate-y-[-2px]"
                  }`}
                />
              </span>
              {activeLine("services")}
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-[42px] z-50 w-[285px] -translate-x-1/2 rounded-2xl border border-[#dce5df] bg-[#f8f8f3] p-2 shadow-[0_18px_50px_rgba(16,47,40,0.12)]">
                {services.map((service) => (
                  <button
                    key={service.name}
                    type="button"
                    onClick={() => handleServiceClick(service.href)}
                    className="block w-full rounded-xl px-4 py-3 text-left text-[13px] font-medium text-[#304c44] transition-colors duration-200 hover:bg-[#e3eee9] hover:text-[#0d5c48]"
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* MARKETS DROPDOWN */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setMarketsOpen((prev) => !prev);
                setServicesOpen(false);
              }}
              className={navLinkClass("markets")}
            >
              <span className="flex items-center gap-1.5">
                Markets
                <span
                  className={`ml-1 h-[6px] w-[6px] rotate-45 border-b-[1.5px] border-r-[1.5px] border-current transition-transform duration-300 ${
                    marketsOpen
                      ? "-translate-y-[1px] rotate-[225deg]"
                      : "translate-y-[-2px]"
                  }`}
                />
              </span>
              {activeLine("markets")}
            </button>

            {marketsOpen && (
              <div className="absolute left-1/2 top-[42px] z-50 w-[310px] -translate-x-1/2 rounded-2xl border border-[#dce5df] bg-[#f8f8f3] p-2 shadow-[0_18px_50px_rgba(16,47,40,0.12)]">
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
            className="ml-1 inline-flex items-center gap-2 rounded-xl border border-[#0d5c48] bg-[#0d5c48] px-5 py-3 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-transparent hover:text-[#0d5c48]"
          >
            Contact Us
          </a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => {
            setMobileMenu((prev) => !prev);
            setServicesOpen(false);
            setMarketsOpen(false);
          }}
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-full text-[#0d4035] transition-all duration-200 hover:bg-[#e3eee9] hover:text-[#0d5c48] active:scale-90 lg:hidden"
        >
          <span className="text-[24px] leading-none">
            {mobileMenu ? "×" : "☰"}
          </span>
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {mobileMenu && (
        <div className="border-t border-[#e4e9e4] bg-[#f5f5ef] px-5 pb-6 pt-4 lg:hidden">
          <nav className="flex flex-col gap-2">
            {/* ABOUT */}
            <a
              href="/about"
              onClick={handleMobileClick}
              className={mobileLinkClass("about")}
            >
              About
            </a>

            {/* SERVICES */}
            <button
              type="button"
              onClick={() => {
                setServicesOpen((prev) => !prev);
                setMarketsOpen(false);
              }}
              className={`${mobileLinkClass(
                "services"
              )} flex w-full items-center justify-between text-left`}
            >
              <span>Services</span>
              <span
                className={`h-[7px] w-[7px] rotate-45 border-b-[1.5px] border-r-[1.5px] border-current transition-transform duration-300 ${
                  servicesOpen
                    ? "-translate-y-[1px] rotate-[225deg]"
                    : "translate-y-[-2px]"
                }`}
              />
            </button>

            {/* MOBILE SERVICES DROPDOWN */}
            {servicesOpen && (
              <div className="ml-3 flex flex-col gap-1 border-l border-[#d5e0da] pl-3">
                {services.map((service) => (
                  <button
                    key={service.name}
                    type="button"
                    onClick={() => handleServiceClick(service.href)}
                    className="w-full rounded-lg px-3 py-2.5 text-left text-[13px] text-[#304c44] transition-colors duration-200 hover:bg-[#e3eee9] hover:text-[#0d5c48]"
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            )}

            {/* MOBILE MARKETS */}
            <button
              type="button"
              onClick={() => {
                setMarketsOpen((prev) => !prev);
                setServicesOpen(false);
              }}
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
