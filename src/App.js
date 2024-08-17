import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./page/HomePage";
import Accordion from "./components/Accordion";
import Calculator from "./components/Calculator";
import CounterApp from "./components/CounterApp";
import Signup from "./components/Signup";
import MealApp from "./components/MealApp";
import Testimonial from "./components/Testimonial";
import ThemeSwitcher from "./components/ThemeSwitcher";
import TodoApp from "./components/TodoApp";
import ToggleSearch from "./components/ToggleSearch";

import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/counter-app" element={<CounterApp />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/meal-app" element={<MealApp />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/theme-switcher" element={<ThemeSwitcher />} />
        <Route path="/todo-app" element={<TodoApp />} />
        <Route path="/toggle-search" element={<ToggleSearch />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
