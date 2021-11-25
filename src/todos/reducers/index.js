
// import {ADD_TODO, SET_FILTER, SET_TODO_TEXT, TOGGLE_TODO} from "../actions/actionTypes";
// import {combineReducers} from "redux";
import {combineReducers} from 'redux-immutable';
import todos from "./todos";
import {text} from "./text";
import {filter} from "./filter";


/*const initialState = {
  filter: 'all',
  todos: [],
  text: 'default'
};*/

export const todoApp = combineReducers({
  todos,
  text,
  filter
});

/*export const todoApp = (state = initialState, action) =>  {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          {
            id: action.id,
            text: action.text,
            completed: false
          },
          ...state.todos,

        ]
      }
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          return todo.id === action.id ? {...todo, completed: !todo.completed} : todo
        })
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.filter,
      }
    case SET_TODO_TEXT:
      return {
        ...state,
        text: action.text
      }
    default:
      return state;
  }
}*/
