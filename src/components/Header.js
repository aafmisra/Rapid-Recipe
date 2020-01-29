import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../rapid-recipe-logo.svg';

function Header() {
  return (
    <div className="header">
      <div className="brand">
        <img src={logo} alt="logo" className="logo" />
        <Link to="/">
          <h1>Rapid Recipe</h1>
        </Link>
      </div>
      <div className="headerLinks">
      <Link to="/bookmarks">
        <span>My Recipes</span>
      </Link>
      <Link to="/groceries">
        <span>My Groceries</span>
      </Link>
      </div>
    </div>
  );
}

export default Header;
