import { motion } from "framer-motion";
import image4 from "../assets/image4.png";

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-[#f5f5ef] px-5 py-16 sm:px-8 lg:px-12 xl:px-16"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* =================================================
              IMAGE
          ================================================== */}
          {/* IMAGE */}
<motion.div
  initial={{ opacity: 0, x: -25 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative order-2 lg:order-1"
>
  {/* GREEN ACCENT */}
  <div className="absolute -bottom-3 -left-3 h-full w-full bg-[#0d5c48]" />

  {/* IMAGE */}
  <div className="relative z-10 overflow-hidden">
    <img
      src={image4}
      alt="Engineering team working at an industrial facility"
      className="block h-[280px] w-full object-cover sm:h-[360px] lg:h-[390px]"
    />
  </div>
</motion.div>

          {/* =================================================
              TEXT
          ================================================== */}
          {/* TEXT */}
<motion.div
  initial={{ opacity: 0, x: 25 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="max-w-[560px] order-1 lg:order-2"
>

            {/* EYEBROW */}
            <p className="mb-3 text-[10px] font-semibold tracking-[0.2em] text-[#16745a]">
              ABOUT US
            </p>

            {/* HEADING */}
            <h2 className="font-serif text-[34px] leading-[1.05] tracking-[-0.025em] text-[#102f28] sm:text-[42px] lg:text-[46px]">
              Comprehensive Engineering
              <br />
              & Consulting Solutions
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-[520px] text-[14px] leading-6 text-[#53665f] sm:text-[15px]">
              We provide multidisciplinary engineering and consulting
              solutions across project delivery, asset integrity, risk
              management, quality assurance and technical engineering.
              Our approach combines technical expertise with practical
              solutions to help organizations improve safety, reliability
              and operational performance throughout the project and asset
              lifecycle.
            </p>

            {/* LEARN MORE BUTTON */}
            <a
  href="/about"
  className="group mt-7 inline-flex items-center gap-3 rounded-xl border border-[#0d5c48] bg-[#0d5c48] px-5 py-3 text-[12px] font-semibold text-white transition-all duration-300 hover:bg-transparent hover:text-[#0d5c48]"
>
  <span>Learn More</span>

  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</a>

          </motion.div>

        </div>
      </div>
    </section>
  );
}