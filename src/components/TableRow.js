function TableRow({ title, children, lastRow = false }) {
  const roundedClass = lastRow ? "rounded" : "";
  return (
    <>
      <div className={`p-2 text-lg bg-slate-200 text-right ${roundedClass}`}>{title}</div>
      {children}
    </>
  );
}

export default TableRow;