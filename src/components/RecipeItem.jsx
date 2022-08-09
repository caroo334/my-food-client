import React from "react";
import '../styles/RecipeItem.css'

export default function RecipeItem({ recipe }) {
    return (
        <div className="recipeItemContainer">
            <div className="recipeTitle">{recipe.title} </div>
            <img className="recipeImg" src={recipe.image} />
            <div className="recipeIngredients">
                {
                    recipe.extendedIngredients.map(ingredient => <span>{ingredient.name} - {ingredient.original}</span>)
                }
            </div>
            <div className="recipeInstruction" dangerouslySetInnerHTML={{__html: recipe.instructions}} />
        </div>
    )
}