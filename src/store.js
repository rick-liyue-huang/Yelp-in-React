

import {todoApp} from "./todos/reducers";
import {createStore} from "redux";
import {addTodoAction, setFilterAction, setTodoTextAction, toggleTodoAction} from "./todos/actions";

const store  = createStore(todoApp);

// the initial state
console.log(store.getState());

// subscribe state
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addTodoAction('Learn React'));
store.dispatch(toggleTodoAction(0));
store.dispatch(setFilterAction('active'));
store.dispatch(setTodoTextAction('learn angular'))

// cancel subscribe
unsubscribe();

export default store;
