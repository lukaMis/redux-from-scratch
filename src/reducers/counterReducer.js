
import * as constants from '../constants'

const initialState = 0

const counterReducer = (state = initialState, action) => {
  
  let newState;
  
  switch(action.type) {
    case constants.ADD_COUNTER:
    return newState = state + 1

    case constants.REMOVE_COUNTER:
    return newState = state - 1

    default:
      return state
  }
}

export default counterReducer
