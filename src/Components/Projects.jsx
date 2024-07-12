import React, { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

import '../scss/Projects.scss';
import { Link } from 'react-router-dom';
import DATA from '../data/projects';
import Loader from './sectionLoader.jsx';

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const form = useRef(null);
  const [email, setEmail] = useState('');
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_lm4juau',
      'template_3n8awzg',
      form.current,
      'koPF8_4VC7XT9wEw5'
    ).then(
      (result) => {
        console.log('SUCCESS!', result.text);
      },
      (error) => {
        console.log('FAILED...', error.text);
      }
    );
    // Clear form fields after submission (optional)
    setEmail('');

  };
  return (
    <div id="projects-container">
      <div className="subs-wrapper">
        <p>Be the first to know! Subscribe for the latest news, projects and more ...</p>
        <div className="formWrapper">

          <form> ref={form} onSubmit={sendEmail}
            <input type="email" name="user_email" placeholder='Email Address' value={email}
              onChange={(e) => setEmail(e.target.value)}
              required />
            <button>
              Subscribe
            </button>
          </form>

        </div>
      </div>

      <div className="project-boxes">
        <header>
          <p>Some Things I’ve Built</p>
        </header>

        {/* Mapping through fake project data */}
        {DATA.map((project, index) => (
          <div key={index} className="project-main-box">
            <Link to={`/project/${project.slug}`} className="project-link">
              <img src={project.coverImg} alt={project.slug} className="project-image" />
            </Link>
            <p className="project-type">{project.tag}</p>
            <h2 className="project-title">
              <Link to={`/project/${project.slug}`} className="project-link">
                {project.title}
              </Link>
            </h2>
            <h4 className="project-description">
              {project.intro.length > 120 ? `${project.intro.substring(0, 120)}...` : project.intro}
            </h4>
            <div className="date_extra-links">
              <p className="project-date">{project.date}</p>
              <div className="project-links">
                <Link href={project.externalLink} className="project-link" target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-link"></i>
                </Link>
                <Link href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-github-alt"></i>
                </Link>
              </div>
            </div>
            <div className="full-screen-view">
              <Link to={`/project/${project.slug}`} >
                <i className="fa-solid fa-eye"></i>
              </Link>
            </div>
          </div>
        ))}
        <div className="paginate-btn">
          <Link to="/projects" className="project-link">
            SHOW MORE
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
