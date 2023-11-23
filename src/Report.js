import Stats from './Stats.js';
import Measurements from './Measurements.js';
import BodyFat from './BodyFat.js';
import Button from './Button.js';

function Report({user, onEditReport}) {
  return (
    <div>
      <div>
        <span>Swords Fitness Hub</span>
        <span>Physical Assessment</span>
      </div>
      <Button onClick={onEditReport} text="Edit Report" />
      <div>
        <ul>
          <li>Name: {user.name}</li>
          <li>Age: {user.age}</li>
          <li>Goals: {user.goals}</li>
        </ul>
      </div>
      <Stats />
      <Measurements />
      <BodyFat />
    </div>
  );
}
export default Report;
