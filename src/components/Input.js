function Input({ type, value, onChange, unit }) {
  const paddingForLabel = unit === undefined ? "" : "pr-8";
  const marginForLabel =  unit === undefined ? "" : "-ml-7";
  return (
    <div className="whitespace-nowrap inline-block w-full min-w-16 border-solid border-2 border-cyan-500 has-[:focus]:border-cyan-400 rounded-lg px-2 py-1">
      <input className={`focus:outline-none w-full ${paddingForLabel}`} type={type} onChange={onChange} value={value} />
      <span className={marginForLabel}>{unit}</span>
    </div>
  );
}

export default Input;
