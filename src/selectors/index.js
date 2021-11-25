import {createSelector} from "reselect";

/*
export const getText = (state) => state.text;
export const getFilter  = (state) => state.filter;

export const getVisibleTodos = (state)=> {
  const {todos: {data}, filter} = state;
  switch (filter) {
    case 'all':
      return data;
    case 'active':
      return data.filter(todo => !todo.completed);
    case 'completed':
      return data.filter(todo => todo.completed);
    default:
      return new Error('unknown filter: ' + filter)
  }
}
*/

// state has been act as immutable object

export const getText = (state) => state.get('text');
export const getFilter  = (state) => state.get('filter');

export const getVisibleTodos = (state)=> {

  const data = state.getIn(['todos', 'data']);
  const filter = state.get('filter');

  switch (filter) {
    case 'all':
      return data;
    case 'active':
      return data.filter(todo => !todo.get('completed'));
    case 'completed':
      return data.filter(todo => todo.get('completed'));
    default:
      return new Error('unknown filter: ' + filter)
  }
}


/*

export const getText = (state) => state.text;
export const getFilter  = (state) => state.filter;
const getTodos = state => state.todos.data;

export const getVisibleTodos = createSelector(
  [getTodos, getFilter],
  (todos, filter) => {
    switch (filter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return new Error('unknown filter: ' + filter)
    }
  }
)
*/



