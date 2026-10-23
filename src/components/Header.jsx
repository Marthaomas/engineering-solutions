
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.PNG";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [pendingScroll, setPendingScroll] = useState(null);

  const closeTimer = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const itServices = [
    { name: "Software Engineering & Application Development", id: "software-engineering-application-development" },
    { name: "Enterprise IT Solutions & System Integration", id: "enterprise-it-solutions-system-integration" },
    { name: "IT Hardware, Software Procurement & Licensing", id: "it-hardware-software-procurement-licensing" },
    { name: "IT Infrastructure, Networking & Cloud Services", id: "it-infrastructure-networking-cloud-services" },
    { name: "Cybersecurity, Risk Management & Compliance", id: "cybersecurity-risk-management-compliance" },
    { name: "Data Analytics, Artificial Intelligence & Automation", id: "data-analytics-artificial-intelligence-automation" },
    { name: "IT Consulting, Project Management & Digital Transformation", id: "it-consulting-project-management-digital-transformation" },
    { name: "Managed IT Services, Technical Support & Maintenance", id: "managed-it-services-technical-support-maintenance" },
  ];

  // IT SERVICES IS SECOND-TO-LAST
  const services = [
    { name: "Consulting & Planning", id: "consulting-and-planning" },
    { name: "Project Services", id: "project-services" },
    { name: "Engineering Services", id: "engineering-services" },
    { name: "Energy Solutions", id: "energy-solutions" },
    { name: "Environmental Services", id: "environmental-services" },
    { name: "Oil & Gas", id: "oil-gas-services" },
    { name: "IT Services", id: "it-services", children: itServices },
    { name: "Government Services", id: "government-services" },
  ];

  const projectItems = [
    { name: "Licensing", id: "licensing-regulatory-support" },
    { name: "Project Management", id: "project-management" },
    { name: "Project Controls", id: "project-controls" },
  ];

  const engineeringItems = [
    { name: "Nuclear Power Consulting", id: "nuclear-power-consulting" },
    { name: "Nuclear Power", id: "nuclear-power" },
    { name: "Data Centers", id: "data-centers" },
    { name: "Grid Infrastructure", id: "grid" },
  ];

  const markets = [
    { name: "Government & Public Sector", id: "government-public-sector" },
    { name: "Nuclear Energy", id: "nuclear-energy" },
    { name: "Power Generation", id: "power-generation" },
    { name: "Life Sciences & Healthcare", id: "life-sciences-healthcare" },
    { name: "Data Centres", id: "data-centres" },
    { name: "Life Sciences & Biotechnology", id: "life-sciences-biotechnology" },
    { name: "Transportation & Mobility", id: "transportation-mobility" },
    { name: "Power Delivery & Grid Infrastructure", id: "power-delivery-grid-infrastructure" },
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
        const top = target.getBoundingClientRect().top + window.scrollY - 110;
        window.scrollTo({ top, behavior: "smooth" });
      }

      setPendingScroll(null);
    }, 200);

    return () => window.clearTimeout(timer);
  }, [location.pathname, pendingScroll]);

  useEffect(() => {
    if (location.pathname !== "/markets" || !location.hash) return;

    const id = decodeURIComponent(location.hash.slice(1));
    const timer = window.setTimeout(() => {
      const target = document.getElementById(id);

      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 110;
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
    setOpenMenu(null);
    setOpenSubMenu(null);
  };

  const showMenu = (name) => {
    clearCloseTimer();
    setOpenMenu(name);
  };

  const delayCloseMenu = (name) => {
    clearCloseTimer();

    // Gives the pointer time to move between menu items.
    closeTimer.current = window.setTimeout(() => {
      setOpenMenu((current) => (current === name ? null : current));
      setOpenSubMenu(null);
      closeTimer.current = null;
    }, 500);
  };

  const scrollToId = (id) => {
    const target = document.getElementById(id);
    if (!target) return;

    const top = target.getBoundingClientRect().top + window.scrollY - 110;
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
    closeMenus();

    // Every IT offering opens the shared IT Services detail page.
    const isITService = itServices.some((service) => service.id === id);
    if (isITService) {
      navigate("/services/it-services");
      return;
    }

    // Open the selected service page directly instead of scrolling to
    // the Services section on the homepage.
    navigate(`/services/${id}`);
  };

  const handleProjectServiceClick = (id) => {
    closeMenus();
    navigate(`/project-services/${id}`);
  };

  const handleMarketClick = (id) => {
    closeMenus();
    navigate(`/markets#${id}`);
  };

  const handleContactClick = (event) => {
    event.preventDefault();
    handleSectionClick("contact");
  };

  const linkClass = (active = false) =>
    `group relative inline-flex items-center whitespace-nowrap py-3 text-[13px] font-medium transition-colors duration-200 ${
      active ? "text-[#0d5c48]" : "text-[#304c44] hover:text-[#0d5c48]"
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

  // DESKTOP DROPDOWNS
  const renderDesktopDropdown = ({
    label,
    menuKey,
    items,
    onSelect = handleSectionClick,
    wide = false,
  }) => {
    const open = openMenu === menuKey;

    return (
      <div
        className="relative"
        onMouseEnter={() => showMenu(menuKey)}
        onMouseLeave={() => delayCloseMenu(menuKey)}
        onFocus={() => showMenu(menuKey)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            delayCloseMenu(menuKey);
          }
        }}
      >
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => {}}
            className={`${linkClass(open)} ${open ? "text-[#0d5c48]" : ""}`}
          >
            {label}
          </button>

          <button
            type="button"
            aria-label={`${open ? "Close" : "Open"} ${label} menu`}
            aria-expanded={open}
            onClick={() => {
              clearCloseTimer();
              setOpenMenu(open ? null : menuKey);
              setOpenSubMenu(null);
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setOpenMenu(null);
                setOpenSubMenu(null);
              }
            }}
            className="ml-1 flex h-8 w-6 items-center justify-center rounded-md text-[#304c44] transition-colors hover:bg-[#e3eee9] hover:text-[#0d5c48]"
          >
            <Chevron open={open} />
          </button>
        </div>

        {open && (
          <div
            className={`absolute left-0 top-full z-50 ${
              wide ? "w-[min(390px,85vw)]" : "w-[min(320px,85vw)]"
            } rounded-2xl border border-[#dce5df] bg-[#f8f8f3] p-2 shadow-[0_18px_50px_rgba(16,47,40,0.14)]`}
          >
            {items.map((item) =>
              item.children ? (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => {
                    clearCloseTimer();
                    setOpenSubMenu(item.id);
                  }}
                  onMouseLeave={() => {
                    // Keep the submenu open while the pointer is within its row.
                    clearCloseTimer();
                    closeTimer.current = window.setTimeout(() => {
                      setOpenSubMenu((current) =>
                        current === item.id ? null : current
                      );
                      closeTimer.current = null;
                    }, 350);
                  }}
                >
                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenSubMenu(openSubMenu === item.id ? null : item.id)
                      }
                      className={`${dropdownItemClass} flex-1`}
                      aria-expanded={openSubMenu === item.id}
                    >
                      {item.name}
                    </button>

                    <button
                      type="button"
                      aria-label={`Toggle ${item.name} submenu`}
                      aria-expanded={openSubMenu === item.id}
                      onClick={() =>
                        setOpenSubMenu(openSubMenu === item.id ? null : item.id)
                      }
                      className="flex h-10 w-9 shrink-0 items-center justify-center rounded-lg text-[#304c44] hover:bg-[#e3eee9] hover:text-[#0d5c48]"
                    >
                      <Chevron open={openSubMenu === item.id} />
                    </button>
                  </div>

                  {/* IT SERVICES SUBMENU OPENS DOWNWARD */}
                  {openSubMenu === item.id && (
                    <div
                      className="absolute left-full top-0 z-[60] max-h-[min(65vh,480px)] w-[min(360px,85vw)] overflow-y-auto rounded-2xl border border-[#dce5df] bg-[#f8f8f3] p-2 shadow-[0_18px_50px_rgba(16,47,40,0.14)]"
                      onMouseEnter={clearCloseTimer}
                      onMouseLeave={() => {
                        closeTimer.current = window.setTimeout(() => {
                          setOpenSubMenu((current) =>
                            current === item.id ? null : current
                          );
                          closeTimer.current = null;
                        }, 500);
                      }}
                    >
                      {item.children.map((child) => (
                        <button
                          key={child.id}
                          type="button"
                          onClick={() => onSelect(child.id)}
                          className={dropdownItemClass}
                        >
                          {child.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelect(item.id)}
                  className={dropdownItemClass}
                >
                  {item.name}
                </button>
              )
            )}
          </div>
        )}
      </div>
    );
  };

  // MOBILE DROPDOWNS
  const renderMobileDropdown = ({
    label,
    menuKey,
    items,
    onSelect = handleSectionClick,
  }) => {
    const open = openMenu === menuKey;

    return (
      <div className="rounded-xl">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => {
              clearCloseTimer();
              setOpenMenu(open ? null : menuKey);
              setOpenSubMenu(null);
            }}
            className={`${mobileLinkClass} flex-1 ${
              open ? "bg-[#e3eee9] text-[#0d5c48]" : ""
            }`}
            aria-expanded={open}
          >
            {label}
          </button>

          <button
            type="button"
            aria-label={`${open ? "Collapse" : "Expand"} ${label} menu`}
            aria-expanded={open}
            onClick={() => {
              clearCloseTimer();
              setOpenMenu(open ? null : menuKey);
              setOpenSubMenu(null);
            }}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-[#0d5c48] transition-colors hover:bg-[#e3eee9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0d5c48]"
          >
            <Chevron open={open} />
          </button>
        </div>

        {open && (
          <div className="ml-3 mt-1 flex flex-col gap-1 border-l-2 border-[#d5e0da] py-1 pl-3">
            {items.map((item) =>
              item.children ? (
                <div key={item.id} className="rounded-lg">
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenSubMenu(openSubMenu === item.id ? null : item.id)
                      }
                      aria-expanded={openSubMenu === item.id}
                      className="min-h-[46px] flex-1 rounded-lg px-3 py-3 text-left text-[13px] font-semibold text-[#304c44] transition-colors hover:bg-[#e3eee9] hover:text-[#0d5c48]"
                    >
                      {item.name}
                    </button>

                    <button
                      type="button"
                      aria-label={`Toggle ${item.name} submenu`}
                      aria-expanded={openSubMenu === item.id}
                      onClick={() =>
                        setOpenSubMenu(openSubMenu === item.id ? null : item.id)
                      }
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-[#0d5c48] hover:bg-[#e3eee9]"
                    >
                      <Chevron open={openSubMenu === item.id} />
                    </button>
                  </div>

                  {openSubMenu === item.id && (
                    <div className="ml-3 mt-1 flex flex-col gap-1 border-l-2 border-[#d5e0da] py-1 pl-2">
                      {item.children.map((child) => (
                        <button
                          key={child.id}
                          type="button"
                          onClick={() => onSelect(child.id)}
                          className="min-h-[46px] w-full rounded-lg px-3 py-3 text-left text-[13px] leading-5 text-[#304c44] transition-colors hover:bg-[#e3eee9] hover:text-[#0d5c48] focus-visible:bg-[#e3eee9] focus-visible:outline-none"
                        >
                          {child.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelect(item.id)}
                  className="min-h-[46px] w-full rounded-lg px-3 py-3 text-left text-[13px] leading-5 text-[#304c44] transition-colors hover:bg-[#e3eee9] hover:text-[#0d5c48] focus-visible:bg-[#e3eee9] focus-visible:outline-none"
                >
                  {item.name}
                </button>
              )
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#dfe5df] bg-[#f5f5ef]/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-[76px] max-w-[1600px] items-center justify-between gap-6 px-5 py-3 sm:px-7 xl:min-h-[82px] xl:px-8 2xl:px-10">
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

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center justify-end gap-x-4 xl:flex 2xl:gap-x-6">
          <a href="/about" className={linkClass(location.pathname === "/about")}>
            About
            <span className={underlineClass(location.pathname === "/about")} />
          </a>

          {renderDesktopDropdown({
            label: "Services",
            menuKey: "services",
            items: services,
            onSelect: handleServiceClick,
            wide: true,
          })}

          {renderDesktopDropdown({
            label: "Project Services",
            menuKey: "project",
            items: projectItems,
            onSelect: handleProjectServiceClick,
          })}

          {renderDesktopDropdown({
            label: "Engineering Solutions",
            menuKey: "engineering",
            items: engineeringItems,
            onSelect: (id) => {
              closeMenus();
              navigate(`/engineering-solutions/${id}`);
            },
          })}

          {renderDesktopDropdown({
            label: "Markets",
            menuKey: "markets",
            items: markets,
            onSelect: handleMarketClick,
            wide: true,
          })}

          <a href="/careers" className={linkClass(location.pathname === "/careers")}>
            Careers
            <span className={underlineClass(location.pathname === "/careers")} />
          </a>

          <a
            href="/#contact"
            onClick={handleContactClick}
            className="ml-1 shrink-0 rounded-xl border border-[#0d5c48] bg-[#0d5c48] px-4 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-transparent hover:text-[#0d5c48]"
          >
            Contact Us
          </a>
        </nav>

        {/* MOBILE AND TABLET MENU BUTTON */}
        <button
          type="button"
          onClick={() => {
            clearCloseTimer();
            setMobileMenu((value) => !value);
            setOpenMenu(null);
            setOpenSubMenu(null);
          }}
          aria-label={mobileMenu ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenu}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[#0d4035] transition-colors hover:bg-[#e3eee9] hover:text-[#0d5c48] active:scale-95 xl:hidden"
        >
          <span className="text-[25px] leading-none">{mobileMenu ? "×" : "☰"}</span>
        </button>
      </div>

      {/* MOBILE AND TABLET NAVIGATION */}
      {mobileMenu && (
        <div className="max-h-[calc(100dvh-76px)] overflow-y-auto overscroll-contain border-t border-[#e4e9e4] bg-[#f5f5ef] px-4 pb-6 pt-4 sm:px-6 xl:hidden">
          <nav className="mx-auto flex max-w-2xl flex-col gap-2">
            <a href="/about" onClick={closeMenus} className={mobileLinkClass}>
              About
            </a>

            {renderMobileDropdown({
              label: "Services",
              menuKey: "services",
              items: services,
              onSelect: handleServiceClick,
            })}

            {renderMobileDropdown({
              label: "Project Services",
              menuKey: "project",
              items: projectItems,
              onSelect: handleProjectServiceClick,
            })}

            {renderMobileDropdown({
              label: "Engineering Solutions",
              menuKey: "engineering",
              items: engineeringItems,
              onSelect: (id) => {
                closeMenus();
                navigate(`/engineering-solutions/${id}`);
              },
            })}

            {renderMobileDropdown({
              label: "Markets",
              menuKey: "markets",
              items: markets,
              onSelect: handleMarketClick,
            })}

            <a href="/careers" onClick={closeMenus} className={mobileLinkClass}>
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
