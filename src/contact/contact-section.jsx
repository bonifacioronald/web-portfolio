import React from "react";
import "./contact.css";
import 'bootstrap/dist/css/bootstrap.css';

function ContactSection() {
    return (
    <div className="contact-layout">
        <div>
            <img className="circle-avatar" src={require('../assets/images/profile-pic.png')} alt="profile pic" />
        </div>
        <div><a href="https://www.linkedin.com/in/bonifacio-ronald/"><i class="fa fa-linkedin-square"></i>&ensp;LinkedIn</a></div>
        <div><a href="https://github.com/bonifacioronald"><i class="fa fa-github"></i>&ensp;GitHub</a></div>
        <div><a href="https://mailto:bonifacioronald.dev@gmail.com"><i class="fa fa-envelope"></i>&ensp;Email</a></div>
    </div>
    );
}

export default ContactSection;