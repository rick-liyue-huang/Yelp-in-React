import {AddTodo} from "../todos/AddTodo";
import {connect} from 'react-redux';
import {addTodoAction, setTodoTextAction} from "../actions";


const mapStateToProps = (state) => ({
  text: state.text
})

const mapDispatchToProps = (dispatch) =>  ({
  setTodoText: text => dispatch(setTodoTextAction(text)),
  addTodo: text => dispatch(addTodoAction(text))
})

export const AddTodoContainer = connect(mapStateToProps, mapDispatchToProps)(AddTodo);
