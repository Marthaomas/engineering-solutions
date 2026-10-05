import { motion } from "framer-motion";

const markets = [
  {
    number: "01",
    id: "oil-and-gas",
    title: "Oil & Gas",
    intro:
      "Supporting complex energy projects with engineering, technical and project delivery expertise.",
    description:
      "The oil and gas industry operates within demanding technical, operational and regulatory environments. Projects often involve complex engineering requirements, multiple stakeholders, strict safety expectations and significant project coordination.",
    support: [
      "Engineering and technical support",
      "Project management and coordination",
      "Risk management and technical assessment",
      "Regulatory and licensing support",
      "Technical documentation and project requirements",
    ],
  },
  {
    number: "02",
    id: "power-and-utilities",
    title: "Power & Utilities",
    intro:
      "Supporting the infrastructure and technical systems that keep essential services operating reliably.",
    description:
      "Power and utility projects require careful planning, technical coordination and a strong focus on reliability. From project development through execution, organizations must manage technical requirements, operational considerations and regulatory expectations.",
    support: [
      "Engineering project support",
      "Technical coordination and planning",
      "Project management and delivery support",
      "Operational and technical assessments",
      "Regulatory and compliance support",
    ],
  },
  {
    number: "03",
    id: "manufacturing",
    title: "Manufacturing",
    intro:
      "Helping manufacturing organizations improve project execution, technical reliability and operational performance.",
    description:
      "Manufacturing environments depend on reliable systems, efficient processes and well-coordinated engineering activities. Projects may involve facility improvements, technical upgrades, equipment requirements or operational changes that need to be carefully managed.",
    support: [
      "Engineering and technical support",
      "Project planning and coordination",
      "Operational improvement support",
      "Technical assessments",
      "Project documentation and compliance guidance",
    ],
  },
  {
    number: "04",
    id: "infrastructure",
    title: "Infrastructure",
    intro:
      "Providing structured engineering and project support for developments with complex technical and delivery requirements.",
    description:
      "Infrastructure projects often involve multiple disciplines, stakeholders, contractors and regulatory requirements. Successful delivery requires structured planning, effective coordination and consistent technical oversight throughout the project lifecycle.",
    support: [
      "Engineering project support",
      "Project planning and management",
      "Technical coordination",
      "Risk and project performance support",
      "Regulatory and compliance guidance",
    ],
  },
  {
    number: "05",
    id: "government",
    title: "Government",
    intro:
      "Supporting government projects and programs with practical engineering, technical and project management expertise.",
    description:
      "Government projects can involve complex procurement processes, regulatory requirements, multiple stakeholders and defined quality standards. Our approach focuses on providing structured technical and project support that helps teams manage these requirements effectively.",
    support: [
      "Engineering and technical consulting",
      "Project and program management support",
      "Technical documentation",
      "Regulatory and compliance guidance",
      "Project coordination and performance monitoring",
    ],
  },
];

export default function Markets() {
  return (
    <main className="w-full bg-[#f5f5ef]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#062d24] px-5 pb-24 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pb-32 lg:pt-40 xl:px-16">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#0d5c48]/30 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-[950px]"
          >
            <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#79c9ad]">
              Markets We Serve
            </p>

            <h1 className="font-serif text-[48px] leading-[1.02] tracking-[-0.035em] text-[#f5f5ef] sm:text-[64px] lg:text-[78px]">
              Engineering expertise
              <br />
              <span className="text-[#79c9ad]">
                across critical industries.
              </span>
            </h1>

            <p className="mt-7 max-w-[760px] text-[16px] leading-7 text-[#b8cbc4] sm:text-[18px] sm:leading-8">
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