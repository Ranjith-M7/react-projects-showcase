import React, { useState } from "react";

function ThemeSwitcher() {
  const [bgColor, setBgColor] = useState("white");
  const [textColor, setTextColor] = useState("black");
  const [borderColor, setBorderColor] = useState("black");

  const handleTheme = () => {
    setBgColor(bgColor === "white" ? "black" : "white");
    setTextColor(textColor === "black" ? "white" : "black");
    setBorderColor(borderColor === "black" ? "white" : "black");
  };

  return (
    <div
      className="theme-switcher"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <h1>Optimus Prime {">"} Quotes</h1>
      <div className="container">
        <button
          onClick={() => handleTheme()}
          style={{ borderColor: borderColor, color: textColor }}
        >
          {bgColor === "white" ? "White Theme" : "Black Theme"}
        </button>
        <div className="quotes">
          <p>
            “In any war, there are calms between storms. There will be days when
            we lose faith. Days when our allies turn against us...but the day
            will never come that we forsake this planet and its people.” ―
            Optimus Prime
          </p>
          <p>“Freedom is the right of all sentient beings.” ― Optimus Prime</p>
          <p>
            "We must have courage. We can't ignore the danger. We must conquer
            it.” ― Optimus Prime
          </p>
          <p>
            “There's a thine line between being a hero and being a memory.” ―
            Optimus Prime
          </p>
          <p>"I am Optimus Prime, leader of the autobots.” ― Optimus Prime</p>
        </div>
      </div>
    </div>
  );
}

export default ThemeSwitcher;
