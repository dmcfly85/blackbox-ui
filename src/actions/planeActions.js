import Axios from 'axios';
import config from '../config';

const apiUrl = config.dumpUrl;

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
