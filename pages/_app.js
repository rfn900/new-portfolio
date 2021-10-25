import Layout from "../components/Layout";
import "../styles/globals.css";
import { DarkModeContext } from "../context/darkMode";
import { useState } from "react";
function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DarkModeContext.Provider>
  );
}

export default MyApp;
