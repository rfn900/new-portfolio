import { AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { DarkModeContext } from "../context/darkMode";
import { ActiveSectionContext } from "../context/activeSection";
import { useState } from "react";
function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState(true);
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <ActiveSectionContext.Provider
        value={{ activeSection, setActiveSection }}
      >
        <Layout>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} />
          </AnimatePresence>
        </Layout>
      </ActiveSectionContext.Provider>
    </DarkModeContext.Provider>
  );
}

export default MyApp;
