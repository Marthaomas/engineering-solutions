import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiBriefcase,
  FiMapPin,
} from "react-icons/fi";

const opportunities = [
  {
    title: "No Current Openings",
    type: "General Application",
    location: "Houston,Texas,USA",
    description:
      "We are not currently advertising a specific position. However, we welcome professionals who believe their expertise could contribute to the work we do.",
  },
];

export default function CareersOpportunities() {
  return (
    <div className="overflow-hidden bg-[#f5f5ef] text-[#102f28]">

      {/* HERO */}
      <section className="bg-[#062d24] px-5 pb-24 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pb-32 lg:pt-40 xl:px-16">
        <div className="mx-auto max-w-[1280px]">
          <motion.a
            href="/careers"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="group inline-flex items-center gap-2 text-[14px] font-medium text-white/70 transition-colors duration-300 hover:text-[#79c9ad]"
          >
            <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Careers
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-10 max-w-[850px]"
          >
            <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.25em] text-[#79c9ad] sm:text-[13px]">
              Career Opportunities
            </p>

            <h1 className="font-serif text-[48px] leading-[1.05] tracking-[-0.03em] text-white sm:text-[62px] lg:text-[76px]">
              Find your place at
              <br />
              <span className="text-[#79c9ad]">Archridge Dynamics.</span>
            </h1>

            <p className="mt-8 max-w-[720px] text-[16px] leading-7 text-white/70 sm:text-[18px] sm:leading-8">
              Explore opportunities to contribute your expertise, develop your
              capabilities and work alongside professionals solving
              engineering and business challenges across critical industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* OPPORTUNITIES */}
      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32 xl:px-16">
        <div className="mx-auto max-w-[1100px]">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-[#0d5c48] sm:text-[13px]">
              Open Positions
            </p>

            <h2 className="mt-5 font-serif text-[42px] leading-[1.08] tracking-[-0.025em] text-[#102f28] sm:text-[52px] lg:text-[60px]">
              Opportunities at Archridge
            </h2>

            <p className="mt-6 max-w-[720px] text-[16px] leading-7 text-[#53665f] sm:text-[18px] sm:leading-8">
              Our opportunities will be listed here as positions become
              available.
            </p>
          </motion.div>

          {/* OPPORTUNITY CARD */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group mt-14 rounded-3xl border border-[#dce5df] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-10 lg:p-12"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

              <div className="max-w-[700px]">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#e8efeb] text-[#0d5c48] transition-all duration-300 group-hover:bg-[#0d5c48] group-hover:text-white">
                  <FiBriefcase className="text-[23px]" />
                </div>

                <h3 className="mt-8 font-serif text-[32px] leading-tight text-[#102f28] sm:text-[38px]">
                  {opportunities[0].title}
                </h3>

                <p className="mt-5 text-[16px] leading-7 text-[#53665f] sm:text-[17px] sm:leading-8">
                  {opportunities[0].description}
                </p>

                <div className="mt-7 flex flex-wrap gap-5 text-[14px] font-medium text-[#53665f]">
                  <span className="inline-flex items-center gap-2">
                    <FiBriefcase className="text-[#0d5c48]" />
                    {opportunities[0].type}
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <FiMapPin className="text-[#0d5c48]" />
                    {opportunities[0].location}
                  </span>
                </div>
              </div>

              
            </div>
          </motion.div>
        </div>
      </section>

      {/* GENERAL APPLICATION */}
      <section className="bg-[#e8efeb] px-5 py-24 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
        <div className="mx-auto max-w-[900px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-[#0d5c48] sm:text-[13px]">
              Stay Connected
            </p>

            <h2 className="mt-5 font-serif text-[40px] leading-[1.08] text-[#102f28] sm:text-[52px]">
              Don't see the right opportunity?
            </h2>

            <p className="mx-auto mt-6 max-w-[680px] text-[16px] leading-7 text-[#53665f] sm:text-[18px] sm:leading-8">
              If you believe your skills and experience could contribute to
              Archridge Dynamics, reach out to our team. Tell us about your
              background, expertise and the kind of work you are interested in.
            </p>

            <a
              href="/#contact-career"
              className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-[#0d5c48] px-7 py-4 text-[14px] font-bold text-white transition-all duration-300 hover:bg-[#062d24]"
            >
              <span>Contact Our Team</span>
              <FiArrowUpRight className="text-[18px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}