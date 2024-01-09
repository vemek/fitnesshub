import Input from './Input.js';
import Button from './Button.js';

function EditClient({user, onUpdateUser, onDone}) {
  return (
    <>
      <h2 className="text-2xl">Edit Client Details</h2>
      <div className="grid grid-cols-2">
        <div>Name</div>
        <div><Input type="text" onChange={onUpdateUser('name')} value={user.name} /></div>

        <div>Age</div>
        <div><Input type="number" onChange={onUpdateUser('age')} value={user.age} /></div>

        <div>Height</div>
        <div><Input type="text" onChange={onUpdateUser('height')} value={user.height} /></div>

        <div>Goals</div>
        <div><Input type="text" onChange={onUpdateUser('goals')} value={user.goals} /></div>

        <div className="sm:col-span-2 mt-4 justify-self-end">
          <Button onClick={onDone} text="Done" />
        </div>
      </div>
    </>
  );
}
export default EditClient;
