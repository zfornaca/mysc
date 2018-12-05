import React, { Component } from 'react';
// import Card from './Card';
import './App.css';

class Card extends Component {
  render() {
    console.log(this.props.name);
    const name = this.props.name;
    const url = this.props.url;
    const img = this.props.img;
    return (
      <div className="Card">
        <img src={img} alt="" />
        <a target="_blank" href={url}>
          {name}
        </a>
      </div>
    );
  }
}

export default Card;
