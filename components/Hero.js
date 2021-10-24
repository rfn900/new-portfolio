import Image from "next/image";
import { SiPython } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
const Hero = () => {
  return (
    <div className="flex items-start section">
      <div className="flex-1 h-[600px] flex justify-center mt-[120px]">
        <div>
          <span className="w-48 px-4 py-1 text-sm font-bold text-center bg-yellow-400 text-themeGray-darker">
            Fullstack Developer
          </span>
          <h2 className="mt-12 text-6xl font-bold">Talk is cheap</h2>
          <h3 className="mt-4 text-4xl font-light">Show me the code</h3>
          <h2 className="mt-16 text-2xl font-light tracking-wider text-yellow-300 underline uppercase">
            Let's Talk
          </h2>
        </div>
      </div>
      <div className="flex-1 flex h-[600px] flex-col justify-center">
        <div className="relative">
          <div className="absolute h-12 w-12 rod-float rounded-full bg-themeGray-darker"></div>
          <div className="absolute rod-float flex-center top-10 right-20 h-[120px] z-10 w-[120px] bg-themeGray-darker rounded-full">
            <SiPython className="text-indigo-500 h-14 w-14" />
          </div>
          <div className="absolute flex-center top-20 rod-float right-28 filter blur-lg h-[100px] opacity-50 w-[100px] bg-themeGray-darker rounded-full"></div>
          <div className="absolute rod-float  -top-28 z-10 right-[320px] h-[140px] flex-center w-[140px] bg-themeGray-darker rounded-full">
            <FaNodeJs className="text-green-500 w-[72px] h-[72px]" />
          </div>
          <div className="absolute -top-20 opacity-75 filter rod-float blur-lg right-[340px] h-[140px] flex-center w-[140px] bg-themeGray-darker rounded-full"></div>
          <div className="absolute z-10 rod-float top-[320px] right-[280px] h-[120px] z-10 flex-center w-[120px] bg-themeGray-darker rounded-full">
            <SiNextdotjs className="text-themeGray-light w-14 h-14" />
          </div>
          <div className="absolute flex-center top-[360px] right-[300px] rod-float filter blur-lg h-[100px] opacity-75 w-[100px] bg-themeGray-darker rounded-full"></div>
          <div className="absolute z-10 rod-float top-[260px] -left-8 h-[120px] flex-center w-[120px] bg-themeGray-darker rounded-full">
            <FaReact className="text-blue-600 w-14 h-14" />
          </div>
          <div className="absolute opacity-75 top-[280px] -left-12 rod-float filter blur-lg h-[120px] flex-center w-[120px] bg-themeGray-darker rounded-full"></div>
          <Image
            className="shadow-xl"
            src="/me-bg.png"
            alt="Picture of the author"
            width={360}
            height={360}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
