import styled, { css } from 'styled-components';

export const ListStyled = styled.ul`
  width: 100%;
`;

export const ItemStyled = styled.li`
  padding: 14px 0;

  display: flex;
  flex-wrap: wrap;

  background: #00000050;
`;

const textStyles = css`
  width: 45%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;

  color: #fff;

  @media screen and (min-width: 480px) {
    font-size: 26px;
  }

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const PhoneStyled = styled.span`
  ${textStyles}
`;

export const NumberStyled = styled.span`
  ${textStyles}
  width: 10%;
`;
export const NameStyled = styled.button`
  ${textStyles}
  padding: 0;

  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const FlexContainerStyled = styled.div`
  margin-left: 10px;

  display: flex;
  flex-direction: column;
`;
