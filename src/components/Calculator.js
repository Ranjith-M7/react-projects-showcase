import React, { useState } from "react";

function Calculator() {
  const [inputValue, setInputValue] = useState("");

  const display = (value) => {
    setInputValue(inputValue + value);
  };
  const handleClear = () => {
    setInputValue("");
  };
  
  const calculate = () => {
    try {
      const answer = eval(inputValue).toString();
      setInputValue(answer);
    } catch (error) {
      setInputValue("Error");
      setTimeout(() => {
        setInputValue("");
      }, 1500);
    }
  };

  const handleDelete = () => {
    const answers = inputValue.slice(0, -1);
    setInputValue(answers);
  };

  return (
    <>
      <div className="calculator">
        <div className="cal-container shadow border">
          <form>
            <input type="text" value={inputValue} placeholder="0" readOnly />
          </form>

          <span className="clr" onClick={() => handleClear()}>
            C
          </span>
          <span onClick={() => handleDelete()}>
            <i className="fa-solid fa-delete-left"></i>
          </span>
          <span onClick={() => display("%")}>%</span>
          <span onClick={() => display("/")}>/</span>

          <span onClick={() => display("7")}>7</span>
          <span onClick={() => display("8")}>8</span>
          <span onClick={() => display("9")}>9</span>
          <span onClick={() => display("*")}>*</span>

          <span onClick={() => display("4")}>4</span>
          <span onClick={() => display("5")}>5</span>
          <span onClick={() => display("6")}>6</span>
          <span onClick={() => display("-")}>-</span>

          <span onClick={() => display("1")}>1</span>
          <span onClick={() => display("2")}>2</span>
          <span onClick={() => display("3")}>3</span>
          <span onClick={() => display("+")}>+</span>

          <span onClick={() => display("0")}>0</span>
          <span onClick={() => display("00")}>00</span>
          <span onClick={() => display(".")}>.</span>
          <span className="clr" onClick={() => calculate()}>
            =
          </span>
        </div>
      </div>
    </>
  );
}

export default Calculator;
