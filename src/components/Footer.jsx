import styled from 'styled-components';

const StFooter = styled.footer`
  background-color: #1F1F35;
  color: white;
  text-align: center;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

function Footer() {
  return (
    <StFooter>
      Go, Get It.
    </StFooter>
  )
}

export default Footer