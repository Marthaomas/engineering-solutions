import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiTarget,
  FiUsers,
  FiAward,
  FiSettings,
} from "react-icons/fi";

import image1 from "../assets/image4.png";

const values = [
  {
    icon: FiTarget,
    title: "Purpose Driven",
    text: "We approach every engagement with a clear understanding of the client’s objectives, operational requirements and desired outcomes.",
  },
  {
    icon: FiSettings,
    title: "Technical Excellence",
    text: "Our work is grounded in practical engineering knowledge, technical discipline and a commitment to delivering dependable solutions.",
  },
  {
    icon: FiUsers,
    title: "Client Focused",
    text: "We work closely with our clients to understand their challenges and develop solutions that are practical, relevant and fit for purpose.",
  },
  {
    icon: FiAward,
    title: "Quality & Reliability",
    text: "We maintain a strong focus on quality, consistency and reliability across the services and solutions we provide.",
  },
];

const capabilities = [
  "Engineering Solutions",
  "Project Management",
  "Engineering Support",
  "Risk Management",
  "Asset Integrity",
  "Technical & Regulatory Support",
];

export default function AboutPage() {
  return (
    <div className="w-full bg-[#f5f5ef]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#062d24] px-5 py-24 sm:px-8 lg:px-12 xl:px-16 lg:py-32">
        <div className="absolute right-[-120px] top-[-120px] h-[360px] w-[360px] rounded-full border border-[#79c9ad]/20" />
        <div className="absolute bottom-[-180px] left-[-100px] h-[400px] w-[400px] rounded-full border border-[#79c9ad]/10" />

        <div className="relative mx-auto max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-[850px]"
          >
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#79c9ad]">
              ABOUT ARCHRIDGE DYNAMICS
            </p>

            <h1 className="mt-5 max-w-[850px] font-serif text-[48px] leading-[1.02] tracking-[-0.035em] text-white sm:text-[62px] lg:text-[76px]">
              Engineering with purpose.{" "}
              <span className="text-[#79c9ad]">
                Solutions that endure.
              </span>
            </h1>

            <p className="mt-7 max-w-[700px] text-[15px] leading-7 text-[#d2e2dc] sm:text-[17px]">
              Archridge Dynamics provides engineering, technical and project
              solutions designed to help organizations operate with greater
              reliability, efficiency and confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="w-full bg-white px-5 py-20 sm:px-8 lg:px-12 xl:px-16 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border border-[#0d5c48]" />

            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={image1}
                alt="Archridge Dynamics engineering solutions"
                className="h-[360px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[470px] lg:h-[540px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#062d24]/30 to-transparent" />
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#16745a]">
              WHO WE ARE
            </p>

            <h2 className="mt-4 font-serif text-[38px] leading-[1.08] tracking-[-0.025em] text-[#102f28] sm:text-[48px]">
              Practical engineering for complex challenges.
            </h2>

            <p className="mt-6 text-[15px] leading-7 text-[#53665f] sm:text-[16px]">
              Archridge Dynamics is an engineering and technical solutions
              company focused on helping organizations address complex
              operational and project challenges.
            </p>

            <p className="mt-4 text-[15px] leading-7 text-[#53665f] sm:text-[16px]">
              We bring together engineering expertise, project discipline and
              technical thinking to support clients across critical industries.
              Our approach is centered on understanding the challenge,
              developing practical solutions and delivering with consistency.
            </p>

            <p className="mt-4 text-[15px] leading-7 text-[#53665f] sm:text-[16px]">
              Whether working on a new project, supporting an existing
              operation or helping clients navigate technical requirements,
              we focus on solutions that are dependable, efficient and built
              around real-world needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-[#f5f5ef] px-5 py-20 sm:px-8 lg:px-12 xl:px-16 lg:py-28">
        <div className="mx-auto max-w-[1400px]">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-[720px]"
          >
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#16745a]">
              OUR APPROACH
            </p>

            <h2 className="mt-4 font-serif text-[38px] leading-[1.08] tracking-[-0.025em] text-[#102f28] sm:text-[48px]">
              Built around understanding, precision and execution.
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-[#53665f] sm:text-[16px]">
              We believe strong engineering outcomes begin with a clear
              understanding of the problem. Our approach combines technical
              expertise with structured project thinking to deliver solutions
              that work in the real world.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -8 }}
                  className="rounded-2xl border border-[#dce5df] bg-white p-7 transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8efeb] text-[#0d5c48]">
                    <Icon className="text-[22px]" />
                  </div>

                  <h3 className="mt-6 text-[19px] font-semibold text-[#102f28]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-6 text-[#53665f]">
                    {value.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 xl:px-16 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-24">

          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#16745a]">
              OUR CAPABILITIES
            </p>

            <h2 className="mt-4 font-serif text-[38px] leading-[1.08] tracking-[-0.025em] text-[#102f28] sm:text-[48px]">
              Expertise that supports the full project lifecycle.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="flex items-center gap-4 rounded-xl border border-[#dce5df] bg-[#f5f5ef] p-5"
              >
                <FiCheckCircle className="shrink-0 text-[20px] text-[#0d5c48]" />

                <span className="text-[14px] font-semibold text-[#304c44]">
                  {capability}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#062d24] px-5 py-20 sm:px-8 lg:px-12 xl:px-16 lg:py-24">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#79c9ad]">
              LET&apos;S WORK TOGETHER
            </p>

            <h2 className="mt-4 max-w-[750px] font-serif text-[38px] leading-[1.08] tracking-[-0.025em] text-white sm:text-[50px]">
              Have an engineering challenge?
            </h2>

            <p className="mt-4 max-w-[650px] text-[15px] leading-7 text-[#d2e2dc]">
              Tell us what you are working on and let&apos;s explore how
              Archridge Dynamics can support your project or technical needs.
            </p>
          </div>

          <a
            href="/#contact-project"
            className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-[#79c9ad] px-6 py-4 text-[14px] font-bold text-[#062d24] transition-all duration-300 hover:bg-white"
          >
            <span>Talk to Our Team</span>
            <FiArrowUpRight className="text-[18px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

        </div>
      </section>

    </div>
  );
}