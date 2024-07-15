import "../scss/Project.scss";
import { GrGallery } from "react-icons/gr";
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import projectsData from "../data/projects";
import { Link } from "react-router-dom";
const Project = () => {
    const { slug } = useParams();
    const [project, setProject] = useState(null);
    const displayRef = useRef(null);
    useEffect(() => {
        const foundProject = projectsData.find(proj => proj.slug === slug);
        if (foundProject) {
            setProject(foundProject);
        }
        console.log(foundProject);
    }, [slug]);

    const scrollToGallery = () => {
        displayRef.current.scrollIntoView({ behavior: 'smooth' });
    };


    if (!project) {
        return <div>Project not found</div>;
    }


    return (
        <div id="sp__box">
    <Helmet>
            <title>{project.title} - MTM</title>
            <meta name="description" content={project.intro} />
            <meta name="keywords" content={`coding projects, ${project.title}, ${project.tech.join(', ')}`} />
            <meta name="author" content="MTM - Mohamed Taoufik Marsou" />
            <meta name="robots" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#0a192f" />
            <link rel="canonical" href={`https://mtm-portfolio.onrender.com/project/${project.slug}`} />
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:title" content={`${project.title} - MTM`} />
            <meta property="og:description" content={project.intro} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`https://mtm-portfolio.onrender.com/project/${project.slug}`} />
            <meta property="og:image" content={project.coverImg} />
            <meta property="og:site_name" content="Mohamed's Portfolio" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={`${project.title} - Mohamed`} />
            <meta name="twitter:description" content={project.intro} />
            <meta name="twitter:image" content={project.coverImg} />
        </Helmet>
            <div className="single-project-section ">

                <img src={project.coverImg} className="project-cover " alt="image" />

                <div className="p-des">
                    <h1 className="project-title ">
                        {project.title}
                    </h1>
                </div>

                <div className="projectBody">
                    <p>
                        {project.intro}
                    </p>
                </div>

                <div className="techBox">
                    <h3>Build with</h3>
                    <div>
                        {project.techIcons && project.techIcons.map((icon, index) => (
                            <img key={index} src={icon} alt={`icon ${index + 1}`} />
                        ))}
                    </div>
                </div>
                <div className="projectBody">
                    <p>
                        {project.description}
                    </p>
                </div>
                <div className="urls"></div>

                <h1 id="gall">Showcase</h1>
                <div className="P-wrapper" id="display" ref={displayRef}>
                    {project.images && project.images.map((image, index) => (
                        <img key={index} src={image} alt={`Project image ${index + 1}`} />
                    ))}
                </div>

            </div>

        </div>
    )
}

export default Project


