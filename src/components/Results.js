import React from 'react';
import Recipe from './Recipe';

function Results(props) {
  return (
    <div className="results">
      <Recipe
        recipes={props.recipes}
        bookmarkedRecipes={props.bookmarkedRecipes}
      />
    </div>
  );
}

export default Results;
