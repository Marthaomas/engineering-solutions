import { motion } from "framer-motion";
import {
  FiSearch,
  FiMap,
  FiSettings,
  FiCheckCircle,
  FiTrendingUp,
} from "react-icons/fi";

const process = [
  {
    
    title: "Understand",
    description:
      "We begin by understanding the project requirements, operating environment, objectives and challenges that need to be addressed.",
    icon: FiSearch,
  },
  {
    
    title: "Plan",
    description:
      "We define the technical approach, project priorities, resources and delivery requirements needed to move the project forward.",
    icon: FiMap,
  },
  {
    
    title: "Execute",
    description:
      "Our team coordinates engineering and project activities with attention to quality, safety, schedule and overall project performance.",
    icon: FiSettings,
  },
  {
    
    title: "Deliver",
    description:
      "We work toward dependable project outcomes while maintaining clear communication, structured coordination and professional execution.",
    icon: FiCheckCircle,
  },
  {
    
    title: "Improve",
    description:
      "Where appropriate, we identify opportunities to improve reliability, efficiency and long-term performance beyond project delivery.",
    icon: FiTrendingUp,
  },
];

export default function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="w-full overflow-hidden bg-[#f5f5ef] px-5 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-[760px]"
        >
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#16745a]">
            How We Work
          </p>

          <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.03em] text-[#102f28] sm:text-[48px] lg:text-[56px]">
            A structured approach to{" "}
            <span className="text-[#16745a]">
              complex challenges.
            </span>
          </h2>

          <p className="mt-5 max-w-[680px] text-[15px] leading-7 text-[#53665f] sm:text-[16px]">
            From understanding the requirement to delivering the solution,
            we bring structure, technical expertise and clear communication
            to every stage of the engagement.
          </p>
        </motion.div>

        {/* PROCESS */}
        <div className="relative mt-16 lg:mt-20">

          {/* CONNECTING LINE — DESKTOP */}
          <div className="absolute left-[10%] right-[10%] top-[31px] hidden h-px bg-[#cbd9d3] lg:block" />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  className="group relative"
                >
                  <div className="relative z-10 flex h-full flex-col rounded-2xl border border-[#dce5df] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#b8d2c8] hover:shadow-[0_18px_45px_rgba(16,47,40,0.08)] sm:p-7">

                    {/* ICON */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-[62px] w-[62px] items-center justify-center rounded-2xl bg-[#e5f0eb] text-[#0d5c48] transition-all duration-300 group-hover:bg-[#0d5c48] group-hover:text-white">
                        <Icon
                          size={27}
                          strokeWidth={1.5}
                        />
                      </div>

                      
                    </div>

                    {/* CONTENT */}
                    <h3 className="mt-7 font-serif text-[27px] tracking-[-0.02em] text-[#102f28]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-6 text-[#64736d]">
                      {step.description}
                    </p>

                    {/* BOTTOM ACCENT */}
                    <div className="mt-6 h-[2px] w-8 bg-[#16745a] transition-all duration-300 group-hover:w-14" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 flex flex-col gap-6 rounded-2xl bg-[#062d24] px-7 py-7 sm:px-9 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-8"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#79c9ad]">
              Our Commitment
            </p>

            <p className="mt-2 max-w-[760px] text-[15px] leading-7 text-[#d2dfda] sm:text-[16px]">
              Every engagement is approached with the same focus on
              technical quality, structured delivery and dependable
              results.
            </p>
          </div>

          <div className="hidden h-12 w-px bg-white/15 lg:block" />

          <div className="shrink-0">
            <p className="font-serif text-[25px] text-white">
              Precision. Reliability. Excellence.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}