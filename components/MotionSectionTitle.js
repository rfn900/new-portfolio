import { FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { easing } from "../animation/settings";
import { useDarkMode } from "../context/darkMode";

export const MotionSectionTitle = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { darkMode } = useDarkMode();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView && { opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.15, ease: easing }}
      className="flex mt-12 items-center gap-2 lg:gap-4 text-2xl md:text-3xl font-mono text-themeGray-dark dark:text-themeGray-light"
    >
      <div className="h-8 relative flex pr-6 pl-1 items-center rounded text-themeGray-dark dark:text-themeGray-light bg-themeGray-light dark:bg-themeGray-base">
        <FaAngleRight className="mt-1" />
        <span className="font-mono">{children}</span>
        <div
          className={`w-4 h-1 right-1 md:right-2 bottom-1 md:bottom-0.5 opacity-[0.5] ${
            darkMode ? "rod-blink-dark" : "rod-blink-light"
          } bg-themeGray-dark dark:bg-white absolute `}
        ></div>
      </div>
    </motion.div>
  );
};
