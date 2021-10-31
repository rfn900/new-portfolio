import { useContext, useEffect, useState } from "react";
import { ActiveSectionContext } from "../context/activeSection";
import { Link } from "react-scroll";
export const NavLinkWrapper = ({ toSection, children }) => {
  const { activeSection, setActiveSection } = useContext(ActiveSectionContext);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    activeSection === toSection ? setIsActive(true) : setIsActive(false);
    console.log(activeSection);
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
        onClick={() => setActiveSection(toSection)}
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
