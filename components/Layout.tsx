import Head from "next/head";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { DarkModeContext } from "../context/darkMode";
import { ReactChild, useContext } from "react";

const Layout = ({ children }: { children: ReactChild }) => {
  const { darkMode }: { darkMode: boolean } = useContext(DarkModeContext);
  return (
    <div
      className={`overflow-hidden min-h-screen ${
        darkMode ? "dark" : ""
      } flex flex-col font-sans `}
    >
      <Head>
        <title>Rodrigo Nascimento's Portfolio</title>
        <meta
          name="title"
          property="og:title"
          content="Rodrigo Nascimento's Portfolio"
        />
        <meta property="og:type" content="website" />
        <meta name="url" property="og:url" content="https://rods.dev" />
        <meta
          name="description"
          property="og:description"
          content="This is the web developer portfolio from Rodrigo Nascimento. 
          Check my latest projects, grab a copy of my updated CV or feel free to
          write me a message."
        />
        <meta
          name="image"
          property="og:image"
          content="https://rod-app-bucket.s3.eu-north-1.amazonaws.com/feat_image.png"
        />
        <meta name="author" content="Rodrigo Nascimento" />
        <link rel="icon" href="/rod-favicon.png" />
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
