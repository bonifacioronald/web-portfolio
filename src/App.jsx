import './App.css';
import LeftSection from './left-section/left-section';
import RightSection from './right-section/right-section';

function App() {
  return (
    <div className="App">
      <LeftSection/>
      <div className="layout-container">
        <div></div>
        <RightSection/>
      </div>
    </div>
  );
}

export default App;
