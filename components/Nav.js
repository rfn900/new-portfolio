const Nav = () => {
  return (
    <div className="fixed top-0 w-screen h-[80px] bg-themeGray-base justify-between px-12 flex items-center">
      <div className="text-2xl font-mono text-themeGray-light ">
        <span className="font-bold">Rodrigo</span> Nascimento
      </div>
      <div className="flex gap-12 text-base font-mono text-themeGray-light">
        <p className="group relative cursor-pointer">
          <span className="absolute top-0 -left-4 text-yellow-300 pr-px transition hidden group-hover:inline-block ">
            &lt;
          </span>
          Projects
          <span className="absolute top-0 -right-4 transition text-yellow-300 pl-px hidden group-hover:inline-block ">
            &gt;
          </span>
        </p>
        <p>Link2</p>
        <p>Link3</p>
      </div>
      <div>
        <button className="bg-yellow-300 px-4 py-2 text-themeGray-base rounded-md">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Nav;
