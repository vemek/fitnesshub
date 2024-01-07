import Button from './Button.js';
import Input from './Input.js';

function EditAssessment({ user, assessment, onDone, onUpdateAssessment }) {
  return (
    <div className="mb-5 grid grid-cols-1 gap-2 items-center max-w-2xl">
      <div className="col-span-2 text-4xl">Assessment for {user.name}</div>

      <div>Date</div>
      <div><Input type="text" onChange={onUpdateAssessment('date')} value={assessment.date} /></div>

      <div>Blood Pressure</div>
      <div className="flex gap-2 w-full items-center justify-between">
        <Input type="number" onChange={onUpdateAssessment('bloodPressureSystolic')} value={assessment.bloodPressureSystolic} />
        <div className="grow text-center">/</div>
        <Input type="number" onChange={onUpdateAssessment('bloodPressureDiastolic')} value={assessment.bloodPressureDiastolic} />
      </div>

      <div>Weight</div>
      <div><Input type="number" onChange={onUpdateAssessment('weight')} value={assessment.weight} unit="kg" /></div>

      <div className="col-span-2 text-lg underline mt-4">Measurements</div>

      <div>Neck</div>
      <div><Input type="number" onChange={onUpdateAssessment('msNeck')} value={assessment.msNeck} unit="cm" /></div>

      <div>Upper arm</div>
      <div><Input type="number" onChange={onUpdateAssessment('msUpperArm')} value={assessment.msUpperArm} unit="cm" /></div>

      <div>Chest</div>
      <div><Input type="number" onChange={onUpdateAssessment('msChest')} value={assessment.msChest} unit="cm" /></div>

      <div>Upper abs</div>
      <div><Input type="number" onChange={onUpdateAssessment('msUpperAbs')} value={assessment.msUpperAbs} unit="cm" /></div>

      <div>Lower abs</div>
      <div><Input type="number" onChange={onUpdateAssessment('msLowerAbs')} value={assessment.msLowerAbs} unit="cm" /></div>

      <div>Hips</div>
      <div><Input type="number" onChange={onUpdateAssessment('msLowerAbs')} value={assessment.msLowerAbs} unit="cm" /></div>

      <div className="col-span-2 mt-4 justify-self-end">
        <Button onClick={onDone} text="Done" />
      </div>
    </div>
  );
}

export default EditAssessment;
