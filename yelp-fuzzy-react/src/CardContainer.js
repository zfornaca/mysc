import React, { Component } from 'react';
import Card from './Card';

class CardContainer extends Component {
  render() {
    let cardArray = [];
    this.props.businesses.forEach((biz, idx) => {
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

    return <div className="CardContainer">{cardArray}</div>;
  }
}

export default CardContainer;
