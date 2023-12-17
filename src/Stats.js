function Stats({assessments}) {
  return assessments.map((assessment) => statAssessment(assessment));
}

function statAssessment(assessment) {
  return (
    <div className="grid">
      <div>Blood pressure:</div><div>{assessment.bloodPressureSystolic} / {assessment.bloodPressureDiastolic}</div>
      <div>Heart rate:</div><div>{assessment.heartRate}</div>
      <div>Weight:</div><div>{assessment.weight}</div>
    </div>
  );
}

export default Stats;
