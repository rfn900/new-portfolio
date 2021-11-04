import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaRegHandPointRight } from "react-icons/fa";

const skills = [
  ["Javascript/ES6", "HTML5", "CSS3", "SASS", "Tailwindcss", "Bootstrap 4"],
  ["React", "Nextjs", "React Native"],
  ["REST", "GraphQL", "MongoDB", "MySQL"],
  ["Nodejs", "Flask"],
  ["Git", "Docker", "Amazon AWS"],
  ["Vim/Neovim", "VSCode", "Adobe Suite"],
  ["Python", "C++"],
];

const oneDarkColors = [
  "bg-[#61afef]",
  "bg-[#c678dd]",
  "bg-[#98c379]",
  "bg-[#e5c07b]",
];
const gruvBoxColors = [
  "bg-[#fe8019]",
  "bg-[#b8bb26]",
  "bg-[#fb4934]",
  "bg-[#fabd2f]",
];
const colorsRange = gruvBoxColors.length;

const TerminalUI = () => {
  const [colorTheme, setColorTheme] = useState("onedark");

  return (
    <div className="relative mt-16 pb-12 2xl:mt-24 max-w-[900px] w-full min-h-[500px] rounded-t-2xl rounded-b-lg shadow-xl bg-themeGray-light dark:bg-themeGray-dark overflow-hidden">
      <div className="w-full h-8 bg-themeGray-mediumLight dark:bg-themeGray-light flex items-center gap-2 px-4 relative">
        <div className="h-4 w-4 rounded-full bg-red-500"></div>
        <div className="h-4 w-4 rounded-full bg-yellow-400"></div>
        <div className="h-4 w-4 rounded-full bg-green-400"></div>
        <span className="absolute transform left-1/2 -translate-x-1/2 top-1/2 text-themeGray-medium font-mono tracking-tight font-semibold text-sm -translate-y-1/2">
          my-skills
        </span>
      </div>
      <div className="w-full px-2 py-8 flex flex-col gap-8 lg:gap-4 lg:gap-0">
        {skills.map((set, index) => {
          let count = index; //This will help me alternate bullet colors
          return (
            <div
              key={index}
              className="px-2 flex mt-4 items-center flex-wrap gap-4 font-mono text-themeGray-dark"
            >
              <FaAngleRight className="text-themeGray-dark dark:text-themeGray-light h-6 w-6 mb-px" />
              {set.map((skill, ix) => {
                count++;
                return (
                  <span
                    key={ix}
                    className={`${
                      colorTheme === "gruvbox" &&
                      gruvBoxColors[count % colorsRange]
                    } ${
                      colorTheme === "onedark" &&
                      oneDarkColors[count % colorsRange]
                    } px-2 rounded-full transition bg-opacity-75 dark:bg-opacity-100`}
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className="absolute font-mono bottom-4 right-8 text-sm md:text-base flex gap-4 md:gap-8">
        <span>Color Themes:</span>
        <div className="flex items-center  gap-2">
          <FaRegHandPointRight
            className={`${colorTheme !== "gruvbox" && "opacity-0"} transition`}
          />
          <span
            className="cursor-pointer font-bold"
            onClick={() => setColorTheme("gruvbox")}
          >
            Gruvbox
          </span>
        </div>
        <div className="flex items-center gap-2">
          <FaRegHandPointRight
            className={`${colorTheme !== "onedark" && "opacity-0"} transition`}
          />
          <span
            className="cursor-pointer font-bold"
            onClick={() => setColorTheme("onedark")}
          >
            Onedark
          </span>
        </div>
      </div>
    </div>
  );
};

export default TerminalUI;
