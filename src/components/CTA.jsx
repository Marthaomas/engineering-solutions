import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="cta"
      className="w-full bg-[#0d5c48] px-5 py-20 sm:px-8 lg:px-12 xl:px-16"
    >
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          {/* LEFT */}
          <div className="max-w-[800px]">
            <p className="mb-4 text-[10px] font-semibold tracking-[0.2em] text-[#b8d8cb]">
              LET&apos;S WORK TOGETHER
            </p>

            <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.025em] text-white sm:text-[50px] lg:text-[60px]">
              Ready to Build a Safer,
              <br className="hidden sm:block" /> More Efficient Tomorrow?
            </h2>

            <p className="mt-6 max-w-[620px] text-[14px] leading-7 text-[#d2e2dc] sm:text-[15px]">
              Let&apos;s discuss how ARCHRIDGEV Dynamics can support your
              engineering, project management and technical requirements.
            </p>
          </div>

          {/* GET IN TOUCH */}
          <div className="shrink-0">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-xl border border-white bg-white px-6 py-3.5 text-[13px] font-semibold text-[#0d5c48] transition-all duration-300 hover:bg-transparent hover:text-white"
            >
              <span>Get in Touch</span>

              <span className="text-[17px] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}