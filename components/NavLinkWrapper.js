import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useActiveSection } from "../context/activeSection";
import { createScrollStopListener } from "../utils/scrollStopListener";
export const NavLinkWrapper = ({ toSection, children }) => {
  const { activeSection, setActiveSection } = useActiveSection();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const destroyListener = createScrollStopListener(window, () => {
      activeSection === toSection ? setIsActive(true) : setIsActive(false);
    });
    return () => destroyListener(); // when App component is unmounted
  }, [activeSection, toSection]);

  return (
    <p
      className={`group relative cursor-pointer transition ${
        isActive ? "text-yellow-400" : ""
      } `}
    >
      <span
        className={`absolute top-0 -left-4 text-yellow-400 pr-px transition ${
          isActive ? "inline-block" : "hidden"
        } `}
      >
        &lt;
      </span>
      <Link
        onClick={() => {
          setActiveSection(toSection);
          setIsActive(false);
        }}
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
        } `}
      >
        /&gt;
      </span>
    </p>
  );
};
