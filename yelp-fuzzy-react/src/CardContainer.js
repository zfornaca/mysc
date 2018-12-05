import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';

class CardContainer extends Component {
  state = { businesses: [] };

  componentDidMount() {
    const terms = ['bulgoki', 'boolgogi'];
    const location = 'Oakland';
    axios
      .get(
        `http://localhost:3001?terms=${terms.join(',')}&location=${location}`
      )
      .then(res => {
        const businesses = res.data.businesses;
        this.setState({ businesses });
        console.log('data loaded');
      });
  }

  render() {
    let cardArray = [];
    this.state.businesses.forEach(biz => {
      cardArray.push(
        <Card name={biz.name} url={biz.url} key={biz.id} img={biz.image_url} />
      );
    });

    return (
      <div className="CardContainer">
        {cardArray}
        Placeholder
      </div>
    );
  }
}

export default CardContainer;

/*
https://api.yelp.com/v3/businesses/search?term=bulgoki&location=Oakland
Auth.
bearer
Bearer TESTING

axios.get('https://api.yelp.com/v3/businesses/search?term=bulgoki&location=Oakland
', {
  headers: {'Authorization': "bearer " + TOKEN}
})



*/
