import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiTrendingUp,
  FiUsers,
  FiTarget,
} from "react-icons/fi";

const careerHighlights = [
  {
    icon: FiTrendingUp,
    title: "Grow With Us",
    description:
      "Develop your technical knowledge, professional capabilities and career through meaningful opportunities.",
  },
  {
    icon: FiTarget,
    title: "Do Meaningful Work",
    description:
      "Contribute to engineering projects that support critical industries and real-world infrastructure.",
  },
  {
    icon: FiUsers,
    title: "Work With Purpose",
    description:
      "Be part of a collaborative team built around quality, accountability and continuous improvement.",
  },
];

export default function Careers() {
  return (
    <section
      id="careers"
      className="w-full overflow-hidden bg-[#062d24] px-5 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* TOP CONTENT */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-24">

          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#79c9ad]">
              Careers
            </p>

            <h2 className="font-serif text-[40px] leading-[1.03] tracking-[-0.03em] text-[#f5f5ef] sm:text-[50px] lg:text-[58px]">
              Build your career
              <br />
              where engineering
              <br />
              <span className="text-[#79c9ad]">
                meets opportunity.
              </span>
            </h2>
          </motion.div>

          {/* INTRO */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="max-w-[680px]"
          >
            <p className="text-[16px] leading-7 text-[#d2dfda] sm:text-[17px] sm:leading-8">
              At Archridge Dynamics, we believe strong engineering
              solutions begin with strong people. We bring together
              professionals who are curious, dependable and committed to
              solving real-world challenges.
            </p>

            <p className="mt-5 text-[15px] leading-7 text-[#9fb7ae]">
              Whether you are building your professional experience or
              bringing years of expertise to the table, there is room to
              grow, contribute and make an impact with us.
            </p>

            <a
              href="/careers"
              className="group mt-8 inline-flex items-center gap-3 rounded-xl border border-[#79c9ad] bg-[#79c9ad] px-6 py-3.5 text-[14px] font-bold text-[#062d24] transition-all duration-300 hover:bg-transparent hover:text-[#79c9ad]"
            >
              <span>Explore Careers</span>

              <FiArrowUpRight
                size={17}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>
        </div>

        {/* CAREER HIGHLIGHTS */}
        <div className="mt-16 grid gap-5 md:grid-cols-3 lg:mt-20 lg:gap-6">
          {careerHighlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="group rounded-2xl border border-[#245548] bg-[#0b3d31] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#3f7665] hover:bg-[#104638] hover:shadow-[0_18px_45px_rgba(0,0,0,0.15)] sm:p-8"
              >
                {/* ICON */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#dcece6] text-[#0d5c48] transition-all duration-300 group-hover:bg-[#79c9ad] group-hover:text-[#062d24]">
                  <Icon size={22} strokeWidth={1.6} />
                </div>

                <h3 className="mt-7 font-serif text-[27px] tracking-[-0.02em] text-[#f5f5ef]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[14px] leading-6 text-[#b8cbc4]">
                  {item.description}
                </p>

                <div className="mt-6 h-[2px] w-8 bg-[#79c9ad] transition-all duration-300 group-hover:w-14" />
              </motion.div>
            );
          })}
        </div>

        
        

      </div>
    </section>
  );
}