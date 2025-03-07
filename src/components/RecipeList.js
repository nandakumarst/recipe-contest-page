import React, { useState } from "react";
import RecipeCard from "./RecipeCard";


const RecipeList = () => {
  const [recipes, setRecipes] = useState(recipesData);

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
