import styled from 'styled-components';
import { Link } from 'react-router-dom';
import registerBackground from 'image/background-login.jpg';

export const SectionStyled = styled.div`
  position: relative;
  height: 100vh;

  border-top: 1px solid transparent;
  background-size: cover;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.2),
      rgba(47, 48, 58, 0.4)
    ),
    url(${registerBackground});
`;

export const ContainerStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;

  display: flex;
  flex-direction: column;

  background-color: #fff;

  @media screen and (min-width: 480px) {
    width: 450px;
  }

  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;

export const TextStyled = styled.span`
  font-size: 14px;
  font-weight: 700;

  color: rgba(0, 0, 0, 0.5);
`;

export const TitleStyled = styled.span`
  margin-top: 16px;
  margin-bottom: 20px;

  font-size: 32px;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
`;

export const LabelStyled = styled.label`
  margin-bottom: 16px;

  display: flex;
  flex-direction: column;

  font-size: 14px;

  color: rgba(0, 0, 0, 0.5);
`;

export const InputStyled = styled.input`
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
`;

export const FlexStyled = styled.div`
  margin-top: 16px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const LinkStyled = styled(Link)`
  margin-left: 5px;

  font-weight: 300;

  color: #1976d2;
`;

export const ButtonStyled = styled.button`
  padding: 10px 20px;
  width: 170px;
  height: 42px;

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
