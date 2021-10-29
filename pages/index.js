import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import ContactMe from "../components/ContactMe";

export default function Home() {
  return (
    <div
      className={`text-themeDark-dark dark:text-themeGray-light flex-1 bg-themeGray-light dark:bg-themeGray-base `}
    >
      <Hero />
      <AboutMe />
      <Skills />
      <ContactMe />
    </div>
  );
}
