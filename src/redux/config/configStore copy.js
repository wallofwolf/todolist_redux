// 리덕스 툴킷에서 configureStore 임포트
import { configureStore } from '@reduxjs/toolkit';
// slice.reducer 로직 임포트
import todoList from '../modules/TodoList copy';
// store에 등록하기
const store = configureStore({
  reducer: { todoList: todoList },
});

export default store;
