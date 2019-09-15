/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAIL,
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAIL,
  UPDATE_SMURF_START,
  UPDATE_SMURF_SUCCESS,
  UPDATE_SMURF_FAIL,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAIL
} from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

function reducer(state = initialState, action) {
  console.log('reducer', action);
  switch (action.type) {
    
    case ADD_SMURF_START:
      return {
        ...state,
        addingSmurf: true,
        error: ''
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
        addingSmurf: false,
        error: ''
      };
    case ADD_SMURF_FAIL:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      };   
    case GET_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true,
        error: ''
      };
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        error: ''
      };
    case GET_SMURFS_FAIL:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
