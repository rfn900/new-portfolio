import Head from "next/head";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { DarkModeContext } from "../context/darkMode";
import { useContext } from "react";

const Layout = ({ children }) => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  return (
    <div
      className={`min-h-screen ${
        darkMode ? "dark" : ""
      } flex flex-col font-sans `}
    >
      <Head>
        <title>Rodrigo Nascimento's Portfolio</title>
        <meta name="description" content="Homepage for MARSian Online Group" />
        <link rel="icon" href="/MOG_logo.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/css/swiper.css"
        />
      </Head>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
