import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initailState = {
  results: []
}

const deleteResult = (state, action) => {
  const newArray = state.results.filter(result => result.id !== action.resultElId);
  return updateObject(state, {results: newArray});
}

const reducer = (state = initailState, action) => {
  switch(action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {results: state.results.concat({ id: new Date(), value: action.result })});
    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);
    default:
      return state;
  }
}

export default reducer;
