import {SET_TODO_TEXT} from "../actions/actionTypes";

export const text = (state = 'default', action) => {
  switch (action.type) {
    case SET_TODO_TEXT:
      return action.text;
    default:
      return state
  }
}
