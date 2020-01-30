import React from 'react';

function GroceryList(props) {
  //change style of grocery item on click, so user can cross item off list
  function changeStyle(event) {
    if (event.target.className === 'notBought') {
      event.target.className = 'bought';
    } else {
      event.target.className = 'notBought';
    }
  }
  //iterate over the array of groceries to create a list
  let groceries = props.groceryList.map(list => {
    return list.map((groc, i) => {
      return (
        <li key={i} className="notBought" onClick={changeStyle}>
          {groc}
        </li>
      );
    });
  });
  //return instructions heading, a button that clears the list by resetting localStorage, and the list of groceries
  return (
    <div>
      <p className="instructions">Click an item to cross it off your list</p>
      <button
        className="clear"
        onClick={() => {
          window.localStorage.removeItem('groceries');
          window.location.reload();
        }}
      >
        Clear List
      </button>
      <h3 className="groceries">Grocery List:</h3>
      <div className="groceries">{groceries}</div>
    </div>
  );
}

export default GroceryList;
