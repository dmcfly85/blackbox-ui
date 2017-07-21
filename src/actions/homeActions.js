//import Axios from 'axios';
//// API URL

//const apiUrl = 'http://localhost:3030/airplanes/all';
//// Sync Action

//export const fetchdump1090DataSuccess = (dump) => {
  //return {
    //type: 'FETCH_DUMP1090_SUCCESS',
    //dump 
  //};
//};

////Async Action
//export const fetchDump1090Data = () => {
  //// Returns a dispatcher function
  //// that dispatches an action at a later time
  //return (dispatch) => {
    //// Returns a promise
    //return Axios.get(apiUrl)
      //.then(response => {
        //// Dispatch another action
        //// to consume data
        //dispatch(fetchdump1090DataSuccess(response.data));
      //})
      //.catch(error => {
        //throw(error);
      //});
  //};
//};
