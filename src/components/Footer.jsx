
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/logo.PNG";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/#services" },
  { name: "Project Services", href: "/project-services" },
  { name: "Engineering Solutions", href: "/#engineering-environment" },
  { name: "Markets", href: "/markets" },
  { name: "Careers", href: "/careers" },
];

const services = [
  { name: "Consulting & Planning", href: "/#consulting-and-planning" },
  { name: "Project Services", href: "/project-services" },
  { name: "Engineering Services", href: "/#engineering-services" },
  { name: "Energy Solutions", href: "/#energy-solutions" },
  { name: "Environmental Services", href: "/#environmental-services" },
  { name: "Oil & Gas", href: "/#oil-gas-services" },
  { name: "IT Services", href: "/#it-services" },
  { name: "Government Services", href: "/#government-services" },
];

const footerLinkClass =
  "w-fit text-[13px] leading-6 text-[#b8cdc5] transition-colors duration-200 hover:text-[#79c9ad]";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#062d24] text-white">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[360px] w-[360px] rounded-full border border-[#79c9ad]/10" />
      <div className="pointer-events-none absolute bottom-[-180px] left-[-100px] h-[400px] w-[400px] rounded-full border border-[#79c9ad]/10" />

      {/* Main footer */}
      <div className="relative px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.8fr_1.2fr_0.85fr] lg:gap-10">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/"
                aria-label="Archridge Dynamics home"
                className="inline-flex"
              >
                <img
                  src={logo}
                  alt="Archridge Dynamics"
                  className="h-12 w-auto object-contain"
                />
              </Link>

              <p className="mt-6 max-w-[290px] text-[13px] leading-7 text-[#b8cdc5]">
                Engineering, technical and project solutions designed
                to help organizations operate with greater reliability,
                efficiency and confidence.
              </p>
            </motion.div>

            {/* Website navigation */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="mb-5 text-[10px] font-semibold tracking-[0.2em] text-[#79c9ad]">
                NAVIGATION
              </h3>

              <div className="flex flex-col items-start gap-2.5">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={footerLinkClass}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* All services */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="mb-5 text-[10px] font-semibold tracking-[0.2em] text-[#79c9ad]">
                OUR SERVICES
              </h3>

              <div className="flex flex-col items-start gap-2.5">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className={footerLinkClass}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="mb-5 text-[10px] font-semibold tracking-[0.2em] text-[#79c9ad]">
                CONTACT
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="mb-2 text-[10px] font-medium tracking-[0.12em] text-[#719d8e]">
                    CUSTOMER SUPPORT
                  </p>

                  <a
                    href="mailto:support@archridge.info"
                    className="break-words text-[13px] text-[#d2e2dc] transition-colors hover:text-white"
                  >
                    support@archridge.info
                  </a>
                </div>

                <div>
                  <p className="mb-2 text-[10px] font-medium tracking-[0.12em] text-[#719d8e]">
                    LOCATION
                  </p>

                  <p className="text-[13px] text-[#d2e2dc]">
                    Houston, TX
                  </p>
                </div>

                <Link
                  to="/#contact"
                  className="group inline-flex items-center gap-2 text-[13px] font-semibold text-[#79c9ad] transition-colors hover:text-white"
                >
                  Get in Touch
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-[#315950] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-[#91afa3]">
            © {new Date().getFullYear()} Archridge Dynamics. All rights reserved.
          </p>

          <p className="text-[11px] text-[#719d8e]">
            Engineering excellence. Reliable delivery.
          </p>
        </div>
      </div>
    </footer>
  );
}
