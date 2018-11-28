import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';
// import TOKEN from './token.js';

// const config = {
//   headers: { Authorization: 'Bearer ' + TOKEN },
//   params: {
//     term: 'bulgoki',
//     location: 'Oakland'
//   }
// };

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.data = {};
  }

  componentWillMount() {
    console.log('hello my buddy my pal');
    axios.get('http://localhost:3001').then(res => console.log(res.data));
  }

  render() {
    return (
      <div className="CardContainer">
        <Card />
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
