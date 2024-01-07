function Button({ text, onClick, type = "primary" }) {
  const bgCol = type === "primary" ? "bg-cyan-600" : type === "danger" ? "bg-red-500" : "bg-cyan-500";
  return (
    <button className={`px-2 py-1 rounded-lg font-semibold text-sm text-white ${bgCol}`} onClick={onClick}>{text}</button>
  );
}

export default Button;
