import { SET_UI_MESSAGE } from '../constants'

export function setUiMessage (message) {
  return {
    type: SET_UI_MESSAGE,
    message
  }
}
