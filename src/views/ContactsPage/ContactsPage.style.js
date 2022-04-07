import styled from 'styled-components';

const ContainerListStyled = styled.div``;

const NoContactsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 10px;
`;
const NoContactsImageStyled = styled.img`
  width: 220px;
  margin-top: 25px;
`;
const NoContactsText = styled.span`
  margin-top: 45px;
  font-size: 38px;
  color: #fff;
`;

const SectionStyled = {
  backgroundImage: `linear-gradient(160deg, rgba(3,0,47,1) 0%, rgba(27,41,95,1) 48%, rgba(29,44,98,1) 100%)`,
  minHeight: '100vh',
  paddingTop: '120px',
};
export {
  ContainerListStyled,
  FlexStyled,
  NoContactsImageStyled,
  NoContactsText,
  SectionStyled,
  NoContactsStyled,
};
