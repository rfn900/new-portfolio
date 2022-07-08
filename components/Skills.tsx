import { motion } from "framer-motion";
import { useActivateSection } from "../customHooks/useActivateSection";
import TerminalUI from "./TerminalUI";
import { initialDown, finalUp } from "../animation/animationsOnScroll";
import { easing } from "../animation/settings";
import { useInView } from "react-intersection-observer";
import { MotionSectionTitle } from "./MotionSectionTitle";
import { skills } from "../data/content";

const Skills = ({ id }) => {
  const { ref } = useActivateSection(id);
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.3,
  });
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      id={id}
      ref={ref}
      className="py-[96px] flex-center justify-start 2xl:justify-center flex-col section"
    >
      <MotionSectionTitle>ls my-skills/</MotionSectionTitle>
      <motion.div
        ref={ref2}
        initial={initialDown}
        animate={inView2 && finalUp}
        transition={{ duration: 0.6, delay: 0.3, ease: easing }}
      >
        <TerminalUI skills={skills} />
      </motion.div>
    </motion.div>
  );
};

export default Skills;
