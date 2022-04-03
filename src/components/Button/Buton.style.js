import styled from 'styled-components';

const ButtonStyled = styled.button`
  width: 100px;
  padding: 10px 20px;
  margin-left: auto;
  font-family: Quicksand, sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: #fff;
  background-color: #1976d2;
  border: 1px solid #fff;
  cursor: pointer;
  transition: background-color 250ms linear;

  &:hover {
    background-color: #1667b8;
  }
`;

export { ButtonStyled };
