import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { Link } from 'react-router-dom';
import 'css/nav-link.css';
import { TextStyled, SectionStyled, ContainerStyled } from './HomePage.style';
import Container from '@mui/material/Container';
import heroImageLogin from 'image/hero.jpg';
import heroImage from 'image/background-hero.jpg';

export default function HomePage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return isLoggedIn ? (
    <SectionStyled
      style={{
        backgroundImage: `linear-gradient(
    to right,
    rgba(0, 0, 0, 0.2),
    rgba(47, 48, 58, 0.4)
  ),
  url(${heroImage})`,
      }}
    >
      <Container style={{ height: '100%' }}>
        <ContainerStyled>
          <TextStyled>Create your new contact</TextStyled>
          <Link
            to="create-contact"
            className="nav-link register-link hero-link"
          >
            Go
          </Link>
        </ContainerStyled>
      </Container>
    </SectionStyled>
  ) : (
    <SectionStyled
      style={{
        backgroundImage: `linear-gradient(
      to right,
      rgba(0, 0, 0, 0.2),
      rgba(47, 48, 58, 0.4)
    ),
    url(${heroImage})`,
      }}
    >
      <Container style={{ height: '100%' }}>
        <ContainerStyled>
          <TextStyled>
            Do you need somewhere to store phone contacts?
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
