import styled, { css } from 'styled-components';

export const ItemStyled = styled.li`
  position: relative;

  display: flex;
  flex-wrap: wrap;

  color: #fff;
  background-color: #ffffff40;

  &:not(:last-child):after {
    content: '';
    width: 90%;
    height: 2px;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);

    display: block;

    background: linear-gradient(
      160deg,
      rgba(3, 0, 47, 1) 0%,
      rgba(95, 27, 91, 1) 48%,
      rgba(30, 54, 139, 1) 100%
    );
  }
`;

const textStyles = css`
  padding: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-size: 18px;

  @media screen and (min-width: 480px) {
    padding: 14px;

    font-size: 22px;
  }

  @media screen and (min-width: 768px) {
    padding: 14px;

    font-size: 32px;
  }
`;

export const PositionStyled = styled.span`
  ${textStyles}
  width: 10%;
`;

export const NameStyled = styled.span`
  ${textStyles}
  width: 40%;
`;

export const NumberStyled = styled.span`
  ${textStyles}
  width: 40%;
`;

export const ButtonContainer = styled.div`
  position: relative;
  width: 10%;

  background-color: #00000010;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ButtonStyled = styled.button`
  height: 100%;
  width: 50%;

  border: none;
  color: #77c0e6;
  background-color: transparent;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const DeleteContactTextStyled = styled.p`
  margin-bottom: 15px;

  text-align: center;
  font-size: 16px;

  @media screen and (min-width: 480px) {
    font-size: 24px;
  }
`;

export const DeleteContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 480px) {
    width: 370px;
  }
  @media screen and (min-width: 768px) {
    width: 540px;
  }
`;

export const ButtonDeleteStyled = styled.button`
  width: 100px;
  height: 42px;
  padding: 10px 20px;
  margin-right: 15px;

  font-family: Quicksand, sans-serif;
  font-size: 16px;
  font-weight: 300;

  border: 1px solid #fff;
  color: #fff;
  background-color: #ff5757;
  cursor: pointer;
  transition: background-color 250ms linear;

  &:hover {
    background-color: #d53838;
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
