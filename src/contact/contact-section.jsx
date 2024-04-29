import React from "react";
import "./contact.css";
import 'bootstrap/dist/css/bootstrap.css';

function ContactSection() {
    return (
    <div className="contact-layout">
        <div>
            <img className="circle-avatar" src={require('../assets/images/profile-pic.png')} alt="profile pic" />
        </div>
        <div><a href="https://www.linkedin.com/in/bonifacio-ronald/">LinkedIn</a></div>
        <div><a href="https://github.com/bonifacioronald">GitHub</a></div>
        <div><a href="https://mailto:bonifacioronald.dev@gmail.com">Email</a></div>
    </div>
    );
}

export default ContactSection;