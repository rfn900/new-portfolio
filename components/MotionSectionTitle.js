import { motion } from "framer-motion";
import { easing } from "../animation/settings";
export const MotionSectionTitle = ({ inView, children }) => {
  return (
    <motion.h2
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: easing }}
      className="mt-12 text-4xl font-bold font-mono text-center"
    >
      {children}
    </motion.h2>
  );
};
