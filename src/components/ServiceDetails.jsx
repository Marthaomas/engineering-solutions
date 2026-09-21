import { motion } from "framer-motion";
import image3 from "../assets/image3.png";

const services = [
  {
    number: "01",
    id: "engineering-solutions",
    title: "Engineering Solutions",
    description:
      "Technical engineering studies, design support and practical solutions that improve system performance, reliability and operational efficiency.",
  },
  {
    number: "02",
    id: "project-management-controls",
    title: "Project Management & Controls",
    description:
      "Planning, scheduling, cost control, progress monitoring and project coordination to keep engineering projects on track and aligned with their objectives.",
  },
  {
    number: "03",
    id: "asset-integrity-management",
    title: "Asset Integrity Management",
    description:
      "Inspection, maintenance and integrity strategies designed to improve asset reliability, manage deterioration and extend the safe operating life of existing facilities.",
  },
  {
    number: "04",
    id: "risk-management",
    title: "Risk Management",
    description:
      "Practical risk management for both projects and existing assets, helping organizations identify hazards, evaluate exposure and make informed decisions.",
  },
  {
    number: "05",
    id: "quality-assurance-quality-control",
    title: "Quality Assurance & Quality Control",
    description:
      "Quality systems, inspections, audits and compliance processes that help ensure engineering work and project deliverables meet required standards.",
  },
  {
    number: "06",
    id: "industrial-systems-modelling",
    title: "Industrial Systems Modelling",
    description:
      "Modelling, simulation and technical analysis that provide better insight into industrial systems and support informed engineering decisions.",
  },
  {
    number: "07",
    id: "pipe-stress-analysis",
    title: "Pipe Stress Analysis",
    description:
      "Piping flexibility and stress analysis to support safe, reliable piping systems and identify potential issues before they affect operations.",
  },
  {
    number: "08",
    id: "government-contract-engineering",
    title: "Government Contract Engineering",
    description:
      "Engineering and technical support for public-sector projects, contracts and infrastructure programs with a focus on compliance, performance and delivery.",
  },
];

export default function ServiceDetails() {
  return (
    <section
      id="services"
      className="w-full bg-[#f5f5ef] px-5 py-16 sm:px-8 lg:px-12 xl:px-16"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* SECTION INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-[650px]"
        >
          <p className="mb-3 text-[10px] font-semibold tracking-[0.2em] text-[#16745a]">
            OUR SERVICES IN DETAIL
          </p>

          <h2 className="font-serif text-[36px] leading-[1.05] tracking-[-0.025em] text-[#102f28] sm:text-[46px]">
            Expertise Across Key Areas
          </h2>

          <p className="mt-4 max-w-[560px] text-[14px] leading-6 text-[#53665f] sm:text-[15px]">
            From engineering studies and project delivery to asset integrity
            and risk management, we provide technical solutions across the
            full project and asset lifecycle.
          </p>
        </motion.div>

        {/* SERVICES */}
        <div className="space-y-12 lg:space-y-16">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              id={service.id}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.05,
              }}
              className="scroll-mt-28 border-t border-[#d8dfda] pt-8"
            >
              <div
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                  index % 2 !== 0 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >

                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={image3}
                    alt={service.title}
                    className="block h-[240px] w-full object-cover transition-transform duration-500 hover:scale-[1.02] sm:h-[300px] lg:h-[330px]"
                  />
                </div>

                {/* TEXT */}
                <div className="relative">
                <div className="mb-4">
  <span className="text-[11px] font-semibold tracking-[0.15em] text-[#16745a]">
    {service.number}
  </span>
</div>

                  <h3 className="font-serif text-[30px] leading-[1.05] tracking-[-0.02em] text-[#102f28] sm:text-[38px]">
                    {service.title}
                  </h3>

                  <p className="mt-5 max-w-[500px] text-[14px] leading-6 text-[#53665f] sm:text-[15px]">
                    {service.description}
                  </p>

                  <a
                    href={`#${service.id}`}
                    className="group mt-6 inline-flex items-center gap-3 text-[12px] font-semibold text-[#0d5c48]"
                  >
                    <span>Explore Service</span>

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>

              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}