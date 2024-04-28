import React from "react";
import "./project.css";
import 'bootstrap/dist/css/bootstrap.css';
import ProjectCard from "./project-card";

function ProjectSection() {

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

    return <div className="project-layout" >
        {projects.map((project) => {
        return <ProjectCard project={project}/>;
    })};
    </div>
}

export default ProjectSection;