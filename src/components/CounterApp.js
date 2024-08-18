import React, { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="counter-app d-flex justify-content-center align-items-center">
        <div className="counter-container d-flex flex-column justify-content-center align-items-center">
          <h1>{count}</h1>
          <div className="btns d-flex justify-content-between align-items-center">
            <button onClick={() => setCount(count + 1)}>
              <i className="fa fa-plus"></i>
            </button>
            <button>
              <i
                onClick={() => setCount(0)}
                class="fa-solid fa-rotate-right"
              ></i>
            </button>
            <button>
              <i
                onClick={() => setCount(count - 1)}
                className="fa fa-minus"
              ></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CounterApp;
