const GRID_COLS = Object.freeze([
  "grid-cols-1",
  "grid-cols-[9rem_1fr]",
  "grid-cols-[9rem_1fr_1fr]",
  "grid-cols-[9rem_1fr_1fr_1fr]",
]);

function Table({ numCols, children }) {
  const headerRow = [
    <div className="p-2 text-lg bg-slate-200 rounded-tl">&nbsp;</div>
  ];
  for (let i = 0; i < numCols; i++) {
    const heading = i === 0 ? "Initial Assessment" : `Reassessment ${i}`;
    const roundedClass = i === numCols - 1 ? "rounded-tr" : "";
    headerRow.push(<div className={`p-2 text-lg bg-slate-200 ${roundedClass}`}>{heading}</div>);
  };

  const gridColsClass = GRID_COLS[numCols];

  return (
    <div className={`grid ${gridColsClass} items-center mb-4 bg-slate-100 rounded`}>
      {headerRow}
      {children}
    </div>
  );
}

export default Table;
