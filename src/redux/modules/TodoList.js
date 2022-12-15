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

// 리듀서
const todoList = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.tododata];
    case 'TOGGLE_BTN':
      const isDoneOrCancel = state.map((item) => {
        if (item.id === action.tododata.id) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
      return isDoneOrCancel;
    case 'DEL_TODO':
      const deleteTodo = state.filter((item) => item.id !== action.tododata.id);
      return deleteTodo
    default:
      return state;
  }
};

export default todoList;
