const SIZES = Object.freeze({
  small: ["w-24", "w-12"],
  normal: ["w-64", "w-52"],
})

function Input({ type, value, onChange, unit, size = "normal" }) {
  console.log(size);
  let [outerWrapperSize, innerWrapperSize] = SIZES[size];
  if (unit === undefined) {
    innerWrapperSize = "w-full";
  }

  return (
    <div className={`whitespace-nowrap inline-block border-solid border-2 border-cyan-500 has-[:focus]:border-cyan-400 rounded-lg px-2 py-1  ${outerWrapperSize}`}>
      <div className={`${innerWrapperSize} inline-block`}>
        <input className={`focus:outline-none w-full`} type={type} onChange={onChange} value={value} />
      </div>
      <span className="ml-2">{unit}</span>
    </div>
  );
}

export default Input;
