import { IconType } from "react-icons";

const AppButton = ({
  Icon,
  text,
  clickHandler = null,
  customClasses = "",
}: {
  Icon: IconType;
  text: string;
  clickHandler?: any;
  customClasses?: string;
}) => {
  const isSecondaryBtn = customClasses.split(" ").includes("btn-secondary");

  return (
    <button
      onClick={clickHandler}
      className={`group ${
        isSecondaryBtn ? "btn-secondary" : "btn-primary"
      } relative text-sm md:text-base ${customClasses}`}
    >
      {text}
      <div
        className={`w-px h-8 ml-2 ${
          isSecondaryBtn
            ? " bg-yellow-400 group-hover:bg-themeGray-dark"
            : "bg-themeGray-dark"
        }`}
      ></div>
      <Icon className="w-6 h-6 mt-px ml-2" />
    </button>
  );
};

export default AppButton;
