import React from "react";

export default function ShowIngredients({ recipes, setRecipes }) {
  const handleDelete = (recipesCheck) => {
    setRecipes((currState) => {
      const newState = [...currState];
      return newState.filter((recipe) => recipe !== recipesCheck);
    });
  };
  return (
    <div className="ingredient-container">
      <div className="show-ingredient">
        {/* <h3>SHOW INGREDIENTS</h3> */}
        {recipes.map((recipe) => {
          return (
            <div className="ingredient-item">
              <button
                className="delete-btn"
                onClick={() => handleDelete(recipe)}
              >
                <li className="ingredient-li" key={recipe}>
                  {recipe}
                </li>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
