import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';

class CardContainer extends Component {
  state = { businesses: [] };

  componentDidMount() {
    this.getDataFromBackend(this.props.terms, this.props.location);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.terms.join('') !== nextProps.terms.join('')) {
      this.getDataFromBackend(nextProps.terms, nextProps.location);
    }
  }

  getDataFromBackend(terms, location) {
    axios
      .get(
        `http://localhost:3001?terms=${terms.join(',')}&location=${location}`
      )
      .then(res => {
        const businesses = Object.values(res.data);
        this.setState({ businesses });
        console.log('data loaded');
      });
  }

  render() {
    console.log('rendering CardContainer');
    let cardArray = [];
    this.state.businesses.forEach((biz, idx) => {
      cardArray.push(
        <Card
          name={biz.name}
          url={biz.url}
          key={biz.id}
          img={biz.image_url}
          idx={idx + 1}
        />
      );
    });

    return <div className="CardContainer">{cardArray}</div>;
  }
}

export default CardContainer;
