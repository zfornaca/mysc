import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';
import initialMsg from './text';

const openShiftUrl =
  'http://app-yelp-express.1d35.starter-us-east-1.openshiftapps.com/';

class CardContainer extends Component {
  state = { businesses: [], searchInitiated: false, loading: false };

  componentWillReceiveProps(nextProps) {
    if (this.props.terms.join('') !== nextProps.terms.join('')) {
      this.getDataFromBackend(nextProps.terms, nextProps.location);
    }
  }

  getDataFromBackend(terms, location) {
    console.log(
      `${openShiftUrl}?terms=${terms.join(',')}&location=${location}`
    );
    this.setState({ searchInitiated: true, loading: true });
    axios
      .get(
        `${openShiftUrl}?terms=${terms.join(',')}&location=${location}`
        // `http://localhost:3001?terms=${terms.join(',')}&location=${location}`
      )
      .then(res => {
        const businesses = Object.values(res.data);
        this.setState({ businesses, loading: false });
        console.log('data loaded');
      });
  }

  render() {
    console.log('rendering CardContainer');
    console.log(this.state.businesses);
    let cardArray = [];
    this.state.businesses.forEach((biz, idx) => {
      let lightSwitches = [];
      for (let term of this.props.terms) {
        biz.terms.includes(term)
          ? lightSwitches.push('1')
          : lightSwitches.push('0');
      }
      cardArray.push(
        <Card
          name={biz.name}
          url={biz.url}
          key={biz.id}
          img={biz.image_url}
          idx={idx + 1}
          rating={biz.rating}
          location={biz.location.display_address[0]}
          lightSwitches={lightSwitches}
        />
      );
    });
    let chicletIdx = 0;
    const termChiclets = this.props.terms.map(term => {
      return (
        <div className="termChiclet">
          <div className={`circle circ${chicletIdx++}`} />
          <div>{term}</div>
        </div>
      );
    });

    return (
      <div className="CardContainer">
        {!this.state.loading && this.state.searchInitiated ? (
          <div className="searchQuery">
            <div className="locChiclet">{this.props.location}</div>
            {termChiclets}
          </div>
        ) : (
          ''
        )}

        <div className="cardList">
          {this.state.loading
            ? 'loading'
            : this.state.searchInitiated
            ? cardArray
            : initialMsg}
        </div>
      </div>
    );
  }
}

export default CardContainer;
