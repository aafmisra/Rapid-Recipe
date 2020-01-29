import React from 'react'

function GroceryList(props) {
    
    function changeStyle(event) {
        console.log(event.target.className)
        if (event.target.className === "notBought") {
            event.target.className = "bought"
        } else {
            event.target.className = "notBought"
        }
    }

    console.log(props.groceryList)
    let groceries = props.groceryList.map(list => {
        return (
            list.map((groc, i) => {
                return (
                    <li key={i} className="notBought" onClick={changeStyle}>
                        {groc}
                    </li>
                )
            })
        )
    })
    return (
        <div>
            <p className="instructions">Click an item to cross it off your list</p>
            <button className="clear" onClick={() => {
                window.localStorage.removeItem('groceries')
                window.location.reload()
            }}>Clear List</button>
            <h3 className="groceries">Grocery List:</h3>
            <div className="groceries">{ groceries }</div>
        </div>
    )
}

export default GroceryList