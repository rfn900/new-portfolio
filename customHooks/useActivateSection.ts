import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "../context/activeSection";

export const useActivateSection = (id) => {
  const { setActiveSection } = useActiveSection();
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    inView && setActiveSection(id);
  }, [inView]);

  return { ref, inView };
};
