import {ADD_TODO, TOGGLE_TODO} from "../actions/actionTypes";


export const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: action.id,
          text: action.text,
          completed: false
        },
        ...state,
      ]
    case TOGGLE_TODO:
      return state.map(todo => {
        return todo.id === action.id ? {...todo, completed: !todo.completed} : todo
      });
    default:
      return state;
  }
}
