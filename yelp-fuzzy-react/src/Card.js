import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

class Card extends Component {
  render() {
    const name = this.props.name;
    const url = this.props.url;
    const img = this.props.img;
    const idx = this.props.idx;
    const rating = this.props.rating;
    const location = this.props.location;
    let switchIdx = 0;
    console.log(this.props.lightSwitches);
    const lightSwitches = this.props.lightSwitches.map(lSw => {
      const newSwitch = (
        <div
          key={uuidv4()}
          className={`circle circ${lSw === '1' ? switchIdx : ''}`}
        />
      );
      switchIdx++;
      return newSwitch;
    });

    return (
      <a target="_blank" href={url}>
        <div className="Card">
          <div className="bizImgBox">
            <img src={img} alt="" className="bizImg" />
            <div className="bizNumberHolder">
              <div className="bizNumber">{idx}</div>
            </div>
          </div>
          <div className="bizDetailsBox">
            <div className="bizName">{name}</div>
            <div className="bizAddress">{location}</div>
            <div className="bizDetailsImages">
              <img src={`./${rating}stars.png`} alt="" className="stars" />
              <img src="./yelp_logo.png" alt="" className="yelpLogo" />
            </div>
          </div>
          <div className="circleColumn">{lightSwitches}</div>
        </div>
      </a>
    );
  }
}

export default Card;
