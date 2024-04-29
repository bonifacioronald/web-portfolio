import './App.css';
import SelfInfoSection from './self-info/self-info-section';
import ProjectSection from './projects/project-section';
import ContactSection from './contact/contact-section';

function App() {
  return (
    <div className="App">
      <div className="layout-container">
        <div className='left-section'>
          <div className='mb-5'><SelfInfoSection/></div>
          <div><ContactSection/></div>
          </div>
        <div className='right-section'>
          <ProjectSection/>
          <ProjectSection/>
          <ProjectSection/>
          <h5 className='copyright mt-5'>Made with React.js by Bonifacio Ronald @ 2024<br/>Design inspired by <a className='copyright-link' href="https://dribbble.com/NicolasMzrd">Nicolas Meuzard</a></h5>
        </div>
      </div>
    </div>
  );
}

export default App;
