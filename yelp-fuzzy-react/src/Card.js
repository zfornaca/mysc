import React, { Component } from 'react';

class Card extends Component {
  render() {
    console.log(this.props.name);
    const name = this.props.name;
    const url = this.props.url;
    const img = this.props.img;
    const idx = this.props.idx;
    return (
      <a target="_blank" href={url}>
        <div className="Card">
          <img src={img} alt="" />
          {idx} - {name}
        </div>
      </a>
    );
  }
}

export default Card;
