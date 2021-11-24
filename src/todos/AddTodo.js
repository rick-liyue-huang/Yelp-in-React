import React, {Component} from 'react';


export class AddTodo extends Component {

  render() {
    return (
      <div>
        <input type="text" value={this.props.text} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add</button>
      </div>
    )
  }

  handleClick = () => {
    this.props.addTodo(this.props.text);
  }

  handleChange = (e) => {
    this.props.setTodoText(e.target.value);
  }
}

/*export class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.text} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add</button>
      </div>
    )
  }

  handleClick = () => {
    this.props.addTodo(this.state.text);
    this.setState({
      text: ''
    })
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }
}*/
