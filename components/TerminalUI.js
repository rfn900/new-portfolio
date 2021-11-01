import { FaAngleRight } from "react-icons/fa";
const TerminalUI = () => {
  return (
    <div className="mt-12 max-w-[900px] w-full h-[600px] dark:border-0 border-2 rounded-t-2xl rounded-b-lg bg-themeGray-dark overflow-hidden">
      <div className="w-full h-8 bg-themeGray-light flex items-center gap-2 px-4 relative">
        <div className="h-4 w-4 rounded-full bg-red-500"></div>
        <div className="h-4 w-4 rounded-full bg-yellow-400"></div>
        <div className="h-4 w-4 rounded-full bg-green-400"></div>
        <span className="absolute transform left-1/2 -translate-x-1/2 top-1/2 text-themeGray-medium font-mono tracking-tight font-semibold text-sm -translate-y-1/2">
          portfolio my-skills
        </span>
      </div>
      <div className="w-full px-2 py-8 flex flex-col gap-4 lg:gap-0">
        <div className="px-2 flex items-center flex-wrap gap-4 font-mono text-themeGray-dark">
          <FaAngleRight className="text-themeGray-light h-6 w-6 mb-px" />
          <span className="bg-blue-300 px-2 rounded-full">Javascript/ES6</span>
          <span className="bg-red-400 px-2 rounded-full">HTML5</span>
          <span className="bg-green-300 px-2 rounded-full">CSS3</span>
          <span className="bg-yellow-300 px-2 rounded-full">SASS</span>
          <span className="bg-blue-300 px-2 rounded-full">Tailwindcss</span>
          <span className="bg-red-400 px-2 rounded-full">Bootstrap 4</span>
        </div>
        <div className="px-2 py-8 flex items-center flex-wrap gap-4 font-mono text-themeGray-dark">
          <FaAngleRight className="text-themeGray-light h-6 w-6 mb-px" />
          <span className="bg-red-400 px-2 rounded-full">React</span>
          <span className="bg-green-300 px-2 rounded-full">Nextjs</span>
          <span className="bg-yellow-300 px-2 rounded-full">React Native</span>
        </div>
      </div>
    </div>
  );
};

export default TerminalUI;
