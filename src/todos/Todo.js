import React, {Component} from 'react';

export class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {text, completed, onClick} = this.props;
    return (
      <li
        style={{textDecoration: completed ? 'line-through' : 'none'}}
        onClick={onClick}
      >
        {text}
      </li>
    )
  }
}


