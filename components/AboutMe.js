import { HiOutlineCode } from "react-icons/hi";
import { HiOutlineViewGrid } from "react-icons/hi";
import { MdSyncProblem } from "react-icons/md";
import { MdPictureAsPdf } from "react-icons/md";
import AppButton from "./AppButton";
const AboutMe = () => {
  return (
    <div className="flex-center mt-24 xs:mt-0 flex-col section">
      <h2 className="w-full font-mono text-4xl font-bold text-center">
        Who I am
      </h2>
      <div className="flex flex-col gap-4 lg:gap-0 w-full lg:flex-row  items-center lg:items-start mt-16 md:mt-24 h-[900px] lg:h-[500px]">
        <div className="flex flex-col w-full items-center lg:items-end xl:pr-8 h-full lg:mr-12 lg:w-1/2 ">
          <div className="flex flex-col overflow-hidden max-w-[360px] md:max-w-[480px] gap-8 bg-transparent relative dark:bg-themeGray-dark p-4 rounded-xl w-full lg:w-[500px] h-full">
            <div className="absolute inset-0 opacity-50 bg-themeGray-medium dark:hidden filter blur-xl"></div>
            <div className="z-10 flex items-center w-full py-4 pr-2 shadow-md lg:px-2 gap-0 lg:gap-2 bg-themeGray-light dark:bg-themeGray-darker rounded-xl h-1/3 transition hover:shadow-xl">
              <div className="px-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full lg:h-16 lg:w-16 flex-center">
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
                <div className="w-12 h-12 bg-green-400 rounded-full lg:h-16 lg:w-16 flex-center">
                  <HiOutlineViewGrid className="w-8 h-8 text-themeGray-dark lg:h-10 lg:w-10" />
                </div>
              </div>
              <div className="w-3/4 lg:w-5/6">
                <h2 className="font-mono text-sm font-bold lg:text-xl">
                  UI/UX Enthusiast
                </h2>
                <p className="mt-2 text-xs lg:text-base">
                  An eye for customer facing design and UX.
                </p>
              </div>
            </div>
            <div className="z-10 flex items-center w-full py-4 pr-2 shadow-md lg:px-2 gap-0 lg:gap-2 bg-themeGray-light dark:bg-themeGray-darker rounded-xl h-1/3 transition hover:shadow-xl">
              <div className="px-4">
                <div className="h-12 w-12 lg:h-16 lg:w-16 flex-center rounded-full bg-[#e8e8e8] dark:bg-themeGray-light">
                  <MdSyncProblem className="w-8 h-8 text-themeGray-dark lg:h-10 lg:w-10" />
                </div>
              </div>
              <div className="w-3/4 lg:w-5/6">
                <h2 className="font-mono text-sm font-bold lg:text-xl">
                  Problem Solver
                </h2>
                <p className="mt-2 text-xs lg:text-base">
                  10 years of experience coding in academic research
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-themeGray-light dark:bg-themeGray-dark md:w-[480px] rounded-xl h-full ">
          <div className="h-full pt-8 pl-8 pr-4 pb-8">
            <p className="text-yellow-400 text-sm underline">
              More About Me...
            </p>
            <h2 className="text-2xl lg:text-3xl font-mono mt-8">
              Hello, I'm Rodrigo Nascimento
            </h2>
            <p className="mt-8 pr-2">
              I am a Brazilian born web developer with a Ph.D in
              theoretical/computational physics and an strong interest for
              design.
            </p>
            <p className="mt-4 pr-2">
              Currently, I am finishing a Fullstack Web Developer course (YH) at
              Nackademin in Stockholm, Sweden.
            </p>
            <AppButton text="Download My CV" Icon={MdPictureAsPdf} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
