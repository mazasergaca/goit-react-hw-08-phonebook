import styled from 'styled-components';

const ItemStyled = styled.li`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  background-color: #ffffff40;
  color: #fff;

  &:not(:last-child):after {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    display: block;
    width: 90%;
    height: 2px;
    background: linear-gradient(
      160deg,
      rgba(3, 0, 47, 1) 0%,
      rgba(95, 27, 91, 1) 48%,
      rgba(30, 54, 139, 1) 100%
    );
  }
`;

const PositionInListStyled = styled.span`
  padding: 14px;
  width: 10%;
  text-align: center;
  font-size: 32px;
`;

const NameStyled = styled.span`
  padding: 14px;
  width: 40%;
  text-align: center;
  font-size: 32px;
`;
const NumberStyled = styled.span`
  width: 40%;
  font-size: 30px;
  text-align: center;
  padding: 14px;
`;

const DeleteContactTextStyled = styled.p`
  margin-bottom: 15px;
  font-size: 24px;
`;

const DeleteContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonDeleteStyled = styled.button`
  width: 100px;
  height: 42px;
  padding: 10px 20px;
  margin-right: 15px;
  font-family: Quicksand, sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: #fff;
  background-color: #ff5757;
  border: 1px solid #fff;
  cursor: pointer;
  transition: background-color 250ms linear;

  &:hover {
    background-color: #d53838;
  }

  &:disabled {
    background-color: #486179;
  }
`;

const ButtonCancelStyled = styled.button`
  padding: 10px 20px;

  font-family: Quicksand, sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: #000;
  background-color: transparent;
  border: 1px solid #000;
  cursor: pointer;
  transition: background-color 250ms linear;

  &:hover {
    background-color: #dddddd;
  }
  &:disabled {
    background-color: #486179;
  }
`;

const FlexContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
  ItemStyled,
  NameStyled,
  NumberStyled,
  PositionInListStyled,
  DeleteContactTextStyled,
  DeleteContactContainer,
  ButtonDeleteStyled,
  ButtonCancelStyled,
  FlexContainerStyled,
};
