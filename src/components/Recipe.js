import React, { Component } from 'react';
import bookmark from '../bookmark.svg'

class Recipe extends Component {
  render() {
    if (!this.props.recipes.length) {
      return <p className="instructions">Search ingredients to get started!</p>
    }
    console.log(this.props);
    const resultsGallery = this.props.recipes.map(eachRecipe => {
      return (
        <div className="recipeCard" key={eachRecipe.recipe.uri}>
          <h3>{eachRecipe.recipe.label}</h3>
          <img src={eachRecipe.recipe.image} alt={eachRecipe.recipe.label} className="recipePic"/>
          
              <h4>Ingredients:</h4>
            
            <ul key={eachRecipe.recipe.url} className="ingredientList">
              {eachRecipe.recipe.ingredientLines.map((ingr, i) => {
                return <li key={i}>{ingr}</li>;
              })}
            </ul>
          
          <a
            href={eachRecipe.recipe.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Full Recipe</button>
          </a>
          <button
            onClick={() => {
              console.log(eachRecipe);
              this.props.bookmarkedRecipes.push(eachRecipe);
              window.localStorage.setItem("bookmarks", JSON.stringify(this.props.bookmarkedRecipes));
              console.log('pushed', this.props.bookmarkedRecipes);
            }}
          >
            Save Recipe
          </button>
        </div>
      );
    });
    return <div className="resultsGallery">{resultsGallery}</div>;
  }
}

export default Recipe;
