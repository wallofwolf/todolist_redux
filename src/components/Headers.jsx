import styled from 'styled-components';

const StHeader = styled.header`
  background-color: #1f1f35;
  color: white;
  height: 70px;
  font-size: 21px;
  font-weight: 600;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Headers() {
  return (
    <StHeader>
      <p>오늘 할 일 🔥</p>
    </StHeader>
  );
}

export default Headers;
