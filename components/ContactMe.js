import { useActivateSection } from "../customHooks/useActivateSection";
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
      <div className="relative w-28 h-28 mt-12 shadow-lg flex-center bg-yellow-400 rounded-full">
        <HiMail className="w-16 h-16 text-themeGray-light dark:text-themeGray-dark" />
      </div>
      <form className="w-[680px] border-2 rounded-md border-yellow-400 border-opacity-20 flex flex-col space-y-8 px-8 pt-24 pb-8 -mt-14">
        <div className="flex gap-6 w-full">
          <input
            className="flex-1 p-4 bg-themeGray-darker rounded-md"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
          />
          <input
            className="flex-1 p-4 bg-themeGray-darker rounded-md"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="w-full flex flex-col space-y-8">
          <input
            className="w-full p-4 bg-themeGray-darker rounded-md"
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
          />
          <textarea placeholder="" className="w-full h-48 bg-themeGray-darker rounded-md p-4"></textarea>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
