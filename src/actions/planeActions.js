import Axios from 'axios';
// ./src/actions/bookActions.js
// API URL
const apiUrl = 'http://localhost:3030/airplanes/with_directions';
// Sync ActioPlanesn
export const fetchPlanesSuccess = (planes) => {
  return {
    type: 'FETCH_PLANES_SUCCESS',
    planes 
  };
};
//Async Action
export const fetchPlanes = () => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    return Axios.get(apiUrl)
      .then(response => {
        // Dispatch another action
        // to consume data
        dispatch(fetchPlanesSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};
