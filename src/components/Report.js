import Stats from './Stats.js';
import Measurements from './Measurements.js';
import BodyFat from './BodyFat.js';

function Report({user}) {
  return (
    <div className="">
      <h1 className="text-4xl">Swords Fitness Hub</h1>
      <h2 className="text-2xl">Physical Assessment - {user.name}</h2>
      <div className="flex items-center flex-wrap gap-2 mb-4">
        <div className="flex items-center p-1 bg-slate-100 rounded-xl">
          <div className="text-lg mr-2">Age</div>
          <div className="">{user.age}</div>
        </div>
        <div className="flex items-center p-1 bg-slate-100 rounded-xl">
          <div className="text-lg mr-2">Height</div>
          <div className="">{user.height}</div>
        </div>
        <div className="flex items-center p-1 bg-slate-100 rounded-xl">
          <div className="text-lg mr-2">Goals</div>
          <div className="">{user.goals}</div>
        </div>
      </div>
      <Stats assessments={user.assessments} />
      <Measurements assessments={user.assessments} />
      <BodyFat assessments={user.assessments} />
    </div>
  );
}
export default Report;
