const AppButton = ({ Icon, text, clickHandler = null, customClasses = "" }) => {
  const isSecondaryBtn = customClasses.split(" ").includes("btn-secondary");

  return (
    <button
      onClick={clickHandler}
      className={`${
        isSecondaryBtn ? "btn-secondary" : "btn-primary"
      } relative text-sm md:text-base ${customClasses}`}
    >
      {text}
      <div
        className={`w-px h-8 ml-2 ${
          isSecondaryBtn ? " bg-yellow-400" : "bg-themeGray-dark"
        }`}
      ></div>
      <Icon className="w-6 h-6 mt-px ml-2" />
    </button>
  );
};

export default AppButton;
