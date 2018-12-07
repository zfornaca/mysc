import React, { Component } from 'react';

class SearchBar extends Component {
  state = { terms: [], inputValue: '' };

  handleChange = evt => {
    this.setState({ inputValue: evt.target.value });
  };

  handleAddTerm = evt => {
    evt.preventDefault();
    this.setState({
      terms: [...this.state.terms, this.state.inputValue],
      inputValue: ''
    });
    evt.target.reset();
  };

  handleSubmitSearch = evt => {
    const passedTerms = this.state.terms;
    this.props.triggerSearch(passedTerms);
  };

  render() {
    const terms = this.state.terms.map(term => {
      return <span>{term} </span>;
    });
    return (
      <div className="searchBar">
        (Search bar)
        <form onSubmit={this.handleAddTerm}>
          <label>Enter search term</label>
          <input
            type="text"
            value={this.state.inputvalue}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
        {terms}
        <button onClick={this.handleSubmitSearch}>Submit search</button>
      </div>
    );
  }
}

export default SearchBar;
