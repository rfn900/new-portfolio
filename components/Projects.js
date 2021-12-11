import { useInView } from 'react-intersection-observer'
import { HiExternalLink } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { useActivateSection } from '../customHooks/useActivateSection'
import { MotionSectionTitle } from './MotionSectionTitle'
import { LaptopUI } from './LaptopUI'
import { FaGithub } from 'react-icons/fa'
import { projects, oneDarkColors } from '../data/content'
import {
  initialLeft,
  initialRight,
  final,
  fadeInUp,
  stagger,
} from '../animation/animationsOnScroll'
import { easing } from '../animation/settings'
import AppButton from './AppButton'
import ExternalLink from '../components/ExternalLink'

const Projects = ({ id }) => {
  const { ref, inView } = useActivateSection(id)

  return (
    <motion.div
      ref={ref}
      id={id}
      className="relative flex-col py-[96px] xs:mt-12 flex-center section"
    >
      <MotionSectionTitle inView={inView}>ls my-projects/</MotionSectionTitle>
      {projects.map((project, index) => {
        const { ref: blref, inView: inViewLoop } = useInView({
          threshold: 0.3,
        })
        const evenRow = index % 2 === 0
        return (
          <div
            ref={blref}
            key={index}
            className={`flex flex-col w-full py-16 lg:mt-12 lg:flex-row`}
          >
            <motion.div
              initial={initialLeft}
              animate={inViewLoop && final}
              transition={{ duration: 0.6, delay: 0.2, ease: easing }}
              className={`flex-1 flex-center ${evenRow ? '' : 'lg:hidden'}`}
            >
              <LaptopUI
                gif={project.gif}
                screen={project.screen}
                alt={project.title}
              />
            </motion.div>
            <motion.div
              ref={evenRow ? null : blref}
              initial={evenRow ? initialRight : initialLeft}
              animate={inViewLoop && final}
              transition={{ duration: 0.6, delay: 0.3, ease: easing }}
              className={`p-2 lg:px-12 ${
                evenRow ? '2xl:pr-36' : '2xl:pl-36'
              } w-full mt-32 lg:mt-0 lg:w-1/2 h-[480px] flex flex-col justify-center`}
            >
              <p className="text-yellow-400 underline">{project.subtitle}</p>
              <h2 className="mt-4 font-mono text-3xl font-bold tracking-wider uppercase">
                {project.title}
              </h2>
              <motion.div
                variants={stagger}
                initial="hidden"
                animate={inViewLoop && 'show'}
                className="flex flex-wrap mt-4 gap-2"
              >
                {project.projectTech.map((tech, ix) => {
                  return (
                    <motion.span
                      key={ix}
                      variants={fadeInUp}
                      className={`${
                        oneDarkColors[ix % 4]
                      } px-2 rounded-full cursor-default bg-opacity-75 dark:bg-opacity-100 text-themeGray-base`}
                    >
                      {tech}
                    </motion.span>
                  )
                })}
              </motion.div>
              {project.text.map((text, id) => {
                return (
                  <p key={id} className={`${id === 0 ? 'mt-8' : 'mt-4'}`}>
                    {text}
                  </p>
                )
              })}
              <div className="mt-8 w-full gap-4 flex flex-wrap items-start">
                <ExternalLink to={project.liveLink}>
                  <AppButton Icon={HiExternalLink} text="View Live" />
                </ExternalLink>
                <ExternalLink to={project.repoLink}>
                  <AppButton
                    Icon={FaGithub}
                    text="View Code"
                    customClasses="btn-secondary"
                  />
                </ExternalLink>
              </div>
            </motion.div>
            <motion.div
              initial={initialRight}
              animate={inViewLoop && final}
              transition={{ duration: 0.6, delay: 0.2, ease: easing }}
              className={`hidden ${
                evenRow ? '' : 'lg:flex mt-12 lg:mt-0 flex-1 flex-center '
              }`}
            >
              <LaptopUI
                gif={project.gif}
                screen={project.screen}
                alt={project.title}
              />
            </motion.div>
          </div>
        )
      })}
    </motion.div>
  )
}

export default Projects
