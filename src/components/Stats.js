function Stats({assessments}) {
  const bpRow = [
    <div>Blood pressure:</div>
  ].concat(assessments.map(a => {
    return (<div>{a.bloodPressureSystolic} / {a.bloodPressureDiastolic}</div>);
  }));

  const heartRateRow = [
    <div>Heart rate:</div>
  ].concat(assessments.map(a => {
    return (<div>{a.heartRate}</div>);
  }));

  const weightRow = [
    <div>Weight:</div>
  ].concat(assessments.map(a => {
    return (<div>{a.weight}</div>);
  }));

  return (
    <div className="grid grid-rows-3 grid-flow-col">
      {bpRow}
      {heartRateRow}
      {weightRow}
    </div>
  );
}

export default Stats;
