import axios from "axios";

export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL";
export const GET_SMURFS_START = "GET_SMURFS_START";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAIL = "GET_SMURFS_FAIL";
export const UPDATE_SMURF_START = "UPDATE_SMURF_START";
export const UPDATE_SMURF_SUCCESS = "UPDATE_SMURF_SUCCESS";
export const UPDATE_SMURF_FAIL = "UPDATE_SMURF_FAIL";
export const DELETE_SMURF_START = "DELETE_SMURF_START";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAIL = "DELETE_SMURF_FAIL";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const addSmurf = (smurf) => dispatch => {
  dispatch({ type: ADD_SMURF_START });
  console.log("!!!", smurf)
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res =>
      dispatch({ type: ADD_SMURF_SUCCESS, payload: smurf })
    )
    .catch(err => dispatch({ type: ADD_SMURF_FAIL, payload: err }));
};

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res =>{
      dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data })
    }
    )
    .catch(err => dispatch({ type:  GET_SMURFS_FAIL, payload: err }));
};

/*
export const updateSmurf = () => dispatch => {};

export const deleteSmurf = () => dispatch => {};
*/
