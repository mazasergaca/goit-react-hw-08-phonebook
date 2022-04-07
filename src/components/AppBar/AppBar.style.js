import styled from 'styled-components';

const HeaderStyled = styled.header`
  position: fixed;
  width: 100%;
  border-bottom: 1px solid #ccc;
  transition: background-color 500ms linear;
  z-index: 2;
`;

const HeaderContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`;

const logoNameStyled = {
  marginLeft: '10px',
  fontSize: '36px',
  fontFamily: "'Quicksand', sans-serif",
  color: '#fff',
  textDecoration: 'none',
};

const FlexStyled = styled.div`
  display: flex;
  align-items: center;
`;

export { HeaderStyled, HeaderContainerStyled, logoNameStyled, FlexStyled };
