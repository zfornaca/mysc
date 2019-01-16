import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';
import initialMsg from './text';

class CardContainer extends Component {
  state = { businesses: [], searchInitiated: false, loading: false };

  componentWillReceiveProps(nextProps) {
    if (this.props.terms.join('') !== nextProps.terms.join('')) {
      this.getDataFromBackend(nextProps.terms, nextProps.location);
    }
  }

  getDataFromBackend(terms, location) {
    this.setState({ searchInitiated: true, loading: true });
    axios
      .get(
        `http://localhost:3001?terms=${terms.join(',')}&location=${location}`
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
      cardArray.push(
        <Card
          name={biz.name}
          url={biz.url}
          key={biz.id}
          img={biz.image_url}
          idx={idx + 1}
          rating={biz.rating}
        />
      );
    });

    return (
      <div className="CardContainer">
        {/* <div>Location: {this.props.location}</div> */}
        {/* <div>Terms: {this.props.terms.join(', ')}</div> */}
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
