import { combineReducers } from 'redux'
import { SET_UI_MESSAGE } from '../constants'

const initialState = {
  message: ''
}

function uiReducer (state = initialState, action) {
  switch (action.type) {
    case SET_UI_MESSAGE:
      return {
        ...state,
        message: action.message
      }
    default:
      return state
  }
}

export default combineReducers({
  ui: uiReducer
})
