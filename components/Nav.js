import Image from 'next/image'
import { useEffect, useContext, useState } from 'react'
import { HiMail } from 'react-icons/hi'
import { MdLightMode } from 'react-icons/md'
import { VscFilePdf } from 'react-icons/vsc'
import { BsTriangleFill, BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiMenu } from 'react-icons/hi'
import { FaAngleRight } from 'react-icons/fa'
import { FaMoon } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { animateScroll as scroll, scroller } from 'react-scroll'
import { DarkModeContext } from '../context/darkMode'
import { ActiveSectionContext } from '../context/activeSection'
import { NavLinkWrapper } from './NavLinkWrapper'
import AppButton from '../components/AppButton'

const mobileNavItems = ['About', 'Skills', 'Projects', 'Contact Me']

const Nav = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext)
  const { setActiveSection } = useContext(ActiveSectionContext)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    })
  }

  function scrollToContact() {
    scroller.scrollTo('contactme', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 80 ? setScrolled(true) : setScrolled(false)
    })
    return () =>
      window.removeEventListener('scroll', () => {
        window.scrollY > 80 ? setScrolled(true) : setScrolled(false)
      })
  }, [])

  useEffect(() => {
    mobileMenuOpen
      ? disableBodyScroll(document.body)
      : enableBodyScroll(document.body)
  }, [mobileMenuOpen])

  const handleMenuClick = () => {
    setMobileMenuOpen((status) => !status)
  }

  return (
    <div
      className={` fixed z-30 ${
        scrolled ? 'shadow-md rod-glass' : ''
      } top-0 w-screen py-6 bg-transparent transition duration-500 px-4 lg:px-16 `}
    >
      <div className="flex items-center justify-between max-w-[1920px] mx-auto">
        <div
          onClick={() => {
            scrollToTop()
            setActiveSection('home')
          }}
          className="flex items-center font-mono text-2xl cursor-pointer gapG2 lg:gap-4 text-themeGray-dark dark:text-themeGray-light"
        >
          <div className="relative flex items-center h-8 pl-1 pr-6 rounded text-themeGray-dark dark:text-themeGray-light bg-themeGray-light dark:bg-themeGray-base">
            <FaAngleRight />
            <span className="font-mono">rods.dev</span>
            <div
              className={`w-3 h-1 right-3 bottom-1 opacity-[0.5] ${
                darkMode ? 'rod-blink-dark' : 'rod-blink-light'
              } bg-themeGray-dark dark:bg-white absolute `}
            ></div>
          </div>
        </div>
        <div className="hidden font-mono text-base capitalize lg:flex gap-12 text-themeGray-dark dark:text-themeGray-light">
          <NavLinkWrapper toSection="about">About</NavLinkWrapper>
          <NavLinkWrapper toSection="skills">Skills</NavLinkWrapper>
          <NavLinkWrapper toSection="projects">Projects</NavLinkWrapper>
          {/*
          TODO
          <NavLinkWrapper toSection="contactme">Blog</NavLinkWrapper>
          */}
        </div>
        <div className="flex items-center gap-4 lg:gap-8">
          <AppButton
            text="Contact Me"
            Icon={HiMail}
            customClasses="btn-primary py-1.5 hidden lg:flex"
            clickHandler={() => scrollToContact()}
          />
          <div
            onClick={() => setDarkMode(!darkMode)}
            className="relative flex items-center justify-center w-8 h-8 rounded-lg shadow cursor-pointer group bg-gradient-to-br from-themeGray-base to-themeGray-medium dark:from-yellow-400 dark:to-themeGray-light transition lg:rounded-xl lg:w-12 lg:h-12"
          >
            {darkMode ? (
              <MdLightMode className="w-5 h-5 lg:h-6 lg:w-6 transition text-themeGray-dark" />
            ) : (
              <FaMoon className="w-5 h-5 text-purple-400 lg:h-6 lg:w-6 transition " />
            )}
            <BsTriangleFill className="absolute top-9 lg:top-[3.2rem] group-hover:block transition hidden dark:text-themeGray-light text-themeGray-darker" />
            <div className="absolute hidden w-32 py-2 text-center top-12 lg:top-16 transition group-hover:block dark:bg-themeGray-light bg-themeGray-darker dark:text-themeGray-darker text-themeGray-light">
              {darkMode ? <span>Light Mode</span> : <span>Dark Mode</span>}
            </div>
          </div>
          <HiMenu
            onClick={handleMenuClick}
            className="w-8 h-8 cursor-pointer text-themeGray-darker dark:text-themeGray-light lg:hidden"
          />
          <div
            className={`lg:hidden ease-out absolute top-0 right-full duration-300 z-30 dark:text-themeGray-medium text-themeGray-mediumLight transition shadow-lg [clip-path:polygon(0%_0%,100%_0%,100%_20%,30%_100%,0%_100%)] h-screen w-screen dark:bg-themeGray-light bg-themeGray-dark ${
              mobileMenuOpen ? 'translate-x-full' : 'translate-x-0'
            }`}
          >
            <div className="dark:bg-themeGray-light bg-themeGray-dark w-screen h-screen float-right [clip-path:polygon(100%_15%,100%_100%,25%_100%)] [shape-outside:polygon(100%_15%,100%_100%,25%_100%)] "></div>
            <div className="text-right text-2xl mt-[180px]">
              <div
                onClick={() => {
                  setMobileMenuOpen(false)
                  scrollToTop()
                }}
                className="absolute cursor-pointer top-4 dark:bg-themeGray-light bg-themeGray-darker rounded-full shadow-md w-32 h-32 left-1/2 -translate-x-1/2"
              >
                <Image
                  src="/fist-bump.png"
                  width={120}
                  height={120}
                  objectFit="contain"
                />
              </div>
              {mobileNavItems &&
                mobileNavItems.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`font-mono ${index > 0 ? 'mt-8 md:mt-2' : ''}`}
                    >
                      <NavLinkWrapper
                        setMobileMenuOpen={setMobileMenuOpen}
                        toSection={item.replace(/ /g, '').toLowerCase()}
                      >
                        {item}
                      </NavLinkWrapper>
                    </div>
                  )
                })}
              <div className="inline-block mt-8 md:mt-4 mr-3 md:mr-1">
                <div className="flex items-center gap-10">
                  <a
                    href="https://drive.google.com/file/d/14AQGvuS1Va4isF3U6N4yU2q8c-kE_s2R/view"
                    target="_blank"
                  >
                    <VscFilePdf className="transition hover:opacity-75 dark:hover:opacity-100 dark:hover:text-yellow-200  w-7 h-7" />
                  </a>
                  <a href="https://github.com/rfn900" target="_blank">
                    <BsGithub className="transition hover:opacity-75 dark:hover:opacity-100 dark:hover:text-yellow-200 w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com/in/rodrigofnascimento"
                    target="_blank"
                  >
                    <BsLinkedin className="hover:opacity-75 dark:hover:opacity-100 dark:hover:text-yellow-200  w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <AiOutlineClose
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`cursor-pointer ${
              mobileMenuOpen ? 'visible' : 'invisible'
            } z-30 absolute top-6 transition duration-300 right-4 text-3xl text-themeGray-light dark:text-themeGray-medium`}
          />
        </div>
      </div>
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`${
          mobileMenuOpen ? 'visible' : 'invisible'
        } absolute z-20 w-screen h-screen top-0 left-0 bg-themeGray-base transition duration-300 dark:bg-themeGray-light bg-opacity-30 dark:bg-opacity-25 `}
      ></div>
    </div>
  )
}

export default Nav
