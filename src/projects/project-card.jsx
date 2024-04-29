import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function ProjectCard({project}) {
    return (
        <div className="project-card">
            <span>{project.techStack}</span>
            <h1>{project.title}</h1>
            <h2>{project.description}</h2>
            <h3>{project.githubUrl}</h3>
        </div>
    );
}

export default ProjectCard;