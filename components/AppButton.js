const AppButton = ({ Icon, text, clickHandler = null }) => {
  return (
    <button
      onClick={clickHandler}
      className="relative text-sm md:text-base mt-12 btn-primary "
    >
      {text}
      <div className="w-px h-8 ml-2 bg-themeGray-dark"></div>
      <Icon className="w-6 h-6 mt-px ml-2" />
    </button>
  );
};

export default AppButton;
