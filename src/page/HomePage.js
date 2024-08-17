import React from "react";
import { NavLink } from "react-router-dom";

function HomePage() {
  // Array of project names and links
  const projects = [
    { name: "Meal App", link: "/meal-app" },
    { name: "Sign Up", link: "/signup" },
    { name: "Todo App", link: "/todo-app" },
    { name: "Accordion", link: "/accordion" },
    { name: "Calculator", link: "/calculator" },
    { name: "Counter App", link: "/counter-app" },
    { name: "Testimonial", link: "/testimonial" },
    { name: "Theme Switcher", link: "/theme-switcher" },
    { name: "Toggle Search", link: "/toggle-search" },
  ];
  
  return (
    <>
      <div className="homepage" id="home">
        <div className="container">
          <div className="header d-flex justify-content-between align-items-center py-5">
            <a href="#" className="title">
              React Projects
            </a>
            <button>White Theme</button>
          </div>

          <section className="projects pb-5">
            <div className="row g-5">
              {projects.map(({ name, link }, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4">
                  <NavLink to={link}>
                    <div className="project">
                      <div className="project-img">
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
