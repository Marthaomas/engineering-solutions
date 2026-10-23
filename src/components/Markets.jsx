import { motion } from "framer-motion";

const markets = [
  {
    number: "01",
    id: "government-public-sector",
    title: "Government & Public Sector",
    intro:
      "Supporting public-sector initiatives through structured engineering, technical consulting and project delivery.",
    description:
      "Government projects often involve multiple agencies, detailed procurement procedures, public accountability and strict technical requirements. Effective delivery depends on clear planning, coordinated teams and compliance with applicable standards. Archridge Dynamics can support project teams with engineering expertise and organized project execution.",
    support: [
      "Engineering and technical consulting",
      "Project planning and coordination",
      "Program management support",
      "Technical documentation",
      "Compliance and regulatory guidance",
    ],
  },
  {
    number: "02",
    id: "nuclear-energy",
    title: "Nuclear Energy",
    intro:
      "Supporting the technical coordination and project requirements associated with complex nuclear energy environments.",
    description:
      "Nuclear energy projects operate within highly regulated environments where safety, quality assurance, technical documentation and disciplined project controls are essential. Project teams must coordinate complex engineering activities while meeting stringent requirements throughout the project lifecycle.",
    support: [
      "Engineering project coordination",
      "Technical documentation support",
      "Project planning and scheduling",
      "Quality and compliance coordination",
      "Risk and project performance monitoring",
    ],
  },
  {
    number: "03",
    id: "power-generation",
    title: "Power Generation",
    intro:
      "Helping power generation projects progress through effective engineering support and coordinated project delivery.",
    description:
      "Power generation facilities require dependable systems, careful project planning and coordination across engineering disciplines. Whether a project involves new facilities, upgrades or operational improvements, effective delivery requires attention to technical requirements, schedules, costs and applicable standards.",
    support: [
      "Engineering and technical support",
      "Project planning and scheduling",
      "Facility upgrade coordination",
      "Technical assessments and documentation",
      "Project risk and performance monitoring",
    ],
  },
  {
    number: "04",
    id: "life-sciences-healthcare",
    title: "Life Sciences & Healthcare",
    intro:
      "Supporting healthcare and life-science facilities where quality, reliability and regulated operations matter.",
    description:
      "Healthcare and life-science environments depend on reliable facilities, carefully managed infrastructure and processes that support demanding operational standards. Projects may require coordination across building systems, technical teams, equipment requirements and compliance-related activities.",
    support: [
      "Facility engineering coordination",
      "Project management and scheduling",
      "Technical documentation support",
      "Infrastructure improvement planning",
      "Quality and compliance coordination",
    ],
  },
  {
    number: "05",
    id: "data-centres",
    title: "Data Centres",
    intro:
      "Supporting the delivery of data-centre infrastructure designed around reliability, resilience and operational continuity.",
    description:
      "Data centres depend on coordinated infrastructure, reliable power systems, cooling, connectivity and carefully managed construction or expansion projects. Successful delivery requires close collaboration between engineering disciplines, contractors and project stakeholders to meet demanding technical and operational requirements.",
    support: [
      "Engineering project coordination",
      "Power and cooling infrastructure planning",
      "Project scheduling and delivery support",
      "Technical documentation and reporting",
      "Risk and compliance coordination",
    ],
  },
  {
    number: "06",
    id: "life-sciences-biotechnology",
    title: "Life Sciences & Biotechnology",
    intro:
      "Supporting biotechnology and research environments through coordinated technical projects and facility development.",
    description:
      "Biotechnology and research facilities can involve specialized equipment, controlled environments, complex building systems and rigorous quality requirements. Projects benefit from structured coordination, clear technical documentation and careful management of the requirements that influence facility performance and readiness.",
    support: [
      "Research facility project coordination",
      "Engineering and technical support",
      "Equipment and infrastructure planning",
      "Project documentation and reporting",
      "Quality and compliance coordination",
    ],
  },
  {
    number: "07",
    id: "transportation-mobility",
    title: "Transportation & Mobility",
    intro:
      "Helping transportation infrastructure projects stay coordinated, organized and aligned with delivery objectives.",
    description:
      "Transportation projects can span multiple engineering disciplines, contractors, public agencies and operational requirements. Roads, rail systems, transport facilities and mobility infrastructure all require thoughtful planning, stakeholder coordination and consistent oversight to support efficient project delivery.",
    support: [
      "Engineering project support",
      "Project planning and scheduling",
      "Stakeholder and contractor coordination",
      "Technical documentation",
      "Risk and compliance monitoring",
    ],
  },
  {
    number: "08",
    id: "power-delivery-grid-infrastructure",
    title: "Power Delivery & Grid Infrastructure",
    intro:
      "Supporting infrastructure projects that move electricity reliably from generation facilities to end users.",
    description:
      "Power delivery infrastructure includes transmission networks, substations, distribution systems and grid improvements. These projects require careful technical coordination, infrastructure planning and management of schedules, interfaces and regulatory requirements to support reliable electricity delivery.",
    support: [
      "Electrical infrastructure project coordination",
      "Transmission and distribution project support",
      "Substation and grid upgrade coordination",
      "Project planning and performance monitoring",
      "Technical documentation and compliance support",
    ],
  },
  {
    number: "09",
    id: "oil-gas",
    title: "Oil & Gas",
    intro:
      "Supporting complex oil and gas projects with engineering coordination, technical expertise and structured delivery.",
    description:
      "Oil and gas projects operate within demanding technical, operational and regulatory environments. Facilities, equipment and project activities must be coordinated with close attention to safety requirements, technical specifications, operational reliability and applicable regulations.",
    support: [
      "Engineering and technical support",
      "Project management and coordination",
      "Technical assessments and documentation",
      "Risk and project performance monitoring",
      "Licensing and regulatory support",
    ],
  },
  {
    number: "10",
    id: "department-of-energy",
    title: "Department of Energy",
    intro:
      "Supporting energy-related public programs and projects through organized technical coordination and project management.",
    description:
      "Department of Energy initiatives may involve research, energy infrastructure, facility development and complex public-sector programs. These environments can require coordination among technical teams, contractors and government stakeholders, supported by clear documentation, project controls and applicable compliance processes.",
    support: [
      "Energy program coordination",
      "Engineering and technical consulting",
      "Project planning and scheduling",
      "Documentation and reporting support",
      "Regulatory and compliance coordination",
    ],
  },
];

export default function Markets() {
  return (
    <main className="w-full bg-[#f5f5ef]">

      {/* HERO */}
      
{/* HERO */}
<section className="relative overflow-hidden bg-[#062d24] px-5 py-24 sm:px-8 lg:px-12 xl:px-16 lg:py-32">
  {/* Top-right circle — matches About page */}
  <div className="absolute right-[-120px] top-[-120px] h-[360px] w-[360px] rounded-full border border-[#79c9ad]/20" />

  {/* Bottom-left circle — matches About page */}
  <div className="absolute bottom-[-180px] left-[-100px] h-[400px] w-[400px] rounded-full border border-[#79c9ad]/10" />

  <div className="relative mx-auto max-w-[1400px]">
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-[850px]"
    >
      <p className="text-[11px] font-semibold tracking-[0.2em] text-[#79c9ad]">
        MARKETS WE SERVE
      </p>

      <h1 className="mt-5 max-w-[850px] font-serif text-[48px] leading-[1.02] tracking-[-0.035em] text-white sm:text-[62px] lg:text-[76px]">
        Engineering expertise{" "}
        <span className="text-[#79c9ad]">
          across critical industries.
        </span>
      </h1>

      <p className="mt-7 max-w-[700px] text-[15px] leading-7 text-[#d2e2dc] sm:text-[17px]">
        Our engineering capabilities are applied across industries
        where technical reliability, effective project delivery and
        sound decision-making are essential. We understand that every
        market presents different requirements, challenges and
        operating environments.
      </p>
    </motion.div>
  </div>
</section>


      {/* INTRODUCTION */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-24">

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#16745a]">
                Industry Focus
              </p>

              <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.025em] text-[#102f28] sm:text-[48px] lg:text-[54px]">
                Different industries.
                <br />
                <span className="text-[#16745a]">
                  Different challenges.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-[700px]"
            >
              <p className="text-[15px] leading-7 text-[#53665f] sm:text-[16px]">
                Engineering requirements vary significantly from one
                industry to another. The technical systems, regulations,
                operational priorities and project environments involved in
                an energy project can be very different from those found in
                manufacturing, infrastructure or government programs.
              </p>

              <p className="mt-5 text-[15px] leading-7 text-[#53665f] sm:text-[16px]">
                Our role is to understand those differences and apply the
                right combination of engineering, project management,
                technical support and consulting capabilities to each
                environment.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* MARKET SECTIONS */}
      <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-32 xl:px-16">
        <div className="mx-auto max-w-[1400px]">

          <div className="space-y-6">
            {markets.map((market, index) => (
              <motion.article
                key={market.id}
                id={market.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                className={`rounded-[28px] p-7 sm:p-10 lg:p-14 ${
                  index % 2 === 0
                    ? "bg-white"
                    : "bg-[#e8efeb]"
                }`}
              >
                <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

                  {/* MARKET TITLE */}
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0d5c48] text-[11px] font-bold text-white">
                        {market.number}
                      </span>

                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#718079]">
                        Market
                      </span>
                    </div>

                    <h2 className="mt-7 font-serif text-[40px] leading-[1] tracking-[-0.03em] text-[#102f28] sm:text-[52px] lg:text-[58px]">
                      {market.title}
                    </h2>

                    <p className="mt-6 max-w-[430px] text-[17px] font-medium leading-7 text-[#0d5c48]">
                      {market.intro}
                    </p>
                  </div>

                  {/* MARKET INFORMATION */}
                  <div>
                    <p className="text-[15px] leading-7 text-[#53665f] sm:text-[16px]">
                      {market.description}
                    </p>

                    <div className="mt-10">
                      <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#16745a]">
                        How We Support This Market
                      </p>

                      <div className="grid gap-3 sm:grid-cols-2">
                        {market.support.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-3 rounded-xl bg-[#f5f5ef] px-4 py-4"
                          >
                            <span className="mt-[6px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#16745a]" />

                            <p className="text-[13px] font-medium leading-5 text-[#304c44]">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      {/* CAPABILITIES CONNECTION */}
      <section className="border-y border-[#dce5df] bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-24">

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#16745a]">
                Our Approach
              </p>

              <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.025em] text-[#102f28] sm:text-[50px]">
                One engineering
                <br />
                <span className="text-[#16745a]">
                  mindset. Different applications.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-[700px]"
            >
              <p className="text-[15px] leading-7 text-[#53665f] sm:text-[16px]">
                Across every market we serve, our focus remains consistent:
                understanding the technical requirements, managing project
                complexity and providing practical solutions that support
                dependable outcomes.
              </p>

              <p className="mt-5 text-[15px] leading-7 text-[#53665f] sm:text-[16px]">
                Whether supporting an energy project, infrastructure
                development, manufacturing environment, utility program or
                government initiative, we bring the same commitment to
                technical quality, structured delivery and professional
                execution.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#062d24] px-5 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto flex max-w-[1400px] flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div>
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#79c9ad]">
              Have A Project In Mind?
            </p>

            <h2 className="max-w-[720px] font-serif text-[40px] leading-[1.05] tracking-[-0.025em] text-[#f5f5ef] sm:text-[52px]">
              Let&apos;s discuss the engineering challenges ahead.
            </h2>

            <p className="mt-5 max-w-[600px] text-[15px] leading-7 text-[#b8cbc4]">
              Tell us about your project, requirements or technical
              challenge and let&apos;s explore how our team can support you.
            </p>
          </div>

          <a
            href="/#contact-project"
            className="inline-flex w-fit items-center gap-3 rounded-xl border border-[#79c9ad] bg-[#79c9ad] px-6 py-3.5 text-[14px] font-bold text-[#062d24] transition-all duration-300 hover:bg-transparent hover:text-[#79c9ad]"
          >
            Talk to Our Team
            <span>→</span>
          </a>
        </motion.div>
      </section>

    </main>
  );
}