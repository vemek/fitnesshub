import Stats from './Stats.js';
import Measurements from './Measurements.js';
import BodyFat from './BodyFat.js';

function Report({user}) {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl">Swords Fitness Hub</h1>
      <h2 className="text-2xl">Physical Assessment - {user.name}</h2>
      <div className="flex gap-2 justify-between my-4">
        <div>
          <div className="">Age</div>
          <div className="">{user.age}</div>
        </div>
        <div>
          <div className="">Height</div>
          <div className="">{user.height}</div>
        </div>
        <div>
          <div className="">Goals</div>
          <div className="">{user.goals}</div>
        </div>
      </div>
      <Stats assessments={user.assessments} />
      <Measurements />
      <BodyFat />
    </div>
  );
}
export default Report;
