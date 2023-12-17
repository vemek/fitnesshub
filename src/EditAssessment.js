import Button from './Button.js';
import Input from './Input.js';

function EditAssessment({ user, assessment, onDone, onUpdateAssessment }) {
  return (
    <div>
      <div className="mb-5 grid grid-cols-[min-content_1fr] gap-2 items-center max-w-xl">
        <div>Date</div>
        <div><Input type="text" onChange={onUpdateAssessment('date')} value={assessment.date} /></div>
        <div>Blood Pressure</div>
        <div>
          <Input type="number" className="w-20" onChange={onUpdateAssessment('bloodPressureSystolic')} value={assessment.bloodPressureSystolic} />
          <span className="mx-4">/</span>
          <Input type="number" className="w-20" onChange={onUpdateAssessment('bloodPressureDiastolic')} value={assessment.bloodPressureDiastolic} />
        </div>
      </div>
      <div className="flex space-x-2">
        <div>
          <Button onClick={onDone} text="Done" />
        </div>
      </div>
    </div>
  );
}

export default EditAssessment;
