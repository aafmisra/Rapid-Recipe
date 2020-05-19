import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import Results from './components/Results';
import GroceryList from './components/GroceryList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      errorMsg: '',
      includeSearchString: '',
      excludeSearchString: '',
      bookmarkedRecipes: JSON.parse(
        window.localStorage.getItem('bookmarks') || '[]'
      ),
      groceryList: JSON.parse(window.localStorage.getItem('groceries') || '[]')
    };
  }
  //on page load, create new Set to store checkboxes that get clicked
  componentDidMount = () => {
    this.selectedCheckboxes = new Set();
  };

  //when the "checked" state of a checkbox is clicked, either add or remove it from the Set
  toggleCheckbox = event => {
    if (this.selectedCheckboxes.has(event.target)) {
      this.selectedCheckboxes.delete(event.target);
    } else {
      this.selectedCheckboxes.add(event.target);
    }
  };
  // set the recipes state to the response we get from the fetch
  setRecipes = recipes => {
    this.setState({ recipes: recipes });
  };
  //onchange handler for input search boxes
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };
  // converts values of inputs into variables that can be passed into the fetch url
  handleSubmit = event => {
    this.setState({ errorMsg: '' });
    event.preventDefault();
    let splitString = this.state.excludeSearchString
      .split(' ')
      .map(subStr => {
        return `&excluded=${subStr}`;
      })
      .join('');
    let setArray = Array.from(this.selectedCheckboxes);
    let filterArray = setArray
      .map(entry => {
        return `&${entry.name}=${entry.value}`;
      })
      .join('');
    this.getRecipes(splitString, filterArray);
  };
  //take search inputs and app/key info, and return a list of recipes
  getRecipes = (splitString, filterArray) => {
    const url = `https://api.edamam.com/search?app_id=${process.env.REACT_APP_RECIPE_ID}&app_key=${process.env.REACT_APP_RECIPE_KEY}&from=0&to=12&q=${this.state.includeSearchString}${splitString}${filterArray}`;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        if (response.count) {
          let recipes = response.hits;
          this.setRecipes(recipes);
        } else {
          this.setState({
            errorMsg:
              "Oops! Looks like we didn't find any recipes with those ingredients."
          });
        }
      });
  };
  //render search form, search results, bookmarks page, and grocery list
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <Switch>
            <Route
              path="/"
              exact
              render={() => {
                return (
                  <div>
                    <SearchForm
                      handleChange={this.handleChange}
                      handleSubmit={this.handleSubmit}
                      toggleCheckbox={this.toggleCheckbox}
                      getRecipes={this.getRecipes}
                      searchFilters={this.state.searchFilters}
                      includeSearchString={this.state.includeSearchString}
                      excludeSearchString={this.state.excludeSearchString}
                    />
                    <Results
                      recipes={this.state.recipes}
                      bookmarkedRecipes={this.state.bookmarkedRecipes}
                      groceryList={this.state.groceryList}
                    />
                  </div>
                );
              }}
            />
            <Route
              path="/bookmarks"
              render={() => {
                return (
                  <Results
                    recipes={this.state.bookmarkedRecipes}
                    bookmarkedRecipes={this.state.bookmarkedRecipes}
                    groceryList={this.state.groceryList}
                  />
                );
              }}
            />
            <Route
              path="/groceries"
              render={() => {
                return <GroceryList groceryList={this.state.groceryList} />;
              }}
            />
          </Switch>
          <p className="instructions error">{this.state.errorMsg}</p>
        </div>
        <footer>
          <p>
            ©2020 Asha Misra{' '}
            <span role="img" aria-label="elephant emoji">
              &#128024;
            </span>
          </p>
          <a href="https://github.com/aafmisra/Rapid-Recipe">
            Check out the repo on GitHub
          </a>
          <a href="https://www.linkedin.com/in/asha-misra/">
            Find me on LinkedIn
          </a>
          <a href="https://developer.edamam.com/edamam-docs-recipe-api">
            Built with Edamam Recipe Search API
          </a>
          <a href="https://thenounproject.com/ageeva_say/">Logo by Aaz</a>
        </footer>
      </div>
    );
  }
}

export default App;
