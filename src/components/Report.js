import Stats from './Stats.js';
import Measurements from './Measurements.js';
import BodyFat from './BodyFat.js';

function Report({user}) {
  return (
    <div>
      <h1 className="text-4xl">Swords Fitness Hub</h1>
      <h2 className="text-2xl">Physical Assessment - {user.name}</h2>
      <div className="grid grid-cols-2 mb-4">
        <div className="border-t-2 border-l-2 border-black">Age</div>
        <div className="border-t-2 border-l-2 border-r-2 border-black">{user.age}</div>

        <div className="border-t-2 border-l-2 border-black">Height</div>
        <div className="border-t-2 border-l-2 border-r-2 border-black">{user.height}</div>

        <div className="border-t-2 border-l-2 border-b-2 border-black">Goals</div>
        <div className="border-2 border-black">{user.goals}</div>
      </div>
      <Stats assessments={user.assessments} />
      <Measurements />
      <BodyFat />
    </div>
  );
}
export default Report;
