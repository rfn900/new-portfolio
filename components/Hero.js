import { SiPython } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
const Hero = () => {
  return (
    <div className="flex gap-20 lg:gap-0 items-start lg:items-center flex-col lg:flex-row w-full section">
      <div className="lg:h-[600px] flex lg:pl-12 lg:justify-center lg:mt-[120px]">
        <div>
          <span className="w-48 px-4 py-1 text-sm font-bold text-center border-yellow-300 border-2 text-yellow-300">
            Rodrigo Nascimento
          </span>
          <h2 className="mt-6 md:mt-12 text-3xl md:text-6xl font-bold">
            Fullstack Developer
          </h2>
          <h3 className="mt-2 md:mt-4 text-xl font-light">
            Based in Stockholm
          </h3>
          <button className="relative btn-primary text-themeGray-light mt-12">
            Check My Projects
            <div className="h-8 w-2 bg-themeGray-dark"></div>
            <MdOutlineScreenShare className="w-6 h-6 ml-1 mt-px" />
          </button>
        </div>
      </div>
      <div className="flex-1 flex lg:h-[600px] w-full flex-col items-center lg:justify-center">
        <div className="relative ">
          <div className="absolute h-6 w-6 lg:h-12 lg:w-12 rod-float rounded-full bg-yellow-300 dark:bg-themeGray-darker"></div>
          <div className="absolute shadow-lg rod-float flex-center top-28 lg:top-48 right-0 lg:-right-10 w-[60px] h-[60px] lg:h-[120px] z-10 lg:w-[120px] bg-[#fafafa] dark:bg-themeGray-darker rounded-full">
            <SiPython className="text-indigo-500 h-7 w-7 lg:h-14 lg:w-14" />
          </div>
          <div className="absolute rod-float-delay-3 shadow-lg -top-5 lg:-top-14 z-10 right-[10px] lg:right-[60px] w-[80px] h-[80px] lg:h-[140px] flex-center lg:w-[140px] bg-[#fafafa] dark:bg-themeGray-darker rounded-full">
            <FaNodeJs className="text-green-500 w-[36px] h-[36px] lg:w-[72px] lg:h-[72px]" />
          </div>
          <div className="absolute z-10 rod-float-delay-2 shadow-lg top-[240px] lg:top-[420px] right-[40px] lg:right-[100px] h-[80px] w-[80px] lg:h-[120px] z-10 flex-center lg:w-[120px] bg-[#fafafa] dark:bg-themeGray-darker rounded-full">
            <SiNextdotjs className="text-themeGray-dark dark:text-themeGray-light w-10 h-10 lg:w-14 lg:h-14" />
          </div>
          <div className="absolute z-10 rod-float-delay-1 rod-float shadow-lg top-[220px] lg:top-[320px] left-0 lg:-left-8 h-[80px] lg:h-[120px] flex-center w-[80px] lg:w-[120px] bg-[#fafafa] dark:bg-themeGray-darker rounded-full">
            <FaReact className="text-blue-600 w-10 h-10 lg:w-14 lg:h-14" />
          </div>
          <img
            src="/me-bg.png"
            alt="The authors photo"
            className="w-[280px] lg:w-[512px] object-contain h-[280px] lg:h-[512px]"
          />
          <div className="absolute inset-x-0 h-1/2 bg-themeGray-base"></div>
          <div className="absolute inset-x-0 h-1/2 bg-themeGray-base"></div>
        </div>
      </div>
      <div className="absolute bottom-28 left-1/2 transform w-12 h-12 border-2 -translate-x-1/2 animate-bounce">
        <HiOutlineChevronDoubleDown className="w-6 h-6" />
      </div>
    </div>
  );
};

export default Hero;
