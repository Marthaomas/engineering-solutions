
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.PNG";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [engineeringOpen, setEngineeringOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);
  const [marketsOpen, setMarketsOpen] = useState(false);
  const [pendingScroll, setPendingScroll] = useState(null);

  const closeTimer = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const engineeringItems = [
    {
      name: "Environmental Engineering Support",
      id: "engineering-support",
    },
  ];

  const projectItems = [
    {
      name: "Licensing, Compliance & Program Management",
      id: "licensing-regulatory-support",
    },
  ];

  const markets = [
    { name: "Government & Public Sector", id: "government-public-sector" },
    { name: "Nuclear Energy", id: "nuclear-energy" },
    { name: "Power Generation", id: "power-generation" },
    { name: "Life Sciences & Healthcare", id: "life-sciences-healthcare" },
    { name: "Data Centres", id: "data-centres" },
    { name: "Life Sciences & Biotechnology", id: "life-sciences-biotechnology" },
    { name: "Transportation & Mobility", id: "transportation-mobility" },
    {
      name: "Power Delivery & Grid Infrastructure",
      id: "power-delivery-grid-infrastructure",
    },
    { name: "Oil & Gas", id: "oil-gas" },
    { name: "Department of Energy", id: "department-of-energy" },
  ];

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  useEffect(() => {
    if (location.pathname !== "/" || !pendingScroll) return;

    const id = pendingScroll;
    const timer = window.setTimeout(() => {
      const target = document.getElementById(id);

      if (target) {
        const top =
          target.getBoundingClientRect().top + window.scrollY - 110;

        window.scrollTo({ top, behavior: "smooth" });
      }

      setPendingScroll(null);
    }, 150);

    return () => window.clearTimeout(timer);
  }, [location.pathname, pendingScroll]);

  useEffect(() => {
    if (location.pathname !== "/markets" || !location.hash) return;

    const id = decodeURIComponent(location.hash.slice(1));
    const timer = window.setTimeout(() => {
      const target = document.getElementById(id);

      if (target) {
        const top =
          target.getBoundingClientRect().top + window.scrollY - 110;

        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 200);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  const closeMenus = () => {
    clearCloseTimer();
    setMobileMenu(false);
    setEngineeringOpen(false);
    setProjectOpen(false);
    setMarketsOpen(false);
  };

  const openDropdown = (setter) => {
    clearCloseTimer();
    setter(true);
  };

  const scheduleDropdownClose = (setter) => {
    clearCloseTimer();

    closeTimer.current = window.setTimeout(() => {
      setter(false);
      closeTimer.current = null;
    }, 250);
  };

  const scrollToId = (id) => {
    const target = document.getElementById(id);
    if (!target) return;

    const top =
      target.getBoundingClientRect().top + window.scrollY - 110;

    window.scrollTo({ top, behavior: "smooth" });
  };

  const handleSectionClick = (id) => {
    closeMenus();

    if (location.pathname === "/") {
      setPendingScroll(null);
      scrollToId(id);
    } else {
      setPendingScroll(id);
      navigate("/");
    }
  };

  const handleServiceClick = (id) => {
    handleSectionClick(id);
  };

  const handleMarketClick = (id) => {
    closeMenus();

    if (location.pathname === "/markets") {
      navigate(`/markets#${id}`);
    } else {
      navigate(`/markets#${id}`);
    }
  };

  const handleContactClick = (event) => {
    event.preventDefault();
    handleSectionClick("contact");
  };

  const linkClass = (active = false) =>
    `group relative inline-flex items-center whitespace-nowrap py-3 text-[13px] font-medium transition-colors duration-200 ${
      active
        ? "text-[#0d5c48]"
        : "text-[#304c44] hover:text-[#0d5c48]"
    }`;

  const underlineClass = (active = false) =>
    `absolute -bottom-[1px] left-0 h-[2px] rounded-full bg-[#0d5c48] transition-all duration-300 ${
      active ? "w-full" : "w-0 group-hover:w-full"
    }`;

  const dropdownItemClass =
    "block w-full rounded-xl px-4 py-3 text-left text-[13px] leading-5 font-medium text-[#304c44] transition-colors duration-200 hover:bg-[#e3eee9] hover:text-[#0d5c48] focus-visible:bg-[#e3eee9] focus-visible:text-[#0d5c48] focus-visible:outline-none";

  const mobileLinkClass =
    "flex min-h-[48px] w-full items-center justify-between rounded-xl px-4 py-3 text-left text-[14px] font-medium text-[#304c44] transition-colors duration-200 hover:bg-[#e3eee9] hover:text-[#0d5c48] focus-visible:bg-[#e3eee9] focus-visible:text-[#0d5c48] focus-visible:outline-none";

  const Chevron = ({ open }) => (
    <span
      aria-hidden="true"
      className={`inline-block h-[7px] w-[7px] shrink-0 rotate-45 border-b-[1.5px] border-r-[1.5px] border-current transition-transform duration-200 ${
        open ? "translate-y-[2px] rotate-[225deg]" : "-translate-y-[2px]"
      }`}
    />
  );

  const renderDesktopDropdown = ({
    label,
    open,
    setOpen,
    items,
    onSelect,
    destinationId,
  }) => (
    <div
      className="relative"
      onMouseEnter={() => openDropdown(setOpen)}
      onMouseLeave={() => scheduleDropdownClose(setOpen)}
      onFocus={() => openDropdown(setOpen)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          scheduleDropdownClose(setOpen);
        }
      }}
    >
      <div className="flex items-center">
        <button
          type="button"
          onClick={() => handleSectionClick(destinationId)}
          className={`${linkClass(open)} ${
            open ? "text-[#0d5c48]" : ""
          }`}
        >
          {label}

        </button>

        <button
          type="button"
          aria-label={`${open ? "Close" : "Open"} ${label} menu`}
          aria-expanded={open}
          onClick={() => {
            if (open) {
              clearCloseTimer();
              setOpen(false);
            } else {
              openDropdown(setOpen);
              setEngineeringOpen(label === "Engineering Solutions");
              setProjectOpen(label === "Project Management");
              setMarketsOpen(label === "Markets");
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              clearCloseTimer();
              setOpen(false);
            }
          }}
          className="ml-1 flex h-8 w-6 items-center justify-center rounded-md text-[#304c44] transition-colors hover:bg-[#e3eee9] hover:text-[#0d5c48]"
        >
          <Chevron open={open} />
        </button>
      </div>

      {open && (
        <div className="absolute left-0 top-full z-50 w-[min(320px,85vw)] rounded-2xl border border-[#dce5df] bg-[#f8f8f3] p-2 shadow-[0_18px_50px_rgba(16,47,40,0.14)]">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(item.id)}
              className={dropdownItemClass}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  const renderMobileDropdown = ({
    label,
    open,
    setOpen,
    items,
    onSelect,
    destinationId,
  }) => (
    <div className="rounded-xl">
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => handleSectionClick(destinationId)}
          className={`${mobileLinkClass} flex-1`}
        >
          {label}
        </button>

        <button
          type="button"
          aria-label={`${open ? "Collapse" : "Expand"} ${label} menu`}
          aria-expanded={open}
          onClick={() => {
            clearCloseTimer();
            setOpen((value) => !value);

            if (!open) {
              setEngineeringOpen(label === "Engineering Solutions");
              setProjectOpen(label === "Project Management");
              setMarketsOpen(label === "Markets");
            }
          }}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-[#0d5c48] transition-colors hover:bg-[#e3eee9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0d5c48]"
        >
          <Chevron open={open} />
        </button>
      </div>

      {open && (
        <div className="ml-3 mt-1 flex flex-col gap-1 border-l-2 border-[#d5e0da] py-1 pl-3">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(item.id)}
              className="min-h-[46px] w-full rounded-lg px-3 py-3 text-left text-[13px] leading-5 text-[#304c44] transition-colors hover:bg-[#e3eee9] hover:text-[#0d5c48] focus-visible:bg-[#e3eee9] focus-visible:outline-none"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#dfe5df] bg-[#f5f5ef]/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-[76px] max-w-[1600px] items-center justify-between gap-4 px-4 py-3 sm:px-6 xl:min-h-[82px] xl:px-8 2xl:px-10">
        <a
          href="/"
          onClick={closeMenus}
          aria-label="Archridge Dynamics home"
          className="flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="Archridge Dynamics"
            className="h-auto w-[118px] object-contain sm:w-[135px] xl:w-[150px]"
          />
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center justify-end gap-x-3 xl:flex 2xl:gap-x-5">
          <a
            href="/about"
            className={linkClass(location.pathname === "/about")}
          >
            About
            <span className={underlineClass(location.pathname === "/about")} />
          </a>

          {renderDesktopDropdown({
            label: "Engineering Solutions",
            open: engineeringOpen,
            setOpen: setEngineeringOpen,
            items: engineeringItems,
            onSelect: handleServiceClick,
            destinationId: "engineering-environment",
          })}

          {renderDesktopDropdown({
            label: "Project Management",
            open: projectOpen,
            setOpen: setProjectOpen,
            items: projectItems,
            onSelect: handleServiceClick,
            destinationId: "project-management",
          })}

          {renderDesktopDropdown({
            label: "Markets",
            open: marketsOpen,
            setOpen: setMarketsOpen,
            items: markets,
            onSelect: handleMarketClick,
            destinationId: "markets",
          })}

          <a
            href="/careers"
            className={linkClass(location.pathname === "/careers")}
          >
            Careers
            <span
              className={underlineClass(location.pathname === "/careers")}
            />
          </a>

          <a
            href="/#contact"
            onClick={handleContactClick}
            className="ml-1 shrink-0 rounded-xl border border-[#0d5c48] bg-[#0d5c48] px-4 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-transparent hover:text-[#0d5c48]"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile and tablet menu button */}
        <button
          type="button"
          onClick={() => {
            clearCloseTimer();
            setMobileMenu((value) => !value);
            setEngineeringOpen(false);
            setProjectOpen(false);
            setMarketsOpen(false);
          }}
          aria-label={mobileMenu ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenu}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[#0d4035] transition-colors hover:bg-[#e3eee9] hover:text-[#0d5c48] active:scale-95 xl:hidden"
        >
          <span className="text-[25px] leading-none">
            {mobileMenu ? "×" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile and tablet navigation */}
      {mobileMenu && (
        <div className="max-h-[calc(100dvh-76px)] overflow-y-auto overscroll-contain border-t border-[#e4e9e4] bg-[#f5f5ef] px-4 pb-6 pt-4 sm:px-6">
          <nav className="mx-auto flex max-w-2xl flex-col gap-2">
            <a
              href="/about"
              onClick={closeMenus}
              className={mobileLinkClass}
            >
              About
            </a>

            {renderMobileDropdown({
              label: "Engineering Solutions",
              open: engineeringOpen,
              setOpen: setEngineeringOpen,
              items: engineeringItems,
              onSelect: handleServiceClick,
              destinationId: "engineering-environment",
            })}

            {renderMobileDropdown({
              label: "Project Management",
              open: projectOpen,
              setOpen: setProjectOpen,
              items: projectItems,
              onSelect: handleServiceClick,
              destinationId: "project-management",
            })}

            {renderMobileDropdown({
              label: "Markets",
              open: marketsOpen,
              setOpen: setMarketsOpen,
              items: markets,
              onSelect: handleMarketClick,
              destinationId: "markets",
            })}

            <a
              href="/careers"
              onClick={closeMenus}
              className={mobileLinkClass}
            >
              Careers
            </a>

            <a
              href="/#contact"
              onClick={handleContactClick}
              className="mt-2 flex min-h-[50px] items-center justify-center gap-2 rounded-xl border border-[#0d5c48] bg-[#0d5c48] px-5 py-3.5 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-transparent hover:text-[#0d5c48]"
            >
              Contact Us <span aria-hidden="true">→</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
