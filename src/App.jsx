import './App.css';
import SelfInfoSection from './self-info/self-info-section';
import ProjectSection from './projects/project-section';
import ContactSection from './contact/contact-section';

function App() {
  return (
    <div className="App">
      <div className="layout-container">
        <div className='left-section'>
          <div><SelfInfoSection/></div>
          <div><ContactSection/></div>
          </div>
        <div className='right-section'><ProjectSection/><ProjectSection/><ProjectSection/></div>
      </div>
    </div>
  );
}

export default App;