import styled from 'styled-components';

const ItemStyled = styled.tr`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  counter-increment: item;

  &:not(:last-child) {
    margin-bottom: 18px;
  }

  &:before {
    content: counter(item);
    position: absolute;
    left: -1.3em;
    top: 50%;
    margin-top: -1.3em;
    background-color: rgba(27, 41, 95, 0.5);
    height: 2em;
    width: 2em;
    line-height: 2em;
    border: 0.3em solid #fff;
    text-align: center;
    font-weight: bold;
    border-radius: 2em;
    transition: all 0.3s ease-out;
  }
  &:hover:before {
    transform: scale(1.1);
  }
`;

const NameStyled = styled.td`
  display: block;
  padding: 14px 14px 14px 72px;
  background-color: #ccc;
  color: #000;
  text-decoration: none;
  transition: background-color 300ms ease-out;
  font-size: 32px;

  &:hover {
    background-color: #e9e4e0;
  }
`;
const NumberStyled = styled.td`
  margin-right: 10px;
  font-size: 30px;
  background-color: #ccc;
  padding: 14px;
`;

export { ItemStyled, NameStyled, NumberStyled };
