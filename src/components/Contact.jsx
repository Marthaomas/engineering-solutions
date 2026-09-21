import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-[#f5f5ef] px-5 py-20 sm:px-8 lg:px-12 xl:px-16"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-[700px]"
        >
          <p className="mb-3 text-[10px] font-semibold tracking-[0.2em] text-[#16745a]">
            LET&apos;S TALK
          </p>

          <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.025em] text-[#102f28] sm:text-[48px]">
            Tell Us About Your Project
          </h2>

          <p className="mt-5 max-w-[600px] text-[14px] leading-7 text-[#53665f] sm:text-[15px]">
            Have an engineering requirement, project or technical challenge?
            Get in touch with our team and let&apos;s discuss how we can help.
          </p>
        </motion.div>

        {/* CONTACT CONTENT */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-16">

          {/* SUPPORT INFORMATION */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl bg-[#0d5c48] p-7 sm:p-9 lg:p-10"
          >
            <p className="text-[10px] font-semibold tracking-[0.2em] text-[#b8d8cb]">
              CUSTOMER SUPPORT
            </p>

            <h3 className="mt-5 font-serif text-[30px] leading-tight text-white sm:text-[36px]">
              We&apos;re here to help.
            </h3>

            <p className="mt-5 text-[14px] leading-7 text-[#d2e2dc]">
              Reach out to ARCHRIDGEV Dynamics for engineering solutions,
              project support, asset integrity, risk management and other
              technical requirements.
            </p>

            <div className="mt-9 space-y-6">

              {/* EMAIL */}
              <div>
                <p className="text-[10px] font-semibold tracking-[0.15em] text-[#9fc5b7]">
                  EMAIL
                </p>

                <a
                  href="mailto:support@archridge.info"
                  className="mt-2 inline-block text-[15px] text-white transition-colors hover:text-[#b8d8cb]"
                >
                  support@archridge.info
                </a>
              </div>

              {/* LOCATION */}
              <div>
                <p className="text-[10px] font-semibold tracking-[0.15em] text-[#9fc5b7]">
                  LOCATION
                </p>

                <p className="mt-2 text-[15px] text-white">
                  Houston, TX
                </p>
              </div>

            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >

            {/* NAME + COMPANY */}
            <div className="grid gap-6 sm:grid-cols-2">

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-[11px] font-semibold tracking-[0.08em] text-[#304c44]"
                >
                  FULL NAME
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-[#d5dfd9] bg-white px-4 py-3.5 text-[14px] text-[#102f28] outline-none transition-all placeholder:text-[#8a9993] focus:border-[#0d5c48] focus:ring-2 focus:ring-[#0d5c48]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-[11px] font-semibold tracking-[0.08em] text-[#304c44]"
                >
                  COMPANY
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company name"
                  className="w-full rounded-xl border border-[#d5dfd9] bg-white px-4 py-3.5 text-[14px] text-[#102f28] outline-none transition-all placeholder:text-[#8a9993] focus:border-[#0d5c48] focus:ring-2 focus:ring-[#0d5c48]/10"
                />
              </div>

            </div>

            {/* EMAIL + PHONE */}
            <div className="grid gap-6 sm:grid-cols-2">

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[11px] font-semibold tracking-[0.08em] text-[#304c44]"
                >
                  EMAIL ADDRESS
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-[#d5dfd9] bg-white px-4 py-3.5 text-[14px] text-[#102f28] outline-none transition-all placeholder:text-[#8a9993] focus:border-[#0d5c48] focus:ring-2 focus:ring-[#0d5c48]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-[11px] font-semibold tracking-[0.08em] text-[#304c44]"
                >
                  PHONE NUMBER
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full rounded-xl border border-[#d5dfd9] bg-white px-4 py-3.5 text-[14px] text-[#102f28] outline-none transition-all placeholder:text-[#8a9993] focus:border-[#0d5c48] focus:ring-2 focus:ring-[#0d5c48]/10"
                />
              </div>

            </div>

            {/* MESSAGE */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-[11px] font-semibold tracking-[0.08em] text-[#304c44]"
              >
                PROJECT DETAILS
              </label>

              <textarea
                id="message"
                name="message"
                rows="7"
                placeholder="Tell us about your project, engineering requirement or technical challenge..."
                className="w-full resize-none rounded-xl border border-[#d5dfd9] bg-white px-4 py-3.5 text-[14px] leading-6 text-[#102f28] outline-none transition-all placeholder:text-[#8a9993] focus:border-[#0d5c48] focus:ring-2 focus:ring-[#0d5c48]/10"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="group inline-flex items-center gap-3 rounded-xl border border-[#0d5c48] bg-[#0d5c48] px-6 py-3.5 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-transparent hover:text-[#0d5c48]"
            >
              <span>Submit Request</span>

              <span className="text-[17px] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

          </motion.form>
        </div>
      </div>
    </section>
  );
}