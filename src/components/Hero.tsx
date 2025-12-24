import portrait from "../assets/portrait.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import StyledWrapper from "./StyledSubmitButton";
import ResumeButton from "./ResumeButton";

function Hero() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      id="hero"
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-8 bg-white min-h-screen flex items-center"
    >
      <div className="w-full max-w-screen-xl mx-auto px-8 flex flex-col md:flex-row items-stretch gap-x-12">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex items-center justify-center md:justify-end h-full"
        >
          <img
            src={portrait}
            alt="Portrait of Christian"
            className="max-h-[24rem] w-72 md:w-80 object-cover object-top rounded-xl border-4 border-gray-200 shadow"
          />
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-between h-full -mt-2"
        >
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 relative top-4 md:top-0">
              Christian Cho
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-600 mb-8">
              Computer Science Student @ SFU
            </h2>
            <p className="text-gray-700 mb-8 max-w-prose md:max-w-md mx-auto md:mx-0 text-justify text-lg leading-relaxed">
              I’m a third-year Computer Science student at Simon Fraser
              University, focusing on embedded systems and C++ development.
              I’m passionate about optimizing real-time performance,
              bridging the gap between hardware and software, and building
              robust engineering solutions that interact with the physical world.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 justify-center md:justify-start -mt-2">
            <StyledWrapper>
              <a
                href="#featured-projects"
                className="inline-block px-8 py-1 text-lg rounded-md text-white"
              >
                View My Work
              </a>
            </StyledWrapper>

              <ResumeButton />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;
