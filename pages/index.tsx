import { motion } from 'framer-motion'
import { scroller } from 'react-scroll'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import ContactMe from '../components/ContactMe'
import { HiOutlineChevronDoubleDown } from 'react-icons/hi'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { VscFilePdf } from 'react-icons/vsc'
import Projects from '../components/Projects'

export default function Home() {
  function scrollTo() {
    scroller.scrollTo('about', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    })
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
          scrollTo()
        }}
        className="absolute hidden cursor-pointer lg:flex-center opacity-50 border-themeGray-medium dark:border-themeGray-light -translate-y-32 xl:-translate-y-20 rounded-full left-1/2 w-12 h-12 border-2 transform -translate-x-1/2 "
      >
        <HiOutlineChevronDoubleDown className="mt-1 animate-bounce left-1/2 w-4 h-4 text-themeGray-base dark:text-themeGray-light" />
      </motion.a>

      <AboutMe id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <ContactMe id="contactme" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="hidden fixed md:flex flex-col gap-4 items-center  bottom-10 right-6"
      >
        <a
          href="https://drive.google.com/file/d/14AQGvuS1Va4isF3U6N4yU2q8c-kE_s2R/view?usp=sharing"
          target="_blank"
        >
          <VscFilePdf className="text-themeGray-base transition hover:opacity-75 dark:hover:opacity-100 dark:hover:text-yellow-200 dark:text-themeGray-light w-7 h-7" />
        </a>
        <a href="https://github.com/rfn900" target="_blank">
          <BsGithub className="text-themeGray-base dark:text-themeGray-light transition hover:opacity-75 dark:hover:opacity-100 dark:hover:text-yellow-200 w-6 h-6" />
        </a>
        <a href="https://linkedin.com/in/rodrigofnascimento" target="_blank">
          <BsLinkedin className="text-themeGray-base hover:opacity-75 dark:hover:opacity-100 dark:hover:text-yellow-200 dark:text-themeGray-light w-6 h-6" />
        </a>
        <div className="w-px h-32 rounded-xl bg-themeGray-medium dark:bg-themeGray-light"></div>
      </motion.div>
    </motion.div>
  )
}
