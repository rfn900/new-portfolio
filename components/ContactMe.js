import { FaAngleRight } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { useActivateSection } from "../customHooks/useActivateSection";
import AppButton from "./AppButton";
import { MotionSectionTitle } from "./MotionSectionTitle";
const ContactMe = ({ id }) => {
  const { ref, inView } = useActivateSection(id);
  return (
    <div
      ref={ref}
      id={id}
      className="relative mt-36 xs:mt-12 flex-center flex-col section"
    >
      <MotionSectionTitle inView={inView}>
        mail -s "hey" rods
      </MotionSectionTitle>
      <form className="relative w-full lg:w-[720px] flex flex-col space-y-8 lg:p-8 mt-12 ">
        <div className="relative flex flex-col md:flex-row gap-6 w-full font-mono">
          <div className="relative flex-1">
            <input
              className="px-8 py-4 w-full focus:ring-themeGray-dark dark:focus:ring-yellow-300 bg-[#f0f0f0] dark:bg-themeGray-darker border-0 rounded-md"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
            />
            <FaAngleRight className="absolute top-1/2 transform -translate-y-1/2 text-themeGray-dark dark:text-themeGray-light left-3" />
          </div>
          <div className="relative flex-1">
            <input
              className="px-8 py-4 w-full focus:ring-themeGray-dark dark:focus:ring-yellow-300 bg-[#f0f0f0] dark:bg-themeGray-darker border-0 rounded-md"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
            />
            <FaAngleRight className="absolute top-1/2 transform -translate-y-1/2 text-themeGray-dark dark:text-themeGray-light left-3" />
          </div>
        </div>
        <div className="relative w-full flex font-mono flex-col space-y-8">
          <div className="relative flex-1">
            <input
              className="px-8 py-4 w-full focus:ring-themeGray-dark dark:focus:ring-yellow-300 bg-[#f0f0f0] dark:bg-themeGray-darker border-0 rounded-md"
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
            />
            <FaAngleRight className="absolute top-1/2 transform -translate-y-1/2 text-themeGray-dark dark:text-themeGray-light left-3" />
          </div>
          <div className="relative font-mono">
            <textarea
              placeholder="Your message here..."
              className="relative w-full pl-8 h-48 bg-[#f0f0f0] dark:bg-themeGray-darker focus:ring-themeGray-dark dark:focus:ring-yellow-300 rounded-md border-0 p-4"
            ></textarea>
            <FaAngleRight className="absolute top-5 transform text-themeGray-dark dark:text-themeGray-light left-3" />
          </div>
        </div>
        <div className="font-body ml-auto w-40">
          <AppButton text="Send" Icon={RiSendPlaneFill} />
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
