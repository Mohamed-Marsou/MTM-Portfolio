import "../scss/_Projects.scss";
import author from "../assets/images/author.jpg";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

import { FaExternalLinkAlt } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

import ScrollToTop from "../js/scrollToTop";
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
        <div className="ph-container">
          <div className="p-box-xl">
            <img
              src="https://genz-nextjs-v3.vercel.app/assets/imgs/page/travel-tip/news2.png"
              alt=""
            />

            <b>
              <a href="#">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </a>
            </b>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error est
              doloremque corrupti et aut. Consequuntur officia tempora possimus
              debitis? Nesciunt pariatur a quas dolores laudantium!
            </p>
            <div className="links">
              <FaExternalLinkAlt />
              <SiGithub />
            </div>
          </div>
          <div className="p-box-xl">
            <img
              src="https://genz-nextjs-v3.vercel.app/assets/imgs/page/travel-tip/news2.png"
              alt=""
            />

            <b>
              <a href="#">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </a>
            </b>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error est
              doloremque corrupti et aut. Consequuntur officia tempora possimus
              debitis? Nesciunt pariatur a quas dolores laudantium!
            </p>
            <div className="links">
              <FaExternalLinkAlt />
              <SiGithub />
            </div>
          </div>
        </div>

        <div className="pb-container">
          <div>
            <div className="p-box">
              <img
                src="https://genz-nextjs-v3.vercel.app/assets/imgs/page/travel-tip/news2.png"
                alt=""
              />

              <b>
                <a href="#">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </a>
              </b>
              <div className="links">
                <FaExternalLinkAlt />
                <SiGithub />
              </div>
            </div>
            <div className="p-box">
              <img
                src="https://genz-nextjs-v3.vercel.app/assets/imgs/page/travel-tip/news2.png"
                alt=""
              />

              <b>
                <a href="#">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </a>
              </b>
              <div className="links">
                <FaExternalLinkAlt />
                <SiGithub />
              </div>
            </div>
            <div className="p-box">
              <img
                src="https://genz-nextjs-v3.vercel.app/assets/imgs/page/travel-tip/news2.png"
                alt=""
              />

              <b>
                <a href="#">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </a>
              </b>
              <div className="links">
                <FaExternalLinkAlt />
                <SiGithub />
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
