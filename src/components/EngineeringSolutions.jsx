
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const engineeringServices = [
  {
    slug: "nuclear-power-consulting",
    number: "01",
    title: "Nuclear Power Consulting",
    shortTitle: "Nuclear Power Consulting",
    tagline: "Clearer decisions for complex nuclear projects.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=85",
    intro:
      "Nuclear energy projects involve complex technical, financial, regulatory, and operational considerations. Effective decision-making requires a clear understanding of project objectives, potential risks, available resources, and long-term performance requirements.",
    paragraphs: [
      "Archridge Dynamics approaches nuclear power consulting through a structured assessment of project requirements, business objectives, and implementation considerations. The goal is to help project owners, investors, and stakeholders evaluate available options and make informed decisions at critical stages of the project lifecycle.",
      "From early-stage project evaluation to procurement planning and operational improvement, consulting support can help organizations identify uncertainties, coordinate stakeholders, and establish a clearer path toward project execution. Each engagement should be tailored to the client's objectives, applicable requirements, and the technical expertise available to the project."
    ],
    capabilities: [
      {
        id: "technical-financial-environmental-due-diligence",
        title: "Technical, Financial & Environmental Due Diligence",
        description:
          "Structured due diligence helps stakeholders understand the opportunities, obligations, and potential risks associated with nuclear power projects. Assessments may consider technical assumptions, project documentation, financial considerations, environmental requirements, and implementation dependencies. Findings can support investment decisions, project planning, and further technical evaluation."
      },
      {
        id: "contracting-procurement-support",
        title: "Contracting & Procurement Support",
        description:
          "Procurement decisions influence project cost, schedule, quality, and delivery risk. Support may include defining procurement requirements, organizing technical documentation, evaluating supplier submissions against established criteria, and coordinating information between project teams, contractors, and vendors."
      },
      {
        id: "benchmarking-operational-assessments",
        title: "Benchmarking & Operational Assessments",
        description:
          "Operational assessments help organizations understand current performance, identify gaps, and prioritize opportunities for improvement. Depending on the project scope, benchmarking may examine processes, resource utilization, performance indicators, maintenance planning, and established industry practices."
      },
      {
        id: "management-strategy-consulting",
        title: "Management & Strategy Consulting",
        description:
          "Effective strategy connects long-term objectives with practical decisions about people, processes, investment, and delivery. Consulting support may include strategic planning, organizational assessments, project governance, implementation roadmaps, and the development of measurable improvement priorities."
      }
    ]
  },
  {
    slug: "nuclear-power",
    number: "02",
    title: "Nuclear Power",
    shortTitle: "Nuclear Power",
    tagline: "Supporting the planning and development of nuclear energy infrastructure.",
    image:
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1800&q=85",
    intro:
      "Nuclear power infrastructure requires careful planning, disciplined engineering, rigorous quality management, and a strong understanding of safety and regulatory obligations. From early development through the operational life of a facility, each stage depends on coordinated technical decisions and well-defined project requirements.",
    paragraphs: [
      "Archridge Dynamics' proposed Nuclear Power service focuses on supporting the planning, coordination, and technical evaluation of nuclear energy projects. The specific scope of support depends on the client's requirements, project stage, applicable regulations, and the qualifications of the professionals engaged.",
      "Nuclear facilities operate within highly specialized regulatory and safety environments. Project activities must therefore be approached with appropriate engineering expertise, controlled documentation, clear responsibilities, and compliance with the standards and requirements applicable to each facility."
    ],
    capabilities: [
      {
        id: "new-nuclear-generation",
        title: "New Nuclear Generation",
        description:
          "Early-stage nuclear generation projects require coordinated planning across site considerations, technology selection, infrastructure requirements, project development, and regulatory pathways. Project support can help organize requirements, evaluate dependencies, document decisions, and coordinate the activities needed to advance project development."
      },
      {
        id: "nuclear-engineering-design",
        title: "Engineering & Design Coordination",
        description:
          "Nuclear engineering projects depend on the coordination of multiple technical disciplines and carefully controlled design information. Support may include requirements coordination, design documentation management, interface tracking, technical review coordination, and monitoring of engineering deliverables by appropriately qualified specialists."
      },
      {
        id: "operating-facility-support",
        title: "Operating Facility Support",
        description:
          "Operating nuclear facilities require ongoing attention to asset condition, maintenance priorities, plant modifications, documentation, and long-term performance. Depending on the agreed scope, support may involve coordinating improvement initiatives, organizing project information, and assisting with planning for facility upgrades."
      },
      {
        id: "modernization-and-life-extension",
        title: "Modernization & Life Extension",
        description:
          "Modernization initiatives can involve aging infrastructure, equipment replacement, digital upgrades, and long-term asset planning. A structured approach helps teams identify project interfaces, coordinate work packages, assess implementation constraints, and document decisions throughout the upgrade process."
      },
      {
        id: "nuclear-quality-and-compliance",
        title: "Quality & Regulatory Coordination",
        description:
          "Nuclear projects require disciplined quality processes and careful management of regulatory obligations. Support may include organizing quality documentation, maintaining requirements registers, coordinating review milestones, and tracking outstanding actions. Formal safety assessments, licensing decisions, and regulated engineering work must remain with appropriately authorized and qualified professionals."
      }
    ]
  },
  {
    slug: "data-centers",
    number: "03",
    title: "Data Centers",
    shortTitle: "Data Centers",
    tagline: "Planning resilient infrastructure for an increasingly digital world.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=85",
    intro:
      "The growing use of artificial intelligence, cloud computing, and digital services is increasing demand for data center capacity and the infrastructure needed to support it. These facilities depend on reliable power, cooling, water, connectivity, and coordinated planning across multiple engineering disciplines.",
    paragraphs: [
      "Data center development brings together site selection, power availability, utility coordination, technical infrastructure, construction planning, and operational requirements. Decisions made early in a project can influence its feasibility, cost, delivery schedule, and long-term flexibility.",
      "Archridge Dynamics' Data Centers service is structured around the planning and coordination challenges associated with these complex facilities. Depending on confirmed project capabilities and the agreed scope, support may include requirements development, infrastructure assessments, project coordination, and collaboration with specialist engineering partners.",
      "A coordinated development approach helps project stakeholders identify critical dependencies, assess potential constraints, and align infrastructure planning with operational objectives. Power availability, utility interfaces, future expansion, and resilience considerations should be addressed as part of the wider project strategy."
    ],
    capabilities: [
      {
        id: "powered-shell-campus-design",
        title: "Powered-Shell Data Center Campus Design",
        description:
          "A powered-shell development requires coordination between the facility structure, electrical infrastructure, mechanical systems, utility connections, and the needs of the eventual operator. Planning activities may include defining project requirements, coordinating design interfaces, reviewing infrastructure dependencies, and allowing for future capacity and expansion needs."
      },
      {
        id: "on-site-generation",
        title: "On-Site Generation Projects",
        description:
          "On-site generation may be considered when a data center requires additional power capacity, greater control over supply arrangements, or a solution that complements available utility service. Project assessments can examine demand profiles, generation options, fuel availability, emissions considerations, permitting requirements, and integration with other power sources."
      },
      {
        id: "reliability-techno-economic-assessments",
        title: "Reliability & Techno-Economic Assessments",
        description:
          "Data center power strategies involve balancing reliability requirements, capital expenditure, operating costs, and technical constraints. Techno-economic assessments compare potential approaches against defined criteria, helping stakeholders understand trade-offs, identify key risks, and evaluate options for meeting operational requirements."
      },
      {
        id: "siting-assessments-permitting",
        title: "Siting Assessments & Permitting",
        description:
          "Site selection can determine whether a data center can secure sufficient power, water, connectivity, access, and room for expansion. Siting assessments may consider land requirements, utility proximity, environmental constraints, infrastructure availability, permitting pathways, and other location-specific factors before major commitments are made."
      },
      {
        id: "grid-interconnection",
        title: "Grid Interconnection",
        description:
          "Connecting a data center to the electrical grid requires coordination with utilities and an understanding of capacity, connection requirements, delivery timelines, and network constraints. Project support may include documenting load requirements, coordinating interconnection activities, tracking technical submissions, and managing dependencies between the facility and utility infrastructure."
      },
      {
        id: "owners-engineering",
        title: "Owner's Engineering",
        description:
          "An owner's engineering function helps represent the project owner's technical and delivery objectives across designers, contractors, suppliers, and other project participants. Depending on the agreed scope, activities may include reviewing technical deliverables, coordinating interfaces, tracking design issues, monitoring milestones, and supporting technical decision-making."
      }
    ]
  },
  {
    slug: "grid",
    number: "04",
    title: "Grid Infrastructure",
    shortTitle: "Grid",
    tagline: "Strengthening the infrastructure that connects and delivers power.",
    image:
    "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1800&q=85",
    intro:
      "Electricity grids connect generation resources with the communities, industries, and facilities that depend on reliable power. Changing demand, new generation technologies, aging assets, and the integration of renewable energy are creating new challenges for transmission, distribution, and utility infrastructure.",
    paragraphs: [
      "Modern grid projects require coordination between utilities, developers, equipment suppliers, engineering teams, and regulatory stakeholders. Infrastructure decisions must account for system requirements, project constraints, operational continuity, and long-term reliability.",
      "Archridge Dynamics' Grid Infrastructure service is designed around the planning and coordination needs of power delivery projects. Depending on confirmed capabilities and project scope, support may include project development coordination, infrastructure requirements planning, technical documentation, and collaboration with qualified electrical engineering specialists."
    ],
    capabilities: [
      {
        id: "substations-switchyards",
        title: "Substations & Switchyards",
        description:
          "Substations and switchyards provide essential connection, switching, protection, and transformation functions within electrical networks. Project activities may involve coordinating design requirements, equipment interfaces, site considerations, technical documentation, and project milestones for new facilities or upgrades to existing infrastructure."
      },
      {
        id: "transmission-distribution",
        title: "Transmission & Distribution",
        description:
          "Transmission and distribution infrastructure moves electricity from generation sources to end users. Projects may address new connections, network expansion, capacity constraints, asset upgrades, and infrastructure replacement. Effective planning considers routing, equipment requirements, stakeholder coordination, construction constraints, and the need to maintain service continuity."
      },
      {
        id: "grid-modernization-automation",
        title: "Grid Modernization & Automation",
        description:
          "Modernization initiatives help utilities respond to changing network demands and improve visibility into system performance. Depending on project requirements, these initiatives may involve digital monitoring, control-system upgrades, automation planning, improved data integration, and coordination of technology deployments with existing infrastructure."
      },
      {
        id: "renewable-grid-integration",
        title: "Renewable Energy Integration",
        description:
          "Connecting renewable generation to the grid requires coordination between developers, utilities, and engineering teams. Project considerations can include connection capacity, network constraints, interconnection requirements, energy storage interfaces, and the technical studies required by the relevant utility and regulatory framework."
      },
      {
        id: "grid-resilience-storm-hardening",
        title: "Grid Resilience & Infrastructure Upgrades",
        description:
          "Utilities must plan for equipment aging, severe weather, changing demand, and other potential sources of disruption. Resilience initiatives may involve asset assessments, infrastructure upgrade planning, risk prioritization, contingency considerations, and coordinated delivery of improvements intended to strengthen network performance."
      },
      {
        id: "utility-project-development",
        title: "Utility Project Development & Coordination",
        description:
          "Power infrastructure projects often involve numerous stakeholders, technical interfaces, procurement activities, and regulatory milestones. Structured project coordination can help teams define responsibilities, track deliverables, monitor schedules, manage project risks, and maintain clear communication throughout the development and implementation process."
      }
    ]
  }
];

function Eyebrow({ children }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0d7658]">
      {children}
    </p>
  );
}

function EngineeringHero({ title, subtitle, image, overview = false }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#062d24] text-white">
      <div className="absolute inset-0 -z-20">
        <img
          src={image}
          alt=""
          className={`h-full w-full object-cover ${
            title === "Data Centers" ? "opacity-20" : "opacity-35"
          }`}
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#062d24] via-[#062d24]/90 to-[#062d24]/45" />

      <div className="pointer-events-none absolute -right-24 -top-36 h-[420px] w-[420px] rounded-full border border-[#79c9ad]/25 sm:h-[540px] sm:w-[540px]" />
      <div className="pointer-events-none absolute -bottom-52 -left-28 h-[380px] w-[380px] rounded-full border border-[#79c9ad]/15 sm:h-[480px] sm:w-[480px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-[900px]"
        >
          <div className="mb-8 flex flex-wrap items-center gap-2 text-xs text-[#d2e2dc]">
            <Link to="/" className="transition hover:text-[#79c9ad]">
              Home
            </Link>
            <span>/</span>
            <Link
              to="/engineering-solutions"
              className="transition hover:text-[#79c9ad]"
            >
              Engineering Solutions
            </Link>
            {!overview && (
              <>
                <span>/</span>
                <span className="text-[#79c9ad]">{title}</span>
              </>
            )}
          </div>

          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#79c9ad]">
            {overview ? "Our Engineering Capabilities" : "Engineering Solutions"}
          </p>

          <h1 className="mt-5 max-w-[950px] font-serif text-[44px] leading-[1.04] tracking-[-0.035em] sm:text-[60px] lg:text-[76px]">
            {title}
            {overview && (
              <>
                <br />
                <span className="text-[#79c9ad]">
                  Engineered for what&apos;s next.
                </span>
              </>
            )}
          </h1>

          <p className="mt-7 max-w-[720px] text-[15px] leading-8 text-[#d2e2dc] sm:text-lg">
            {subtitle}
          </p>

          <a
            href="#engineering-content"
            className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-[#79c9ad] px-6 py-3.5 text-sm font-bold text-[#062d24] transition duration-300 hover:bg-white"
          >
            Explore Capabilities
            <span className="transition-transform group-hover:translate-y-1">
              ↓
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function EngineeringOverview() {
  return (
    <main className="min-h-screen bg-[#f5f5ef] text-[#243b33]">
      <EngineeringHero
        overview
        title="Engineering Solutions."
        subtitle="Explore engineering and infrastructure project support across nuclear power consulting, nuclear power, data centers, and grid infrastructure. Our approach emphasizes clear requirements, coordinated planning, and informed project decisions."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85"
      />

      <section
        id="engineering-content"
        className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24 xl:px-16"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <div>
              <Eyebrow>Our Expertise</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-[#173d31] sm:text-4xl lg:text-5xl">
                Supporting complex infrastructure projects.
              </h2>
            </div>

            <p className="text-base leading-8 text-[#617168] sm:text-lg">
              Energy and infrastructure projects bring together technical
              requirements, regulatory considerations, delivery schedules, and
              long-term operating needs. A coordinated approach helps project
              teams understand their priorities, identify dependencies, and
              make informed decisions at every stage. Explore our engineering
              service areas to learn more about the capabilities relevant to
              your project.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {engineeringServices.map((service) => (
              <Link
                key={service.slug}
                to={`/engineering-solutions/${service.slug}`}
                className="group overflow-hidden rounded-3xl border border-[#dce5de] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden bg-[#dce5de] sm:h-64">
                  <img
                    src={service.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#062d24]/80 via-transparent to-transparent" />
                  <span className="absolute bottom-5 left-6 text-sm font-semibold tracking-[0.16em] text-[#79c9ad]">
                    {service.number}
                  </span>
                </div>

                <div className="p-7 sm:p-9">
                  <h3 className="font-serif text-2xl text-[#173d31] sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[#617168]">
                    {service.tagline}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-3 text-sm font-bold text-[#0d5c48]">
                    Explore Service
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <EngineeringCTA />
    </main>
  );
}

function EngineeringCTA() {
  return (
    <section className="bg-[#e7efe9] px-5 py-16 sm:px-8 lg:px-12 lg:py-24 xl:px-16">
      <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div>
          <Eyebrow>Start a Conversation</Eyebrow>
          <h2 className="mt-4 max-w-[750px] font-serif text-3xl leading-tight text-[#173d31] sm:text-4xl lg:text-5xl">
            Let&apos;s discuss your next infrastructure project.
          </h2>
          <p className="mt-5 max-w-[650px] leading-8 text-[#53685e]">
            Tell us about your project objectives, technical requirements, or
            infrastructure challenges so we can discuss the appropriate next
            steps.
          </p>
        </div>

        <Link
          to="/#contact-project"
          className="inline-flex w-fit shrink-0 items-center gap-3 rounded-xl bg-[#0d5c48] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#062d24]"
        >
          Contact Our Team <span>→</span>
        </Link>
      </div>
    </section>
  );
}

function EngineeringDetail({ service }) {
  return (
    <main className="min-h-screen bg-[#f5f5ef] text-[#243b33]">
      <EngineeringHero
        title={service.title}
        subtitle={service.tagline}
        image={service.image}
      />

      <section
        id="engineering-content"
        className="px-5 py-14 sm:px-8 lg:px-12 lg:py-20 xl:px-16"
      >
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <aside className="h-fit lg:sticky lg:top-28">
            <Eyebrow>Explore This Service</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#173d31]">
              Areas of focus
            </h2>

            <nav className="mt-6 space-y-1">
              {service.capabilities.map((capability, index) => (
                <a
                  key={capability.id}
                  href={`#${capability.id}`}
                  className="group flex items-start gap-3 rounded-xl px-3 py-3 transition hover:bg-[#e7efe9]"
                >
                  <span className="mt-0.5 text-xs font-bold text-[#0d7658]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-6 text-[#53685e] transition group-hover:text-[#0d5c48]">
                    {capability.title}
                  </span>
                </a>
              ))}
            </nav>

            <Link
              to="/engineering-solutions"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0d5c48] hover:underline"
            >
              ← All Engineering Solutions
            </Link>
          </aside>

          <div className="min-w-0">
            <div className="border-b border-[#d7e0d8] pb-10">
              <Eyebrow>Overview</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-[#173d31] sm:text-4xl">
                Understanding the challenges. Planning for what comes next.
              </h2>

              <p className="mt-6 text-base leading-8 text-[#617168] sm:text-lg">
                {service.intro}
              </p>

              {service.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="mt-5 text-base leading-8 text-[#617168]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="divide-y divide-[#d7e0d8]">
              {service.capabilities.map((capability, index) => (
                <motion.article
                  key={capability.id}
                  id={capability.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.45 }}
                  className="scroll-mt-28 py-10 sm:py-12"
                >
                  <div className="flex items-start gap-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e0ebe2] text-sm font-bold text-[#0d5c48]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="font-serif text-2xl leading-tight text-[#173d31] sm:text-3xl">
                        {capability.title}
                      </h3>

                      <p className="mt-5 text-base leading-8 text-[#617168]">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#dce5de] bg-white px-5 py-8 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-[#617168]">
            Explore our other engineering service areas.
          </p>
          <Link
            to="/engineering-solutions"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0d5c48] hover:underline"
          >
            View All Engineering Solutions →
          </Link>
        </div>
      </section>

      <EngineeringCTA />
    </main>
  );
}

export default function EngineeringSolutions() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const sectionId = decodeURIComponent(location.hash.slice(1));

    const timeout = setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 150);

    return () => clearTimeout(timeout);
  }, [location.pathname, location.hash]);

  const slug = location.pathname
    .replace(/^\/engineering-solutions\/?/, "")
    .replace(/\/$/, "");

  if (!slug) {
    return <EngineeringOverview />;
  }

  const service = engineeringServices.find((item) => item.slug === slug);

  if (!service) {
    return (
      <main className="min-h-[50vh] bg-[#f5f5ef] px-6 py-24 text-center text-[#243b33]">
        <h1 className="font-serif text-4xl">Engineering service not found</h1>
        <Link
          to="/engineering-solutions"
          className="mt-6 inline-block font-semibold text-[#0d5c48] hover:underline"
        >
          Return to Engineering Solutions
        </Link>
      </main>
    );
  }

  return <EngineeringDetail service={service} />;
}
