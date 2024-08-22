import React, { useState } from "react";

function ToggleSearch() {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState();

  const handleClick = (e) => {
    setBgColor("blueviolet");
    if (e.target.className === "search-container") {
      setShowInput(false);
      setBgColor();
    }
  };

  return (
    <>
      <div
        className="search-container"
        onClick={handleClick}
        style={{ backgroundColor: bgColor }}
      >
        {showInput ? (
          <input
            type="text"
            placeholder="Search..."
            className="border shadow p-2"
          />
        ) : (
          <i
            class="fa-solid fa-magnifying-glass"
            onClick={() => setShowInput(true)}
          ></i>
        )}
      </div>
    </>
  );
}

export default ToggleSearch;
