import React, { Component } from 'react';

class Recipe extends Component {
  render() {
    console.log(this.props);
    const resultsGallery = this.props.recipes.map(eachRecipe => {
      return (
        <div className="recipeCard" key={eachRecipe.recipe.uri}>
          <h3>{eachRecipe.recipe.label}</h3>
          <img src={eachRecipe.recipe.image} alt={eachRecipe.recipe.label} />
          <details>
            <summary>
              <h4>Ingredients:</h4>
            </summary>
            <ul key={eachRecipe.recipe.url}>
              {eachRecipe.recipe.ingredientLines.map(ingr => {
                return <li>{ingr}</li>;
              })}
            </ul>
          </details>
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
    return <div>{resultsGallery}</div>;
  }
}

export default Recipe;
