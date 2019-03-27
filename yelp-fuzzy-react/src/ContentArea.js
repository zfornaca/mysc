import React, { Component } from 'react';
import axios from 'axios';
import initialMsg from './text';
import CardContainer from './CardContainer';
import Legend from './Legend';

// const openShiftUrl =
//   'https://app-yelp-express.1d35.starter-us-east-1.openshiftapps.com/';

const herokuUrl = 'https://mysc-middle.herokuapp.com/';

class ContentArea extends Component {
  state = {
    businesses: [],
    searchInitiated: false,
    loading: false,
    matchAll: false
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.terms.join('') !== nextProps.terms.join('')) {
      this.getDataFromBackend(nextProps.terms, nextProps.location);
    }
  }

  getDataFromBackend(terms, location) {
    console.log(`${herokuUrl}?terms=${terms.join(',')}&location=${location}`);
    this.setState({ searchInitiated: true, loading: true });
    axios
      .get(`${herokuUrl}?terms=${terms.join(',')}&location=${location}`)
      .then(res => {
        const businesses = Object.values(res.data);
        this.setState({ businesses, loading: false });
        console.log('data loaded');
      });
  }

  render() {
    return (
      <div className="ContentArea">
        {/* Renders legend & toggle once search submitted, else suggests a search */}
        {this.state.searchInitiated ? (
          <div className="stickyBar">
            <Legend terms={this.props.terms} location={this.props.location} />
            <span>toggle goes here</span>
          </div>
        ) : (
          <div>{initialMsg}</div>
        )}

        {/* Renders nothing or loading spinner or "no results found" or result cards */}
        {!this.state.searchInitiated ? (
          ''
        ) : this.state.loading ? (
          <div className="lds-ring">
            <div />
            <div />
            <div />
            <div />
          </div>
        ) : !this.state.businesses.length ? (
          'No results for any of the provided search criteria.'
        ) : (
          <CardContainer
            businesses={this.state.businesses}
            terms={this.props.terms}
          />
        )}
      </div>
    );
  }
}

export default ContentArea;
