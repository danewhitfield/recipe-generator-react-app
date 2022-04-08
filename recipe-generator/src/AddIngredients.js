import React, { useState } from "react";
import { FaPizzaSlice } from "react-icons/fa";

export default function AddIngredients({ setRecipes }) {
  const [newIngredients, setNewIngredients] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecipes((currIngredientList) => {
      const newIngredientList = [...currIngredientList];
      newIngredientList.push(newIngredients);
      return newIngredientList;
    });
    setNewIngredients("");
  };

  return (
    <div className="form-container">
      {/* <h2 className="ingredient-title">ADD 3 INGREDIENTS</h2> */}
      <form onSubmit={handleSubmit} action="">
        <div className="input-area">
          <input
            className="input-box"
            type="text"
            value={newIngredients}
            onChange={(e) => setNewIngredients(e.target.value)}
            placeholder="milk, flour etc."
            required
          />
          <button className="submit-btn">
            <span className="pizza-icon">
              <FaPizzaSlice />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
