import Button from './Button.js';
import Input from './Input.js';

function EditReport({ user, onUpdateUser, onDisplayReport }) {
  return (
    <div>
      <div className="mb-5 grid grid-cols-[min-content_1fr] gap-2 items-center max-w-xl">
        <div>Name</div>
        <div><Input type="text" onChange={onUpdateUser('name')} value={user.name} /></div>
        <div>Age</div>
        <div><Input type="number" onChange={onUpdateUser('age')} value={user.age} /></div>
        <div>Goals</div>
        <div><Input type="text" onChange={onUpdateUser('goals')} value={user.goals} /></div>
      </div>
      <div>
        <Button onClick={onDisplayReport} text="Display Report" />
      </div>
    </div>
  );
}

export default EditReport;
