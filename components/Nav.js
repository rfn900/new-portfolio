import { useEffect, useContext, useState } from "react";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
import { BsTriangleFill } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { FaAngleRight } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { DarkModeContext } from "../context/darkMode";
import { NavLinkWrapper } from "./NavLinkWrapper";

const Nav = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setScrolled(true) : setScrolled(false);
    });
    return () =>
      window.removeEventListener("scroll", () => {
        window.scrollY > 80 ? setScrolled(true) : setScrolled(false);
      });
  });

  return (
    <div
      className={`fixed z-20 rod-glass ${
        scrolled ? "shadow-md" : ""
      } top-0 w-screen py-6 bg-transparent transition duration-500 justify-between px-4 md:px-16 flex items-center `}
    >
      <Link href="/">
        <div className="flex cursor-pointer items-center gap-2 md:gap-4 text-2xl font-mono text-themeGray-dark dark:text-themeGray-light">
          <div className="h-8 relative flex pr-6 pl-1 items-center rounded text-themeGray-dark dark:text-themeGray-light bg-themeGray-light dark:bg-themeGray-base">
            <FaAngleRight />
            <span>rod.dev</span>
            <div
              className={`w-3 h-1 right-3 bottom-1 opacity-[0.5] ${
                darkMode ? "rod-blink-dark" : "rod-blink-light"
              } bg-themeGray-dark dark:bg-white absolute `}
            ></div>
          </div>
        </div>
      </Link>
      <div className=" hidden md:flex gap-12 text-base font-mono text-themeGray-dark dark:text-themeGray-light">
        <NavLinkWrapper>About</NavLinkWrapper>
        <NavLinkWrapper>Skills</NavLinkWrapper>
        <NavLinkWrapper>Projects</NavLinkWrapper>
      </div>
      <div className="flex gap-4 md:gap-12 items-center">
        <a href="https://github.com/rfn900" target="_blank">
          <div className="hidden md:flex gap-4 cursor-pointer">
            <BsGithub className="text-themeGray-dark dark:text-themeGray-light w-6 h-6 transition " />
            <span className="text-themeGray-dark dark:text-themeGray-light">
              Github
            </span>
          </div>
        </a>
        <a href="https://linkedin.com/in/rodrigofnascimento" target="_blank">
          <div className="hidden md:flex gap-4 cursor-pointer">
            <BsLinkedin className="text-themeGray-dark dark:text-themeGray-light w-6 h-6 transition " />
            <span className="text-themeGray-dark dark:text-themeGray-light">
              LinkedIn
            </span>
          </div>
        </a>
        <div
          onClick={() => setDarkMode(!darkMode)}
          className="relative group flex bg-gradient-to-br from-themeGray-base shadow to-themeGray-medium dark:from-yellow-400 dark:to-themeGray-light transition cursor-pointer rounded-lg md:rounded-xl w-8 h-8 md:w-12 md:h-12 items-center justify-center"
        >
          {darkMode ? (
            <MdLightMode className="h-5 w-5 md:h-6 md:w-6 transition text-themeGray-dark" />
          ) : (
            <FaMoon className="h-5 w-5 md:h-6 md:w-6 transition text-purple-400 " />
          )}
          <BsTriangleFill className="absolute top-9 lg:top-[3.2rem] group-hover:block transition hidden dark:text-themeGray-light text-themeGray-darker" />
          <div className="absolute w-32 text-center top-12 lg:top-16 py-2 transition group-hover:block hidden dark:bg-themeGray-light bg-themeGray-darker dark:text-themeGray-darker text-themeGray-light">
            {darkMode ? <span>Light Mode</span> : <span>Dark Mode</span>}
          </div>
        </div>
        <HiMenu className="text-themeGray-darker dark:text-themeGray-light lg:hidden w-8 h-8 cursor-pointer" />
      </div>
    </div>
  );
};

export default Nav;
