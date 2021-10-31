export const NavLinkWrapper = ({ children }) => {
  return (
    <p className="group relative cursor-pointer transition hover:text-yellow-400">
      <span className={ `absolute top-0 -left-4 text-yellow-400 pr-px transition hidden ${areWeHere? "inline-block"} group-hover:inline-block `}>
        &lt;
      </span>
      {children}
      <span className="absolute top-0 -right-5 transition text-yellow-400 pl-px hidden group-hover:inline-block ">
        /&gt;
      </span>
    </p>
  );
};
