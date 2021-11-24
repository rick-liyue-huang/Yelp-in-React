import {ADD_TODO, SET_FILTER, SET_TODO_TEXT, TOGGLE_TODO} from "./actionTypes";

let nextId  = 0

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



