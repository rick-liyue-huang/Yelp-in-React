import React, {Component} from 'react';
import {Todo} from "./Todo";

export class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {todos, toggleTodo} = this.props
    return (
      <ul>
        {
          todos.map((todo) => {
            return <Todo
              key={todo.id} {...todo}
              onClick={() => {toggleTodo(todo.id)}}
            />
          })
        }
        <li></li>
      </ul>
    )
  }
}
