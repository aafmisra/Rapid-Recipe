import React, { Component } from 'react'

class Results extends Component {
    // console.log(props)
    // componentDidMount() {
    //     function getRecipes() {
    //         const url = `https://api.edamam.com/search?app_id=${process.env.REACT_APP_RECIPE_ID}&app_key=${process.env.REACT_APP_RECIPE_KEY}&from=0&to=12&q=${this.props.includeSearchString}&exclude=${this.props.excludeSearchString}`
    
    //         fetch(url)
    //         .then(response => response.json())
    //         .then(response => {
    //             let recipes = response.hits
    //             this.props.setRecipes(recipes)})

    //     }
    // }

    render() {
        console.log(this.props)
        const resultsGallery = this.props.recipes.map(eachRecipe => {
            return (
              <div className="recipeCard" key={eachRecipe.recipe.uri}>
                <h3>{eachRecipe.recipe.label}</h3>
                <img
                  src={eachRecipe.recipe.image}
                  alt={eachRecipe.recipe.label}
                />
                <details>
                  <summary>
                    <h4>Ingredients:</h4>
                  </summary>
                  <ul>
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
              </div>
            );
        })
        return (
            <div>
                {resultsGallery}
            </div>
        )
    }
}

export default Results