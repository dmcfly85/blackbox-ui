// ./src/components/book/BookPage.js
import React from 'react';
import {connect} from 'react-redux';
import * as PlaneActions from '../../actions/planeActions';
import './PlanePage.css';
import BoardingPassSvgData from '../svgdata/boardingpass.js';
import DirectionToLook from './DirectionToLook';
import RadarSvgData from '../svgdata/scanner.js';

class Plane extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    RadarSvgData();
    this.interval = setInterval(this.props.getPlanes, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render() {
    return (
      <div>
        <BoardingPassSvgData></BoardingPassSvgData>
        <canvas style={{display: this.props.planes.length > 0 ? 'none' : 'block'}} id="radar"/>

        {this.props.planes.map((b) =>

          (<div className="boarding-pass" key={b.hex}>

            <header>
              <div className="logo">
                <img src={require('../../../src/images/blackbox-logo.png')}/>
              </div>
              {/*   <div className="flight">
                <small>Hex</small>
                <strong>{b.hex}</strong>
              </div> */}
            </header>

            <section className="basicInfo">
              <DirectionToLook direction={b.directionToLook}/>

              <div className="range">
                <small>Range</small>
                <strong>{b.distance}</strong>
                <vsmall>mi.</vsmall>
              </div>

              <div className="altitude">
                <small>Altitude</small>
                <strong>{b.altitude}</strong>
                <vsmall>ft.</vsmall>
              </div>
            </section>

            {false &&

            <section className="cities">
              <div className="city">
                <small>Roma</small>

                <strong>FCO</strong>
              </div>
              <div className="city">
                <small>Napoli</small>

                <strong>NAP</strong>
              </div>
              <svg className="airplane">
                <use href="#airplane"/>
              </svg>
            </section>
            }


            <section className="infos">
              <div className="places">
                <div className="box">
                  <small>Squawk</small>
                  <strong><em>{b.squawk}</em></strong>
                </div>
                <div className="box hex">
                  <small>Hex</small>
                  <strong><em>{b.hex}</em></strong>
                </div>

              </div>
              <div className="times">
                <div className="box">
                  <small>Speed</small>
                  <strong>{b.speed}</strong>
                </div>
                <div className="box">
                  <small>Vert Rate</small>
                  <strong>{b.vert_rate}</strong>
                </div>
                <div className="box">
                  <small>Duration</small>
                  <strong>2:15</strong>
                </div>
                <div className="box">
                  <small>Arrival</small>
                  <strong>13:50</strong>
                </div>
              </div>
            </section>
            <section className="strap">
              <div className="box">
                <div className="passenger">
                  <small>lat</small>
                  <strong>{b.lat}</strong>
                </div>
                <div className="date">
                  <small>lon</small>
                  <strong>{b.lon}</strong>
                </div>
              </div>
              <svg className="qrcode">
                <use href="#qrcode"/>
              </svg>
            </section>
          </div>)
        )}

      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state) => {
  return {
    // You can now say this.props.books
    planes: state.planes,
  };
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    // You can now say this.props.createBook
    //  createBook: book => dispatch(TicketActions.createBook(book))
    getPlanes: () => dispatch(PlaneActions.fetchPlanes())
  };
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Plane);
