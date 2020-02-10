export const ADD_SMURF = {
  START: "ADD_SMURF_START",
  SUCCESS: "ADD_SMURF_SUCCESS",
  FAILURE: "ADD_SMURF_FAILURE"
}

export const DELETE_SMURF = {
  START: "DELETE_SMURF_START",
  SUCCESS: "DELETE_SMURF_SUCCESS",
  FAILURE: "DELETE_SMURF_FAILURE"
}

export const UPDATE_SMURF = {
  START: "UPDATE_SMURF_START",
  SUCCESS: "UPDATE_SMURF_SUCCESS",
  FAILURE: "UPDATE_SMURF_FAILURE"
}

export const GET_SMURFS = {
  START: "GET_SMURFS_START",
  SUCCESS: "GET_SMURFS_SUCCESS",
  FAILURE: "GET_SMURFS_FAILURE"
}

/*
export const ADD_SMURF_START = "ADD_SMURF_START"
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS"
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE"

export const DELETE_SMURF_START = "DELETE_SMURF_START"
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS"
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE"

export const UPDATE_SMURF_START = "UPDATE_SMURF_START"
export const UPDATE_SMURF_SUCCESS = "UPDATE_SMURF_SUCCESS"
export const UPDATE_SMURF_FAILURE = "UPDATE_SMURF_FAILURE"

export const GET_SMURFS_START = "GET_SMURFS_START"
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS"
export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE"
*/

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

export const addSmurf = () => {
  return { type: ADD_SMURF_START }
}

export const deleteSmurf = () => {
  return { type: DELETE_SMURF_START }
}

export const updateSmurf = () => {
  return { type: UPDATE_SMURF_START }
}

export const getSmurfs = () => {
  return { type: GET_SMURFS_START }
}