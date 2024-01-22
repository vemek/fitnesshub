function TableRow({ title, children, lastRow = false }) {
  const roundedClass = lastRow ? "rounded" : "";
  return (
    <>
      <div className={`p-1 text-lg bg-slate-200 ${roundedClass}`}>{title}</div>
      {children}
    </>
  );
}

export default TableRow;