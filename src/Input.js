function Input({ type, value, className, onChange }) {
  return (
    <input className={`px-2 py-1 border-solid border-2 border-indigo-400 rounded-lg ${className}`} type={type} onChange={onChange} value={value} />
  );
}

export default Input;
