import "../scss/_Projects.scss";
import author from "../assets/images/author.jpg";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

import { FaExternalLinkAlt } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

import ScrollToTop from "../js/scrollToTop"
import DATA from '../data/projects';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Projects = () => {
  return (
    <div className="Projects-container-box">
    <Helmet>
      <title>Coding Projects - MTM</title>
      <meta name="description" content="Explore Mohamed's coding projects, showcasing various skills and technologies. Discover web development, software applications, and more." />
      <meta name="keywords" content="coding projects, web development, software applications, React projects, JavaScript projects, MTM" />
      <meta name="author" content="Mohamed" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0a192f" />
      <link rel="canonical" href="https://mtm-portfolio.onrender.com/projects" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:title" content="Coding Projects - Mohamed" />
      <meta property="og:description" content="Explore Mohamed's coding projects, showcasing various skills and technologies. Discover web development, software applications, and more." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mtm-portfolio.onrender.com/projects" />
      <meta property="og:image" content="https://mtm-portfolio.onrender.com/author.jpg" />
      <meta property="og:site_name" content="Mohamed's Portfolio" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Coding Projects - Mohamed" />
      <meta name="twitter:description" content="Explore Mohamed's coding projects, showcasing various skills and technologies. Discover web development, software applications, and more." />
      <meta name="twitter:image" content="https://mtm-portfolio.onrender.com/author.jpg" />
    </Helmet>

      <ScrollToTop />
      <div className="pp-header">
        <img src={author} alt="author" />
        <div>
          <h4>Hello Everyone !</h4>
          <p>
            Welcome to my coding projects page! Explore a collection of my
            recent work, showcasing a variety of skills and technologies. From
            web development to software applications, each project reflects my
            passion for coding and problem-solving. Dive in and discover the
            exciting world of my creations.
          </p>
          <div>
            <FaFacebook />
            <BsTwitterX />
            <RiInstagramFill />
          </div>
        </div>
      </div>

      <div className="p-container">

        {/* Mapping through fake project data */}
        {DATA.map((project, index) => (

          <div className="project-bx">
            <div className="p-box">
              <Link to={`/project/${project.slug}`} className="project-link">
                <img src={project.coverImg} alt={project.slug} className="project-image c" />
              </Link>

              <b>
                <Link to={`/project/${project.slug}`}>
                  {project.title}
                </Link>
              </b>
              <div className="links">
                <FaExternalLinkAlt />
                <SiGithub />
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Projects;
