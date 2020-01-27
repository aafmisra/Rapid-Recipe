import React from 'react';
import Recipe from './Recipe'

function Results(props) {
  return (
      <div>
          <Recipe recipes={props.recipes} bookmarkedRecipes={props.bookmarkedRecipes}/>
      </div>
  )
}

export default Results;
