import Axios from 'axios';
// ./src/actions/bookActions.js
// API URL
//TODO Move to config or command line arg
const apiUrl = 'http://blackbox.local:3030/airplanes/all';

// Sync ActioPlanes
export const fetchPlanesSuccess = (planes) => {
  return {
    type: 'FETCH_PLANES_SUCCESS',
    planes
  };
}

export const fetchPlanesFail = (error) => {
  return {
    type: 'FETCH_PLANES_FAIL',
    error
  };
}


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
        let planes = response.data.filter(plane => {
          return plane.directionToLook >= 0;
        })
        dispatch(fetchPlanesSuccess(planes));
      })
      .catch(error => {
        dispatch(fetchPlanesFail(error))
        throw(error);
      });
  };
};
