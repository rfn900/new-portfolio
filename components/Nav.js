import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
import { BsTriangleFill } from "react-icons/bs";
import { NavLinkWrapper } from "./NavLinkWrapper";

const Nav = () => {
  return (
    <div className="fixed top-0 w-screen py-6 bg-transparent justify-between px-16 flex items-center">
      <div className="text-2xl font-mono text-themeGray-light ">
        <span className="">Rodrigo </span>
        <span className="font-light">Nascimento</span>
      </div>
      <div className="flex gap-12 text-base font-mono text-themeGray-light">
        <NavLinkWrapper>Projects</NavLinkWrapper>
        <NavLinkWrapper>Skills</NavLinkWrapper>
        <NavLinkWrapper>About</NavLinkWrapper>
      </div>
      <div className="flex gap-12 items-center">
        <div className="flex gap-4">
          <BsGithub className="text-themeGray-light w-6 h-6 transition hover:text-yellow-300" />
          <span className="text-themeGray-light">Github</span>
        </div>
        <div className="flex gap-4">
          <BsLinkedin className="text-themeGray-light w-6 h-6 transition hover:text-yellow-300" />
          <span className="text-themeGray-light">LinkedIn</span>
        </div>
        <div className="relative group flex bg-themeGray-darker transition cursor-pointer rounded-full w-16 h-16 items-center justify-center hover:bg-themeGray-light">
          <MdLightMode className="text-themeGray-light h-8 w-8 transition group-hover:text-themeGray-dark" />
          <BsTriangleFill className="absolute top-[4.3rem] group-hover:block hidden text-themeGray-darker" />
          <div className="absolute w-32 text-center top-20 py-2 transition group-hover:block hidden bg-themeGray-darker text-themeGray-light">
            Light Mode
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
