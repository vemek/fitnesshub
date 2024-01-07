import Button from './Button.js';
import Input from './Input.js';

function EditAssessment({ user, assessment, onDone, onUpdateAssessment }) {
  return (
    <div className="mb-5 grid grid-cols-[16rem_1fr] gap-2 items-center max-w-2xl">
      <div className="col-span-2 text-4xl">Assessment for {user.name}</div>

      <div className="justify-self-end">Date</div>
      <div><Input type="text" onChange={onUpdateAssessment('date')} value={assessment.date} /></div>

      <div className="justify-self-end">Blood Pressure</div>
      <div className="flex gap-2 w-full items-center justify-between">
        <Input type="number" onChange={onUpdateAssessment('bloodPressureSystolic')} value={assessment.bloodPressureSystolic} />
        <div className="grow text-center">/</div>
        <Input type="number" onChange={onUpdateAssessment('bloodPressureDiastolic')} value={assessment.bloodPressureDiastolic} />
      </div>

      <div className="justify-self-end">Weight</div>
      <div><Input type="number" onChange={onUpdateAssessment('weight')} value={assessment.weight} unit="kg" /></div>

      <div className="col-span-2 text-lg underline mt-4">Measurements</div>

      <div className="justify-self-end">Neck</div>
      <div><Input type="number" onChange={onUpdateAssessment('msNeck')} value={assessment.msNeck} unit="cm" /></div>

      <div className="justify-self-end">Upper arm</div>
      <div><Input type="number" onChange={onUpdateAssessment('msUpperArm')} value={assessment.msUpperArm} unit="cm" /></div>

      <div className="justify-self-end">Chest</div>
      <div><Input type="number" onChange={onUpdateAssessment('msChest')} value={assessment.msChest} unit="cm" /></div>

      <div className="justify-self-end">Upper abs</div>
      <div><Input type="number" onChange={onUpdateAssessment('msUpperAbs')} value={assessment.msUpperAbs} unit="cm" /></div>

      <div className="justify-self-end">Lower abs</div>
      <div><Input type="number" onChange={onUpdateAssessment('msLowerAbs')} value={assessment.msLowerAbs} unit="cm" /></div>

      <div className="justify-self-end">Hips</div>
      <div><Input type="number" onChange={onUpdateAssessment('msLowerAbs')} value={assessment.msLowerAbs} unit="cm" /></div>

      <div className="col-span-2 mt-4 justify-self-end">
        <Button onClick={onDone} text="Done" />
      </div>
    </div>
  );
}

export default EditAssessment;
