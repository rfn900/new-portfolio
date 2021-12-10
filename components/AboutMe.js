import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiOutlineCode } from 'react-icons/hi'
import { HiOutlineViewGrid } from 'react-icons/hi'
import { MdSyncProblem } from 'react-icons/md'
import { MdPictureAsPdf } from 'react-icons/md'
import AppButton from './AppButton'
import {
  initialLeft,
  initialRight,
  final,
} from '../animation/animationsOnScroll'
import { easing } from '../animation/settings'
import { useActivateSection } from '../customHooks/useActivateSection'
import { MotionSectionTitle } from './MotionSectionTitle'

const AboutMe = ({ id }) => {
  const { ref: bl1ref, inView: inView1 } = useInView({
    threshold: 0.3,
  })

  const { ref: bl2ref, inView: inView2 } = useInView({
    threshold: 0.3,
  })

  const { ref, inView } = useActivateSection(id)

  return (
    <motion.div
      id={id}
      ref={ref}
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      className="py-[96px] flex-center justify-start 2xl:justify-center xs:mt-0 flex-col section"
    >
      <MotionSectionTitle inView={inView}>whoami</MotionSectionTitle>
      <div className="flex flex-col gap-4 lg:gap-0 w-full lg:flex-row  items-center lg:items-start mt-16 2xl:mt-24 h-[900px] lg:h-[500px]">
        <div className="flex flex-col w-full items-center lg:items-end xl:pr-8 h-full lg:mr-12 lg:w-1/2 ">
          <motion.div
            ref={bl1ref}
            initial={initialLeft}
            animate={inView1 && final}
            transition={{ duration: 0.6, delay: 0.2, ease: easing }}
            className="flex flex-col overflow-hidden max-w-[360px] md:max-w-[480px] gap-8 bg-transparent relative dark:bg-themeGray-dark p-4 rounded-xl w-full lg:w-[500px] h-full"
          >
            <div className="absolute inset-0 opacity-50 bg-themeGray-mediumLight dark:hidden filter blur-xl"></div>
            <div className="z-10 flex items-center w-full py-4 pr-2 shadow-md lg:px-2 gap-0 lg:gap-2 bg-themeGray-light dark:bg-themeGray-darker rounded-xl h-1/3 transition hover:shadow-xl">
              <div className="px-4">
                <div className="w-12 h-12 bg-altYellow-400 dark:bg-yellow-400 rounded-full lg:h-16 lg:w-16 flex-center">
                  <HiOutlineCode className="w-8 h-8 text-themeGray-dark lg:h-10 lg:w-10" />
                </div>
              </div>
              <div className="w-3/4 lg:w-5/6">
                <h2 className="font-mono text-sm font-bold lg:text-xl">
                  Web Developer
                </h2>
                <p className="mt-2 text-xs lg:text-base">
                  Building for the web with the end user in focus
                </p>
              </div>
            </div>
            <div className="z-10 flex items-center w-full py-4 pr-2 shadow-md lg:px-2 gap-0 lg:gap-2 bg-themeGray-light dark:bg-themeGray-darker rounded-xl h-1/3 transition hover:shadow-xl">
              <div className="px-4">
                <div className="w-12 h-12 bg-green-600 rounded-full lg:h-16 lg:w-16 flex-center">
                  <HiOutlineViewGrid className="w-8 h-8 text-themeGray-medium lg:h-10 lg:w-10" />
                </div>
              </div>
              <div className="w-3/4 lg:w-5/6">
                <h2 className="font-mono text-sm font-bold lg:text-xl">
                  UI/UX Enthusiast
                </h2>
                <p className="mt-2 text-xs lg:text-base">
                  With an eye for customer facing design and UX.
                </p>
              </div>
            </div>
            <div className="z-10 flex items-center w-full py-4 pr-2 shadow-md lg:px-2 gap-0 lg:gap-2 bg-themeGray-light dark:bg-themeGray-darker rounded-xl h-1/3 transition hover:shadow-xl">
              <div className="px-4">
                <div className="h-12 w-12 lg:h-16 lg:w-16 flex-center rounded-full bg-altOrange-400 dark:bg-[#e8e8e8] dark:bg-themeGray-light">
                  <MdSyncProblem className="w-8 h-8 text-[#e8e8e8] dark:text-themeGray-dark lg:h-10 lg:w-10" />
                </div>
              </div>
              <div className="w-3/4 lg:w-5/6">
                <h2 className="font-mono text-sm font-bold lg:text-xl">
                  Problem Solver
                </h2>
                <p className="mt-2 text-xs lg:text-base">
                  With 10 years of experience coding in academic research
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          ref={bl2ref}
          initial={initialRight}
          animate={inView2 && final}
          transition={{ duration: 0.6, delay: 0.3, ease: easing }}
          className="bg-themeGray-light dark:bg-themeGray-dark max-w-[360px] md:max-w-[480px] rounded-xl h-full "
        >
          <div className="h-full pt-8 pl-8 pr-4 pb-8">
            <p className="text-yellow-400 text-sm underline">
              More About Me...
            </p>
            <h2 className="text-2xl lg:text-3xl font-mono mt-8">
              Hello 👋🏽, I'm Rodrigo Nascimento
            </h2>
            <p className="mt-8 pr-2">
              I am a Brazilian born web developer with a Ph.D in
              theoretical/computational physics and a strong interest for
              design.
            </p>
            <p className="mt-4 pr-2">
              Currently, I am finishing a Fullstack Web Developer course (YH) at
              Nackademin in Stockholm, Sweden.
            </p>
            <a
              href="https://drive.google.com/file/d/1pRK-J-4Uzs-yZOw_koE7l9OncyK8cHer/view"
              target="_blank"
            >
              <AppButton
                text="Download My CV"
                Icon={MdPictureAsPdf}
                customClasses="btn-primary mt-12"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default AboutMe
