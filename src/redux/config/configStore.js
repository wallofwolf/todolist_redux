import { createStore } from "redux";
import { combineReducers } from "redux";

import todoList from '../modules/TodoList';

const rootReducer = combineReducers({
  todoList: todoList,
});
const store = createStore(rootReducer);

export default store;