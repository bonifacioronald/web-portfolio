import React from "react";
import "./left-section.css";
import 'bootstrap/dist/css/bootstrap.css';

function LeftSection() {
  return (
    <div className="layout-left">
        <div className="top-section">
            <h1 className="name roboto-bold mb-3">Bonifacio Ronald</h1>
            <h2 className="role roboto-regular mb-5">Software Developer & Blockchain Engineer</h2>
            <h3 className="description roboto-regular mt-5">Final year Bachelor of Computer Science (Hons.) student with a strong background in software development and particular interest in Web3 technologies.</h3>
        </div>
      <div className="bottom-section">
        <h1>Contact Session</h1>
      </div>
    </div>
  );
}

export default LeftSection;