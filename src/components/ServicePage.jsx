
import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const servicesData = {
  "consulting-and-planning": {
    title: "Consulting & Planning",
    eyebrow: "Strategic Advisory & Planning",
    tagline: "Clear direction. Informed decisions. Better outcomes.",
    description:
      "Archridge Dynamics helps organizations evaluate opportunities, assess project feasibility and make informed technical, commercial and strategic decisions. We combine structured planning with practical insight to help clients move from early-stage ideas to well-defined project objectives.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=85",
    overview:
      "Successful projects begin with a clear understanding of the objectives, risks, resources and conditions that will shape delivery. Our consulting and planning approach helps clients identify opportunities, evaluate alternatives and develop practical strategies aligned with their business goals.",
    capabilities: [
      {
        title: "Due Diligence & Technical Assessments",
        description:
          "Review project proposals, technical documentation, risks and operational considerations to support informed investment and development decisions.",
      },
      {
        title: "Infrastructure & Power Planning",
        description:
          "Support infrastructure assessments, power requirements, capacity planning and evaluation of potential connection and transmission needs.",
      },
      {
        title: "Economic & Financial Planning",
        description:
          "Evaluate project costs, resource requirements, commercial considerations and potential financial risks during the planning process.",
      },
      {
        title: "Developer & Owner Support",
        description:
          "Provide early-stage guidance, technical coordination and project oversight to help owners and developers establish a clear path forward.",
      },
      {
        title: "Strategic Advisory",
        description:
          "Help organizations assess alternatives, identify priorities and align technical decisions with longer-term objectives.",
      },
      {
        title: "Asset Management Planning",
        description:
          "Support asset reviews, maintenance planning, performance considerations and strategies for managing infrastructure throughout its lifecycle.",
      },
    ],
  },

  "project-services": {
    title: "Project Services",
    eyebrow: "Project Delivery & Management",
    tagline: "Turning project objectives into measurable results.",
    description:
      "Archridge Dynamics supports projects through coordinated management, procurement, scheduling, cost planning and delivery oversight. Our approach focuses on accountability, informed decisions, efficient execution and alignment with project requirements.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=85",
    overview:
      "Delivering a successful project requires more than a plan. It calls for effective coordination, realistic budgets, careful scheduling and consistent oversight. Our project services help clients manage these essential elements across the project lifecycle.",
    capabilities: [
      {
        title: "Project Management",
        description:
          "Coordinate project activities, stakeholders, deliverables and resources to support progress toward defined objectives.",
      },
      {
        title: "Construction Management & Commissioning",
        description:
          "Support construction coordination, quality reviews, readiness checks and verification that completed systems meet specified requirements.",
      },
      {
        title: "Procurement Services",
        description:
          "Assist with procurement planning, supplier coordination, equipment requirements and purchasing processes.",
      },
      {
        title: "Project Controls & Scheduling",
        description:
          "Track milestones, timelines, progress and project risks to help teams identify issues and respond early.",
      },
      {
        title: "Electrical Analytical Services",
        description:
          "Support electrical system assessments, technical analysis and reviews of system performance and reliability.",
      },
      {
        title: "Cost Estimating",
        description:
          "Develop project cost estimates and budget assessments to support planning, resource allocation and decision-making.",
      },
    ],
  },

  "engineering-services": {
    title: "Engineering Services",
    eyebrow: "Engineering & Technical Solutions",
    tagline: "Practical engineering built around real-world needs.",
    description:
      "Archridge Dynamics supports clients with engineering assessment, technical design coordination and infrastructure solutions. We focus on practical approaches that consider functionality, safety, efficiency and the requirements of each project.",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=2000&q=85",
    overview:
      "Engineering decisions shape the performance, reliability and long-term value of infrastructure and industrial facilities. We work to understand project requirements, evaluate technical options and support solutions that align with operational and delivery objectives.",
    capabilities: [
      {
        title: "Engineering Design & Technical Studies",
        description:
          "Support the development and review of technical concepts, engineering documentation and project design requirements.",
      },
      {
        title: "Civil & Structural Engineering",
        description:
          "Support infrastructure planning and the assessment of structural and civil engineering requirements.",
      },
      {
        title: "Electrical & Mechanical Systems",
        description:
          "Assist with evaluating system requirements, equipment selection and coordination of electrical and mechanical solutions.",
      },
      {
        title: "Infrastructure Assessment",
        description:
          "Review existing facilities and infrastructure to identify needs, constraints and potential improvement opportunities.",
      },
      {
        title: "Technical Project Coordination",
        description:
          "Help coordinate engineering disciplines, technical documentation and project stakeholders throughout delivery.",
      },
      {
        title: "Quality & Safety Considerations",
        description:
          "Incorporate project quality requirements and relevant safety considerations into technical planning and reviews.",
      },
    ],
  },

  "energy-solutions": {
    title: "Energy Solutions",
    eyebrow: "Energy Infrastructure & Innovation",
    tagline: "Supporting a more reliable and efficient energy future.",
    description:
      "Archridge Dynamics supports energy initiatives through power infrastructure planning, renewable energy opportunities, energy efficiency assessments and project coordination. We help clients evaluate their needs and consider practical solutions for changing energy demands.",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=2000&q=85",
    overview:
      "Reliable energy is essential to modern industry, infrastructure and economic development. Our energy solutions approach considers project objectives, operating requirements, available technologies and long-term performance to help clients make informed decisions.",
    capabilities: [
      {
        title: "Power Infrastructure Planning",
        description:
          "Support assessments of power requirements, infrastructure needs, capacity and potential development options.",
      },
      {
        title: "Renewable Energy Solutions",
        description:
          "Help evaluate opportunities involving solar, wind and other renewable energy technologies based on project requirements.",
      },
      {
        title: "Energy Efficiency",
        description:
          "Identify opportunities to review energy consumption, improve efficiency and support more effective use of resources.",
      },
      {
        title: "Power Generation Support",
        description:
          "Assist with planning and technical coordination for power generation initiatives and related infrastructure.",
      },
      {
        title: "Energy Project Development",
        description:
          "Support project assessment, planning, coordination and implementation across relevant stages of development.",
      },
      {
        title: "Energy Strategy & Advisory",
        description:
          "Help clients evaluate energy options and align infrastructure decisions with operational and long-term business priorities.",
      },
    ],
  },

  "environmental-services": {
    title: "Environmental Services",
    eyebrow: "Environmental Management & Sustainability",
    tagline: "Responsible development. Long-term environmental value.",
    description:
      "Archridge Dynamics supports responsible project development through environmental planning, impact considerations, compliance support and sustainability-focused assessments. Our approach helps clients consider environmental requirements throughout the project lifecycle.",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2000&q=85",
    overview:
      "Environmental considerations are an important part of responsible infrastructure and industrial development. Early assessment and thoughtful planning can help organizations understand potential impacts, address relevant requirements and make better-informed project decisions.",
    capabilities: [
      {
        title: "Environmental Assessments",
        description:
          "Support the identification and review of potential environmental considerations associated with proposed projects.",
      },
      {
        title: "Environmental Planning",
        description:
          "Help incorporate environmental requirements and management considerations into project planning and execution.",
      },
      {
        title: "Compliance Support",
        description:
          "Assist with identifying relevant environmental obligations and organizing documentation and processes for compliance activities.",
      },
      {
        title: "Impact & Risk Management",
        description:
          "Help identify potential environmental risks and consider appropriate mitigation and management approaches.",
      },
      {
        title: "Waste & Resource Management",
        description:
          "Support planning approaches for responsible resource use, waste management and operational practices.",
      },
      {
        title: "Sustainability Advisory",
        description:
          "Help organizations consider sustainability priorities when evaluating projects, operations and infrastructure investments.",
      },
    ],
  },

  "oil-gas-services": {
    title: "Oil & Gas",
    eyebrow: "Oil, Gas & Industrial Infrastructure",
    tagline: "Technical support across the oil and gas value chain.",
    description:
      "Archridge Dynamics supports oil and gas projects through engineering coordination, infrastructure planning, technical assessments and project delivery support. Our approach considers operational requirements, safety, environmental responsibilities and the practical demands of industrial facilities.",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=2000&q=85",
    overview:
      "Oil and gas infrastructure requires careful planning, coordinated engineering and attention to operational and environmental considerations. We help clients assess project needs and coordinate solutions for facilities and systems across the value chain.",
    capabilities: [
      {
        title: "Upstream",
        description:
          "Support planning and infrastructure considerations for exploration, production facilities and associated field development projects.",
      },
      {
        title: "Midstream",
        description:
          "Support project planning for pipelines, storage facilities, processing infrastructure and transportation systems.",
      },
      {
        title: "Downstream",
        description:
          "Assist with planning and technical coordination for refining, processing and related industrial facilities.",
      },
      {
        title: "Gas Distribution",
        description:
          "Support planning and assessment of gas distribution infrastructure, associated facilities and network requirements.",
      },
      {
        title: "Facility Engineering & Coordination",
        description:
          "Help coordinate technical requirements, engineering documentation and infrastructure considerations for industrial facilities.",
      },
      {
        title: "Project Delivery & Operational Support",
        description:
          "Assist with project coordination, implementation planning and operational improvement initiatives.",
      },
    ],
  },

  "it-services": {
    title: "IT Services",
    eyebrow: "Technology & Digital Transformation",
    tagline: "Technology solutions that move your business forward.",
    description:
      "Archridge Dynamics helps organizations plan, implement and manage technology solutions that support their operations. From software and systems integration to cloud infrastructure, cybersecurity and technical support, our services are designed around business needs.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=85",
    overview:
      "Technology is central to how modern organizations operate, communicate and grow. We help clients assess their IT needs, improve their digital infrastructure and coordinate technology solutions that support productivity, resilience and future development.",
    capabilities: [
      {
        title: "Software Engineering & Application Development",
        description:
          "Support the planning and development of digital applications and software solutions aligned with business requirements.",
      },
      {
        title: "Enterprise IT Solutions & System Integration",
        description:
          "Help connect business systems and applications to support consistent information flow and more efficient operations.",
      },
      {
        title: "IT Hardware, Software Procurement & Licensing",
        description:
          "Support technology sourcing, equipment selection, software licensing and procurement planning.",
      },
      {
        title: "IT Infrastructure, Networking & Cloud Services",
        description:
          "Support the planning and implementation of infrastructure, connectivity, network systems and cloud-based environments.",
      },
      {
        title: "Cybersecurity & Information Protection",
        description:
          "Help organizations assess security needs and plan safeguards for systems, networks and business information.",
      },
      {
        title: "Data Management & Business Intelligence",
        description:
          "Support data organization, reporting and analytical approaches that help teams make informed business decisions.",
      },
      {
        title: "Technical Support & IT Consulting",
        description:
          "Provide guidance on technology choices, system performance, troubleshooting processes and IT improvement priorities.",
      },
      {
        title: "Digital Transformation & Technology Strategy",
        description:
          "Help organizations identify opportunities to modernize workflows, adopt appropriate technologies and plan for growth.",
      },
    ],
  },

  "government-services": {
    title: "Government Services",
    eyebrow: "Public Sector & Critical Infrastructure",
    tagline: "Supporting public programmes through thoughtful planning and delivery.",
    description:
      "Archridge Dynamics supports public-sector initiatives through project planning, infrastructure advisory, technical coordination, environmental considerations, risk management and professional support services tailored to programme requirements.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85",
    overview:
      "Government programmes and public infrastructure projects often involve complex requirements, multiple stakeholders and significant public responsibilities. A structured approach to planning, coordination, risk and delivery can help programmes work toward their intended outcomes.",
    capabilities: [
      {
        title: "Public Infrastructure Planning",
        description:
          "Support the planning and coordination of infrastructure initiatives designed to meet public-sector and community needs.",
      },
      {
        title: "Architecture & Engineering Coordination",
        description:
          "Assist with technical planning, design coordination and project documentation for public facilities and infrastructure.",
      },
      {
        title: "Risk, Safety & Reliability",
        description:
          "Help identify project and operational risks and support structured approaches to safety and reliability planning.",
      },
      {
        title: "Environmental Project Support",
        description:
          "Incorporate environmental considerations into public infrastructure planning and project delivery activities.",
      },
      {
        title: "Security & Critical Infrastructure",
        description:
          "Support planning and assessment of security considerations for facilities and essential infrastructure, within the agreed project scope.",
      },
      {
        title: "Training & Emergency Preparedness",
        description:
          "Assist with programme planning, training coordination and preparedness activities appropriate to client requirements.",
      },
    ],
  },
};


const serviceContext = {
  "consulting-and-planning": {
    focusTitle: "Build the right foundation before committing resources.",
    focusIntro: "Early decisions shape the cost, feasibility, schedule, and long-term value of a project. A structured planning process helps teams understand what is known, what still needs to be validated, and which decisions should come first.",
    stages: [
      ["Understand the objective", "Clarify business goals, project drivers, constraints, stakeholder expectations, and the decisions the engagement needs to support."],
      ["Evaluate the options", "Organize available information, compare practical alternatives, document assumptions, and identify risks or information gaps that may affect the preferred direction."],
      ["Define the way forward", "Translate findings into priorities, recommended next steps, decision points, and a practical plan for further investigation or implementation."]
    ],
    applications: ["Early-stage project and investment evaluation", "Infrastructure and power planning", "Business and technical strategy", "Asset reviews and improvement planning"]
  },
  "project-services": {
    focusTitle: "Coordinate the moving parts of project delivery.",
    focusIntro: "Projects depend on connected decisions about scope, people, procurement, time, cost, quality, and readiness. Bringing these workstreams together gives stakeholders a clearer view of progress and the actions needed to keep delivery aligned with agreed objectives.",
    stages: [
      ["Establish delivery controls", "Clarify scope, roles, reporting requirements, schedules, budgets, dependencies, and the processes used to manage decisions and changes."],
      ["Coordinate execution", "Maintain communication across project participants, track deliverables, follow up on outstanding actions, and escalate issues that may affect delivery."],
      ["Monitor and close out", "Review progress against agreed plans, coordinate readiness activities, capture outstanding items, and organize handover information where included in the project scope."]
    ],
    applications: ["Capital and infrastructure projects", "Procurement and supplier coordination", "Construction and commissioning support", "Schedule, cost, and progress monitoring"]
  },
  "engineering-services": {
    focusTitle: "Connect engineering requirements with practical delivery.",
    focusIntro: "Engineering work involves technical decisions, interfaces between disciplines, project documentation, safety considerations, and operating requirements. Coordinated engineering support helps teams understand these dependencies and resolve questions in a controlled way.",
    stages: [
      ["Define requirements", "Clarify the functional needs, site and operating conditions, applicable constraints, and information required for technical assessment or design coordination."],
      ["Coordinate technical work", "Organize discipline interfaces, document review comments, track design inputs and outputs, and help project participants maintain alignment."],
      ["Review readiness for delivery", "Track open technical issues, quality requirements, and handover information in coordination with the qualified professionals responsible for the engineering work."]
    ],
    applications: ["Civil, structural, electrical, and mechanical interfaces", "Industrial and commercial facilities", "Infrastructure upgrades and modernization", "Technical studies and design coordination"]
  },
  "energy-solutions": {
    focusTitle: "Plan energy infrastructure around demand and long-term performance.",
    focusIntro: "Energy decisions involve supply reliability, capacity, technology options, cost, infrastructure readiness, and environmental considerations. A coordinated approach helps project teams compare options and understand the implications before moving into implementation.",
    stages: [
      ["Assess energy needs", "Review demand drivers, operating priorities, existing infrastructure, resilience expectations, and constraints that influence energy options."],
      ["Compare viable solutions", "Organize technical and commercial considerations for relevant options, including generation, renewable energy, efficiency, storage, and utility connections where applicable."],
      ["Plan implementation", "Identify project dependencies, required studies, stakeholders, milestones, and specialist inputs needed to progress the selected option."]
    ],
    applications: ["Power infrastructure and supply planning", "Renewable energy project development", "Energy efficiency initiatives", "Generation and utility coordination"]
  },
  "environmental-services": {
    focusTitle: "Integrate environmental considerations into project decisions.",
    focusIntro: "Environmental requirements can affect site selection, project design, approvals, construction, and operations. Identifying relevant issues early gives project teams more time to organize information, engage qualified specialists, and plan appropriate management measures.",
    stages: [
      ["Identify relevant considerations", "Establish the project context, location-specific factors, potential environmental interactions, and information that may be required for assessment."],
      ["Coordinate assessment and planning", "Organize documentation, track requirements, support stakeholder coordination, and incorporate environmental actions into project plans."],
      ["Monitor actions and records", "Maintain visibility into commitments, mitigation actions, reporting needs, and outstanding items in line with the agreed scope and applicable requirements."]
    ],
    applications: ["Environmental planning and assessment coordination", "Compliance documentation and tracking", "Waste and resource management planning", "Sustainability and impact-risk considerations"]
  },
  "oil-gas-services": {
    focusTitle: "Coordinate project needs across oil, gas, and industrial facilities.",
    focusIntro: "Oil and gas projects bring together process and facility requirements, infrastructure, procurement, delivery schedules, safety considerations, and environmental responsibilities. A structured approach helps teams manage interfaces across the project lifecycle.",
    stages: [
      ["Understand facility and project needs", "Clarify the project stage, facility type, operational requirements, constraints, and technical or delivery information needed to plan the work."],
      ["Coordinate disciplines and interfaces", "Support communication between project participants, organize technical documentation, and track dependencies involving facilities, equipment, pipelines, and related infrastructure."],
      ["Support controlled delivery", "Maintain visibility into milestones, procurement activities, risks, and open actions while working with appropriately qualified technical and safety professionals."]
    ],
    applications: ["Upstream exploration and production infrastructure", "Midstream pipelines, storage, and processing", "Downstream and industrial facilities", "Gas distribution and network projects"]
  },
  "it-services": {
    focusTitle: "Build technology around how your organization needs to work.",
    focusIntro: "Effective IT is more than individual devices or applications. It depends on systems that work together, secure information, support users, and can adapt as an organization grows. Our IT service areas are organized to help clients identify needs, plan solutions, and coordinate implementation and ongoing support.",
    stages: [
      ["Assess the technology environment", "Understand business workflows, current systems, user needs, infrastructure, security considerations, and the priorities behind the proposed technology work."],
      ["Design and coordinate the solution", "Define requirements, assess options, plan integrations and deployments, and coordinate technical and business stakeholders around an agreed scope."],
      ["Support adoption and improvement", "Plan documentation, user transition, operational support, performance reviews, and future improvements appropriate to the solution delivered."]
    ],
    applications: ["Business applications and system integration", "Cloud, network, and infrastructure planning", "Cybersecurity and technology risk", "Data, automation, support, and digital transformation"]
  },
  "government-services": {
    focusTitle: "Support public programmes with structure, accountability, and coordination.",
    focusIntro: "Public-sector programmes often involve formal requirements, multiple stakeholders, public accountability, complex procurement, and significant safety or operational considerations. Clear planning and organized delivery support help teams track responsibilities and maintain visibility throughout a programme.",
    stages: [
      ["Clarify programme requirements", "Document objectives, stakeholders, deliverables, applicable requirements, reporting expectations, and dependencies that influence programme delivery."],
      ["Coordinate delivery and assurance", "Organize workstreams, track milestones and risks, coordinate technical and environmental inputs, and maintain clear records of decisions and actions."],
      ["Prepare for handover and continuity", "Support documentation, readiness tracking, training coordination, and transition planning where these activities are part of the agreed scope."]
    ],
    applications: ["Public infrastructure and facilities", "Architecture and engineering coordination", "Risk, safety, and reliability planning", "Environmental, security, training, and emergency-preparedness support"]
  }
};

function Eyebrow({ children }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0d7658]">
      {children}
    </p>
  );
}

function ServiceHero({ service }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#062d24] text-white">
      <div className="absolute inset-0 -z-20">
        <img
          src={service.image}
          alt=""
          className="h-full w-full object-cover opacity-30"
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
            <Link to="/" className="transition hover:text-[#79c9ad]">Home</Link>
            <span>/</span>
            <Link to="/#services" className="transition hover:text-[#79c9ad]">Services</Link>
            <span>/</span>
            <span className="text-[#79c9ad]">{service.title}</span>
          </div>

          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#79c9ad]">
            {service.eyebrow}
          </p>
          <h1 className="mt-5 max-w-[950px] font-serif text-[44px] leading-[1.04] tracking-[-0.035em] sm:text-[60px] lg:text-[76px]">
            {service.title}
          </h1>
          <p className="mt-7 max-w-[720px] text-lg font-medium leading-8 text-white sm:text-xl">
            {service.tagline}
          </p>
          <p className="mt-5 max-w-[760px] text-[15px] leading-8 text-[#d2e2dc] sm:text-base">
            {service.description}
          </p>
          <a
            href="#service-content"
            className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-[#79c9ad] px-6 py-3.5 text-sm font-bold text-[#062d24] transition duration-300 hover:bg-white"
          >
            Explore Capabilities
            <span className="transition-transform group-hover:translate-y-1">↓</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCTA({ title }) {
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
            Let's discuss your {title.toLowerCase()} requirements.
          </h2>
          <p className="mt-5 max-w-[650px] leading-8 text-[#53685e]">
            Tell us about your objectives, technical requirements, delivery needs, or current challenges. We can discuss the scope of support required and the appropriate next steps for your project.
          </p>
        </div>
        <Link
          to="/#contact-project"
          className="inline-flex w-fit shrink-0 items-center gap-3 rounded-xl bg-[#0d5c48] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#062d24]"
        >
          Contact Our Team <span>→</span>
        </Link>
      </motion.div>
    </section>
  );
}

function makeAnchor(title) {
  return title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function ServiceDetail({ service, slug }) {
  const context = serviceContext[slug] || serviceContext["consulting-and-planning"];

  return (
    <main className="min-h-screen bg-[#f5f5ef] text-[#243b33]">
      <ServiceHero service={service} />

      <section id="service-content" className="scroll-mt-24 px-5 py-14 sm:px-8 lg:px-12 lg:py-20 xl:px-16">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <aside className="h-fit lg:sticky lg:top-28">
            <Eyebrow>Explore This Service</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#173d31]">
              Areas of focus
            </h2>
            <nav className="mt-6 space-y-1">
              {service.capabilities.map((capability, index) => (
                <a
                  key={capability.title}
                  href={`#${makeAnchor(capability.title)}`}
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
              <a href="#our-approach" className="group flex items-start gap-3 rounded-xl px-3 py-3 transition hover:bg-[#e7efe9]">
                <span className="mt-0.5 text-xs font-bold text-[#0d7658]">↗</span>
                <span className="text-sm leading-6 text-[#53685e] transition group-hover:text-[#0d5c48]">Our approach</span>
              </a>
            </nav>
            <Link to="/#services" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0d5c48] hover:underline">
              ← All Services
            </Link>
          </aside>

          <div className="min-w-0">
            <div className="border-b border-[#d7e0d8] pb-10">
              <Eyebrow>Overview</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-[#173d31] sm:text-4xl">
                A considered approach to complex requirements.
              </h2>
              <p className="mt-6 text-base leading-8 text-[#617168] sm:text-lg">
                {service.overview}
              </p>
              <p className="mt-5 text-base leading-8 text-[#617168]">
                {service.description}
              </p>
              <p className="mt-5 text-base leading-8 text-[#617168]">
                Our support is shaped around the scope, stage, operating context, and objectives of each engagement. We work to clarify requirements, organize the information needed for decisions, and help coordinate the people and activities involved. Specific technical, regulated, or certification work should be performed by appropriately qualified and authorized professionals.
              </p>
            </div>

            <div className="divide-y divide-[#d7e0d8]">
              {service.capabilities.map((capability, index) => (
                <motion.article
                  key={capability.title}
                  id={makeAnchor(capability.title)}
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
                      <p className="mt-4 text-base leading-8 text-[#617168]">
                        Our role in this area is to help define the relevant requirements, coordinate inputs from the right stakeholders, document open questions, and keep agreed actions visible. The precise activities and deliverables are confirmed for each engagement so the work remains aligned with project priorities and responsibilities.
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="our-approach" className="border-y border-[#dce5de] bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24 xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <div>
              <Eyebrow>Our Approach</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-[#173d31] sm:text-4xl lg:text-5xl">
                {context.focusTitle}
              </h2>
            </div>
            <p className="text-base leading-8 text-[#617168] sm:text-lg">
              {context.focusIntro}
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {context.stages.map(([heading, description], index) => (
              <article key={heading} className="rounded-2xl border border-[#dce5de] bg-[#f5f5ef] p-6 sm:p-7">
                <p className="text-xs font-bold tracking-[0.18em] text-[#0d7658]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-serif text-xl leading-snug text-[#173d31] sm:text-2xl">{heading}</h3>
                <p className="mt-4 text-sm leading-7 text-[#617168]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <Eyebrow>Where We Can Help</Eyebrow>
          <h2 className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-[#173d31] sm:text-4xl lg:text-5xl">
            Applying this service to your priorities.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#617168]">
            The needs of each organization differ. These are examples of project contexts where this service area may be relevant; the exact scope is agreed with the client before work begins.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {context.applications.map((item, index) => (
              <div key={item} className="flex items-start gap-4 rounded-xl border border-[#dce5de] bg-white p-5">
                <span className="mt-0.5 text-sm font-bold text-[#0d7658]">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-7 text-[#53685e]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#dce5de] bg-white px-5 py-8 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-[#617168]">Explore our other service areas.</p>
          <Link to="/#services" className="inline-flex items-center gap-2 text-sm font-bold text-[#0d5c48] hover:underline">
            View All Services →
          </Link>
        </div>
      </section>
      <ServiceCTA title={service.title} />
    </main>
  );
}

export default function ServicePage() {
  const { service: serviceSlug } = useParams();
  const location = useLocation();
  const service = servicesData[serviceSlug];

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    const sectionId = decodeURIComponent(location.hash.slice(1));
    const timeout = window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
    return () => window.clearTimeout(timeout);
  }, [location.pathname, location.hash]);

  if (!service) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center bg-[#f5f5ef] px-6 py-24 text-center text-[#243b33]">
        <Eyebrow>Service Not Found</Eyebrow>
        <h1 className="mt-4 font-serif text-4xl text-[#173d31]">We couldn't find that service.</h1>
        <p className="mt-4 max-w-lg leading-7 text-[#617168]">
          The page may have moved, or the link may be incorrect. Visit our services section to explore our capabilities.
        </p>
        <Link to="/#services" className="mt-7 rounded-xl bg-[#0d5c48] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#062d24]">
          View All Services
        </Link>
      </main>
    );
  }

  return <ServiceDetail service={service} slug={serviceSlug} />;
}
