import { createSlice } from '@reduxjs/toolkit'; // 리덕스 툴킷
import { v4 as uuidv4 } from 'uuid';

// 초기값 : useState의 초기값에 해당됨
const initialState = [
  {
    id: uuidv4(),
    title: '케틀벨스윙',
    body: '힙힌지 이용해서 엉덩이 부수기',
    isDone: false,
  },
  {
    id: uuidv4(),
    title: '연말정산 알아보기',
    body: '중도퇴사자의 경우 어떻게 되는지',
    isDone: false,
  },
  {
    id: uuidv4(),
    title: '프리폼 사용해보기',
    body: '굿노트를 뛰어넘을 것인가...',
    isDone: true,
  },
];

// 슬라이스
// action value + action creator + reducer
// 여기서 디스패치는 어떻게 하지?
const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.tododata];
    },

    toggleBtn: (state, action) => {
      const isDoneOrCancel = state.map((item) => {
        if (item.id === action.tododata.id) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
      return isDoneOrCancel;
    },

    delTodo: (state, action) => {
      const deleteTodo = state.filter((item) => item.id !== action.tododata.id);
      return deleteTodo;
    },
  },
});

// 컴포넌트에서 사용하기 위해 액션크리에이터 export
export const { addTodo, toggleBtn, delTodo } = todoListSlice.actions;
// configStore에 등록하기 위해 export
export default todoListSlice.reducer;
