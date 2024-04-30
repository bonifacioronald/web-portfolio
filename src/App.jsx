import './App.css';
import SelfInfoSection from './self-info/self-info-section';
import ProjectSection from './projects/project-section';
import ContactSection from './contact/contact-section';
import EduExpSection from './edu-exp/edu-exp-section';
import AwardsSection from './awards/awards-section';
import PageScrollSection from './page-scroll/page-scroll-section';
import { useState, useEffect } from 'react';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  })

  return (
    <div className="App">
      <div className="layout-container">
        <div className='left-section'>
          <div><SelfInfoSection/></div>
          {/* scrollPosition: {scrollPosition} */}
          <div><PageScrollSection scrollPosition={scrollPosition}/></div>
          <div><ContactSection/></div>
        </div>
        <div className='right-section'>
          <ProjectSection/>
          <EduExpSection/>
          <AwardsSection/>
          <h5 className='copyright mt-5'>Made with React.js by Bonifacio Ronald @ 2024<br/>Design inspired by <a className='copyright-link' href="https://dribbble.com/NicolasMzrd">Nicolas Meuzard</a></h5>
        </div>
      </div>
    </div>
  );
}

export default App;
