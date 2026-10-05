import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.PNG";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const services = [
    {
      name: "Engineering Environment",
      href: "/#engineering-environment",
    },
    {
      name: "Project Management",
      href: "/#project-management",
    },
    {
      name: "Engineering Support",
      href: "/#engineering-support",
    },
    {
      name: "Oil & Gas",
      href: "/#oil-gas",
    },
    {
      name: "Program Management & Consulting",
      href: "/#program-management-consulting",
    },
    {
      name: "Licensing & Regulatory Support",
      href: "/#licensing-regulatory-support",
    },
  ];

  const handleServiceClick = (href) => {
    const hash = href.split("#")[1];

    setServicesOpen(false);
    setMobileMenu(false);

    // If already on the homepage
    if (location.pathname === "/") {
      const target = document.getElementById(hash);
    
      if (target) {
        window.history.pushState(null, "", `/#${hash}`);
    
        const headerOffset = 110;
    
        const targetPosition =
          target.getBoundingClientRect().top +
          window.pageYOffset -
          headerOffset;
    
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    
      return;
    }

    // If coming from another page, go to homepage first
    navigate(`/#${hash}`);
  };

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
          "#project-management",
          "#engineering-support",
          "#oil-gas",
          "#program-management-consulting",
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

  const handleMobileClick = () => {
    setMobileMenu(false);
    setServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#dfe5df] bg-[#f5f5ef]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[82px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">

        {/* LOGO */}
        <a
          href="/"
          onClick={() => {
            setMobileMenu(false);
            setServicesOpen(false);
          }}
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
          <a
            href="/"
            className={navLinkClass("home")}
          >
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

          {/* SERVICES */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setServicesOpen((prev) => !prev);
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

            {/* DESKTOP SERVICES DROPDOWN */}
            {servicesOpen && (
              <div className="absolute left-1/2 top-[42px] w-[285px] -translate-x-1/2 rounded-2xl border border-[#dce5df] bg-[#f8f8f3] p-2 shadow-[0_18px_50px_rgba(16,47,40,0.12)]">
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

          {/* MARKETS */}
          <a
            href="/markets"
            className={navLinkClass("markets")}
          >
            Markets
            {activeLine("markets")}
          </a>

          {/* CAREERS */}
          <a
            href="/careers"
            className={navLinkClass("careers")}
          >
            Careers
            {activeLine("careers")}
          </a>

          {/* CONTACT CTA */}
          <a
            href="/#contact"
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

            {/* HOME */}
            <a
              href="/"
              onClick={handleMobileClick}
              className={mobileLinkClass("home")}
            >
              Home
            </a>

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

            {/* MARKETS */}
            <a
              href="/markets"
              onClick={handleMobileClick}
              className={mobileLinkClass("markets")}
            >
              Markets
            </a>

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
              onClick={handleMobileClick}
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