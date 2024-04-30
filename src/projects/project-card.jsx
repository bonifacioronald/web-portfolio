import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function ProjectCard({ project, isHovered, onMouseEnter, onMouseLeave }) {
    return (
        <div
            className={`project-card ${isHovered ? '' : 'darkened'}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <span className="project-techstack cutive-mono-regular">{project.techStack}</span>
            <h1 className="project-title">{project.title}</h1>
            <h2 className="project-description">{project.description}</h2>
            <div className="project-link">
                {project.projectUrl !== '' 
                ? 
                <a className="link-item" href={project.projectUrl}><i class="fa fa-external-link"></i>&ensp;Project</a> 
                : 
                null
                }
                {project.githubUrl !== '' 
                ? 
                <a className="link-item" href={project.githubUrl}><i class="fa fa-github"></i>&ensp;GitHub</a> 
                : 
                null
                }
            </div>
        </div>
    );
}

export default ProjectCard;
