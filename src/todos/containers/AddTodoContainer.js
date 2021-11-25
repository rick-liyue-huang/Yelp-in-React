import {AddTodo} from "../components/AddTodo";
import {connect} from 'react-redux';
import {addTodoAction, clearInputTextAction, setTodoTextAction} from "../actions";
import {getText} from "../selectors";


const mapStateToProps = (state) => ({
  // text: state.text
  text: getText(state)
})

const mapDispatchToProps = (dispatch) =>  ({
  setTodoText: text => dispatch(setTodoTextAction(text)),
  addTodo: text => {
    dispatch(addTodoAction(text))
    dispatch(clearInputTextAction())
  }
})

export const AddTodoContainer = connect(mapStateToProps, mapDispatchToProps)(AddTodo);
