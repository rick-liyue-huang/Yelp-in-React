
import {connect} from 'react-redux';
import {TodoList} from "../todos/TodoList";
import {toggleTodoAction} from "../actions";

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

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.filter),
  }
}

const mapDispatchToProps= (dispatch) => ({
  toggleTodo: id => dispatch(toggleTodoAction(id))
})

export const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)
