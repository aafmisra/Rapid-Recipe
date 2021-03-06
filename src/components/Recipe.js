import React, { Component } from 'react';
import unbookmarked from '../unbookmarked.svg';

function Recipe() {
   
    //propmts users to make a search on page load
    if (!this.props.recipes.length) {
      return <p className="instructions">Search ingredients to get started!</p>;
    }
    //iterate over our list of recipes and return a 'card' with various info for each recipe
    const resultsGallery = this.props.recipes.map(eachRecipe => {
      return (
        <div className="recipeCard" key={eachRecipe.recipe.uri}>
          {/* recipe name */}
          <h3>{eachRecipe.recipe.label}</h3>
          {/* recipe image */}
          <img
            src={eachRecipe.recipe.image}
            alt={eachRecipe.recipe.label}
            className="recipePic"
          />
          {/* ingredients list */}
          <h4>Ingredients:</h4>

          <ul key={eachRecipe.recipe.url} className="ingredientList">
            {eachRecipe.recipe.ingredientLines.map((ingr, i) => {
              return <li key={i}>{ingr}</li>;
            })}
          </ul>
          {/* collapsible nutrition facts label */}
          <details className="nutrition">
            <summary>Nutrition Facts</summary>
            <table className="nutritionTable">
              <thead>
                <tr>
                  <th>Nutrient</th>
                  <th>Amount/recipe</th>
                  <th>% Daily value*</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Calories</td>
                  <td>
                    {Math.round(
                      eachRecipe.recipe.totalNutrients.ENERC_KCAL.quantity
                    )}
                    {eachRecipe.recipe.totalNutrients.ENERC_KCAL.unit}
                  </td>
                  <td>
                    {Math.round(
                      eachRecipe.recipe.totalDaily.ENERC_KCAL.quantity
                    )}
                    {eachRecipe.recipe.totalDaily.ENERC_KCAL.unit}
                  </td>
                </tr>
                <tr>
                  <td>Fat</td>
                  <td>
                    {Math.round(eachRecipe.recipe.totalNutrients.FAT.quantity)}
                    {eachRecipe.recipe.totalNutrients.FAT.unit}
                  </td>
                  <td>
                    {Math.round(eachRecipe.recipe.totalDaily.FAT.quantity)}
                    {eachRecipe.recipe.totalDaily.FAT.unit}
                  </td>
                </tr>
                <tr>
                  <td>Saturated Fat</td>
                  <td>
                    {Math.round(
                      eachRecipe.recipe.totalNutrients.FASAT.quantity
                    )}
                    {eachRecipe.recipe.totalNutrients.FASAT.unit}
                  </td>
                  <td>
                    {Math.round(eachRecipe.recipe.totalDaily.FASAT.quantity)}
                    {eachRecipe.recipe.totalDaily.FASAT.unit}
                  </td>
                </tr>
                <tr>
                  <td>Monounsaturated Fat</td>
                  <td colSpan="2">
                    {Math.round(eachRecipe.recipe.totalNutrients.FAMS.quantity)}
                    {eachRecipe.recipe.totalNutrients.FAMS.unit}
                  </td>
                </tr>
                <tr>
                  <td>Polyunsaturated Fat</td>
                  <td colSpan="2">
                    {Math.round(eachRecipe.recipe.totalNutrients.FAPU.quantity)}
                    {eachRecipe.recipe.totalNutrients.FAPU.unit}
                  </td>
                </tr>
                <tr>
                  <td>Carbs</td>
                  <td>
                    {Math.round(
                      eachRecipe.recipe.totalNutrients.CHOCDF.quantity
                    )}
                    {eachRecipe.recipe.totalNutrients.CHOCDF.unit}
                  </td>
                  <td>
                    {Math.round(eachRecipe.recipe.totalDaily.CHOCDF.quantity)}
                    {eachRecipe.recipe.totalDaily.CHOCDF.unit}
                  </td>
                </tr>
                <tr>
                  <td>Fiber</td>
                  <td>
                    {Math.round(
                      eachRecipe.recipe.totalNutrients.FIBTG.quantity
                    )}
                    {eachRecipe.recipe.totalNutrients.FIBTG.unit}
                  </td>
                  <td>
                    {Math.round(eachRecipe.recipe.totalDaily.FIBTG.quantity)}
                    {eachRecipe.recipe.totalDaily.FIBTG.unit}
                  </td>
                </tr>
                <tr>
                  <td>Sugar</td>
                  <td colSpan="2">
                    {Math.round(
                      eachRecipe.recipe.totalNutrients.SUGAR.quantity
                    )}
                    {eachRecipe.recipe.totalNutrients.SUGAR.unit}
                  </td>
                </tr>
                <tr>
                  <td>Protein</td>
                  <td>
                    {Math.round(
                      eachRecipe.recipe.totalNutrients.PROCNT.quantity
                    )}
                    {eachRecipe.recipe.totalNutrients.PROCNT.unit}
                  </td>
                  <td>
                    {Math.round(eachRecipe.recipe.totalDaily.PROCNT.quantity)}
                    {eachRecipe.recipe.totalDaily.PROCNT.unit}
                  </td>
                </tr>
                <tr>
                  <td>Sodium</td>
                  <td>
                    {Math.round(eachRecipe.recipe.totalNutrients.NA.quantity)}
                    {eachRecipe.recipe.totalNutrients.NA.unit}
                  </td>
                  <td>
                    {Math.round(eachRecipe.recipe.totalDaily.NA.quantity)}
                    {eachRecipe.recipe.totalDaily.NA.unit}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3">*Based on a 2,000 calorie/day diet.</td>
                </tr>
              </tfoot>
            </table>
          </details>
          {/* link to full recipe */}
          <a
            href={eachRecipe.recipe.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="fullRecipe">Full Recipe</button>
          </a>
          {/* button to add ingredients to grocery list*/}
          <button
            className="fullRecipe"
            onClick={() => {
              let groceries = this.props.groceryList;
              let ingredients = eachRecipe.recipe.ingredientLines;
              groceries.push(ingredients);
              window.localStorage.setItem(
                'groceries',
                JSON.stringify(groceries)
              );
            }}
          >
            Add to Grocery List
          </button>
          {/* 'button' to add recipe to bookmarks page */}
          <img
            src={unbookmarked}
            alt="bookmark"
            className="bookmark"
            onClick={() => {
              let bookmarks = this.props.bookmarkedRecipes;
              let indx = bookmarks
                .map(b => b.recipe.uri)
                .indexOf(eachRecipe.recipe.uri);
              if (indx === -1) {
                // add the bookmark
                bookmarks.push(eachRecipe);
                window.localStorage.setItem(
                  'bookmarks',
                  JSON.stringify(bookmarks)
                );
              } else {
                // remove the bookmark
                bookmarks.splice(indx, 1);
                window.localStorage.setItem(
                  'bookmarks',
                  JSON.stringify(bookmarks)
                );
                window.location.reload();
              }
            }}
          />
        </div>
      );
    });
    return <div className="resultsGallery">{resultsGallery}</div>;
  
}

export default Recipe;
