import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import mealAppImg from "../assets/images/meal-app.png";
import signupImg from "../assets/images/signup.png";
import todoImg from "../assets/images/todo.png";
import accordionImg from "../assets/images/accordion.png";
import calculatorImg from "../assets/images/calculator.png";
import counterAppImg from "../assets/images/counter.png";
import testimonialImg from "../assets/images/testimonial.png";
import ThemeSwitcherImg from "../assets/images/theme-switcher.png";
import toggleSearchImg from "../assets/images/toggle-search.png";
import comingSoonImg from "../assets/images/coming-soon.webp"

function HomePage() {
  const [bgColor, setBgColor] = useState("white");
  const [textColor, setTextColor] = useState("black");
  const [borderColor, setBorderColor] = useState("black");

  const handleTheme = () => {
    setBgColor(bgColor === "white" ? "black" : "white");
    setTextColor(textColor === "black" ? "white" : "black");
    setBorderColor(borderColor === "black" ? "white" : "black");
  };

  // Array of project names and links
  const projects = [
    { name: "Meal App", projectPath: "/meal-app", imageUrl: mealAppImg },
    { name: "Sign Up", projectPath: "/signup", imageUrl: signupImg },
    { name: "Todo App", projectPath: "/todo-app", imageUrl: todoImg },
    { name: "Accordion", projectPath: "/accordion", imageUrl: accordionImg },
    { name: "Calculator", projectPath: "/calculator", imageUrl: calculatorImg },
    {
      name: "Counter App",
      projectPath: "/counter-app",
      imageUrl: counterAppImg,
    },
    {
      name: "Testimonial",
      projectPath: "/testimonial",
      imageUrl: testimonialImg,
    },
    {
      name: "Theme Switcher",
      projectPath: "/theme-switcher",
      imageUrl: ThemeSwitcherImg,
    },
    {
      name: "Toggle Search",
      projectPath: "/toggle-search",
      imageUrl: toggleSearchImg,
    },
    { name: "Coming Soon...", projectPath: "/", imageUrl: comingSoonImg },
  ];

  return (
    <>
      <div
        className="homepage"
        id="home"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <div className="container">
          <div className="header d-flex justify-content-between align-items-center py-5">
            <h1
              className="title"
              style={{
                backgroundColor: bgColor,
                color: textColor,
                borderColor: borderColor,
              }}
            >
              React Projects
            </h1>
            <button
              className="theme"
              style={{
                backgroundColor: bgColor,
                color: textColor,
                border: `2px solid ${borderColor}`,
              }}
              onClick={() => handleTheme()}
            >
              {bgColor === "white" ? "White Theme" : "Black Theme"}
            </button>
          </div>

          <section className="projects pb-5">
            <div className="row g-5">
              {projects.map(({ name, projectPath, imageUrl }, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4">
                  <NavLink to={projectPath}>
                    <div className="project">
                      <div
                        className="project-img"
                        style={
                          {
                            backgroundImage: `url(${imageUrl})`
                            // height: "300px",
                            // position: "relative",
                            // backgroundRepeat: "no-repeat",
                            // backgroundPosition: "center",
                            // backgroundSize: "cover",
                            // transition: "opacity 3s ease, transform 0.3s ease",
                          }
                        }
                      >
                        <p className="project-title">{name}</p>
                      </div>
                    </div>
                  </NavLink>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default HomePage;
