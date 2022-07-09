import { useState } from "react";
import { motion } from "framer-motion";
import { FaAngleRight } from "react-icons/fa";
import { FaHandPointRight } from "react-icons/fa";
import { SkillsType } from "../types";

export const oneDarkColors = [
  "bg-[#61afef]",
  "bg-[#c678dd]",
  "bg-[#98c379]",
  "bg-[#e5c07b]",
];
export const gruvBoxColors = [
  "bg-[#fe8019]",
  "bg-[#b8bb26]",
  "bg-[#fb4934]",
  "bg-[#fabd2f]",
];
let count = 0; //This will help me alternate bullet colors

const colorsRange = gruvBoxColors.length;

const TerminalUI = ({ skills }: { skills: SkillsType[] }) => {
  const [colorTheme, setColorTheme] = useState("onedark");

  return (
    <div className="relative mt-16 pb-12 2xl:mt-24 max-w-[900px] lg:w-[720px] min-h-[500px] rounded-t-2xl rounded-b-lg shadow-xl bg-themeGray-light dark:bg-themeGray-dark overflow-hidden">
      <div className="w-full h-8 bg-themeGray-mediumLight dark:bg-themeGray-light flex items-center gap-2 px-4 relative">
        <div className="h-4 w-4 rounded-full bg-red-500"></div>
        <div className="h-4 w-4 rounded-full bg-yellow-400"></div>
        <div className="h-4 w-4 rounded-full bg-green-400"></div>
        <span className="absolute transform left-1/2 -translate-x-1/2 top-1/2 text-themeGray-medium font-mono tracking-tight font-semibold text-sm -translate-y-1/2">
          my-skills
        </span>
      </div>
      <div className="w-full px-2 py-8 flex flex-col gap-8 lg:gap-0">
        {skills.map((set, index) => {
          return (
            <div
              key={index}
              className="px-2 flex mt-4 items-center flex-wrap gap-3 lg:gap-4 font-mono text-themeGray-dark"
            >
              <FaAngleRight className="text-themeGray-dark dark:text-themeGray-light h-4 w-4 mb-px" />
              {set.map((skill, ix) => {
                count++;
                return (
                  <motion.span
                    key={ix}
                    whileHover={{ scale: 1.2 }}
                    className={`${
                      colorTheme === "gruvbox" &&
                      gruvBoxColors[count % colorsRange]
                    } ${
                      colorTheme === "onedark" &&
                      oneDarkColors[count % colorsRange]
                    } px-2 rounded-full cursor-default transition bg-opacity-75 dark:bg-opacity-100`}
                  >
                    {skill}
                  </motion.span>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className="absolute font-mono bottom-4 right-8 text-sm md:text-base flex items-center md:gap-8">
        <span className="text-xs">Color Themes:</span>
        <div className="flex items-center gap-2 ml-2">
          <FaHandPointRight
            className={`${colorTheme !== "gruvbox" && "opacity-0"} transition`}
          />
          <span
            className="cursor-pointer font-bold"
            onClick={() => setColorTheme("gruvbox")}
          >
            Gruvbox
          </span>
        </div>
        <div className="flex items-center gap-2 ml-2">
          <FaHandPointRight
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
