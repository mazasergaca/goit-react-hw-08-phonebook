import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { adaptiveContainer } from 'styles/placeholders';

export const HeaderStyled = styled.header`
  position: fixed;
  width: 100%;
  z-index: 2;

  border-bottom: 1px solid #ccc;
  background-color: ${props => (props.bgc ? '#120b36' : 'transparent')};

  transition: background-color 500ms linear;
`;

export const ContainerStyled = styled.div`
  ${adaptiveContainer}

  padding-top: 15px;
  padding-bottom: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoStyled = styled(Link)`
  margin-left: 10px;

  font-size: 36px;
  font-family: 'Quicksand', sans-serif;
  text-decoration: none;

  color: #fff;

  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;

export const FlexStyled = styled.div`
  display: flex;
  align-items: center;
`;
