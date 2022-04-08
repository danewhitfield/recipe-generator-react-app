import React, { useState } from "react";
import AddIngredients from "./AddIngredients";
import ShowIngredients from "./ShowIngredients";
import ShowRecipes from "./ShowRecipes";

export default function RecipesList() {
  const [recipes, setRecipes] = useState([]);
  // we need a way to check that the ingredients from the user are all available in a given recipe
  const availableRecipes = [
    { recipeName: "Pancakes", ingredientsNeeded: ["milk", "flour", "eggs"] },
    { recipeName: "Coffee", ingredientsNeeded: ["milk", "coffee"] },
    { recipeName: "Shrel", ingredientsNeeded: ["donkey"] },
    { recipeName: "Omlette", ingredientsNeeded: ["eggs", "milk"] },
    { recipeName: "Scrambled Eggs", ingredientsNeeded: ["eggs"] },
    { recipeName: "Poached Egg & Toast", ingredientsNeeded: ["eggs", "bread"] },
    { recipeName: "Tuna Pasta", ingredientsNeeded: ["tuna", "pasta"] },
  ];
  return (
    <div className="App">
      <AddIngredients setRecipes={setRecipes} />
      <ShowIngredients setRecipes={setRecipes} recipes={recipes} />
      <ShowRecipes recipes={recipes} availableRecipes={availableRecipes} />
    </div>
  );
}
