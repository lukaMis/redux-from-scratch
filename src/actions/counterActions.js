
import * as constants from '../constants'

export function addCounter() {
  return {
    type: constants.ADD_COUNTER
  }
}

export function removeCounter() {
  return {
    type: constants.REMOVE_COUNTER
  }
}
