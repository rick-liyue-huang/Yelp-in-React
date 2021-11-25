// import logo from '../../logo.svg';
import './style.css';
// import {AddTodo} from './todos/AddTodo';
// import {TodoList} from "./todos/TodoList";
// import {Footer} from "./todos/Footer";
import {Component} from "react";
// import {AddTodoContainer} from "../../todos/containers/AddTodoContainer";
// import {TodoListContainer} from "../../todos/containers/TodoListContainer";
// import {FooterContainer} from "../../todos/containers/FooterContainer";


class App extends Component {

  render () {
    return (
      <div className="App">
        todo
      </div>
    );
  }

}

/*
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filter: 'all'
    }
    // don't need to add this variable on state.
    this.nextTodoId = 3;
  }

  render () {
    // get todos after filter
    const todos = this.getVisibleTodos();
    const {filter} = this.state;
    return (
      <div className="App">
        <AddTodo addTodo={this.addTodo} />
        <TodoList todos={todos} toggleTodo={this.toggleTodo} />
        <Footer filter={filter} setVisibilityFilter={this.setVisibilityFilter} />
      </div>
    );
  }

  /!**
   * define method to get todo list after setting filter
   * @returns {T[]}
   *!/
  getVisibleTodos = () => {
    const currentFilter = this.state.filter;
    return this.state.todos.filter(item => {
      if (currentFilter === 'active') {
        return !item.completed;
      }
      else if (currentFilter === 'completed') {
        return item.completed;
      }
      else {
        return true;
      }
    })
  }

  /!**
   * add the input value on list
   * @param text
   *!/
  addTodo = (text) => {
    const todo = {
      id: this.nextTodoId++,
      text,
      completed: false
    };

    const newTodos = [todo, ...this.state.todos];
    this.setState({
      todos: newTodos
    });
  }

  /!**
   * switch the item between completed and active
   * @param id
   *!/
  toggleTodo = (id) => {
    const newTodos = this.state.todos.map(item => {
      return item.id === id ? {...item, completed: !item.completed} : item;
    });

    this.setState({
      todos: newTodos
    })
  }

  /!**
   * set the filter to show the respective list
   * @param filter
   *!/
  setVisibilityFilter = filter => {
    this.setState({
      filter
    })
  }
}*/

export default App;

