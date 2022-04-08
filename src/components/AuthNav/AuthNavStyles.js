import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const AuthNavStyled = styled.div`
  display: flex;
  align-items: center;
`;

const linkStyles = css`
  padding: 10px 20px;

  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-weight: 300;
  text-decoration: none;

  border: 1px solid #fff;
  color: #fff;
  transition: background-color 250ms linear;
`;

export const LoginStyled = styled(Link)`
  ${linkStyles}

  &:hover {
    background-color: rgba(211, 211, 211, 0.3);
  }
`;

export const RegisterStyled = styled(Link)`
  ${linkStyles}
  margin-left: 25px;

  background-color: #1976d2;

  &:hover {
    background-color: #1667b8;
  }

  @media screen and (max-width: 480px) {
    margin-right: 0;

    display: none;
  }
`;
