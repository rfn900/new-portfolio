import { useActivateSection } from "../customHooks/useActivateSection";
import { MotionSectionTitle } from "./MotionSectionTitle";
const Projects = ({ id }) => {
  const { ref, inView } = useActivateSection(id);
  return (
    <div ref={ref} id={id} className="mt-36 xs:mt-12 flex-center section">
      <MotionSectionTitle inView={inView}>
        Things I have done
      </MotionSectionTitle>
    </div>
  );
};

export default Projects;
