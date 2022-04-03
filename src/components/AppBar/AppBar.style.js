import style from 'styled-components';

const HeaderStyled = style.header`
position: fixed;
width: 100%;
border-bottom: 1px solid #ccc;
transition: background-color 500ms linear;
z-index: 2;
`;

const HeaderContainerStyled = style.div`
display: flex;
justify-content: space-between;
padding: 15px 0;
`;

const logoNameStyled = {
  marginLeft: '10px',
  fontSize: '36px',
  fontFamily: "'Quicksand', sans-serif",
  color: '#fff',
  textDecoration: 'none',
};

const FlexStyled = style.div`
display: flex;
align-items: center;

`;

export { HeaderStyled, HeaderContainerStyled, logoNameStyled, FlexStyled };
