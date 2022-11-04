import "./styles.css";
import ColorBox from "./components/ColorBox";
import InputBox from "./components/InputBox";
import { useState } from "react";

const App = () => {
  const [colorName, setColorName] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="App">
      <ColorBox
        colorName={colorName}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <InputBox
        colorName={colorName}
        setColorName={setColorName}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
};

export default App;
