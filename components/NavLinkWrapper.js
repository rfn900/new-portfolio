export const NavLinkWrapper = ({ children }) => {
  return (
    <p className="group relative cursor-pointer transition hover:text-yellow-300">
      <span className="absolute top-0 -left-4 text-yellow-300 pr-px transition hidden group-hover:inline-block ">
        &lt;
      </span>
      {children}
      <span className="absolute top-0 -right-4 transition text-yellow-300 pl-px hidden group-hover:inline-block ">
        &gt;
      </span>
    </p>
  );
};
