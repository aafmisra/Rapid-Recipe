import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
      <div>
        <Link to="/">
          <h1>Rapid Recipe</h1>
        </Link>
        <Link to="/bookmarks">
          <span>My Recipes</span>
        </Link>
      </div>
    );
}

export default Header