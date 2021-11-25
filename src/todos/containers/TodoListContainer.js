
import {connect} from 'react-redux';
import {TodoList} from "../components/TodoList";
import {fetchTodosAction, toggleTodoAction} from "../actions";
import {getVisibleTodos} from "../selectors";
import {toJS} from '../HOCs/toJS'

/*
const getVisibleTodos = (todos, filter)=> {
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
*/

const mapStateToProps = (state) => {
  return {
    // todos: getVisibleTodos(state.todos.data, state.filter),
    todos: getVisibleTodos(state),
    // todos: getVisibleTodos(state).toJS() // transfer to plain js object
  }
}

const mapDispatchToProps= (dispatch) => ({
  toggleTodo: id => dispatch(toggleTodoAction(id)),
  fetchTodos: () => dispatch(fetchTodosAction())
})

// export const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)
export const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(toJS(TodoList))
