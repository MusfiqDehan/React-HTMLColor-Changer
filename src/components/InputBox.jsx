import colorNames from "colornames";

const InputBox = ({
  colorName,
  setColorName,
  setHexValue,
  isDarkText,
  setIsDarkText
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="color-name">Color Name</label>
      <input
        autoFocus
        required
        className="input-box"
        autoComplete="off"
        type="text"
        id="color-name"
        placeholder="HexValue or ColorName"
        value={colorName}
        onChange={(e) => {
          setColorName(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button
        className="btn"
        type="button"
        onClick={() => setIsDarkText(!isDarkText)}
      >
        Toggle Text Color
      </button>
    </form>
  );
};

export default InputBox;
