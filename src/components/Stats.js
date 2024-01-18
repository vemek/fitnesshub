const GRID_COLS = Object.freeze([
  "grid-cols-1",
  "grid-cols-[9rem_1fr]",
  "grid-cols-[9rem_1fr_1fr]",
  "grid-cols-[9rem_1fr_1fr_1fr]",
]);

function Stats({assessments}) {
  const headerRow = [
    <div className="bg-slate-200 rounded-tl"></div>
  ].concat(assessments.map((assessment, i) => {
    const assessmentTitle = i === 0 ? "Initial Assessment" : `Reassessment ${i}`;
    const roundedClass = i === assessments.length - 1 ? "rounded-tr" : "";
    return (<div className={`p-1 text-lg bg-slate-200 ${roundedClass}`}>{assessmentTitle}</div>);
  }));

  const bpRow = [
    <div className="p-1 text-lg bg-slate-200">Blood pressure</div>
  ].concat(assessments.map(a => {
    return (<div className="p-1">{a.bloodPressureSystolic} / {a.bloodPressureDiastolic}</div>);
  }));

  const heartRateRow = [
    <div className="p-1 text-lg bg-slate-200">Heart rate</div>
  ].concat(assessments.map(a => {
    return (<div className="p-1">{a.heartRate} bps</div>);
  }));

  const weightRow = [
    <div className="p-1 text-lg bg-slate-200 rounded-bl">Weight</div>
  ].concat(assessments.map(a => {
    return (<div className="p-1">{a.weight} kg</div>);
  }));

  const grid_cols_class = GRID_COLS[assessments.length];

  return (
    <div className={`grid ${grid_cols_class} mb-4 bg-slate-100 rounded`}>
      {headerRow}
      {bpRow}
      {heartRateRow}
      {weightRow}
    </div>
  );
}

export default Stats;
