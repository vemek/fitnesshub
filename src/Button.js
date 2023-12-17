function Button({ text, onClick }) {
  return (
    <button className="px-2 py-1 rounded-lg font-semibold text-sm text-white bg-indigo-400" onClick={onClick}>{text}</button>
  );
}

export default Button;
