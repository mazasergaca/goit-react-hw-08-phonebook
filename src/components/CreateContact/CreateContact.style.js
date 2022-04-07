import styled from 'styled-components';

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LabelContainerStyled = styled.div`
  margin-bottom: 25px;
`;

const LabelStyled = styled.label`
  font-size: 24px;
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

const InputStyled = styled.input`
  margin-left: 5px;
  padding: 6px 12px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  outline: none;
  font-size: 16px;

  transition: border-color 100ms linear, box-shadow 100ms linear;
  &:focus {
    border-color: #79d4fd;
    box-shadow: 0 0 0 0.2rem rgb(3 169 244 / 25%);
  }
`;

const ButtonStyled = styled.button`
  padding: 10px 20px;
  width: 100px;
  height: 42px;
  margin-right: 15px;
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

  &:disabled {
    background-color: #486179;
  }
`;

const ButtonCancelStyled = styled.button`
  padding: 10px 20px;

  font-family: Quicksand, sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: #000;
  background-color: transparent;
  border: 1px solid #000;
  cursor: pointer;
  transition: background-color 250ms linear;

  &:hover {
    background-color: #dddddd;
  }
  &:disabled {
    background-color: #486179;
  }
`;

const FlexContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
  FormStyled,
  LabelStyled,
  InputStyled,
  LabelContainerStyled,
  ButtonStyled,
  ButtonCancelStyled,
  FlexContainerStyled,
};
