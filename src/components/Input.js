function Input({ type, value, onChange, unit }) {
  const marginForLabel = unit === undefined ? "0" : "6";
  return (
    <div className="inline-block w-full border-solid border-2 border-cyan-500 has-[:focus]:border-cyan-400 rounded-lg px-2 py-1">
      <input className={`focus:outline-none w-full min-w-10 pr-${marginForLabel}`} type={type} onChange={onChange} value={value} />
      <span className={`-ml-${marginForLabel}`}>{unit}</span>
    </div>
  );
}

export default Input;
