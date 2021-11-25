import {CLEAR_INPUT_TEXT, SET_TODO_TEXT} from "../actions/actionTypes";

export const text = (state = 'default', action) => {
  switch (action.type) {
    case SET_TODO_TEXT:
      return action.text;
    case CLEAR_INPUT_TEXT:
      return '';
    default:
      return state
  }
}
