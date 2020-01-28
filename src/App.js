import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import Results from './components/Results';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      includeSearchString: '',
      excludeSearchString: '',
      bookmarkedRecipes: JSON.parse(
        window.localStorage.getItem('bookmarks') || '[]'
      )
    };
  }

  componentDidMount = () => {
    this.selectedCheckboxes = new Set()
  }

  toggleCheckbox= event => {
    if (this.selectedCheckboxes.has(event.target)) {
      this.selectedCheckboxes.delete(event.target);
    } else {
      this.selectedCheckboxes.add(event.target)
    }
    console.log(this.selectedCheckboxes)
  }


  setRecipes = recipes => {
    this.setState({ recipes: recipes });
  };

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let splitString = this.state.excludeSearchString
      .split(' ')
      .map(subStr => {
        return `&excluded=${subStr}`;
      })
      .join('');
      let setArray = Array.from(this.selectedCheckboxes)
      console.log(setArray)
      let filterArray = setArray.map(entry => {
        return `&${entry.name}=${entry.value}`
      }).join('')
      console.log(filterArray)
    this.getRecipes(splitString, filterArray);
  };

  getRecipes = (splitString, filterArray) => {
    const url = `https://api.edamam.com/search?app_id=${process.env.REACT_APP_RECIPE_ID}&app_key=${process.env.REACT_APP_RECIPE_KEY}&from=0&to=12&q=${this.state.includeSearchString}${splitString}${filterArray}`;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        let recipes = response.hits;
        this.setRecipes(recipes);
        console.log(url)
      });
  };

  render() {
    return (
      <div className="App">
        <Header />
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
                />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
