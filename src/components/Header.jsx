import { useState } from "react";
import logo from "../assets/logo.PNG";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // =========================================================
  // DESKTOP NAV LINK STYLE
  // =========================================================

  const navLinkClass = (section) =>
    `group relative py-2 text-[14px] font-medium transition-colors duration-200 ${
      activeSection === section
        ? "text-[#0d5c48]"
        : "text-[#304c44] hover:text-[#0d5c48]"
    }`;

  const activeLine = (section) => (
    <span
      className={`absolute bottom-0 left-0 h-[2px] bg-[#16745a] transition-all duration-300 ${
        activeSection === section ? "w-full" : "w-0"
      }`}
    />
  );

  // =========================================================
  // MOBILE NAV LINK STYLE
  // =========================================================

  const mobileLinkClass = (section) =>
    `block rounded-xl px-4 py-3.5 text-[15px] font-medium transition-all duration-200 ${
      activeSection === section
        ? "bg-[#e3eee9] text-[#0d5c48]"
        : "text-[#304c44] hover:bg-[#edf2ef] hover:text-[#0d5c48]"
    }`;

  // =========================================================
  // MOBILE LINK HANDLER
  // =========================================================

  const handleMobileClick = (section) => {
    setActiveSection(section);
    setMobileMenu(false);
    setServicesOpen(false);
    setIndustriesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#dfe5df] bg-[#f5f5ef]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[82px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">

        {/* =================================================
            LOGO
        ================================================== */}
        <a
          href="#home"
          onClick={() => setActiveSection("home")}
          className="flex items-center"
        >
          <img
            src={logo}
            alt="Archridge Dynamics"
            className="h-auto w-[150px] object-contain sm:w-[165px]"
          />
        </a>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================== */}
        <nav className="hidden items-center gap-7 lg:flex xl:gap-9">

          {/* HOME */}
          <a
            href="#home"
            onClick={() => setActiveSection("home")}
            className={navLinkClass("home")}
          >
            Home
            {activeLine("home")}
          </a>

          {/* ABOUT */}
          <a
            href="#about"
            onClick={() => setActiveSection("about")}
            className={navLinkClass("about")}
          >
            About Us
            {activeLine("about")}
          </a>

          {/* =================================================
              SERVICES
          ================================================== */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setServicesOpen(!servicesOpen);
                setIndustriesOpen(false);
                setActiveSection("services");
              }}
              className={navLinkClass("services")}
            >
              <span className="flex items-center gap-1.5">
                Services

                <span
                  className={`text-[10px] transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </span>

              {activeLine("services")}
            </button>

            {/* SERVICES DROPDOWN */}
            {servicesOpen && (
              <div className="absolute left-1/2 top-[42px] w-[270px] -translate-x-1/2 rounded-2xl border border-[#dce5df] bg-[#f8f8f3] p-2 shadow-[0_18px_50px_rgba(16,47,40,0.12)]">

                <a
                  href="#engineering-solutions"
                  onClick={() => {
                    setActiveSection("services");
                    setServicesOpen(false);
                  }}
                  className="block rounded-xl px-4 py-3 text-sm text-[#304c44] transition-colors hover:bg-[#e3eee9] hover:text-[#0d5c48]"
                >
                  Engineering Solutions
                </a>

                <a
                  href="#project-management-controls"
                  onClick={() => {
                    setActiveSection("services");
                    setServicesOpen(false);
                  }}
                  className="block rounded-xl px-4 py-3 text-sm text-[#304c44] transition-colors hover:bg-[#e3eee9] hover:text-[#0d5c48]"
                >
                  Project Management & Controls
                </a>

                <a
                  href="#asset-integrity-management"
                  onClick={() => {
                    setActiveSection("services");
                    setServicesOpen(false);
                  }}
                  className="block rounded-xl px-4 py-3 text-sm text-[#304c44] transition-colors hover:bg-[#e3eee9] hover:text-[#0d5c48]"
                >
                  Asset Integrity Management
                </a>

                <a
                  href="#risk-management"
                  onClick={() => {
                    setActiveSection("services");
                    setServicesOpen(false);
                  }}
                  className="block rounded-xl px-4 py-3 text-sm text-[#304c44] transition-colors hover:bg-[#e3eee9] hover:text-[#0d5c48]"
                >
                  Risk Management
                </a>

                <a
                  href="#quality-assurance-quality-control"
                  onClick={() => {
                    setActiveSection("services");
                    setServicesOpen(false);
                  }}
                  className="block rounded-xl px-4 py-3 text-sm text-[#304c44] transition-colors hover:bg-[#e3eee9] hover:text-[#0d5c48]"
                >
                  Quality Assurance & Quality Control
                </a>

                <a
                  href="#industrial-systems-modelling"
                  onClick={() => {
                    setActiveSection("services");
                    setServicesOpen(false);
                  }}
                  className="block rounded-xl px-4 py-3 text-sm text-[#304c44] transition-colors hover:bg-[#e3eee9] hover:text-[#0d5c48]"
                >
                  Industrial Systems Modelling
                </a>

                <a
                  href="#pipe-stress-analysis"
                  onClick={() => {
                    setActiveSection("services");
                    setServicesOpen(false);
                  }}
                  className="block rounded-xl px-4 py-3 text-sm text-[#304c44] transition-colors hover:bg-[#e3eee9] hover:text-[#0d5c48]"
                >
                  Pipe Stress Analysis
                </a>

                <a
                  href="#government-contract-engineering"
                  onClick={() => {
                    setActiveSection("services");
                    setServicesOpen(false);
                  }}
                  className="block rounded-xl px-4 py-3 text-sm text-[#304c44] transition-colors hover:bg-[#e3eee9] hover:text-[#0d5c48]"
                >
                  Government Contract Engineering
                </a>

              </div>
            )}
          </div>

          {/* =================================================
              INDUSTRIES
          ================================================== */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setIndustriesOpen(!industriesOpen);
                setServicesOpen(false);
                setActiveSection("industries");
              }}
              className={navLinkClass("industries")}
            >
              <span className="flex items-center gap-1.5">
                Industries

                <span
                  className={`text-[10px] transition-transform duration-200 ${
                    industriesOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </span>

              {activeLine("industries")}
            </button>

            {/* INDUSTRIES DROPDOWN */}
            {industriesOpen && (
              <div className="absolute left-1/2 top-[42px] w-[220px] -translate-x-1/2 rounded-2xl border border-[#dce5df] bg-[#f8f8f3] p-2 shadow-[0_18px_50px_rgba(16,47,40,0.12)]">

                <a
                  href="#oil-and-gas"
                  onClick={() => {
                    setActiveSection("industries");
                    setIndustriesOpen(false);
                  }}
                  className="block rounded-xl px-4 py-3 text-sm text-[#304c44] transition-colors hover:bg-[#e3eee9] hover:text-[#0d5c48]"
                >
                  Oil & Gas
                </a>

                <a
                  href="#power-and-utilities"
                  onClick={() => {
                    setActiveSection("industries");
                    setIndustriesOpen(false);
                  }}
                  className="block rounded-xl px-4 py-3 text-sm text-[#304c44] transition-colors hover:bg-[#e3eee9] hover:text-[#0d5c48]"
                >
                  Power & Utilities
                </a>

                <a
                  href="#manufacturing"
                  onClick={() => {
                    setActiveSection("industries");
                    setIndustriesOpen(false);
                  }}
                  className="block rounded-xl px-4 py-3 text-sm text-[#304c44] transition-colors hover:bg-[#e3eee9] hover:text-[#0d5c48]"
                >
                  Manufacturing
                </a>

                <a
                  href="#infrastructure"
                  onClick={() => {
                    setActiveSection("industries");
                    setIndustriesOpen(false);
                  }}
                  className="block rounded-xl px-4 py-3 text-sm text-[#304c44] transition-colors hover:bg-[#e3eee9] hover:text-[#0d5c48]"
                >
                  Infrastructure
                </a>

                <a
                  href="#government"
                  onClick={() => {
                    setActiveSection("industries");
                    setIndustriesOpen(false);
                  }}
                  className="block rounded-xl px-4 py-3 text-sm text-[#304c44] transition-colors hover:bg-[#e3eee9] hover:text-[#0d5c48]"
                >
                  Government
                </a>

              </div>
            )}
          </div>

          {/* =================================================
              GET IN TOUCH
          ================================================== */}
          <a
            href="#contact"
            onClick={() => setActiveSection("contact")}
            className="ml-1 inline-flex items-center gap-2 rounded-xl border border-[#0d5c48] bg-[#0d5c48] px-5 py-3 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-transparent hover:text-[#0d5c48]"
          >
            Get in Touch

            <span className="text-[16px] transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

        </nav>

        {/* =================================================
            MOBILE MENU BUTTON
        ================================================== */}
        <button
          type="button"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-full text-[#0d4035] transition-all duration-200 hover:bg-[#e3eee9] hover:text-[#0d5c48] active:scale-90 lg:hidden"
        >
          <span className="text-[24px] leading-none">
            {mobileMenu ? "×" : "☰"}
          </span>
        </button>

      </div>

      {/* =====================================================
          MOBILE NAVIGATION
      ====================================================== */}
      {mobileMenu && (
        <div className="border-t border-[#e4e9e4] bg-[#f5f5ef] px-5 pb-6 pt-4 lg:hidden">

          <nav className="flex flex-col gap-2">

            {/* HOME */}
            <a
              href="#home"
              onClick={() => handleMobileClick("home")}
              className={mobileLinkClass("home")}
            >
              Home
            </a>

            {/* ABOUT */}
            <a
              href="#about"
              onClick={() => handleMobileClick("about")}
              className={mobileLinkClass("about")}
            >
              About Us
            </a>

            {/* =================================================
                SERVICES
            ================================================== */}
            <button
              type="button"
              onClick={() => {
                setServicesOpen(!servicesOpen);
                setIndustriesOpen(false);
                setActiveSection("services");
              }}
              className={`${mobileLinkClass(
                "services"
              )} flex w-full items-center justify-between text-left`}
            >
              <span>Services</span>

              <span
                className={`text-[11px] transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {servicesOpen && (
              <div className="ml-2 flex flex-col gap-1 rounded-xl bg-[#edf2ef] p-2">

                <a
                  href="#engineering-solutions"
                  onClick={() => handleMobileClick("services")}
                  className="rounded-lg px-3 py-2.5 text-sm text-[#304c44] transition-colors hover:bg-white hover:text-[#0d5c48]"
                >
                  Engineering Solutions
                </a>

                <a
                  href="#project-management-controls"
                  onClick={() => handleMobileClick("services")}
                  className="rounded-lg px-3 py-2.5 text-sm text-[#304c44] transition-colors hover:bg-white hover:text-[#0d5c48]"
                >
                  Project Management & Controls
                </a>

                <a
                  href="#asset-integrity-management"
                  onClick={() => handleMobileClick("services")}
                  className="rounded-lg px-3 py-2.5 text-sm text-[#304c44] transition-colors hover:bg-white hover:text-[#0d5c48]"
                >
                  Asset Integrity Management
                </a>

                <a
                  href="#risk-management"
                  onClick={() => handleMobileClick("services")}
                  className="rounded-lg px-3 py-2.5 text-sm text-[#304c44] transition-colors hover:bg-white hover:text-[#0d5c48]"
                >
                  Risk Management
                </a>

                <a
                  href="#quality-assurance-quality-control"
                  onClick={() => handleMobileClick("services")}
                  className="rounded-lg px-3 py-2.5 text-sm text-[#304c44] transition-colors hover:bg-white hover:text-[#0d5c48]"
                >
                  Quality Assurance & Quality Control
                </a>

                <a
                  href="#industrial-systems-modelling"
                  onClick={() => handleMobileClick("services")}
                  className="rounded-lg px-3 py-2.5 text-sm text-[#304c44] transition-colors hover:bg-white hover:text-[#0d5c48]"
                >
                  Industrial Systems Modelling
                </a>

                <a
                  href="#pipe-stress-analysis"
                  onClick={() => handleMobileClick("services")}
                  className="rounded-lg px-3 py-2.5 text-sm text-[#304c44] transition-colors hover:bg-white hover:text-[#0d5c48]"
                >
                  Pipe Stress Analysis
                </a>

                <a
                  href="#government-contract-engineering"
                  onClick={() => handleMobileClick("services")}
                  className="rounded-lg px-3 py-2.5 text-sm text-[#304c44] transition-colors hover:bg-white hover:text-[#0d5c48]"
                >
                  Government Contract Engineering
                </a>

              </div>
            )}

            {/* =================================================
                INDUSTRIES
            ================================================== */}
            <button
              type="button"
              onClick={() => {
                setIndustriesOpen(!industriesOpen);
                setServicesOpen(false);
                setActiveSection("industries");
              }}
              className={`${mobileLinkClass(
                "industries"
              )} flex w-full items-center justify-between text-left`}
            >
              <span>Industries</span>

              <span
                className={`text-[11px] transition-transform duration-200 ${
                  industriesOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {industriesOpen && (
              <div className="ml-2 flex flex-col gap-1 rounded-xl bg-[#edf2ef] p-2">

                <a
                  href="#oil-and-gas"
                  onClick={() => handleMobileClick("industries")}
                  className="rounded-lg px-3 py-2.5 text-sm text-[#304c44] transition-colors hover:bg-white hover:text-[#0d5c48]"
                >
                  Oil & Gas
                </a>

                <a
                  href="#power-and-utilities"
                  onClick={() => handleMobileClick("industries")}
                  className="rounded-lg px-3 py-2.5 text-sm text-[#304c44] transition-colors hover:bg-white hover:text-[#0d5c48]"
                >
                  Power & Utilities
                </a>

                <a
                  href="#manufacturing"
                  onClick={() => handleMobileClick("industries")}
                  className="rounded-lg px-3 py-2.5 text-sm text-[#304c44] transition-colors hover:bg-white hover:text-[#0d5c48]"
                >
                  Manufacturing
                </a>

                <a
                  href="#infrastructure"
                  onClick={() => handleMobileClick("industries")}
                  className="rounded-lg px-3 py-2.5 text-sm text-[#304c44] transition-colors hover:bg-white hover:text-[#0d5c48]"
                >
                  Infrastructure
                </a>

                <a
                  href="#government"
                  onClick={() => handleMobileClick("industries")}
                  className="rounded-lg px-3 py-2.5 text-sm text-[#304c44] transition-colors hover:bg-white hover:text-[#0d5c48]"
                >
                  Government
                </a>

              </div>
            )}

            {/* =================================================
                MOBILE GET IN TOUCH
            ================================================== */}
            <a
              href="#contact"
              onClick={() => handleMobileClick("contact")}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-[#0d5c48] bg-[#0d5c48] px-5 py-3.5 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-transparent hover:text-[#0d5c48]"
            >
              Get in Touch

              <span>→</span>
            </a>

          </nav>
        </div>
      )}
    </header>
  );
}