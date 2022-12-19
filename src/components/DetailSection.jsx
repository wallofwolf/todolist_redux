import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const StDeatilDiv = styled.div`
  background-color: black;
  color: white;
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

function DetailSection() {
  const navigate = useNavigate();
  const params = useParams();
  const allTodoData = useSelector((state) => state.todoList);
  const filteredTodo = allTodoData.filter((item) => item.id === params.id);

  const todo = filteredTodo[0];

  const handleBackward = () => {
    navigate('/');
  };
  return (
    <StDeatilDiv>
      <h3>할 일 Detail</h3>
      <p>ID : {todo?.id}</p>
      <p>제목 : {todo?.title}</p>
      <p>내용 : {todo?.body}</p>
      <p>완료여부 : {todo?.isDone ? '완료' : '미완료'}</p>
      <br />
      <br />
      <p onClick={handleBackward}>뒤로 가기</p>
    </StDeatilDiv>
  );
}

export default DetailSection;
