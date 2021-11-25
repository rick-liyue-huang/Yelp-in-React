import {
  ADD_TODO, CLEAR_INPUT_TEXT,
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  SET_FILTER,
  SET_TODO_TEXT,
  TOGGLE_TODO
} from "./actionTypes";

let nextId  = 0

const fetchTodosRequestAction = () => ({
  type: FETCH_TODOS_REQUEST,
});

const fetchTodosSuccessAction = (data) => ({
  type: FETCH_TODOS_SUCCESS,
  data,
});

const fetchTodosFailureAction = (err) => ({
  type: FETCH_TODOS_FAILURE,
  err
});

export const fetchTodosAction = () => {
  return (dispatch) => {
    dispatch(fetchTodosRequestAction());
    return fetch('./mock/todos.json')
      .then(
        response => {
          response.json().then(data => {
            dispatch(fetchTodosSuccessAction(data))
          })
        },
        error => {
          dispatch(fetchTodosFailureAction(error));
          console.error('an error occurred: ' + error);
        }
    )
  }
}

/**
 * add item
 * @param text
 * @returns {{id: number, text, type: string}}
 */
export const addTodoAction = (text) => {
  return {
    type: ADD_TODO,
    id: nextId++,
    text
  }

};

/**
 * toggle item complete status
 * @param id
 * @returns {{id, type: string}}
 */
export const toggleTodoAction = (id) => ({
  type: TOGGLE_TODO,
  id
})

/**
 * set filter
 * @param filter
 * @returns {{filter, type: string}}
 */
export const setFilterAction = (filter) => ({
  type: SET_FILTER,
  filter
});

/**
 *
 * @param text
 * @returns {{text, type: string}}
 */
export const setTodoTextAction = (text) => ({
  type: SET_TODO_TEXT,
  text
});

export const clearInputTextAction = () => ({
  type: CLEAR_INPUT_TEXT
})



