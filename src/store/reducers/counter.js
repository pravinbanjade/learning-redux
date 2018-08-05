import * as actionTypes from '../actions/actionTypes';

const initailState = {
  counter: 0
}

const reducer = (state = initailState, action) => {
  switch(action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value
      }
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.value
      }
    default:
      return state;
  }
}

export default reducer;
