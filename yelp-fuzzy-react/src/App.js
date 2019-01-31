import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ContentArea from './ContentArea';
import './output.css';

class App extends Component {
  state = { terms: [], location: '' };

  triggerSearch = (passedTerms, passedLocation) => {
    this.setState({ terms: passedTerms, location: passedLocation });
  };

  render() {
    const { terms, location } = this.state;
    return (
      <div className="App">
        <div className="header">
          <span className="acronym">MYSC</span>
          <span className="fullName">Multiple Yelp Search Collator</span>
        </div>
        <SearchBar
          triggerSearch={(passedTerms, passedLocation) =>
            this.triggerSearch(passedTerms, passedLocation)
          }
        />
        <ContentArea terms={terms} location={location} />
      </div>
    );
  }
}

export default App;
