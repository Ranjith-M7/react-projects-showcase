import React, { useState } from "react";
import { accordionData } from "../Utils/Content";

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(false);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="accordion d-flex justify-content-center align-items-center">
        <div className="acc-container">
          <h1>Accordion</h1>
          {accordionData.map(({ title, content }, index) => (
            <div key={index} className="list">
              <div
                className="header d-flex justify-content-between align-items-center"
                onClick={() => toggleAccordion(index)}
              >
                <span className="question">{title}</span>
                <button>
                  <i
                    className={`fa-solid ${
                      activeIndex === index ? "fa-minus" : "fa-plus"
                    }`}
                  ></i>
                </button>
              </div>
              {activeIndex === index && (
                <div className="content">
                  <p>{content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Accordion;
