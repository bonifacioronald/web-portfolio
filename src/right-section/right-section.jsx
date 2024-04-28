import React from "react";
import './right-section.css';
import 'bootstrap/dist/css/bootstrap.css';
import ProjectSection from "./projects/project-section";

function RightSection() {

    return <div className="layout-right">
        <ProjectSection/>
    </div>
}

export default RightSection;