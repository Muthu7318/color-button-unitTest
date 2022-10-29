import { useState } from "react";
import "./App.css";

export const replaceCamelWithSpaces = (color) => {
  return color.replace(/\B([A-Z])\B/g, " $1");
};

function App() {
  const [color, setcolor] = useState("blue");
  const [checked, setChecked] = useState("false");
  const colorChanger = () => {
    if (color === "blue") {
      setcolor("red");
    } else {
      setcolor("blue");
    }
  };

  const checkboxHandler = () => {
    setChecked(!checked);
  };
  return (
    <div>
      <button
        style={{
          backgroundColor: `${
            !checked ? "gray" : color === "blue" ? "red" : "blue"
          }`,
          color: `${!checked ? "white" : "black"}`,
        }}
        onClick={colorChanger}
        disabled={!checked}
      >
        change to {color}
      </button>
      <input
        type="checkbox"
        id="checkbox-id"
        checked={!checked}
        onClick={checkboxHandler}
      ></input>
      <label htmlFor="checkbox-id">Disable button</label>
    </div>
  );
}

export default App;
