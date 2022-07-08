import { createContext, useContext } from "react";

export const ActiveSectionContext = createContext(null);

export const useActiveSection = () => {
  return useContext(ActiveSectionContext);
};
