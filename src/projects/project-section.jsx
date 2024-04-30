import React, { useState } from "react";
import "./project.css";
import 'bootstrap/dist/css/bootstrap.css';
import ProjectCard from "./project-card";

function ProjectSection() {
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        {
            title: '💻 Dao', techStack: 'Angular, Typescript, Java, SpringBoot, JHipster, PostgreSQL, GitLab CI/CD', description: 'A Full Stack Productivity & Collaboration Website For Students', projectUrl: '', githubUrl: '',
        },
        {
            title: '🤖 Intervue', techStack: 'Dart, Flutter, Firebase, OpenAI API', description: 'An AI-Powered CV Screening and Interview Automation Website', projectUrl: '', githubUrl: 'https://github.com/sexxyrexxy/Intervue', 
        },
        {
            title: '🌐 Personal Portfolio', techStack: 'React, Javascript, HTML, CSS, Bootstrap', description: 'A Personal Portfolio Website Project', projectUrl: '.',githubUrl: 'https://github.com/bonifacioronald/web-portfolio', 
        },
        {
            title: '🤱 Carve', techStack: ' Dart, Flutter, Firebase', description: 'An Award-Winning Pregnancy Companion Mobile Application', projectUrl: '', githubUrl: 'https://github.com/bonifacioronald/carve',
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
