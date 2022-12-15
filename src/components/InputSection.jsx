import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

// styled-components
const StSection = styled.section`
  background-color: #5d9dfd;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// input 컴포넌트
function InputSection() {
  //! dispatch 선언 및 할당
  const dispatch = useDispatch();
  //! 스테이트 설정
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  //! input의 value를 가져오는 함수
  const handleTitleVaule = (event) => {
    setTitle(event.target.value);
  };
  const handleBodyValue = (event) => {
    setBody(event.target.value);
  };

  //! 할 일 추가 버튼을 눌렀을 때 데이터를 추가해주는 함수
  const handleAddTodo = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_TODO',
      tododata: {
        id: uuidv4(),
        title: title,
        body: body,
        isDone: false,
      },
    });
  };
  return (
    <StSection>
      <form onSubmit={handleAddTodo}>
        <span>제목</span> :
        <input
          onChange={handleTitleVaule}
          value={title}
        />
        <span>내용</span> :
        <input
          onChange={handleBodyValue}
          value={body}
        />
        <button>할 일 추가!</button>
      </form>
    </StSection>
  );
}

export default InputSection;
