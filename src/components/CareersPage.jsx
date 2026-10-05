import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiTrendingUp,
  FiTarget,
  FiUsers,
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiSettings,
  FiLayers,
  FiCheckCircle,
} from "react-icons/fi";

const whyArchridge = [
  {
    icon: FiTrendingUp,
    title: "Grow With Purpose",
    text: "Build your expertise through meaningful projects, continuous learning and opportunities to take on greater responsibility.",
  },
  {
    icon: FiTarget,
    title: "Work That Matters",
    text: "Contribute to engineering and project solutions that support critical industries and real-world business needs.",
  },
  {
    icon: FiUsers,
    title: "Collaborate With Experts",
    text: "Work alongside professionals who value technical excellence, practical thinking and strong collaboration.",
  },
  {
    icon: FiAward,
    title: "Raise The Standard",
    text: "Bring your ideas, discipline and expertise to a team committed to delivering work to a high professional standard.",
  },
];

const lifeAtArchridge = [
  {
    icon: FiBookOpen,
    title: "Learn",
    text: "Keep developing your technical, professional and problem-solving skills through real project experience.",
  },
  {
    icon: FiBriefcase,
    title: "Contribute",
    text: "Take ownership of meaningful responsibilities and make a visible contribution to the work we deliver.",
  },
  {
    icon: FiUsers,
    title: "Collaborate",
    text: "Work with people across engineering, project management, consulting and technical disciplines.",
  },
  {
    icon: FiTrendingUp,
    title: "Grow",
    text: "Develop your career through increasing responsibility, practical experience and professional exposure.",
  },
];

const peopleWeLookFor = [
  {
    icon: FiSettings,
    title: "Engineering Professionals",
    text: "Engineers who bring strong technical knowledge, practical thinking and a commitment to quality.",
  },
  {
    icon: FiLayers,
    title: "Project & Program Management",
    text: "Professionals who can coordinate people, resources, timelines and deliverables effectively.",
  },
  {
    icon: FiSettings,
    title: "Technical Specialists",
    text: "Specialists with expertise that can strengthen our engineering, technical and operational capabilities.",
  },
  {
    icon: FiTarget,
    title: "Consultants",
    text: "Strategic and technical thinkers who can help clients understand challenges and develop practical solutions.",
  },
  {
    icon: FiTrendingUp,
    title: "Early-Career Professionals",
    text: "Motivated graduates and emerging professionals ready to learn, contribute and build their careers.",
  },
  {
    icon: FiUsers,
    title: "Business & Administrative Support",
    text: "Organized professionals who help strengthen the operational and administrative side of our business.",
  },
];

const expectations = [
  {
    icon: FiTarget,
    title: "Meaningful Challenges",
    text: "Work on projects and responsibilities that require critical thinking, discipline and practical problem-solving.",
  },
  {
    icon: FiBookOpen,
    title: "Professional Development",
    text: "Continue developing your capabilities through experience, collaboration and exposure to different areas of our work.",
  },
  {
    icon: FiUsers,
    title: "A Collaborative Environment",
    text: "Be part of a professional environment where ideas, knowledge sharing and teamwork are valued.",
  },
  {
    icon: FiCheckCircle,
    title: "Responsibility & Ownership",
    text: "Take responsibility for your work and contribute directly to the quality and success of our projects.",
  },
];

function CareersPage() {
  return (
    <div className="overflow-hidden bg-[#f5f5ef] text-[#102f28]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#062d24] px-5 pb-24 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pb-32 lg:pt-40 xl:px-16">
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#0d5c48]/30 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#16745a]/20 blur-3xl" />

        <div className="relative mx-auto max-w-[1280px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-[900px]"
          >
            <p className="mb-6 text-[12px] font-bold uppercase tracking-[0.25em] text-[#79c9ad] sm:text-[13px]">
              Careers
            </p>

            <h1 className="font-serif text-[48px] leading-[1.05] tracking-[-0.03em] text-white sm:text-[62px] lg:text-[76px]">
              Build what matters.
              <br />
              <span className="text-[#79c9ad]">Grow with us.</span>
            </h1>

            <p className="mt-8 max-w-[720px] text-[16px] leading-7 text-white/70 sm:text-[18px] sm:leading-8">
              At Archridge Dynamics, we bring engineering expertise, technical
              thinking and project discipline together to solve complex
              challenges across critical industries. We are building a team of
              professionals who want to contribute to meaningful work and grow
              through real responsibility.
            </p>

            <a
              href="/careers/opportunities"
              className="group mt-10 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-4 text-[14px] font-bold text-[#062d24] transition-all duration-300 hover:bg-[#79c9ad]"
            >
              <span>View Opportunities</span>
              <FiArrowUpRight className="text-[18px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* WHY ARCHRIDGE */}
      <section className="bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-32 xl:px-16">
        <div className="mx-auto max-w-[1280px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="max-w-[760px]"
          >
            <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.25em] text-[#0d5c48] sm:text-[13px]">
              Why Archridge
            </p>

            <h2 className="font-serif text-[42px] leading-[1.08] tracking-[-0.025em] text-[#102f28] sm:text-[52px] lg:text-[62px]">
              Build your career with purpose.
            </h2>

            <p className="mt-7 text-[16px] leading-7 text-[#53665f] sm:text-[18px] sm:leading-8">
              We believe strong engineering businesses are built by people who
              are given the opportunity to learn, contribute and take
              ownership. At Archridge, your work is connected to real
              challenges and real outcomes.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:mt-20 md:grid-cols-2 lg:grid-cols-4">
            {whyArchridge.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -10 }}
                  className="group rounded-2xl border border-[#dce5df] bg-[#f5f5ef] p-8 shadow-sm transition-all duration-300 hover:shadow-xl sm:p-9"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0d5c48] text-white transition-transform duration-300 group-hover:scale-105">
                    <Icon className="text-[23px]" />
                  </div>

                  <h3 className="mt-8 font-serif text-[27px] leading-tight text-[#102f28]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-[#53665f]">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LIFE AT ARCHRIDGE */}
      <section className="bg-[#f5f5ef] px-5 py-24 sm:px-8 lg:px-12 lg:py-32 xl:px-16">
        <div className="mx-auto max-w-[1280px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="max-w-[760px]"
          >
            <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.25em] text-[#0d5c48] sm:text-[13px]">
              Life At Archridge
            </p>

            <h2 className="font-serif text-[42px] leading-[1.08] tracking-[-0.025em] text-[#102f28] sm:text-[52px] lg:text-[62px]">
              A place to learn, contribute and grow.
            </h2>

            <p className="mt-7 text-[16px] leading-7 text-[#53665f] sm:text-[18px] sm:leading-8">
              Our work requires curiosity, accountability and collaboration.
              We want people to have room to develop their expertise while
              contributing to the wider goals of the organization.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {lifeAtArchridge.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -10 }}
                  className="group rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl sm:p-9"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#e8efeb] text-[#0d5c48] transition-all duration-300 group-hover:bg-[#0d5c48] group-hover:text-white">
                    <Icon className="text-[23px]" />
                  </div>

                  <h3 className="mt-8 font-serif text-[27px] leading-tight text-[#102f28]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-[#53665f]">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHO WE'RE LOOKING FOR */}
      <section className="bg-[#062d24] px-5 py-24 sm:px-8 lg:px-12 lg:py-32 xl:px-16">
        <div className="mx-auto max-w-[1280px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="max-w-[800px]"
          >
            <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.25em] text-[#79c9ad] sm:text-[13px]">
              Who We're Looking For
            </p>

            <h2 className="font-serif text-[42px] leading-[1.08] tracking-[-0.025em] text-white sm:text-[52px] lg:text-[62px]">
              Different expertise. One shared standard.
            </h2>

            <p className="mt-7 text-[16px] leading-7 text-white/65 sm:text-[18px] sm:leading-8">
              We welcome professionals from different backgrounds who share a
              commitment to quality, responsibility, continuous improvement
              and meaningful results.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
            {peopleWeLookFor.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  whileHover={{ y: -10 }}
                  className="group rounded-2xl border border-white/10 bg-[#0b3d31] p-8 transition-all duration-300 hover:border-[#79c9ad]/30 hover:bg-[#10483a] hover:shadow-2xl sm:p-9"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#16745a] text-white transition-transform duration-300 group-hover:scale-105">
                    <Icon className="text-[23px]" />
                  </div>

                  <h3 className="mt-8 font-serif text-[27px] leading-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-white/65">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT YOU CAN EXPECT */}
      <section className="bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-32 xl:px-16">
        <div className="mx-auto max-w-[1280px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="max-w-[800px]"
          >
            <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.25em] text-[#0d5c48] sm:text-[13px]">
              What You Can Expect
            </p>

            <h2 className="font-serif text-[42px] leading-[1.08] tracking-[-0.025em] text-[#102f28] sm:text-[52px] lg:text-[62px]">
              An environment built around professional growth.
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:mt-20">
            {expectations.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                  className="group rounded-2xl border border-[#dce5df] bg-[#f5f5ef] p-8 transition-all duration-300 hover:shadow-xl sm:p-9"
                >
                  <div className="flex items-center gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#0d5c48] text-white transition-transform duration-300 group-hover:scale-105">
                      <Icon className="text-[23px]" />
                    </div>

                    <h3 className="font-serif text-[27px] leading-tight text-[#102f28]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-6 text-[15px] leading-7 text-[#53665f]">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OPPORTUNITIES */}
      <section
        id="opportunities"
        className="bg-[#e8efeb] px-5 py-24 sm:px-8 lg:px-12 lg:py-32 xl:px-16"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="max-w-[800px]"
            >
              <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.25em] text-[#0d5c48] sm:text-[13px]">
                Opportunities
              </p>

              <h2 className="font-serif text-[42px] leading-[1.08] tracking-[-0.025em] text-[#102f28] sm:text-[52px] lg:text-[62px]">
                Ready to build what matters?
              </h2>

              <p className="mt-7 max-w-[720px] text-[16px] leading-7 text-[#53665f] sm:text-[18px] sm:leading-8">
                Current opportunities will be shared as positions become
                available. If you are interested in working with Archridge
                Dynamics, you can contact our team directly and tell us about
                your experience, skills and areas of interest.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-white p-8 shadow-sm sm:p-9 lg:w-[390px]"
            >
              <p className="text-[15px] leading-7 text-[#53665f]">
                Tell us where your expertise fits and how you could contribute
                to the work we do.
              </p>

              <a
                href="/#contact-career"
                className="group mt-8 inline-flex h-12 items-center gap-3 rounded-xl bg-[#0d5c48] px-6 text-[14px] font-bold text-white transition-all duration-300 hover:bg-[#062d24]"
              >
                <span>Contact Our Team</span>
                <FiArrowUpRight className="text-[18px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default CareersPage;