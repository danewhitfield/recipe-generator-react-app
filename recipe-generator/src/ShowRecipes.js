import { useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import Dropdown from "./Dropdown";

export default function ShowRecipes({ recipes, availableRecipes }) {
  const checkIngredients = [];

  availableRecipes.forEach((recipe) => {
    const isEvery = recipe.ingredientsNeeded.every((ingredient) => {
      return recipes.some((userIngredient) => ingredient === userIngredient);
    });
    if (isEvery) {
      checkIngredients.push(recipe);
    }
  });

  if (checkIngredients.length) {
    return (
      <div className="show-recipes">
        <h3>You can make...</h3>
        {checkIngredients.map((recipe) => {
          return (
            <div className="show-recipe-card">
              <li key={recipe.recipeName}>{recipe.recipeName}</li>
              <button className="show-more-btn">
                <span className="down-icon">
                  <BsFillCaretDownFill />
                </span>
              </button>
              {/* {recipe.ingredientsNeeded.map((ingredient) => {
                return (
                  <div className="dropdown">
                    <li>Ingredient 1</li>
                    <li>Ingredient 2</li>
                    <li>Ingredient 3</li>
                    <li>Ingredient 4</li>
                    <li>Ingredient 5</li>
                  </div>
                ); */}
              {/* })} */}
            </div>
          );
        })}
      </div>
    );
  }
}
