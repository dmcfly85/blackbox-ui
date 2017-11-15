// ./src/components/book/BookPage.js
import React from 'react';
import { connect } from 'react-redux';
import * as PlaneActions from '../../actions/planeActions';
import './PlanePage.css'
import SvgData from '../svgdata/svgdata.js'

class Plane extends React.Component{
  constructor(props){
    super(props);
  }

  directionTPointArrow(directionToLook) {
    return directionToLook / 1.8;
  }

  render(){
    return(
      <div>
      {/*}<button onClick={() => {this.props.getPlanes()}}>Fetch</button> */}
      <SvgData></SvgData>

  {this.props.planes.map((b, i) =>

<div className="boarding-pass">
  <header>
    <div className="logo">
      <img src={require('../../../src/images/blackbox-logo.png')}
      />
    </div>
    <div className="flight">
      <small>Hex</small>
      <strong>{b.hex}</strong>
    </div>
  </header>


  <section className="basicInfo">
    <div className="direction">
      <img src={require('../../../src/images/arrow.png')} />
    </div>

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

   { true &&

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
     <use href="#airplane"></use>
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
    <use href="#qrcode"></use>
    </svg>
  </section>
</div>

      )}

      </div>
    )
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.books
    planes: state.planes
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook
  //  createBook: book => dispatch(TicketActions.createBook(book))
      getPlanes: () => dispatch(PlaneActions.fetchPlanes())
  }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Plane);
