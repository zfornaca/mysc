import React, { Component } from 'react';
import CardContainer from './CardContainer';
import SearchBar from './SearchBar';
import './App.css';

class App extends Component {
  state = { terms: [], location: '' };

  triggerSearch = (passedTerms, passedLocation) => {
    this.setState({ terms: passedTerms, location: passedLocation });
    console.log('a search', passedTerms, passedLocation);
  };

  render() {
    const { terms, location } = this.state;
    return (
      <div className="App">
        <SearchBar
          triggerSearch={(passedTerms, passedLocation) =>
            this.triggerSearch(passedTerms, passedLocation)
          }
        />
        <hr />
        <CardContainer terms={terms} location={location} />
      </div>
    );
  }
}

export default App;
