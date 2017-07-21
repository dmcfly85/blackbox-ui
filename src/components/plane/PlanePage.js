// ./src/components/book/BookPage.js
import React from 'react';
import { connect } from 'react-redux';
import * as PlaneActions from '../../actions/PlaneActions';

class Plane extends React.Component{
  constructor(props){
    super(props);
  }

  submitBook(input){
    this.props.createBook(input);
  }

  render(){
    let titleInput;
    return(
      <div>
        <h3>Planes</h3>
        <ul>
          {this.props.planes.map((b, i) => <li key={i}>{b.hex} {b.inViewArea}</li> )}
        </ul>
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
  }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Plane);
