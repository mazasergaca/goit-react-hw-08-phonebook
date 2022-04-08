import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 480px) {
    min-width: 350px;
  }

  @media screen and (min-width: 768px) {
    min-width: 600px;

    display: block;
  }
`;

export const LabelContainerStyled = styled.div`
  margin-bottom: 25px;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const LabelStyled = styled.label`
  font-size: 24px;

  &:not(:last-child) {
    margin: 0 0 15px 0;
  }

  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin: 0 15px 0 0;
    }
  }
`;

export const InputStyled = styled.input`
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

export const ButtonStyled = styled.button`
  width: 100px;
  height: 42px;
  padding: 10px 20px;
  margin-right: 15px;

  font-family: Quicksand, sans-serif;
  font-size: 16px;
  font-weight: 300;

  border: 1px solid #fff;
  color: #fff;
  background-color: #1976d2;
  cursor: pointer;
  transition: background-color 250ms linear;

  &:hover {
    background-color: #1667b8;
  }

  &:disabled {
    background-color: #486179;
  }
`;

export const ButtonCancelStyled = styled.button`
  padding: 10px 20px;

  font-family: Quicksand, sans-serif;
  font-size: 16px;
  font-weight: 300;

  border: 1px solid #000;
  color: #000;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 250ms linear;

  &:hover {
    background-color: #dddddd;
  }
  &:disabled {
    background-color: #486179;
  }
`;

export const FlexContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
