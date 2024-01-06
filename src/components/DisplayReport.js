import Stats from './Stats.js';
import Measurements from './Measurements.js';
import BodyFat from './BodyFat.js';
import Button from './Button.js';

function DisplayReport({user, onEditReport}) {
  return (
    <div className="grid">
      <h1 className="text-4xl">Swords Fitness Hub</h1>
      <h2 className="text-2xl">Physical Assessment</h2>
      <div>
        <Button onClick={onEditReport} text="Edit Report" />
      </div>
      <div>
        <ul className="flex gap-2">
          <li>Name: {user.name}</li>
          <li>Age: {user.age}</li>
          <li>Height: {user.height}</li>
          <li>Goals: {user.goals}</li>
        </ul>
      </div>
      <Stats assessments={user.assessments} />
      <Measurements />
      <BodyFat />
    </div>
  );
}
export default DisplayReport;
