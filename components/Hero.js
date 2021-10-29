import { SiPython } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { MdOutlineScreenShare } from "react-icons/md";
import AppButton from "../components/AppButton";

const Hero = () => {
  const darkModeIllustration = "/me-illustration.png";
  return (
    <div className="relative flex flex-col items-start pt-32 section md:py-12 md:items-center xl:px-36 md:flex-row">
      <div className="lg:h-[600px] flex items-center lg:flex-1 justify-center">
        <div>
          <span className="w-48 py-1 px-4 text-sm font-bold text-center text-yellow-400 border-2 border-yellow-400 lg:text-base 2xl:text-lg">
            Rodrigo Nascimento
          </span>
          <h2 className="mt-6 font-mono text-2xl font-bold md:mt-12 sm:text-3xl lg:text-4xl 2xl:text-6xl">
            Fullstack Developer
          </h2>
          <h3 className="mt-2 text-xl font-light md:mt-4 2xl:text-2xl">
            Based in Stockholm
          </h3>
          <AppButton text="Check My Projects" Icon={MdOutlineScreenShare} />
        </div>
      </div>
      <div className="flex-1 flex-center mt-16 xs:mt-4 lg:mt-0 lg:h-[600px] w-full flex-col">
        <div className="relative">
          <div className="absolute w-6 h-6 bg-yellow-300 rounded-full lg:h-12 lg:w-12 rod-float dark:bg-themeGray-darker"></div>
          <div className="absolute shadow-lg rod-float flex-center top-28 lg:top-48 right-8 lg:-right-10 w-[60px] h-[60px] lg:h-[120px] z-10 lg:w-[120px] bg-[#fafafa] dark:bg-themeGray-darker rounded-full">
            <SiPython className="text-indigo-500 h-7 w-7 lg:h-14 lg:w-14" />
          </div>
          <div className="absolute rod-float-delay-3 shadow-lg -top-10 z-10 right-[80px] lg:right-[60px] w-[80px] h-[80px] lg:h-[140px] flex-center lg:w-[140px] bg-[#fafafa] dark:bg-themeGray-darker rounded-full">
            <FaNodeJs className="text-green-500 w-[36px] h-[36px] lg:w-[72px] lg:h-[72px]" />
          </div>
          <div className="absolute z-10 rod-float-delay-2 shadow-lg top-[200px] lg:top-[360px] right-[60px] lg:right-[100px] h-[80px] w-[80px] lg:h-[120px] z-10 flex-center lg:w-[120px] bg-[#fafafa] dark:bg-themeGray-darker rounded-full">
            <SiNextdotjs className="w-10 h-10 text-themeGray-dark dark:text-themeGray-light lg:w-14 lg:h-14" />
          </div>
          <div className="absolute z-10 rod-float-delay-1 rod-float shadow-lg top-[180px] lg:top-[320px] left-0 lg:-left-8 h-[80px] lg:h-[120px] flex-center w-[80px] lg:w-[120px] bg-[#fafafa] dark:bg-themeGray-darker rounded-full">
            <FaReact className="w-10 h-10 text-blue-600 lg:w-14 lg:h-14" />
          </div>
          <img
            src={darkModeIllustration}
            alt="The authors photo"
            className="lg:w-[400px] object-contain lg:h-[400px] max-w-[400px] w-full"
          />
        </div>
      </div>
      <div className="absolute hidden md:flex-center bottom-12 opacity-50 border-themeGray-base dark:border-themeGray-light rounded-full left-1/2 w-12 h-12 border-2 transform -translate-x-1/2 ">
        <HiOutlineChevronDoubleDown className="w-4 h-4 text-themeGray-base dark:text-themeGray-light" />
      </div>
    </div>
  );
};

export default Hero;
