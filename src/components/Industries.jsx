import { motion } from "framer-motion";
import image4 from "../assets/image4.png";

const industries = [
  {
    number: "01",
    id: "oil-and-gas",
    title: "Oil & Gas",
    image: image4,
    description:
      "Engineering and consulting support for oil and gas operations, with a focus on safety, asset reliability, risk management and efficient project delivery.",
  },
  {
    number: "02",
    id: "power-and-utilities",
    title: "Power & Utilities",
    image: image4,
    description:
      "Technical engineering solutions that support reliable power generation, utilities infrastructure and the safe, efficient operation of critical systems.",
  },
  {
    number: "03",
    id: "manufacturing",
    title: "Manufacturing",
    image: image4,
    description:
      "Engineering and technical support that helps manufacturing organizations improve industrial systems, operational performance and asset reliability.",
  },
  {
    number: "04",
    id: "infrastructure",
    title: "Infrastructure",
    image: image4,
    description:
      "Engineering, project management and risk solutions supporting the development, delivery and long-term performance of infrastructure projects.",
  },
  {
    number: "05",
    id: "government",
    title: "Government",
    image: image4,
    description:
      "Engineering and technical support for government projects and contracts, with a focus on quality, compliance, project delivery and public-sector objectives.",
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="w-full bg-[#f5f5ef] px-5 py-16 sm:px-8 lg:px-12 xl:px-16"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* SECTION INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 max-w-[700px]"
        >
          <p className="mb-3 text-[10px] font-semibold tracking-[0.2em] text-[#16745a]">
            INDUSTRIES WE SERVE
          </p>

          <h2 className="font-serif text-[36px] leading-[1.05] tracking-[-0.025em] text-[#102f28] sm:text-[46px]">
            Engineering Across Key Sectors
          </h2>

          <p className="mt-4 max-w-[600px] text-[14px] leading-6 text-[#53665f] sm:text-[15px]">
            Our engineering and consulting expertise supports organizations
            across critical industries, helping them improve safety,
            reliability and operational performance.
          </p>
        </motion.div>

        {/* INDUSTRY CARDS */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry, index) => (
            <motion.article
              key={industry.id}
              id={industry.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group scroll-mt-28 overflow-hidden bg-[#102f28]"
            >
              {/* IMAGE */}
              <div className="relative h-[260px] overflow-hidden sm:h-[280px] lg:h-[300px]">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071f19]/80 via-transparent to-transparent" />

                {/* NUMBER */}
                <div className="absolute left-5 top-5">
                  <span className="text-[10px] font-semibold tracking-[0.15em] text-white">
                    {industry.number}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5 sm:p-6">
                <h3 className="font-serif text-[25px] leading-tight text-white">
                  {industry.title}
                </h3>

                <p className="mt-4 text-[13px] leading-6 text-[#c6d5cf]">
                  {industry.description}
                </p>

                <a
                  href={`#${industry.id}`}
                  className="group/link mt-5 inline-flex items-center gap-3 rounded-xl border border-[#9ebdb1] px-4 py-2.5 text-[11px] font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#0d5c48]"
                >
                  <span>Explore Industry</span>

                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}