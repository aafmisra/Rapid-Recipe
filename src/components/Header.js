import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../rapid-recipe-logo.svg'

function Header() {
    return (
      <div className="header">
          <img src={ logo } alt="logo" className="logo"/>
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