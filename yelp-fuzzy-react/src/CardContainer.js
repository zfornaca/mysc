import React, { Component } from 'react';
import Card from './Card';
import './App.css';
import token from './token.js';

const axios = require('axios');

class CardContainer extends Component {
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


*/
