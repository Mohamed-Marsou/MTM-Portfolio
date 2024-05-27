import "../scss/Index.scss";

import About from "../Components/About";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import Contact from "../Components/Contact";

const Home = () => {
  return (
    <section>
      <main>
        {/* // about */}
        <About />
        {/* // Projects */}
        <Projects />
        {/* // Skills */}
        <Skills />
        {/* // contact */}
        <Contact />
      </main>
    </section>
  );
};

export default Home;
