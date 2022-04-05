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

export { ItemStyled, NameStyled, NumberStyled, PositionInListStyled };
