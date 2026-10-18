import { motion } from "framer-motion";
import image3 from "../assets/image3.png";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpg";
import image10 from "../assets/image10.jpg";
const services = [
  {
    id: "engineering-environment",
    title: "Engineering Solutions",
    description:
      "Delivering practical engineering solutions tailored to project requirements, with a focus on technical excellence, operational efficiency and dependable results from planning through execution.",
    image: image3,
  },
  {
    id: "engineering-support",
    title: "Environmental Engineering Support",
    description:
      "Supporting environmentally responsible project delivery through technical guidance, environmental considerations and practical solutions that help projects meet their operational and environmental objectives.",
    image: image8,
  },
  {
    id: "project-management",
    title: "Project Management",
    description:
      "Coordinating project planning, resources, schedules and execution to keep activities on track, manage project risks and deliver outcomes that align with established goals, timelines and budgets.",
    image: image6,
  },
  {
    id: "licensing-regulatory-support",
    title: "Licensing, Compliance & Program Management",
    description:
      "Helping organizations navigate licensing procedures, regulatory obligations and compliance requirements while coordinating complex programs, streamlining processes and supporting successful project delivery.",
    image: image9,
  },
];

export default function ServiceDetails() {
  return (
    <section
      id="services"
      className="w-full bg-[#f5f5ef] px-5 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* SECTION INTRO */}
<motion.div
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  className="mx-auto mb-14 max-w-[720px] text-center"
>
  <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#16745a]">
    Our Services
  </p>

  <h2 className="font-serif text-[36px] leading-[1.05] tracking-[-0.025em] text-[#102f28] sm:text-[46px] lg:text-[52px]">
    Engineering Expertise. Practical Solutions.
  </h2>

  <p className="mx-auto mt-5 max-w-[650px] text-[15px] leading-7 text-[#53665f] sm:text-[16px]">
    We provide engineering, project management, technical support and
    consulting services designed to help organizations navigate complex
    projects, operational challenges and regulatory requirements.
  </p>
</motion.div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="group scroll-mt-28"
            >
              {/* IMAGE + HOVER PANEL */}
              {/* IMAGE + HOVER PANEL */}
<div className="relative overflow-hidden rounded-2xl bg-[#102f28]">

{/* IMAGE */}
<img
  src={service.image}
  alt={service.title}
  className="block h-[300px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[330px]"
/>

{/* IMAGE OVERLAY */}
<div className="absolute inset-0 bg-gradient-to-t from-[#102f28]/80 via-[#102f28]/10 to-transparent" />

{/* SERVICE NUMBER */}


{/* DEFAULT TITLE */}
<div className="absolute bottom-0 left-0 right-0 z-10 p-5 transition-opacity duration-300 md:group-hover:opacity-0">
  <h3 className="max-w-[330px] text-[24px] font-semibold leading-tight tracking-[-0.02em] text-white sm:text-[27px]">
    {service.title}
  </h3>
</div>

{/* SLIDE-UP INFORMATION PANEL */}
<div className="relative z-20 bg-[#0d5c48] p-5 md:absolute md:inset-x-0 md:bottom-0 md:translate-y-full md:transition-transform md:duration-500 md:ease-out md:group-hover:translate-y-0">
  
  {/* TITLE */}
  <h3 className="text-[22px] font-semibold leading-tight tracking-[-0.02em] text-white sm:text-[24px]">
    {service.title}
  </h3>

  {/* DESCRIPTION */}
  <p className="mt-3 text-[13px] leading-5 text-white/90 sm:text-[14px] sm:leading-6">
    {service.description}
  </p>

  {/* LINK */}
  <a
  href={`/#${service.id}`}
  className="group/link mt-4 inline-flex items-center gap-2 text-[12px] font-bold text-white"
>
  <span>Explore Service</span>

  <span className="transition-transform duration-300 group-hover/link:translate-x-1">
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