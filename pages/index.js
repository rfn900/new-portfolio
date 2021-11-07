import { motion } from "framer-motion";
import { scroller } from "react-scroll";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import ContactMe from "../components/ContactMe";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import Projects from "../components/Projects";

export default function Home() {
  function scrollTo() {
    scroller.scrollTo("about", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }

  return (
    <motion.div
      className={`relative text-themeDark-dark dark:text-themeGray-light flex-1 bg-themeGray-light dark:bg-themeGray-base `}
    >
      <Hero />
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        onClick={() => {
          scrollTo();
        }}
        className="absolute hidden cursor-pointer md:flex-center opacity-50 border-themeGray-base dark:border-themeGray-light -translate-y-20 rounded-full left-1/2 w-12 h-12 border-2 transform -translate-x-1/2 "
      >
        <HiOutlineChevronDoubleDown className=" left-1/2 w-4 h-4 text-themeGray-base dark:text-themeGray-light" />
      </motion.a>

      <AboutMe id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <ContactMe id="contactme" />
    </motion.div>
  );
}
