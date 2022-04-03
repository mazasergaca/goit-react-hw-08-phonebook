import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'css/nav-link.css';
import {
  TextStyled,
  SectionStyled,
  ContainerStyled,
  linkStyled,
} from './HomePage.style';
import Container from '@mui/material/Container';

export default function HomePage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <SectionStyled>
      <Container style={{ height: '100%' }}>
        <ContainerStyled>
          <TextStyled>
            Do you need somewhere to store phone contacts?
          </TextStyled>
          <TextStyled style={{ fontSize: '38px', animationDelay: '1300ms' }}>
            Oh, you're so lucky!
          </TextStyled>
          <TextStyled style={{ animationDelay: '1300ms' }}>
            Do it here
          </TextStyled>
          <Link to="register" className="nav-link register-link hero-link">
            Sing Up
          </Link>
        </ContainerStyled>
      </Container>
    </SectionStyled>
  );
}
