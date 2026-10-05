import { motion } from "framer-motion";
import image1 from "../assets/image4.png";

const About = () => {
  return (
    <section
      id="about"
      className="w-full overflow-hidden bg-white py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative order-2 lg:order-1"
        >
          <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border border-[#0d5c48]" />

          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={image1}
              alt="Engineering and industrial solutions"
              className="h-[360px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[430px] lg:h-[500px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0d5c48]/25 to-transparent" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 lg:order-2"
        >
          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3">

            <span className="text-[14px] font-semibold uppercase tracking-[0.18em] text-[#0d5c48]">
              About Us
            </span>
          </div>

          {/* Heading */}
          <h2 className="max-w-[620px] text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#18352d] sm:text-4xl lg:text-[46px]">
            Engineering Solutions Built for{" "}
            <span className="text-[#0d5c48]">Real-World Challenges</span>
          </h2>

          {/* Paragraph */}
          <p className="mt-6 max-w-[620px] text-[16px] font-medium leading-7 text-[#53665f] sm:text-[17px]">
            We provide practical engineering and technical solutions designed
            to help organizations operate with greater reliability, efficiency,
            and confidence. From engineering support and project management to
            risk and technical services, we bring together technical expertise
            and a solution-focused approach to address complex operational
            challenges.
          </p>

          <p className="mt-4 max-w-[620px] text-[16px] font-medium leading-7 text-[#53665f] sm:text-[17px]">
            Whether supporting a new project or improving existing operations,
            our focus is on delivering solutions that are precise, dependable,
            and built around the needs of each client.
          </p>

          {/* Highlights */}
         

          {/* Button */}
          <a
            href="/about"
            className="group mt-8 inline-flex items-center gap-3 rounded-xl border border-[#0d5c48] bg-[#0d5c48] px-6 py-3.5 text-[14px] font-bold text-white transition-all duration-300 hover:bg-transparent hover:text-[#0d5c48]"
          >
            <span>Learn More</span>

           
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;