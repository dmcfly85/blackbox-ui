export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PLANES_SUCCESS':
          return action.planes;
    default:
          return state;
  }
};
