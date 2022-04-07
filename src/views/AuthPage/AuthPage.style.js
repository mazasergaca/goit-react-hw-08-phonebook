import styled from 'styled-components';
import loginBackground from 'image/background-login.jpg';

const SectionStyled = styled.div`
  position: relative;
  height: 100vh;
  border-top: 1px solid transparent;
  background-size: cover;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.2),
      rgba(47, 48, 58, 0.4)
    ),
    url(${loginBackground});
`;

const ContainerStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;

  padding: 50px;
  display: flex;
  flex-direction: column;

  background-color: #fff;
`;

const TextStyled = styled.span`
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.5);
`;

const TitleStyled = styled.span`
  margin-bottom: 20px;
  font-size: 32px;
`;

const AuthFormStyled = styled.form`
  display: flex;
  flex-direction: column;
`;
const AuthLabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
`;
const AuthInputStyled = styled.input`
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

const FlexStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 16px;
`;

const linkStyled = {
  marginLeft: '5px',
  color: '#1976d2',
  fontWeight: '300',
};

const ButtonStyled = styled.button`
  padding: 10px 20px;
  width: 100px;
  height: 42px;
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

export {
  AuthFormStyled,
  AuthLabelStyled,
  AuthInputStyled,
  SectionStyled,
  ContainerStyled,
  TextStyled,
  TitleStyled,
  FlexStyled,
  linkStyled,
  ButtonStyled,
};
