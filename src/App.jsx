import './App.css';
import LeftSection from './left-section/left-section';
import ProjectSection from './projects/project-section';

function App() {
  return (
    <div className="App">
      <div className="layout-container">
        <div className='left-section'><LeftSection/></div>
        <div className='right-section'><ProjectSection/><ProjectSection/><ProjectSection/></div>
      </div>
    </div>
  );
}

export default App;
