import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationStyled = styled.nav`
  margin-right: 25px;
`;

export const LinkStyled = styled(Link)`
  padding: 10px 20px;

  border: 1px solid #fff;
  font-family: Quicksand, sans-serif;
  font-weight: 300;

  color: #fff;
  transition: background-color 250ms linear;

  &:hover {
    background-color: rgba(211, 211, 211, 0.3);
  }
`;
