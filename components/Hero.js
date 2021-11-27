import { motion } from "framer-motion";
import Image from "next/image";
import { SiPython } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { MdOutlineScreenShare } from "react-icons/md";
import { useActivateSection } from "../customHooks/useActivateSection";
import { scroller } from "react-scroll";
import AppButton from "../components/AppButton";

const easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const scrollToProjects = () => {
  scroller.scrollTo("projects", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};
const Hero = () => {
  const { ref } = useActivateSection("hero");
  const darkModeIllustration = "/me-illustration.png";

  return (
    <motion.div
      ref={ref}
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      className="relative flex flex-col items-start pt-32 section lg:py-12 lg:items-center xl:px-36 lg:flex-row"
    >
      <div className="lg:h-[600px] flex items-center lg:flex-1 justify-center md:mt-12 lg:mt-0">
        <motion.div variants={stagger}>
          <motion.p
            variants={fadeInUp}
            className="w-[220px] py-1 px-4 text-xs font-bold text-center text-altYellow-400 border-altYellow-400 dark:text-yellow-400 border-2 dark:border-yellow-400 lg:text-base 2xl:text-base"
          >
            Rodrigo Nascimento
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="mt-6 font-mono text-2xl font-bold md:mt-12 sm:text-3xl md:text-4xl 2xl:text-6xl"
          >
            Fullstack Developer
          </motion.h2>
          <motion.h3
            variants={fadeInUp}
            className="mt-2 text-xl font-light md:mt-4 2xl:text-2xl"
          >
            Based in Stockholm
          </motion.h3>
          <motion.div variants={fadeInUp} className="mt-12">
            <AppButton
              clickHandler={scrollToProjects}
              text="Check My Projects"
              Icon={MdOutlineScreenShare}
            />
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4, easings: easing }}
        className="flex-1 flex-center mt-16 xs:mt-4 lg:mt-0 lg:h-[600px] w-full flex-col"
      >
        <div className="relative flex-center">
          <div className="absolute w-6 h-6 bg-yellow-300 rounded-full lg:h-12 lg:w-12 top-0 left-8 md:-left-8  rod-float z-20 dark:bg-themeGray-darker"></div>
          <div className="absolute shadow-lg rod-float flex-center top-20 lg:top-48 right-8 lg:-right-10 w-[60px] h-[60px] lg:h-[120px] z-10 lg:w-[120px] bg-[#fafafa] dark:bg-themeGray-darker rounded-full">
            <SiPython className="text-[#c678dd] h-7 w-7 lg:h-14 lg:w-14" />
          </div>
          <div className="absolute rod-float-delay-3 shadow-lg -top-10 z-10 right-[80px] lg:right-[60px] w-[80px] h-[80px] lg:h-[140px] flex-center lg:w-[140px] bg-[#fafafa] dark:bg-themeGray-darker rounded-full">
            <FaNodeJs
              className={` text-[#98c379] w-[36px] h-[36px] lg:w-[72px] lg:h-[72px]`}
            />
          </div>
          <div className="absolute z-10 rod-float-delay-2 shadow-lg top-[170px] md:top-[240px] lg:top-[360px] right-[52px] lg:right-[100px] h-[80px] w-[80px] lg:h-[120px] z-10 flex-center lg:w-[120px] bg-[#fafafa] dark:bg-themeGray-darker rounded-full">
            <SiNextdotjs
              className={`w-10 h-10 text-[#e5c07b] lg:w-14 lg:h-14`}
            />
          </div>
          <div className="absolute z-10 rod-float-delay-1 rod-float shadow-lg top-[140px] md:top-[180px] lg:top-[320px] left-0 lg:-left-8 h-[80px] lg:h-[120px] flex-center w-[80px] lg:w-[120px] bg-[#fafafa] dark:bg-themeGray-darker rounded-full">
            <FaReact className={`w-10 h-10 text-[#61afef] lg:w-14 lg:h-14 `} />
          </div>
          <div className="relative w-3/5 md:w-4/5 lg:w-full p-0 flex items-end">
            <div className="w-full h-[220px] md:h-[340px] lg:h-[440px] absolute bg-[#f0f0f0] dark:bg-themeGray-dark bottom-1.5 rounded-t-full"></div>
            <Image
              src={darkModeIllustration}
              alt="Illustration of the author"
              width={368}
              height={368}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
