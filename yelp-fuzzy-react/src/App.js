import React, { Component } from 'react';
import CardContainer from './CardContainer';
import SearchBar from './SearchBar';
import './App.css';

class App extends Component {
  state = { terms: [] };

  triggerSearch = passedTerms => {
    this.setState({ terms: passedTerms });
    console.log('a search');
  };

  render() {
    const terms = this.state.terms;
    return (
      <div className="App">
        <SearchBar
          triggerSearch={passedTerms => this.triggerSearch(passedTerms)}
        />
        <hr />
        <CardContainer terms={terms} />
      </div>
    );
  }
}

export default App;
