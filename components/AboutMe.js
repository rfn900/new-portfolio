const AboutMe = () => {
  return (
    <div className="section mx-auto mt-12">
      <h2 className="text-4xl font-bold w-full text-center font-mono">
        Who am I?
      </h2>
      <div className="flex flex-col w-full lg:flex-row items-center lg:items-start mt-16 md:mt-24 h-[900px] lg:h-[500px]">
        <div className="flex-1 flex h-full lg:w-1/2 items-center flex-col ">
          <div className="flex flex-col overflow-hidden max-w-[360px] md:max-w-[480px] gap-8 bg-transparent relative dark:bg-themeGray-dark p-4 rounded-xl w-full lg:w-[500px] h-full">
            <div className="absolute inset-0 bg-themeGray-medium dark:hidden filter blur-xl opacity-50"></div>
            <div className="w-full py-4 pr-2 lg:px-2 flex gap-0 lg:gap-2 items-center bg-themeGray-light z-10 dark:bg-themeGray-darker rounded-xl h-1/3 transition hover:shadow-xl shadow-md">
              <div className="px-4">
                <div className="h-12 w-12 lg:h-16 lg:w-16 flex-center rounded-full bg-yellow-400">
                  <HiOutlineCode className="text-themeGray-dark h-8 w-8 lg:h-10 lg:w-10" />
                </div>
              </div>
              <div className="w-3/4 lg:w-5/6">
                <h2 className="text-sm lg:text-xl font-mono font-bold">
                  Web Developer
                </h2>
                <p className="mt-2 text-xs lg:text-base">
                  Building for the web with the end user in focus
                </p>
              </div>
            </div>
            <div className="w-full py-4 pr-2 lg:px-2 flex gap-0 lg:gap-2 items-center bg-themeGray-light z-10 dark:bg-themeGray-darker rounded-xl h-1/3 transition hover:shadow-xl shadow-md">
              <div className="px-4">
                <div className="h-12 w-12 lg:h-16 lg:w-16 flex-center rounded-full bg-green-400">
                  <HiOutlineViewGrid className="text-themeGray-dark h-8 w-8 lg:h-10 lg:w-10" />
                </div>
              </div>
              <div className="w-3/4 lg:w-5/6">
                <h2 className="text-sm lg:text-xl font-mono font-bold">
                  UI/UX Enthusiast
                </h2>
                <p className="mt-2 text-xs lg:text-base">
                  An eye for customer facing design and UX.
                </p>
              </div>
            </div>
            <div className="w-full py-4 pr-2 lg:px-2 flex gap-0 lg:gap-2 items-center bg-themeGray-light z-10 dark:bg-themeGray-darker rounded-xl h-1/3 transition hover:shadow-xl shadow-md">
              <div className="px-4">
                <div className="h-12 w-12 lg:h-16 lg:w-16 flex-center rounded-full bg-[#e8e8e8] dark:bg-themeGray-light">
                  <MdSyncProblem className="text-themeGray-dark h-8 w-8 lg:h-10 lg:w-10" />
                </div>
              </div>
              <div className="w-3/4 lg:w-5/6">
                <h2 className="text-sm lg:text-xl font-mono font-bold">
                  Problem Solver
                </h2>
                <p className="mt-2 text-xs lg:text-base">
                  10 years of experience coding in academic research
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-green-200 h-full p-16">Blun</div>
      </div>
    </div>
  );
};

export default AboutMe;
