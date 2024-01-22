import Button from './Button.js';
import Input from './Input.js';

function EditAssessment({ user, assessment, onDone, onUpdateAssessment }) {
  return (
    <div className="mb-5 grid grid-cols-1 sm:grid-cols-[minmax(7rem,_12rem)_minmax(7rem,_12rem)] gap-2 items-center justify-between max-w-2xl">
      <div className="sm:col-span-2 text-4xl">Assessment for {user.name}</div>

      <div>Date</div>
      <div><Input type="text" onChange={onUpdateAssessment('date')} value={assessment.date} /></div>

      <div>Blood Pressure</div>
      <div className="flex gap-2 w-full items-center justify-between">
        <Input type="number" onChange={onUpdateAssessment('bloodPressureSystolic')} value={assessment.bloodPressureSystolic} />
        <div className="grow text-center">/</div>
        <Input type="number" onChange={onUpdateAssessment('bloodPressureDiastolic')} value={assessment.bloodPressureDiastolic} />
      </div>

      <div>Heart rate</div>
      <div><Input type="number" onChange={onUpdateAssessment('heartRate')} value={assessment.heartRate} unit="bpm" /></div>

      <div>Weight</div>
      <div><Input type="number" onChange={onUpdateAssessment('weight')} value={assessment.weight} unit="kg" /></div>

      <div className="sm:col-span-2 text-lg underline my-4">Measurements</div>

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
      <div><Input type="number" onChange={onUpdateAssessment('msHips')} value={assessment.msHips} unit="cm" /></div>

      <div>Thigh</div>
      <div><Input type="number" onChange={onUpdateAssessment('msThigh')} value={assessment.msThigh} unit="cm" /></div>

      <div>Calf</div>
      <div><Input type="number" onChange={onUpdateAssessment('msCalf')} value={assessment.msCalf} unit="cm" /></div>

      <div className="sm:col-span-2 text-lg underline my-4">Body Fat</div>

      <div>Bicep</div>
      <div><Input type="number" onChange={onUpdateAssessment('bfBicep')} value={assessment.bfBicep} unit="cm" /></div>

      <div>Tricep</div>
      <div><Input type="number" onChange={onUpdateAssessment('bfTricep')} value={assessment.bfTricep} unit="cm" /></div>

      <div>Subscap</div>
      <div><Input type="number" onChange={onUpdateAssessment('bfSubscap')} value={assessment.bfSubscap} unit="cm" /></div>

      <div>Super</div>
      <div><Input type="number" onChange={onUpdateAssessment('bfSuper')} value={assessment.bfSuper} unit="cm" /></div>

      <div>Lean Mass</div>
      <div><Input type="number" onChange={onUpdateAssessment('bfLeanMass')} value={assessment.bfLeanMass} unit="kg" /></div>

      <div>Body Fat</div>
      <div><Input type="number" onChange={onUpdateAssessment('bfPercentage')} value={assessment.bfPercentage} unit="%" /></div>

      <div className="sm:col-span-2 text-lg underline my-4">Flexibility</div>

      <div>Hamstring</div>
      <div><Input type="text" onChange={onUpdateAssessment('flHamstring')} value={assessment.flHamstring} /></div>

      <div>Chest</div>
      <div><Input type="text" onChange={onUpdateAssessment('flChest')} value={assessment.flChest} /></div>

      <div>Other</div>
      <div><Input type="text" onChange={onUpdateAssessment('flOther')} value={assessment.flOther} /></div>

      <div className="sm:col-span-2 text-lg underline my-4">Functional</div>

      <div>Core Test</div>
      <div><Input type="text" onChange={onUpdateAssessment('coreTest')} value={assessment.coreTest} /></div>

      <div>Plank</div>
      <div><Input type="number" onChange={onUpdateAssessment('plankTimeSecs')} value={assessment.plankTimeSecs} unit="sec" /></div>

      <div>Lower Ab Leg Drop</div>
      <div><Input type="text" onChange={onUpdateAssessment('lowerAbLegDrop')} value={assessment.lowerAbLegDrop} /></div>

      <div className="sm:col-span-2 text-lg underline my-4">Posture</div>

      <div>Head / Neck</div>
      <div><Input type="text" onChange={onUpdateAssessment('posHeadNeck')} value={assessment.posHeadNeck} /></div>

      <div>Shoulders</div>
      <div><Input type="text" onChange={onUpdateAssessment('posShoulders')} value={assessment.posShoulders} /></div>

      <div>Upper Back</div>
      <div><Input type="text" onChange={onUpdateAssessment('posUpperBack')} value={assessment.posUpperBack} /></div>

      <div>Lower Back</div>
      <div><Input type="text" onChange={onUpdateAssessment('posLowerBack')} value={assessment.posLowerBack} /></div>

      <div>Hips</div>
      <div><Input type="text" onChange={onUpdateAssessment('posHips')} value={assessment.posHips} /></div>

      <div>Legs / Feet</div>
      <div><Input type="text" onChange={onUpdateAssessment('posLegsFeet')} value={assessment.posLegsFeet} /></div>

      <div className="sm:col-span-2 mt-4 justify-self-end">
        <Button onClick={onDone} text="Done" />
      </div>
    </div>
  );
}

export default EditAssessment;
