import styled from 'styled-components';

const LabelStyled = styled.label`
  display: block;
  width: 477px;
  margin-bottom: 10px;
  margin-left: auto;
  font-size: 24px;
  color: #fff;
`;

const InputStyled = styled.input`
  margin-left: 15px;
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

export { LabelStyled, InputStyled };
