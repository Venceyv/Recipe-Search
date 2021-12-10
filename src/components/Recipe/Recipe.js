import React, { useState } from "react"
import RecipeDetails from "../RecipeDetails/RecipeDetails"
const Recipe = ({ recipe }) => {
  const [showIngredient, setShowIngredient] = useState(false)

  const { label, image, url, ingredients } = recipe.recipe
  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label}></img>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Instruction Link
      </a>
      <button onClick={() => setShowIngredient(!showIngredient)}>
        Ingredients
      </button>
      {showIngredient && <RecipeDetails ingredients={ingredients} />}
    </div>
  )
}

export default Recipe
