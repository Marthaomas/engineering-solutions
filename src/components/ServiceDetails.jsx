import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const services = [
  {
    id: "consulting-and-planning",
    title: "Consulting & Planning",
    tagline: "Clarity for complex decisions.",
    description:
      "We provide strategic consulting, feasibility assessments and planning expertise to help organizations evaluate opportunities and establish a clear path to execution.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "project-services",
    title: "Project Services",
    tagline: "Turning plans into measurable results.",
    description:
      "Our project services bring together project management, procurement, coordination and delivery oversight to keep projects aligned with their goals.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "engineering-services",
    title: "Engineering Services",
    tagline: "Technical expertise. Practical solutions.",
    description:
      "We apply engineering expertise to infrastructure and operational challenges, with an emphasis on safety, performance, reliability and practical solutions.",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "energy-solutions",
    title: "Energy Solutions",
    tagline: "Powering progress through smarter energy.",
    description:
      "We support energy projects through power infrastructure planning, renewable energy opportunities and solutions designed to meet changing energy demands.",
      image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "environmental-services",
    title: "Environmental Services",
    tagline: "Responsible development. Lasting impact.",
    description:
      "Our environmental services address assessments, compliance planning and sustainability considerations to support responsible project development.",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "oil-gas-services",
    title: "Oil & Gas",
    tagline: "Expertise across the petroleum value chain.",
    description:
      "We support the oil and gas sector with technical and project-focused services across exploration, production, transportation, processing and distribution.",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "it-services",
    title: "IT Services",
    tagline: "Technology that works for your business.",
    description:
      "We provide technology-focused support across IT consulting, infrastructure, systems integration and digital solutions to help organizations modernize.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "government-services",
    title: "Government Services",
    tagline: "Delivering projects that serve the public.",
    description:
      "We support government programmes and public-sector projects through professional services, infrastructure planning and project delivery coordination.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function ServiceDetails() {
  return (
    <section
      id="services"
      className="w-full scroll-mt-28 bg-[#f5f5ef] px-5 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16"
    >
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mb-14 max-w-[760px] text-center"
        >
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#16745a]">
            Our Services
          </p>

          <h2 className="font-serif text-[36px] leading-[1.05] tracking-[-0.025em] text-[#102f28] sm:text-[46px] lg:text-[52px]">
            Engineering Expertise. Practical Solutions.
          </h2>

          <p className="mx-auto mt-5 max-w-[650px] text-[15px] leading-7 text-[#53665f] sm:text-[16px]">
            From strategic planning to technical execution, we bring
            professional expertise and practical thinking to complex
            engineering, infrastructure and operational challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: (index % 3) * 0.08,
                ease: "easeOut",
              }}
              className="group scroll-mt-28"
            >
              <div className="group/card relative isolate h-[390px] overflow-hidden rounded-2xl bg-[#102f28] sm:h-[410px]">
                <img
                  src={service.image}
                  alt={service.title}
                  loading={index > 2 ? "lazy" : "eager"}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102f28]/75 via-[#102f28]/15 to-transparent transition-opacity duration-500 group-hover/card:opacity-0" />

                <div className="absolute inset-x-0 bottom-0 z-10 p-6 transition-opacity duration-300 group-hover/card:opacity-0">
                  <h3 className="max-w-[330px] text-[25px] font-semibold leading-tight tracking-[-0.02em] text-white sm:text-[28px]">
                    {service.title}
                  </h3>
                </div>

                <div className="absolute inset-x-0 bottom-0 z-20 flex max-h-full translate-y-full flex-col justify-center overflow-y-auto bg-[rgba(13,92,72,0.78)] p-6 backdrop-blur-[3px] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:translate-y-0 group-focus-within/card:translate-y-0 sm:p-7">
                  <h3 className="text-[24px] font-semibold leading-tight tracking-[-0.02em] text-white sm:text-[27px]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-white/90">
                    {service.tagline}
                  </p>

                  <p className="mt-4 text-[13px] leading-6 text-white sm:text-[14px]">
                    {service.description}
                  </p>

                  <Link
  to={
    service.id === "project-services"
      ? "/project-services"
      : service.id === "engineering-services"
        ? "/engineering-solutions"
        : `/services/${service.id}`
  }
  aria-label={`Learn more about ${service.title}`}
  className="group/link mt-6 inline-flex w-fit items-center gap-2 border-b border-white/60 pb-1 text-[12px] font-bold text-white transition-colors hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
>
  <span>Explore Service</span>
  <span className="transition-transform duration-300 group-hover/link:translate-x-1">
    →
  </span>
</Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}