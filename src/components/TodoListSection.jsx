import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

const Stdiv = styled.div`
  background-color: #ffffff;
`;

function TodoListSection({ isTodoArea }) {
  const dispatch = useDispatch();
  // .TodoList.js에서 할 일 데이터 불러오기
  const allTodoData = useSelector((state) => state.todoList);

  // 완료, 취소 버튼 토글함수
  const handleSwitchButtonClick = (id) => {
    dispatch({
      type: 'TOGGLE_BTN',
      tododata: {
        id: id,
      },
    });
  };

  // 할 일 삭제 함수
  const handleDeleteButtonClick = (id) => {
    dispatch({
      type: 'DEL_TODO',
      tododata: {
        id: id,
      },
    });
  };

  return (
    <Stdiv>
      <h1>{isTodoArea ? '진행 중 🏃‍♂️' : '완료! ⚡️'}</h1>
      {allTodoData
        .filter((item) => item.isDone === !isTodoArea)
        .map((item) => {
          return (
            <div
              style={{
                border: '1px solid black',
                height: '80px',
              }}
              key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <button onClick={() => handleSwitchButtonClick(item.id)}>
                {isTodoArea ? '완료' : '취소'}
              </button>
              <button onClick={() => handleDeleteButtonClick(item.id)}>삭제</button>
            </div>
          );
        })}
    </Stdiv>
  );
}

export default TodoListSection;
