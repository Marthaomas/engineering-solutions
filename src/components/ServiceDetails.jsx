import { motion } from "framer-motion";
import image3 from "../assets/image3.png";

const services = [
  {
    
    id: "engineering-environment",
    title: "Engineering Environment",
    description:
      "Integrated engineering solutions that support efficient project execution, technical performance and dependable operations across complex engineering environments.",
  },
  {
    
    id: "project-management",
    title: "Project Management",
    description:
      "Structured project planning, coordination, scheduling and performance monitoring that help keep engineering projects organized, efficient and aligned with defined objectives.",
  },
  {
    
    id: "engineering-support",
    title: "Engineering Support",
    description:
      "Technical engineering support that helps organizations address project requirements, solve technical challenges and maintain reliable performance throughout the project lifecycle.",
  },
  {
    
    id: "oil-gas",
    title: "Oil & Gas",
    description:
      "Engineering and technical services supporting oil and gas projects, facilities and operations with a focus on safety, reliability, efficiency and regulatory requirements.",
  },
  {
    
    id: "program-management-consulting",
    title: "Program Management & Consulting",
    description:
      "Strategic consulting and program management support that helps organizations coordinate complex initiatives, improve decision-making and achieve measurable project objectives.",
  },
  {
    
    id: "licensing-regulatory-support",
    title: "Licensing & Regulatory Support",
    description:
      "Guidance through technical, licensing and regulatory requirements, helping projects navigate compliance processes and move forward with greater clarity and confidence.",
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
  src={image3}
  alt={service.title}
  className="block h-[300px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[330px]"
/>

{/* IMAGE OVERLAY */}
<div className="absolute inset-0 bg-gradient-to-t from-[#102f28]/80 via-[#102f28]/10 to-transparent" />

{/* SERVICE NUMBER */}


{/* DEFAULT TITLE */}
<div className="absolute bottom-0 left-0 right-0 z-10 p-5 transition-opacity duration-300 group-hover:opacity-0">
  <h3 className="max-w-[330px] text-[24px] font-semibold leading-tight tracking-[-0.02em] text-white sm:text-[27px]">
    {service.title}
  </h3>
</div>

{/* SLIDE-UP INFORMATION PANEL */}
<div className="absolute inset-x-0 bottom-0 z-20 translate-y-full bg-[#0d5c48] p-5 transition-transform duration-500 ease-out group-hover:translate-y-0">
  
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