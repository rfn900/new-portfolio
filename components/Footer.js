import { HiMail } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";
const Footer = () => {
  return (
    <div className="flex flex-col gap-8 items-center text-themeGray-medium dark:text-themeGray-light p-12 bg-themeGray-light dark:bg-themeGray-dark">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex gap-2 items-center">
          <HiPhone className="text-2xl" />
          <span>+46 73 871 1353</span>
        </div>
        <div className="flex gap-2 items-center">
          <HiMail className="text-2xl" />
          <span>rfn900@gmail.com</span>
        </div>
      </div>
      <div className="text-themeGray-medium text-sm dark:text-themeGray-mediumLight flex gap-4 items-center">
        <div className="">
          Designed By <em>Rodrigo Nascimento</em>
        </div>
        <span className="h-6 w-px border-l-2 border-dotted border-themeGray-medium dark:border-themeGray-mediumLight "></span>
        <div className="">© All Rights Reserved</div>
      </div>
    </div>
  );
};

export default Footer;
