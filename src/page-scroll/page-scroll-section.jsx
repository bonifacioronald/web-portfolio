import React from "react";
import "./page-scroll.css";
import 'bootstrap/dist/css/bootstrap.css';

function PageScrollSection({scrollPosition}) {

    const projectSectionScrollBreakpoint = 500;
    const eduExpSectionScrollBreakpoint = 1375;

    return (
        <div className="page-scroll-layout">
            <p className={`page-scroll-item ${scrollPosition < projectSectionScrollBreakpoint ? 'focused' : ''}`}>01 - Projects</p>
            <p className={`page-scroll-item ${scrollPosition >= projectSectionScrollBreakpoint && scrollPosition < eduExpSectionScrollBreakpoint ? 'focused' : ''}`}>02 - Education & Experience</p>
            <p className={`page-scroll-item ${scrollPosition >= eduExpSectionScrollBreakpoint ? 'focused' : ''}`}>03 - Awards</p>
        </div>
    );
}

export default PageScrollSection;