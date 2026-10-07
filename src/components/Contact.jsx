import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [inquiryType, setInquiryType] = useState("project");

  useEffect(() => {
    const hash = window.location.hash;

    if (hash === "#contact-career") {
      setInquiryType("career");

      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }

    if (hash === "#contact-project") {
      setInquiryType("project");

      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }
  }, []);

  const isCareer = inquiryType === "career";

  return (
    <section
      id="contact"
      className="w-full bg-[#f5f5ef] px-5 py-24 sm:px-8 lg:px-12 lg:py-32 xl:px-16"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-[800px]"
        >
          <p className="mb-4 text-[11px] font-semibold tracking-[0.2em] text-[#16745a]">
            LET&apos;S TALK
          </p>

          <h2 className="font-serif text-[42px] leading-[1.05] tracking-[-0.025em] text-[#102f28] sm:text-[52px] lg:text-[60px]">
            {isCareer
              ? "Let&apos;s talk about your career."
              : "Tell Us About Your Project"}
          </h2>

          <p className="mt-6 max-w-[680px] text-[15px] leading-7 text-[#53665f] sm:text-[17px] sm:leading-8">
            {isCareer
              ? "Interested in joining Archridge Dynamics? Tell us about your experience, expertise and the kind of opportunities you are looking for."
              : "Have an engineering requirement, project or technical challenge? Get in touch with our team and let's discuss how we can help."}
          </p>
        </motion.div>

        {/* CONTACT PATHS */}
        <div className="mb-12 grid gap-5 md:grid-cols-2">
          {/* PROJECT */}
          <button
            type="button"
            onClick={() => setInquiryType("project")}
            className={`group rounded-2xl border p-7 text-left transition-all duration-300 sm:p-8 ${
              !isCareer
                ? "border-[#0d5c48] bg-[#0d5c48] shadow-lg"
                : "border-[#dce5df] bg-white hover:-translate-y-1 hover:shadow-lg"
            }`}
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl text-[20px] transition-all duration-300 ${
                !isCareer
                  ? "bg-white text-[#0d5c48]"
                  : "bg-[#e8efeb] text-[#0d5c48] group-hover:bg-[#0d5c48] group-hover:text-white"
              }`}
            >
              ↗
            </div>

            <h3
              className={`mt-6 font-serif text-[27px] ${
                !isCareer ? "text-white" : "text-[#102f28]"
              }`}
            >
              Start a Project
            </h3>

            <p
              className={`mt-3 text-[14px] leading-6 ${
                !isCareer ? "text-white/70" : "text-[#53665f]"
              }`}
            >
              Discuss an engineering requirement, project, technical service
              or business need with our team.
            </p>

            <span
              className={`mt-5 inline-block text-[12px] font-bold uppercase tracking-[0.12em] ${
                !isCareer ? "text-[#b8d8cb]" : "text-[#0d5c48]"
              }`}
            >
              Project Enquiries
            </span>
          </button>

          {/* CAREER */}
          <button
            type="button"
            onClick={() => setInquiryType("career")}
            className={`group rounded-2xl border p-7 text-left transition-all duration-300 sm:p-8 ${
              isCareer
                ? "border-[#0d5c48] bg-[#0d5c48] shadow-lg"
                : "border-[#dce5df] bg-white hover:-translate-y-1 hover:shadow-lg"
            }`}
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl text-[20px] transition-all duration-300 ${
                isCareer
                  ? "bg-white text-[#0d5c48]"
                  : "bg-[#e8efeb] text-[#0d5c48] group-hover:bg-[#0d5c48] group-hover:text-white"
              }`}
            >
              +
            </div>

            <h3
              className={`mt-6 font-serif text-[27px] ${
                isCareer ? "text-white" : "text-[#102f28]"
              }`}
            >
              Explore Career Opportunities
            </h3>

            <p
              className={`mt-3 text-[14px] leading-6 ${
                isCareer ? "text-white/70" : "text-[#53665f]"
              }`}
            >
              Interested in working with Archridge? Tell us about your
              background, expertise and the opportunities you are seeking.
            </p>

            <span
              className={`mt-5 inline-block text-[12px] font-bold uppercase tracking-[0.12em] ${
                isCareer ? "text-[#b8d8cb]" : "text-[#0d5c48]"
              }`}
            >
              Career Enquiries
            </span>
          </button>
        </div>

        {/* CONTACT CONTENT */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-16">

          {/* SUPPORT INFORMATION */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl bg-[#0d5c48] p-8 sm:p-10 lg:p-11"
          >
            <p className="text-[10px] font-semibold tracking-[0.2em] text-[#b8d8cb]">
              {isCareer ? "CAREERS AT ARCHRIDGE" : "PROJECT & CLIENT SUPPORT"}
            </p>

            <h3 className="mt-5 font-serif text-[32px] leading-tight text-white sm:text-[38px]">
              {isCareer
                ? "Bring your expertise to the team."
                : "Let's build something that matters."}
            </h3>

            <p className="mt-5 text-[14px] leading-7 text-[#d2e2dc] sm:text-[15px]">
              {isCareer
                ? "We are interested in professionals who bring technical expertise, curiosity, accountability and a commitment to delivering quality work."
                : "Reach out to Archridge Dynamics for engineering solutions, project support, asset integrity, risk management and other technical requirements."}
            </p>

            <div className="mt-10 space-y-7">

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

              {/* CAREER NOTE */}
              {isCareer && (
                <div className="border-t border-white/15 pt-7">
                  <p className="text-[10px] font-semibold tracking-[0.15em] text-[#9fc5b7]">
                    CAREER ENQUIRIES
                  </p>

                  <p className="mt-2 text-[14px] leading-6 text-white/75">
                    Tell us about your experience and the kind of role or
                    opportunity you would like to explore with Archridge.
                  </p>
                </div>
              )}
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

            {/* CONTACT TYPE */}
            <div>
              <label
                htmlFor="inquiryType"
                className="mb-2 block text-[11px] font-semibold tracking-[0.08em] text-[#304c44]"
              >
                I&apos;M CONTACTING ARCHRIDGE ABOUT
              </label>

              <select
                id="inquiryType"
                name="inquiryType"
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value)}
                className="w-full rounded-xl border border-[#d5dfd9] bg-white px-4 py-3.5 text-[14px] text-[#102f28] outline-none transition-all focus:border-[#0d5c48] focus:ring-2 focus:ring-[#0d5c48]/10"
              >
                <option value="project">
                  A Project / Engineering Service
                </option>

                <option value="career">
                  A Career Opportunity
                </option>

                <option value="partnership">
                  Partnership / Collaboration
                </option>

                <option value="general">
                  General Enquiry
                </option>
              </select>
            </div>

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
                  {isCareer ? "CURRENT ORGANIZATION" : "COMPANY"}
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder={
                    isCareer
                      ? "Current organization (optional)"
                      : "Company name"
                  }
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

            {/* CAREER FIELDS */}
            {isCareer && (
              <div className="grid gap-6 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="expertise"
                    className="mb-2 block text-[11px] font-semibold tracking-[0.08em] text-[#304c44]"
                  >
                    AREA OF EXPERTISE
                  </label>

                  <input
                    id="expertise"
                    name="expertise"
                    type="text"
                    placeholder="e.g. Engineering, Project Management"
                    className="w-full rounded-xl border border-[#d5dfd9] bg-white px-4 py-3.5 text-[14px] text-[#102f28] outline-none transition-all placeholder:text-[#8a9993] focus:border-[#0d5c48] focus:ring-2 focus:ring-[#0d5c48]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="experience"
                    className="mb-2 block text-[11px] font-semibold tracking-[0.08em] text-[#304c44]"
                  >
                    YEARS OF EXPERIENCE
                  </label>

                  <select
                    id="experience"
                    name="experience"
                    className="w-full rounded-xl border border-[#d5dfd9] bg-white px-4 py-3.5 text-[14px] text-[#102f28] outline-none transition-all focus:border-[#0d5c48] focus:ring-2 focus:ring-[#0d5c48]/10"
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">0–1 years</option>
                    <option value="2-4">2–4 years</option>
                    <option value="5-9">5–9 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

              </div>
            )}

            {/* PROJECT SERVICE */}
            {!isCareer && (
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-[11px] font-semibold tracking-[0.08em] text-[#304c44]"
                >
                  AREA OF INTEREST
                </label>

                <select
                  id="service"
                  name="service"
                  className="w-full rounded-xl border border-[#d5dfd9] bg-white px-4 py-3.5 text-[14px] text-[#102f28] outline-none transition-all focus:border-[#0d5c48] focus:ring-2 focus:ring-[#0d5c48]/10"
                >
                  <option value="">Select a service</option>
                  <option value="engineering-environment">
                    Engineering Environment
                  </option>
                  <option value="project-management">
                    Project Management
                  </option>
                  <option value="engineering-support">
                    Engineering Support
                  </option>
                  <option value="oil-gas">Oil & Gas</option>
                  <option value="program-management">
                    Program Management & Consulting
                  </option>
                  <option value="licensing">
                    Licensing & Regulatory Support
                  </option>
                  <option value="other">Other</option>
                </select>
              </div>
            )}

            {/* MESSAGE */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-[11px] font-semibold tracking-[0.08em] text-[#304c44]"
              >
                {isCareer ? "TELL US ABOUT YOURSELF" : "PROJECT DETAILS"}
              </label>

              <textarea
                id="message"
                name="message"
                rows="7"
                placeholder={
                  isCareer
                    ? "Tell us about your experience, skills, career interests and the kind of opportunity you are looking for..."
                    : "Tell us about your project, engineering requirement or technical challenge..."
                }
                className="w-full resize-none rounded-xl border border-[#d5dfd9] bg-white px-4 py-3.5 text-[14px] leading-6 text-[#102f28] outline-none transition-all placeholder:text-[#8a9993] focus:border-[#0d5c48] focus:ring-2 focus:ring-[#0d5c48]/10"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="group inline-flex items-center gap-3 rounded-xl border border-[#0d5c48] bg-[#0d5c48] px-6 py-3.5 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-transparent hover:text-[#0d5c48]"
            >
              <span>
                {isCareer ? "Submit Career Enquiry" : "Submit Project Request"}
              </span>

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