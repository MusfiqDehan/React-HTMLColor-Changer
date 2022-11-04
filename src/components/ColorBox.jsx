const ColorBox = ({ colorName, hexValue, isDarkText }) => {
  return (
    <div
      className="color-box"
      style={{
        backgroundColor: colorName,
        color: isDarkText ? "#000" : "#FFF"
      }}
    >
      <p>{colorName ? colorName : "Color Name"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </div>
  );
};

export default ColorBox;
