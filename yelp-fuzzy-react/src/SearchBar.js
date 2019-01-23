import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';

// inputValue => termInput
// add: locInput

class SearchBar extends Component {
  state = {
    terms: [],
    termInput: '',
    locInput: '',
    location: '',
    invalidSearch: false
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleAddTerm = evt => {
    evt.preventDefault();
    this.setState({
      terms: [...this.state.terms, this.state.termInput],
      termInput: ''
    });
    evt.target.reset();
  };

  handleRemoveTerm = deletedTerm => {
    console.log(deletedTerm);
    const updatedTerms = this.state.terms.filter(term => {
      return term !== deletedTerm;
    });
    this.setState({ terms: updatedTerms });
  };

  handleSetLocation = evt => {
    evt.preventDefault();
    this.setState({ location: this.state.locInput, locInput: '' });
  };

  handleSubmitSearch = evt => {
    const passedTerms = this.state.terms;
    const passedLocation = this.state.location;
    if (passedTerms.length === 0 || passedLocation === '') {
      console.log('invalid search');
      this.setState({ invalidSearch: true });
      return;
    }
    this.props.triggerSearch(passedTerms, passedLocation);
    this.setState({
      terms: [],
      termInput: '',
      locInput: '',
      location: '',
      invalidSearch: false
    });
  };

  render() {
    const terms = this.state.terms.map(term => {
      return (
        <div
          className="providedTerm  ticTac"
          onClick={() => this.handleRemoveTerm(term)}
          key={uuidv1()}
        >
          {term} <span className="tinyX">X</span>
        </div>
      );
    });
    const location = this.state.location;
    return (
      <div className="searchBar">
        <div className="searchConfig">
          <form onSubmit={this.handleSetLocation}>
            <label className="searchLabel">Set search location:</label>
            <div className="inputChiclet">
              <input
                type="text"
                name="locInput"
                value={this.state.locInput}
                onChange={this.handleChange}
                className="textInput"
              />
              <input type="submit" value="SET" className="submitInput" />
            </div>
            {location ? (
              <div className="providedLoc ticTac"> {location} </div>
            ) : (
              ''
            )}
          </form>
          <form onSubmit={this.handleAddTerm}>
            <label className="searchLabel">Add search term:</label>
            <div className="inputChiclet">
              <input
                type="text"
                name="termInput"
                value={this.state.termInput}
                onChange={this.handleChange}
                className="textInput"
              />
              <input type="submit" value="ADD" className="submitInput" />
            </div>
            <div className="termsHolder">{terms.length ? terms : ''}</div>
          </form>
          {/* {this.state.invalidSearch ? invalidMsg : ''} */}
        </div>
        <div className="submitBtnHolder">
          <button onClick={this.handleSubmitSearch} className="submitBtn">
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
