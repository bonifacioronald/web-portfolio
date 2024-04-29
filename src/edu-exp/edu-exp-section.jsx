import React, { useDebugValue } from "react";
import "./edu-exp.css";
import 'bootstrap/dist/css/bootstrap.css';

function EduExpSection() {

    const experienceData = [{
        'company': 'Google Developer Student Clubs @ TULC',
        'role': 'Technical Director',
        'description': 'I played a key part in revitalizing the club, facilitating events and providing guidance to a community of over 350 members. I am responsible for organizing workshops, hackathons, and knowledge-sharing forums, as well as creating educational resources and offering individualized support for members\' projects and academic journeys.',
        'duration': 'Sep 2023 - Present',
        'url': 'https://gdsc.community.dev/taylors-university-lakeside-campus-selangor-malaysia/'
    }]

    const educationData = [
    {
        'institution': 'Taylor\'s University',
        'degree': 'Bachelor of Computer Science (Hons.)',
        'duration': 'Expected Aug 2025',
        'description': 'GPA: 3.92/4.0, &ensp; Dean’s List Award (Semester 1-3) <br>Relevant Coursework: Software Engineering, Mobile Applications Development, Machine Learning and Parallel Computing, Advanced Programming, Data Structure and Algorithms',
        'url': 'https://university.taylors.edu.my/en.html'
    }, 
    {
        'institution': 'University of Birmingham',
        'degree': 'Computer Science and Software Engineering',
        'duration': 'Jan 2024 - Jun 2024',
        'description': 'Relevant Coursework: Team Project, Artificial Intelligence, Full Stack Application Development',
        'url': 'https://www.birmingham.ac.uk/'
        }
    ]

    return (
        <div>
        {experienceData.map((exp) => {
            return (
            <a href={exp.url}>
                <div className="exp-edu-layout mt-5">
                    <h1 className="duration mt-2">{exp.duration}</h1>
                    <div className="exp-edu-detail-area">
                        <h1 className="exp-edu-title">                        
                            {exp.company} ◦ {exp.role} &ensp;<i class="fa fa-external-link"></i>              
                        </h1>
                        <p className="exp-edu-description">{exp.description}</p>
                    </div>
                </div>
            </a>
            );
        })}
        <hr className="divider my-5"/>
        {educationData.map((edu) => {
            return (
            <a href={edu.url}>
                <div className="exp-edu-layout mb-5">
                    <h1 className="duration mt-2">{edu.duration}</h1>
                    <div className="exp-edu-detail-area">
                        <h1 className="exp-edu-title">{edu.institution} ◦ {edu.degree} &ensp;<i class="fa fa-external-link"></i></h1>
                        <p className="exp-edu-description" dangerouslySetInnerHTML={{ __html: edu.description }}></p>
                    </div>
                </div>
            </a>
            );  
        })}
        </div>
    );
}

export default EduExpSection;