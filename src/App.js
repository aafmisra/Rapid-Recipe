import React, { Component } from 'react';
import Header from './components/Header'
import SearchForm from './components/SearchForm'
import Results from './components/Results'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: recipes
    }
  }

  setRecipes() {
    this.setState({ recipes: recipes })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchForm />
        <Results setRecipes={this.setRecipes}/>
      </div>
    );
  }
}

export default App;
