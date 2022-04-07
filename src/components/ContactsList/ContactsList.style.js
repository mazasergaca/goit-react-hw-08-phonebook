import styled from 'styled-components';

const ListStyled = styled.ul`
  width: 100%;
`;

const ItemStyled = styled.li`
  display: flex;
  flex-wrap: wrap;
  padding: 14px 0;
  background: #00000050;
`;

const SpanStyled = styled.span`
  width: 45%;
  text-align: center;
  font-size: 32px;
  color: #fff;
`;
const NameStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 45%;
  font-size: 32px;
  color: #fff;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const FlexContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export { ListStyled, SpanStyled, ItemStyled, FlexContainerStyled, NameStyled };
