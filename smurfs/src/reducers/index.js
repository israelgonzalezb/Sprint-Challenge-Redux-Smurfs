// EXPERIMENT: Using objects for action types to reduce imports in this file
import { ADD_SMURF, GET_SMURF, DELETE_SMURF, GET_SMURFS } from "./actions";

const initialState = {
  smurfs: [],
  gettingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const reducer = (state=initialState, action) => {
  // EXPERIMENT: Using short circuit to check if state is undefined... 
  // if this doesn't work try ternary or if statement
  // RESULT: it doesn't work... returns are not expressions, they're statements, they don't produce a value
  if (typeof state === "undefined") return initialState;
  switch (action.type) {
    case ADD_SMURF.START:
      return state;
    case ADD_SMURF.SUCCESS:
      return state;
    case ADD_SMURF.FAILURE:
      return state;

case DELETE_SMURF.START:
      return state;
    case DELETE_SMURF.SUCCESS:
      return state;
    case DELETE_SMURF.FAILURE:
      return state;
      
      case UPDATE_SMURF.START:
      return state;
    case UPDATE_SMURF.SUCCESS:
      return state;
    case UPDATE_SMURF.FAILURE:
      return state;

      case GET_SMURFS.START:
      return state;
    case GET_SMURFS.SUCCESS:
      return state;
    case GET_SMURFS.FAILURE:
      return state;

    default:
      return state;
  }
}