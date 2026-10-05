import { motion } from "framer-motion";
import logo from "../assets/logo.PNG";
const services = [
  "Engineering Environment",
  "Project Management",
  "Engineering Support",
  "Oil & Gas",
  "Program Management & Consulting",
  "Licensing & Regulatory Support",
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#082f27] text-white">

      {/* MAIN FOOTER */}
      <div className="px-5 py-16 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_1fr_0.8fr]">

            {/* BRAND */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <a
  href="/"
  className="inline-block"
>
  <img
    src={logo}
    alt="Archridge Dynamics"
    className="h-12 w-auto object-contain"
  />
</a>

              <p className="mt-6 max-w-[300px] text-[13px] leading-6 text-[#b8cdc5]">
                Engineering solutions for safer, more efficient and more
                reliable operations.
              </p>
            </motion.div>

            {/* QUICK LINKS */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="mb-5 text-[10px] font-semibold tracking-[0.18em] text-[#9fc5b7]">
                QUICK LINKS
              </p>

              <div className="flex flex-col gap-3">

                <a
                  href="/"
                  className="w-fit text-[13px] text-[#d2e2dc] transition-colors hover:text-white"
                >
                  Home
                </a>

                <a
                  href="/#about"
                  className="w-fit text-[13px] text-[#d2e2dc] transition-colors hover:text-white"
                >
                  About Us
                </a>

                <a
                  href="/#services"
                  className="w-fit text-[13px] text-[#d2e2dc] transition-colors hover:text-white"
                >
                  Services
                </a>

                <a
                  href="/markets"
                  className="w-fit text-[13px] text-[#d2e2dc] transition-colors hover:text-white"
                >
                  Markets
                </a>

                <a
                  href="/careers"
                  className="w-fit text-[13px] text-[#d2e2dc] transition-colors hover:text-white"
                >
                  Careers
                </a>

                <a
  href="/#contact-project"
  onClick={() => {
    if (window.location.pathname === "/") {
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }
  }}
  className="w-fit text-[13px] text-[#d2e2dc] transition-colors hover:text-white"
>
  Get in Touch
</a>

              </div>
            </motion.div>

            {/* SERVICES */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="mb-5 text-[10px] font-semibold tracking-[0.18em] text-[#9fc5b7]">
                SERVICES
              </p>

              <div className="grid grid-cols-1 gap-3">

                {services.map((service) => (
                  <a
                    key={service}
                    href="/#services"
                    className="w-fit text-[12px] leading-5 text-[#b8cdc5] transition-colors hover:text-white"
                  >
                    {service}
                  </a>
                ))}

              </div>
            </motion.div>

            {/* CONTACT */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="mb-5 text-[10px] font-semibold tracking-[0.18em] text-[#9fc5b7]">
                CONTACT
              </p>

              <div className="space-y-5">

                <div>
                  <p className="text-[9px] font-semibold tracking-[0.12em] text-[#719d8e]">
                    CUSTOMER SUPPORT
                  </p>

                  <a
                    href="mailto:support@archridge.info"
                    className="mt-1.5 block text-[13px] text-[#d2e2dc] transition-colors hover:text-white"
                  >
                    support@archridge.info
                  </a>
                </div>

                <div>
                  <p className="text-[9px] font-semibold tracking-[0.12em] text-[#719d8e]">
                    LOCATION
                  </p>

                  <p className="mt-1.5 text-[13px] text-[#d2e2dc]">
                    Houston, TX
                  </p>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[#245047] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-[11px] text-[#719d8e]">
            © 2026 ARCHRIDGE Dynamics. All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            <a
              href="#"
              className="text-[11px] text-[#719d8e] transition-colors hover:text-white"
            >
              Privacy Policy
            </a>

            <span className="h-3 w-px bg-[#315950]" />

            <a
              href="#"
              className="text-[11px] text-[#719d8e] transition-colors hover:text-white"
            >
              Terms of Service
            </a>

          </div>

        </div>
      </div>

    </footer>
  );
}