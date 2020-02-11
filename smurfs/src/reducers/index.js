// EXPERIMENT: Using objects for action types to reduce imports in this file
// RESULT: 
import { ADD_SMURF, UPDATE_SMURF, DELETE_SMURF, GET_SMURFS } from "../actions";

const initialState = {
  smurfs: [],
  gettingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

export const reducer = (state = initialState, action) => {
  // EXPERIMENT: Using short circuit to check if state is undefined...
  // if this doesn't work try ternary or if statement
  // RESULT: it doesn't work... returns are not expressions, they're statements, they don't produce a value
  if (typeof state === "undefined") return initialState;
  switch (action.type) {
    case ADD_SMURF.START:
      return Object.assign({},state,{ addingSmurf: true, error: null })
    case ADD_SMURF.SUCCESS:
      return Object.assign({},state, { addingSmurf: false, error: null });
    case ADD_SMURF.FAILURE:
      return Object.assign({},state,{ addingSmurf: false, error: action.payload })

    case DELETE_SMURF.START:
      return Object.assign({},state,{ deletingSmurf: true, error: null })
    case DELETE_SMURF.SUCCESS:
      return Object.assign({},state,{ deletingSmurf: false, error: null })
    case DELETE_SMURF.FAILURE:
      return Object.assign({},state,{ deletingSmurf: false, error: action.payload })

    case UPDATE_SMURF.START:
      return Object.assign({},state,{ updatingSmurf: true, error: null })
    case UPDATE_SMURF.SUCCESS:
      return Object.assign({},state,{ updatingSmurf: false, error: null })
    case UPDATE_SMURF.FAILURE:
      return Object.assign({},state,{ updatingSmurf: false, error: action.payload })

    case GET_SMURFS.START:
      return Object.assign({},state,{ gettingSmurfs: true, error: null })
    case GET_SMURFS.SUCCESS:
      return Object.assign({},state,{ gettingSmurfs: false, error: null, smurfs: action.payload })
    case GET_SMURFS.FAILURE:
      return Object.assign({},state,{ gettingSmurfs: false, error: action.payload })

    default:
      return state;
  }
};
