import React from "react";

const RecipeCart = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <h3>{recipe.name}</h3>
      <p><strong>Chef:</strong> {recipe.chef}</p>
      <p>
        <strong>Rating:</strong> {recipe.rating} ⭐ ({recipe.reviews} reviews)
      </p>
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeCart;

