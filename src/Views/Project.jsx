import "../scss/Project.scss";
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import projectsData from "../data/projects";

const Project = () => {
    const { slug } = useParams();
    const [project, setProject] = useState(null);
    const displayRef = useRef(null);
    useEffect(() => {
        const foundProject = projectsData.find(proj => proj.slug === slug);
        if (foundProject) {
            setProject(foundProject);
        }
    }, [slug]);

    const scrollToGallery = () => {
        displayRef.current.scrollIntoView({ behavior: 'smooth' });
    };


    if (!project) {
        return <div>Project not found</div>;
    }


    return (
        <div id="sp__box">
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


