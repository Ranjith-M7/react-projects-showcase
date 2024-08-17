import React, { useState, useEffect } from "react";
import axios from "axios";

function MealApp() {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    const fetchFoodItems = async () => {
      return await axios
        .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
        .then((response) => setFoodItems(response.data.meals))
        .catch((e) => console.log(e));
    };
    fetchFoodItems();
  }, []);

  console.log(foodItems);

  return (
    <div className="meal-app py-5">
      <div className="container">
        <h1 className="title mb-5">Meals</h1>
        <div className="row g-5">
          {foodItems &&
            foodItems.map(({ strMeal, strMealThumb, idMeal }, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <div className="card border">
                  <div className="thumb">
                    <img
                      src={strMealThumb}
                      className="img-fluid"
                      alt={strMeal}
                    />
                  </div>
                  <div className="content">
                    <p className="food-name">{strMeal}</p>
                    <p className="food-id">#{idMeal}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MealApp;
