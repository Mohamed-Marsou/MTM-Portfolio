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
const Projects = () => {
  return (
    <div className="Projects-container-box">
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
          <div className="project-bx" key={index}>
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
