import React from "react";
import "../scss/Footer.scss";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="col-1">
        <div id="logoContainer">
          <img src={Logo} alt="logo-MTM" />
        </div>
        <p>
          Passionate about coding and creating, I am a dedicated full-stack
          developer eager to bring precision and creativity to the digital
          world.
        </p>
        <p>
          My focus is on transforming code into captivating creations, ensuring
          a seamless and engaging user experience. With a keen eye for detail, I
          thrive on optimizing both front-end interfaces and back-end
          functionality.
        </p>

        <span>
          &copy; Copyright <b>MTM</b> {currentYear}
        </span>
      </div>
      <div className="col-2">
        <h3>Links</h3>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">ToolBox</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </div>
      <div className="col-3">
        <h3>Newsletter</h3>
        <p>
          Stay ahead in the world of web development. Join us for inspiring
          stories, expert insights, and the latest trends
        </p>
        <form>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <button>
            SUBSCRIBE
            <FaLongArrowAltRight />
          </button>
        </form>
        <div className="s-m-icons">
          <Link to="https://www.facebook.com/profile.php?id=100084199696274">
            <FaSquareFacebook />
          </Link>
          <Link to="https://www.instagram.com/mtm__4l?igsh=aWZjNGh5NmFmYzdk">
            <FaInstagramSquare />
          </Link>
          <Link to="https://www.linkedin.com/in/mohamed-marsou-0b8b1a247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <IoLogoLinkedin />
          </Link>
          <a href="mailto:marsoumtm@gmail.com" className="email-link">
            <MdEmail />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
