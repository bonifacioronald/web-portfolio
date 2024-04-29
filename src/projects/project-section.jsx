import React, { useState } from "react";
import "./project.css";
import 'bootstrap/dist/css/bootstrap.css';
import ProjectCard from "./project-card";

function ProjectSection() {
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        {
            title: 'DAO', techStack: 'Angular, Java', description: 'Real-time collaboration focus session', githubUrl: '..',
        },
        {
            title: 'DAO', techStack: 'Angular, Java', description: 'Real-time collaboration focus session', githubUrl: '..',
        },
        {
            title: 'DAO', techStack: 'Angular, Java', description: 'Real-time collaboration focus session', githubUrl: '..',
        },
    ];

    const handleCardHover = (index) => {
        setHoveredProject(index);
    };

    return (
        <div className="project-layout">
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    project={project}
                    isHovered={hoveredProject === index}
                    onMouseEnter={() => handleCardHover(index)}
                    onMouseLeave={() => setHoveredProject(null)}
                />
            ))}
        </div>
    );
}

export default ProjectSection;
