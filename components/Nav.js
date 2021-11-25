import { useEffect, useContext, useState } from "react";
import { HiMail } from "react-icons/hi";
import { MdLightMode } from "react-icons/md";
import { BsTriangleFill } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { FaAngleRight } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { animateScroll as scroll, scroller } from "react-scroll";
import { DarkModeContext } from "../context/darkMode";
import { ActiveSectionContext } from "../context/activeSection";
import { NavLinkWrapper } from "./NavLinkWrapper";
import AppButton from "../components/AppButton";
const Nav = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const { setActiveSection } = useContext(ActiveSectionContext);
  const [scrolled, setScrolled] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  function scrollToContact() {
    scroller.scrollTo("contactme", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setScrolled(true) : setScrolled(false);
    });
    return () =>
      window.removeEventListener("scroll", () => {
        window.scrollY > 80 ? setScrolled(true) : setScrolled(false);
      });
  }, []);

  return (
    <div
      className={` fixed z-20 ${
        scrolled ? "shadow-md rod-glass" : ""
      } top-0 w-screen py-6 bg-transparent transition duration-500 px-4 lg:px-16 `}
    >
      <div className="flex items-center justify-between max-w-[1920px] mx-auto">
        <div
          onClick={() => {
            scrollToTop();
            setActiveSection("home");
          }}
          className="flex cursor-pointer items-center gap-2 lg:gap-4 text-2xl font-mono text-themeGray-dark dark:text-themeGray-light"
        >
          <div className="h-8 relative flex pr-6 pl-1 items-center rounded text-themeGray-dark dark:text-themeGray-light bg-themeGray-light dark:bg-themeGray-base">
            <FaAngleRight />
            <span className="font-mono">rods.dev</span>
            <div
              className={`w-3 h-1 right-3 bottom-1 opacity-[0.5] ${
                darkMode ? "rod-blink-dark" : "rod-blink-light"
              } bg-themeGray-dark dark:bg-white absolute `}
            ></div>
          </div>
        </div>
        <div className="capitalize hidden lg:flex gap-12 text-base font-mono text-themeGray-dark dark:text-themeGray-light">
          <NavLinkWrapper toSection="about">About</NavLinkWrapper>
          <NavLinkWrapper toSection="skills">Skills</NavLinkWrapper>
          <NavLinkWrapper toSection="projects">Projects</NavLinkWrapper>
          {/*
          TODO
          <NavLinkWrapper toSection="contactme">Blog</NavLinkWrapper>
          */}
        </div>
        <div className="flex gap-4 lg:gap-8 items-center">
          <AppButton
            text="Contact Me"
            Icon={HiMail}
            customClasses="btn-primary py-1.5 hidden md:flex"
            clickHandler={() => scrollToContact()}
          />
          <div
            onClick={() => setDarkMode(!darkMode)}
            className="relative group flex bg-gradient-to-br from-themeGray-base shadow to-themeGray-medium dark:from-yellow-400 dark:to-themeGray-light transition cursor-pointer rounded-lg lg:rounded-xl w-8 h-8 lg:w-12 lg:h-12 items-center justify-center"
          >
            {darkMode ? (
              <MdLightMode className="h-5 w-5 lg:h-6 lg:w-6 transition text-themeGray-dark" />
            ) : (
              <FaMoon className="h-5 w-5 lg:h-6 lg:w-6 transition text-purple-400 " />
            )}
            <BsTriangleFill className="absolute top-9 lg:top-[3.2rem] group-hover:block transition hidden dark:text-themeGray-light text-themeGray-darker" />
            <div className="absolute w-32 text-center top-12 lg:top-16 py-2 transition group-hover:block hidden dark:bg-themeGray-light bg-themeGray-darker dark:text-themeGray-darker text-themeGray-light">
              {darkMode ? <span>Light Mode</span> : <span>Dark Mode</span>}
            </div>
          </div>
          <HiMenu className="text-themeGray-darker dark:text-themeGray-light lg:hidden w-8 h-8 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
