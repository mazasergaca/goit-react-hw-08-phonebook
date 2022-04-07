import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { Link } from 'react-router-dom';
import 'css/nav-link.css';
import { TextStyled, SectionStyled, ContainerStyled } from './HomePage.style';
import Container from '@mui/material/Container';
import Skeleton from '@mui/material/Skeleton';

export default function HomePage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <SectionStyled>
      <Container style={{ height: '100%' }}>
        <ContainerStyled>
          {!isFetchingCurrentUser ? (
            <>
              {isLoggedIn ? (
                <>
                  <TextStyled>Create your new contact</TextStyled>
                  <Link
                    to="contacts"
                    className="nav-link register-link hero-link"
                  >
                    Go
                  </Link>
                </>
              ) : (
                <>
                  <TextStyled>
                    Do you need somewhere to store phone contacts?
                  </TextStyled>
                  <TextStyled style={{ animationDelay: '1300ms' }}>
                    Do it here
                  </TextStyled>
                  <Link
                    to="register"
                    className="nav-link register-link hero-link"
                  >
                    Sing Up
                  </Link>
                </>
              )}
            </>
          ) : (
            <>
              <Skeleton
                variant="h1"
                width={600}
                height={55}
                sx={{ bgcolor: '#1b3a59', margin: '0 0 25px 0' }}
              />
              <Skeleton
                variant="rectangular"
                width={65}
                height={40}
                sx={{ bgcolor: '#1b3a59' }}
              />
            </>
          )}
        </ContainerStyled>
      </Container>
    </SectionStyled>
  );
}
