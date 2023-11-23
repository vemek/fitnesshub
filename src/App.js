import Stats from './Stats.js';
import Measurements from './Measurements.js';
import BodyFat from './BodyFat.js';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div>
        <span>Swords Fitness Hub</span>
        <span>Physical Assessment</span>
      </div>
      <div>
        <ul>
          <li>Name:</li>
          <li>Age:</li>
          <li>Goals:</li>
        </ul>
      </div>
      <Stats />
      <Measurements />
      <BodyFat />
    </div>
  );
}

export default App;
