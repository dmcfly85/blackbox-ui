import React from 'react';

class DirectionToLook extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      angle: this.getAngle()
    }
  }

  getstyle () {
    return {
      transform: `rotate(${this.getAngle()}deg)`
    };
  }

  getAngle () {
    return (this.props.direction - .5) * 180;
  }

  render () {
    return (
      <div className="direction">
        <img style={this.getstyle()} src={require('../../../src/images/arrow.png')}/>
      </div>
    );
  }
}

export default DirectionToLook;
