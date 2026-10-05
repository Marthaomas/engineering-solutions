import { motion } from "framer-motion";
import image1 from "../assets/image1.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full overflow-hidden bg-[#f5f5ef]"
    >
      {/* =====================================================
          DESKTOP
      ====================================================== */}
      <div className="relative hidden min-h-[calc(100vh-82px)] lg:block">

        {/* TEXT AREA */}
        <div className="relative z-10 w-[48%] px-12 pt-16 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[650px]"
          >

            {/* EYEBROW */}
            <p className="mb-7 text-[11px] font-semibold tracking-[0.2em] text-[#16745a]">
              ENGINEERED WITH PRECISION, DELIVERED WITH EXCELLENCE.
            </p>

            {/* HEADING */}
            <h1 className="font-serif text-[58px] leading-[0.98] tracking-[-0.035em] text-[#102f28] xl:text-[70px]">
              Engineering Solutions
              <br />
              for a{" "}
              <span className="text-[#16745a]">
                Stronger Future
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-[560px] text-[16px] font-medium leading-7 text-[#53665f] xl:text-[17px]">
              We deliver reliable engineering, project management,
              risk management and technical solutions that help
              organizations build safer, more efficient and more
              reliable operations.
            </p>

            {/* BUTTONS */}
           {/* BUTTONS */}
<div className="mt-8 flex flex-wrap items-center gap-3 pb-10">

{/* EXPLORE OUR SERVICES */}
<a
  href="#services"
  className="group inline-flex items-center gap-3 rounded-xl border border-[#0d5c48] bg-[#0d5c48] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-transparent hover:text-[#0d5c48]"
>
  <span>Explore Our Services</span>
</a>

{/* TALK TO OUR TEAM */}
<a
  href="#contact"
  className="group inline-flex items-center gap-3 rounded-xl border border-[#0d5c48] bg-white px-6 py-3.5 text-sm font-semibold text-[#0d5c48] transition-all duration-300 hover:bg-[#0d5c48] hover:text-white"
>
  <span>Talk to Our Team</span>
</a>

</div>
          </motion.div>
        </div>

        {/* =================================================
            IMAGE + GREEN DIAGONAL EDGE
        ================================================== */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="absolute right-0 top-0 h-full w-[57%] overflow-visible"
        >
          {/* GREEN DIAGONAL EDGE */}
          <div
            className="absolute inset-0 z-10 bg-[#0d5c48]"
            style={{
              clipPath:
                "polygon(calc(12% - 10px) 0, 100% 0, 100% 100%, -10px 100%, 0 100%)",
            }}
          />

          {/* IMAGE */}
          <div
            className="absolute inset-0 z-20"
            style={{
              clipPath:
                "polygon(12% 0, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            <img
              src={image1}
              alt="Industrial engineering facility"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

      </div>


      {/* =====================================================
          MOBILE
      ====================================================== */}
      <div className="block lg:hidden">

        {/* TEXT */}
        <div className="px-5 pt-14 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* EYEBROW */}
            <p className="mb-7 text-[11px] font-semibold tracking-[0.2em] text-[#16745a]">
              ENGINEERED WITH PRECISION, DELIVERED WITH EXCELLENCE.
            </p>

            {/* HEADING */}
            <h1 className="font-serif text-[47px] leading-[0.98] tracking-[-0.035em] text-[#102f28] sm:text-[58px]">
              Engineering Solutions
              <br />
              for a{" "}
              <span className="text-[#16745a]">
                Stronger Future
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-[580px] text-[16px] font-medium leading-7 text-[#53665f] sm:text-[17px]">
              We deliver reliable engineering, project management,
              risk management and technical solutions that help
              organizations build safer, more efficient and more
              reliable operations.
            </p>

            {/* BUTTONS */}
            {/* BUTTONS */}
<div className="mt-8 flex flex-wrap items-center gap-3 pb-10">

{/* EXPLORE OUR SERVICES */}
<a
  href="#services"
  className="group inline-flex items-center gap-3 rounded-xl border border-[#0d5c48] bg-[#0d5c48] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-transparent hover:text-[#0d5c48]"
>
  <span>Explore Our Services</span>
</a>

{/* TALK TO OUR TEAM */}
<a
  href="#contact"
  className="group inline-flex items-center gap-3 rounded-xl border border-[#0d5c48] bg-white px-5 py-3.5 text-sm font-semibold text-[#0d5c48] transition-all duration-300 hover:bg-[#0d5c48] hover:text-white"
>
  <span>Talk to Our Team</span>
</a>

</div>

          </motion.div>
        </div>


        {/* =================================================
            MOBILE FULL-WIDTH GREEN BAR
        ================================================== */}
        <div className="h-[10px] w-full bg-[#0d5c48]" />


        {/* =================================================
            MOBILE IMAGE
        ================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <img
            src={image1}
            alt="Industrial engineering facility"
            className="block h-[380px] w-full object-cover sm:h-[450px]"
          />
        </motion.div>

      </div>
    </section>
  );
}