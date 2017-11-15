export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PLANES_SUCCESS':
          return action.planes;
    case 'FETCH_PLANES_FAIL':
          return action.error;
    default:
          return state;
  }
};
