import React, {Component} from 'react';

export class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: ''
    }
  }

  render() {

    const {filter, setVisibilityFilter} = this.props;
    return (
      <div>
        <span>Show: </span>
        <button
          disabled={filter === 'all'}
          onClick={() => {setVisibilityFilter('all')}}
        >All</button>
        <button
          disabled={filter === 'active'}
          onClick={() => {setVisibilityFilter('active')}}
        >Active</button>
        <button
          disabled={filter === 'completed'}
          onClick={() => {setVisibilityFilter('completed')}}
        >Completed</button>
      </div>
    );
  }

}
