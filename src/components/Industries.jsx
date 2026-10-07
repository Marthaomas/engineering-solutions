import { motion } from "framer-motion";
import image12 from "../assets/image12.jpg";

const markets = [
  {
    id: "oil-and-gas",
    title: "Oil & Gas",
    description:
      "Engineering and technical solutions supporting oil and gas projects, facilities and operations, with a focus on safety, reliability, risk management and efficient project delivery.",
  },
  {
    id: "power-and-utilities",
    title: "Power & Utilities",
    description:
      "Engineering and project support for power and utility infrastructure, helping organizations manage complex technical requirements and maintain safe, reliable and efficient operations.",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description:
      "Technical engineering support for manufacturing environments, helping organizations address operational challenges, improve system performance and strengthen asset reliability.",
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    description:
      "Engineering, project management and technical support for infrastructure projects, helping organizations plan, execute and manage complex developments with greater control and reliability.",
  },
  {
    id: "government",
    title: "Government",
    description:
      "Engineering and technical support for government projects and contracts, helping teams address project requirements, quality standards, regulatory considerations and effective project delivery.",
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative w-full overflow-hidden bg-[#062d24] px-5 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16"
    >
      <div className="relative z-10 mx-auto max-w-[1400px]">

        {/* SECTION INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-[760px]"
        >
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#79c9ad]">
            Markets We Serve
          </p>

          <h2 className="font-serif text-[38px] leading-[1.04] tracking-[-0.025em] text-[#f5f5ef] sm:text-[48px] lg:text-[56px]">
            Engineering Expertise
            <br className="hidden sm:block" />
            Across Critical Industries.
          </h2>

          <p className="mt-6 max-w-[680px] text-[15px] leading-7 text-[#b8cbc4] sm:text-[16px]">
            We provide engineering, project management and technical solutions
            to organizations operating across demanding industries. Our
            expertise helps clients navigate complex projects, strengthen
            operational performance and deliver reliable results.
          </p>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:gap-16 xl:gap-20">

          {/* LEFT — MARKETS LIST */}
          <div className="flex flex-col gap-9">

            {markets.map((market, index) => (
              <motion.div
                key={market.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="group"
              >
                <h3 className="font-serif text-[27px] leading-tight tracking-[-0.015em] text-[#f5f5ef] transition-colors duration-300 group-hover:text-[#8de0c0] sm:text-[30px]">
                  {market.title}
                </h3>

                <p className="mt-3 max-w-[570px] text-[14px] leading-6 text-[#b9cbc4] sm:text-[15px]">
                  {market.description}
                </p>

                <a
                  href="/markets"
                  className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-[#8de0c0] transition-colors duration-300 hover:text-white"
                >
                  <span>Learn More</span>

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </motion.div>
            ))}

          </div>

          {/* RIGHT — FEATURE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative min-h-[500px] overflow-hidden rounded-[30px] bg-[#0b3b30] lg:min-h-[780px]"
          >

            <img
              src={image12}
              alt="Industrial engineering facility"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#031c17]/95 via-[#031c17]/15 to-transparent" />

            {/* TOP TEXT */}
            <div className="absolute right-7 top-7 sm:right-9 sm:top-9">
              <div className="h-[2px] w-10 bg-[#79c9ad]" />

              <p className="mt-3 max-w-[140px] text-[10px] font-semibold uppercase leading-5 tracking-[0.16em] text-[#c0d9d0]">
                Engineering
                <br />
                Today For A
                <br />
                Stronger Tomorrow
              </p>
            </div>

            {/* BOTTOM IMAGE CONTENT */}
            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9 lg:p-10">

              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#79c9ad]">
                Built Around Your Industry
              </p>

              <h3 className="mt-3 max-w-[500px] font-serif text-[32px] leading-[1.05] tracking-[-0.02em] text-white sm:text-[40px]">
                Engineering solutions designed for real-world challenges.
              </h3>

              <p className="mt-5 max-w-[480px] text-[13px] leading-6 text-[#c3d2cd] sm:text-[14px]">
                From complex engineering environments to critical
                infrastructure, we provide practical technical support
                aligned with the demands of each market we serve.
              </p>

            </div>

            {/* INNER IMAGE FRAME */}
            <div className="pointer-events-none absolute inset-4 rounded-[24px] border border-white/10" />

          </motion.div>

        </div>
      </div>
    </section>
  );
}