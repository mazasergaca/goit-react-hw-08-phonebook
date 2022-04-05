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

export { ListStyled, SpanStyled, ItemStyled };
