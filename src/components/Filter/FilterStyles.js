import styled from 'styled-components';

export const LabelStyled = styled.label`
  margin-bottom: 10px;
  margin-left: auto;
  width: 280px;
  display: flex;
  flex-direction: column;

  font-size: 24px;

  color: #fff;

  @media screen and (min-width: 768px) {
    width: 477px;

    display: block;
  }
`;

export const InputStyled = styled.input`
  margin-top: 10px;
  padding: 6px 12px;

  font-size: 16px;

  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  outline: none;
  transition: border-color 100ms linear, box-shadow 100ms linear;

  &:focus {
    border-color: #79d4fd;
    box-shadow: 0 0 0 0.2rem rgb(3 169 244 / 25%);
  }

  @media screen and (min-width: 768px) {
    margin-left: 15px;
  }
`;
