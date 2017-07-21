import actionTypes from '../actions/actionTypes';


export const home = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_DUMP1090_SUCCESS':
          return action.dump;
    default:
          return state;
  }
};
