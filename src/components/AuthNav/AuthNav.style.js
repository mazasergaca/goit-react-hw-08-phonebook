import s from 'styled-components';

const AuthNavStyled = s.div`
display: flex;
align-items: center`;

const linkStyled = {
  border: '1px solid #fff',
  fontFamily: "'M PLUS Rounded 1c', sans-serif",
  fontWeight: '300',
  color: '#fff',
  padding: '10px 20px',
  textDecoration: 'none',
};

export { AuthNavStyled, linkStyled };
