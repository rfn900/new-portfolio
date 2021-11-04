import { useActivateSection } from "../customHooks/useActivateSection";
import { MotionSectionTitle } from "./MotionSectionTitle";
const ContactMe = ({ id }) => {
  const { ref, inView } = useActivateSection(id);
  return (
    <div ref={ref} id={id} className="mt-36 xs:mt-12 flex-center section">
      <MotionSectionTitle inView={inView}>Say hello here</MotionSectionTitle>
    </div>
  );
};

export default ContactMe;
