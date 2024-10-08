import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"; // Import Navigate
import Nav from "../Components/Nav";
import Home from "./Home";
import Footer from "../Components/Footer";
import Projects from "./Projects";
import Project from "./Project";
import ScrollToTop from "../js/scrollToTop";
import MetaPixel from "../utils/meta/Pixel";
const Main = () => {
  return (
    <Router>
      <MetaPixel />
      <ScrollToTop />
      <section>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:slug" element={<Project />} />
        </Routes>
        <Footer />
        <div className="void"></div>
      </section>
    </Router>
  );
};

export default Main;
