import styled from 'styled-components';
import { adaptiveContainer } from 'styles/placeholders';

export const SectionStyled = styled.div`
  padding: 120px 0 0;
  min-height: 100vh;

  background-image: linear-gradient(
    160deg,
    rgba(3, 0, 47, 1) 0%,
    rgba(27, 41, 95, 1) 48%,
    rgba(29, 44, 98, 1) 100%
  );

  @media screen and (max-width: 480px) {
    padding: 90px 0 0 0;
  }
`;

export const ContainerStyled = styled.div`
  ${adaptiveContainer}
`;

export const FlexStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 10px;
`;
export const NoContactsImageStyled = styled.img`
  width: 220px;
  margin-top: 25px;
`;

export const NoContactsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const NoContactsText = styled.span`
  margin-top: 45px;
  font-size: 38px;
  color: #fff;
`;
