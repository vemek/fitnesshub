const GRID_COLS = Object.freeze([
  "grid-cols-1",
  "grid-cols-[9rem_1fr]",
  "grid-cols-[9rem_1fr_1fr]",
  "grid-cols-[9rem_1fr_1fr_1fr]",
]);

function Measurements({assessments}) {
  // neck, upper arm, chest, upper abs, lower abs, hips, thigh, calf
  const headerRow = [
    <div className="bg-slate-200 rounded-tl"></div>
  ].concat(assessments.map((assessment, i) => {
    const assessmentTitle = i === 0 ? "Initial Assessment" : `Reassessment ${i}`;
    const roundedClass = i === assessments.length - 1 ? "rounded-tr" : "";
    return (<div className={`p-1 text-lg bg-slate-200 ${roundedClass}`}>{assessmentTitle}</div>);
  }));

  const neckRow = [
    <div className="p-1 text-lg bg-slate-200">Neck</div>
  ].concat(assessments.map(a => {
    return (<div className="p-1">{a.msNeck} cm</div>);
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
      {neckRow}
      {heartRateRow}
      {weightRow}
    </div>
  );
}

export default Measurements;
