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

export { FormStyled, LabelStyled, InputStyled, LabelContainerStyled };
