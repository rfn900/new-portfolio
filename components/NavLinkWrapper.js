import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useActiveSection } from "../context/activeSection";
export const NavLinkWrapper = ({ toSection, children }) => {
  const { activeSection } = useActiveSection();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    activeSection === toSection ? setIsActive(true) : setIsActive(false);
  }, [activeSection, toSection]);

  return (
    <p
      className={`group relative cursor-pointer transition ${
        isActive ? "text-yellow-400" : ""
      } hover:text-yellow-400 `}
    >
      <span
        className={`absolute top-0 -left-4 text-yellow-400 pr-px transition ${
          isActive ? "inline-block" : "hidden"
        } group-hover:inline-block `}
      >
        &lt;
      </span>
      <Link
        activeClass="active"
        to={toSection}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        {children}
      </Link>
      <span
        className={`absolute top-0 -right-5 text-yellow-400 pr-px transition ${
          isActive ? "inline-block" : "hidden"
        } group-hover:inline-block `}
      >
        /&gt;
      </span>
    </p>
  );
};
