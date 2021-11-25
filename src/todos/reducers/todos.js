import {
  ADD_TODO,
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  TOGGLE_TODO
} from "../actions/actionTypes";
import {fromJS} from "immutable";




const initialState = {
  isFetching: false,
  error: null,
  data: []
}

// immutable only focus on the object
const reducer = (state = fromJS(initialState), action) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return state.set('isFetching', true)

    case FETCH_TODOS_SUCCESS:
      return state.merge({
        isFetching: false,
        data: fromJS(action.data)
      });

    case FETCH_TODOS_FAILURE:
      return state.merge({
        isFetching: false,
        error: action.err
      })

    default:
      const data = state.get('data');
      return state.set('data', todos(data, action));

  }
}

export const todos = (state = fromJS([]), action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = fromJS({
        id: action.id,
        text: action.text,
        completed: false
      });
      return state.push(newTodo);

    case TOGGLE_TODO:
      return state.map(todo => todo.get('id') === action.id ? todo.set('completed', !todo.get('completed')) : todo);

    default:
      return state;
  }
}

export default reducer;



/*

const initialState = {
  isFetching: false,
  error: null,
  data: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    case FETCH_TODOS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.err
      }
    default:
      return {
        ...state,
        data: todos(state.data, action)
      }

  }
}

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

export default reducer;
*/
