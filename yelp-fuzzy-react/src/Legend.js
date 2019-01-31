import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';

class Legend extends Component {
  render() {
    let chicletIdx = 0;
    const termChiclets = this.props.terms.map(term => {
      return (
        <div className="termChiclet" key={uuidv1()}>
          <div className={`circle circ${chicletIdx++}`} />
          <div>{term}</div>
        </div>
      );
    });

    return (
      <div className="Legend">
        <div className="locChiclet">{this.props.location}</div>
        {termChiclets}
      </div>
    );
  }
}

export default Legend;
