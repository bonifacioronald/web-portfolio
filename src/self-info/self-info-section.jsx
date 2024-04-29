import React from "react";
import "./self-info.css";
import 'bootstrap/dist/css/bootstrap.css';

function SelfInfoSection() {
  return (
    
  <div className="top-section">
            <h1 className="name roboto-bold mb-3">Bonifacio Ronald</h1>
            <h2 className="role roboto-regular mb-5">Software & Blockchain Developer</h2>
            <h3 className="description roboto-regular mt-5">Hi, there! I'm a final-year student based in Malaysia and Indonesia, with a solid foundation in website and mobile application development. I'm particularly passionate about exploring the potential of Web3 technologies. Currently, I'm on the lookout for remote opportunities that align with my professional growth while allowing me to stay focused on my academic journey. <a className="cv-link"href="https://drive.google.com/file/d/1hRrLCjVwuXiA0k2MP9Bed2iYoM6Guu52/view?usp=sharing">Download my full resume here</a></h3>
  </div>
  );
}

export default SelfInfoSection;