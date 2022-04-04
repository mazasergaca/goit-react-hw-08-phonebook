import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { BsTelephone } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import AuthNav from 'components/AuthNav';
import MenuNavigation from 'components/MenuNavigation';
import {
  HeaderStyled,
  HeaderContainerStyled,
  logoNameStyled,
  FlexStyled,
} from './AppBar.style';
import Container from '@mui/material/Container';
import UserNavigation from 'components/UserNavigation';

export default function AppBar() {
  const [appBar, setAppBar] = useState(false);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    changeBackground();

    window.addEventListener('scroll', changeBackground);

    return () => window.removeEventListener('scroll', changeBackground);
  }, []);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setAppBar(true);
    } else {
      setAppBar(false);
    }
  };
  return (
    <HeaderStyled
      style={{ backgroundColor: appBar ? '#252525' : 'transparent' }}
    >
      <Container maxWidth="lg">
        <HeaderContainerStyled>
          <FlexStyled>
            <BsTelephone size="28px" color="#fff" />
            <Link to="/" style={{ ...logoNameStyled }}>
              Phonebook
            </Link>
          </FlexStyled>
          {isLoggedIn ? (
            <>
              <MenuNavigation />
              <UserNavigation />
            </>
          ) : (
            <AuthNav />
          )}
        </HeaderContainerStyled>
      </Container>
    </HeaderStyled>
  );
}
