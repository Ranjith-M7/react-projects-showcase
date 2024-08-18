import React, { useState } from "react";

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "Leo das",
    },
    {
      quote:
        "The blue color and the design makes this product even more beautiful",
      author: "Granny Tsunade",
    },
    {
      quote: "I have been using the product more than a year!",
      author: "Thamizhini Akilan",
    },
  ];

  const handlePrev = () => {
    const a = (currentIndex + testimonials.length - 1) % testimonials.length;
    setCurrentIndex(a);
    console.log(a);
  };

  const handleNext = () => {
    const a = (currentIndex + 1) % testimonials.length;
    setCurrentIndex(a);
  };

  return (
    <>
      <div className="testimonials">
        <div className="t-container">
          <div className="testimonial">
            <div className="quote">{testimonials[currentIndex].quote}</div>
            <div className="author">- {testimonials[currentIndex].author}</div>
            <div className="btns d-flex justify-content-around align-items-center">
              <button onClick={() => handlePrev()}>
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button onClick={() => handleNext()}>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
