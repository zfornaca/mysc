import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
// import Truncate from 'react-truncate';

class Card extends Component {
  render() {
    const { name, url, img, idx, rating, location } = this.props;
    let switchIdx = 0;
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
      <a target="_blank" rel="noopener noreferrer" href={url}>
        <div className="Card">
          <div className="bizImgBox">
            <img src={img} alt="" className="bizImg" />
            <div className="bizNumberHolder">
              <div className="bizNumber">{idx}</div>
            </div>
          </div>
          <div className="bizDetailsBox">
            <div className="bizName">{name}</div>
            {/* <Truncate lines={2} trimWhitespace>
              {name}
            </Truncate> */}
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
