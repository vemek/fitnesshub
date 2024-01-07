function Input({ type, value, className = "", onChange, unit }) {
  return (
    <div className={`whitespace-nowrap border-solid border-2 border-cyan-500 has-[:focus]:border-cyan-600 rounded-lg px-2 py-1  ${className}`}>
      <input className="focus:outline-none" type={type} onChange={onChange} value={value} />
      <span className="ml-2">{unit}</span>
    </div>
  );
}

export default Input;
