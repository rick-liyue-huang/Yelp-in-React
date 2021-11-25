
import {combineReducers} from 'redux';
import entities from './entities';
import home from './home';
import detail from "./detail";

const rootReducer = combineReducers({
  entities,
  home,
  detail
});

export default rootReducer;
