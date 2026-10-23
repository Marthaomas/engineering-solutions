import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const projectServices = [
  {
    id: "licensing-regulatory-support",
    number: "01",
    title: "Licensing & Regulatory Support",
    shortTitle: "Licensing & Regulatory Support",
    tagline: "Navigate requirements with clarity and confidence.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=85",
    intro:
      "Licensing and regulatory requirements can influence project feasibility, schedules, budgets, and delivery. Understanding the applicable requirements early helps organizations prepare documentation, coordinate stakeholders, and approach approval processes with greater clarity.",
    paragraphs: [
      "Archridge Dynamics' Licensing & Regulatory Support service focuses on organizing project requirements, coordinating documentation, and helping teams understand the steps involved in regulatory processes. Support can be adapted to the project type, applicable jurisdiction, and agreed scope of work.",
      "A structured approach to licensing helps project teams identify information gaps, track submission milestones, maintain organized records, and coordinate communication with the relevant stakeholders. Formal regulatory decisions and regulated professional activities remain the responsibility of the appropriate authorities and qualified professionals."
    ],
    capabilities: [
      {
        id: "licensing-requirements",
        title: "Licensing Requirements",
        description:
          "Identify relevant licensing requirements, organize applicable obligations, and clarify the documentation and processes that may be required at different stages of a project."
      },
      {
        id: "application-coordination",
        title: "Application Preparation & Coordination",
        description:
          "Coordinate application materials, organize supporting documentation, track outstanding information, and help project teams prepare submissions according to established requirements."
      },
      {
        id: "regulatory-documentation",
        title: "Regulatory Documentation",
        description:
          "Maintain structured records, organize project correspondence, track documentation requirements, and coordinate responses to requests for additional information."
      },
      {
        id: "approval-tracking",
        title: "Approval & Milestone Tracking",
        description:
          "Monitor submission milestones, maintain visibility into outstanding actions, and coordinate communication between project teams, consultants, and regulatory stakeholders."
      }
    ]
  },
  {
    id: "project-management",
    number: "02",
    title: "Project Management",
    shortTitle: "Project Management",
    tagline: "From project planning to successful delivery.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=85",
    intro:
      "Successful project delivery requires clear objectives, coordinated teams, effective resource planning, and consistent communication. Project management brings these elements together to help organizations move from initial planning through implementation and completion.",
    paragraphs: [
      "Archridge Dynamics' Project Management service is structured around the coordination of project activities, responsibilities, schedules, resources, and delivery priorities. The approach can be tailored to the complexity of the project and the requirements of its stakeholders.",
      "By maintaining visibility into progress, identifying emerging issues, and coordinating decisions, project teams can respond to challenges more effectively. Clear reporting and defined responsibilities also help stakeholders understand what is happening, what needs attention, and what comes next."
    ],
    capabilities: [
      {
        id: "project-planning-coordination",
        title: "Project Planning & Coordination",
        description:
          "Establish project objectives, define responsibilities, coordinate activities, and develop practical execution plans that align with agreed scope, resources, and delivery expectations."
      },
      {
        id: "schedule-resource-management",
        title: "Schedule & Resource Management",
        description:
          "Coordinate project schedules, personnel, materials, and other resources. Track dependencies and milestones to support efficient execution and better-informed resource decisions."
      },
      {
        id: "project-risk-issue-management",
        title: "Risk & Issue Management",
        description:
          "Identify potential delivery challenges, maintain risk and issue registers, coordinate follow-up actions, and support communication around decisions that may affect project outcomes."
      },
      {
        id: "project-progress-monitoring",
        title: "Progress Monitoring & Reporting",
        description:
          "Track activities against project plans, communicate progress to stakeholders, monitor outstanding actions, and maintain visibility throughout the project lifecycle."
      }
    ]
  },
  {
    id: "project-controls",
    number: "03",
    title: "Project Controls",
    shortTitle: "Project Controls",
    tagline: "Better visibility. Stronger project decisions.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85",
    intro:
      "Project controls provide the information teams need to understand performance, manage uncertainty, and make informed decisions. Cost, schedule, progress, and change information can help stakeholders identify deviations early and understand their potential impact on project delivery.",
    paragraphs: [
      "Archridge Dynamics' Project Controls service focuses on organizing project performance information and supporting consistent monitoring, reporting, and forecasting. Depending on the project scope, this may involve coordination between project management teams, finance personnel, planners, contractors, and other stakeholders.",
      "Reliable project controls help establish a clearer view of planned versus actual performance. Consistent reporting, documented assumptions, and structured change tracking can support more timely decisions and improve visibility into potential cost and schedule pressures."
    ],
    capabilities: [
      {
        id: "project-cost-control",
        title: "Cost Control & Budget Monitoring",
        description:
          "Support budget tracking, expenditure monitoring, cost reporting, and the identification of potential variances. Organize available cost information to help stakeholders understand project financial performance."
      },
      {
        id: "project-schedule-control",
        title: "Schedule Control",
        description:
          "Monitor planned versus actual progress, track key milestones, review schedule dependencies, and identify potential delays that may require further investigation or corrective action."
      },
      {
        id: "project-performance-reporting",
        title: "Performance Reporting & Analysis",
        description:
          "Prepare structured reports and performance summaries that communicate project status, highlight emerging concerns, and help stakeholders understand delivery trends and outstanding decisions."
      },
      {
        id: "project-change-forecast-management",
        title: "Change & Forecast Management",
        description:
          "Track scope and project changes, document their potential implications, maintain forecasting information, and support decisions about adjustments to project budgets, schedules, and delivery priorities."
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

function ProjectHero({ title, subtitle, image, overview = false }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#062d24] text-white">
      <div className="absolute inset-0 -z-20">
        <img
          src={image}
          alt=""
          className={`h-full w-full object-cover ${
            title === "Licensing & Regulatory Support"
              ? "opacity-20"
              : "opacity-35"
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
              to="/project-services"
              className="transition hover:text-[#79c9ad]"
            >
              Project Services
            </Link>

            {!overview && (
              <>
                <span>/</span>
                <span className="text-[#79c9ad]">{title}</span>
              </>
            )}
          </div>

          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#79c9ad]">
            {overview ? "Our Project Capabilities" : "Project Services"}
          </p>

          <h1 className="mt-5 max-w-[950px] font-serif text-[44px] leading-[1.04] tracking-[-0.035em] sm:text-[60px] lg:text-[76px]">
            {title}

            {overview && (
              <>
                <br />
                <span className="text-[#79c9ad]">
                  Built around your goals.
                </span>
              </>
            )}
          </h1>

          <p className="mt-7 max-w-[720px] text-[15px] leading-8 text-[#d2e2dc] sm:text-lg">
            {subtitle}
          </p>

          <a
            href="#project-content"
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

function ProjectCTA() {
  return (
    <section className="bg-[#e7efe9] px-5 py-16 sm:px-8 lg:px-12 lg:py-24 xl:px-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-[1400px] flex-col justify-between gap-8 lg:flex-row lg:items-end"
      >
        <div>
          <Eyebrow>Start a Conversation</Eyebrow>

          <h2 className="mt-4 max-w-[750px] font-serif text-3xl leading-tight text-[#173d31] sm:text-4xl lg:text-5xl">
            Let's discuss your next project.
          </h2>

          <p className="mt-5 max-w-[650px] leading-8 text-[#53685e]">
            Tell us about your project objectives, delivery requirements, or
            coordination challenges so we can discuss the appropriate next
            steps.
          </p>
        </div>

        <Link
          to="/#contact-project"
          className="inline-flex w-fit shrink-0 items-center gap-3 rounded-xl bg-[#0d5c48] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#062d24]"
        >
          Talk to Our Team <span>→</span>
        </Link>
      </motion.div>
    </section>
  );
}

function ProjectOverview() {
  return (
    <main className="min-h-screen bg-[#f5f5ef] text-[#243b33]">
      <ProjectHero
        overview
        title="Project Services."
        subtitle="Structured support across licensing and regulatory coordination, project management, and project controls — helping teams plan effectively, monitor performance, and make informed decisions throughout the project lifecycle."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85"
      />

      <section
        id="project-content"
        className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24 xl:px-16"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <div>
              <Eyebrow>How We Support You</Eyebrow>

              <h2 className="mt-4 font-serif text-3xl leading-tight text-[#173d31] sm:text-4xl lg:text-5xl">
                A structured approach to project delivery.
              </h2>
            </div>

            <p className="text-base leading-8 text-[#617168] sm:text-lg">
              Successful projects depend on more than a good idea. They require
              organized planning, clear responsibilities, consistent reporting,
              and an understanding of regulatory and operational requirements.
              Explore our service areas to discover how each can support your
              project's objectives and delivery needs.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {projectServices.map((service) => (
              <Link
                key={service.id}
                to={`/project-services/${service.id}`}
                className="group overflow-hidden rounded-3xl border border-[#dce5de] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden bg-[#dce5de] sm:h-64">
                  <img
                    src={service.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#062d24]/80 via-[#062d24]/10 to-transparent" />

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

                  <p className="mt-4 line-clamp-3 text-sm leading-7 text-[#68776f]">
                    {service.description}
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

      <ProjectCTA />
    </main>
  );
}

function ProjectDetail({ service }) {
  return (
    <main className="min-h-screen bg-[#f5f5ef] text-[#243b33]">
      <ProjectHero
        title={service.title}
        subtitle={service.tagline}
        image={service.image}
      />

      <section
        id="project-content"
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
              to="/project-services"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0d5c48] hover:underline"
            >
              ← All Project Services
            </Link>
          </aside>

          <div className="min-w-0">
            <div className="border-b border-[#d7e0d8] pb-10">
              <Eyebrow>Overview</Eyebrow>

              <h2 className="mt-4 font-serif text-3xl leading-tight text-[#173d31] sm:text-4xl">
                Clearer processes. Better project decisions.
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
            Explore our other project service areas.
          </p>

          <Link
            to="/project-services"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0d5c48] hover:underline"
          >
            View All Project Services →
          </Link>
        </div>
      </section>

      <ProjectCTA />
    </main>
  );
}

export default function ProjectServices() {
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
    .replace(/^\/project-services\/?/, "")
    .replace(/\/$/, "");

  if (!slug) {
    return <ProjectOverview />;
  }

  const service = projectServices.find((item) => item.id === slug);

  if (!service) {
    return (
      <main className="min-h-[50vh] bg-[#f5f5ef] px-6 py-24 text-center text-[#243b33]">
        <h1 className="font-serif text-4xl">
          Project service not found
        </h1>

        <Link
          to="/project-services"
          className="mt-6 inline-block font-semibold text-[#0d5c48] hover:underline"
        >
          Return to Project Services
        </Link>
      </main>
    );
  }

  return <ProjectDetail service={service} />;
}