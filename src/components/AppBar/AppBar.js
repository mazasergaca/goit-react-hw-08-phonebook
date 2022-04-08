import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { BsTelephone } from 'react-icons/bs';
import Skeleton from '@mui/material/Skeleton';
import AuthNav from 'components/AuthNav';
import MenuNavigation from 'components/MenuNavigation';
import {
  HeaderStyled,
  ContainerStyled,
  FlexStyled,
  LogoStyled,
} from './AppBarStyles';

export default function AppBar() {
  const [appBar, setAppBar] = useState(false);

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => window.removeEventListener('scroll', changeBackground);
  }, []);

  const changeBackground = () => {
    if (window.scrollY >= 66) setAppBar(true);
    else setAppBar(false);
  };

  return (
    <HeaderStyled bgc={appBar}>
      <ContainerStyled>
        {!isFetchingCurrentUser ? (
          <>
            <FlexStyled>
              <BsTelephone size="28px" color="#fff" />
              <LogoStyled to="/">Phonebook</LogoStyled>
            </FlexStyled>
            {isLoggedIn ? (
              <FlexStyled>
                <MenuNavigation />
              </FlexStyled>
            ) : (
              <AuthNav />
            )}
          </>
        ) : (
          <>
            <Skeleton
              variant="h1"
              width={225}
              height={50}
              sx={{ bgcolor: '#1b3a59' }}
            />
            <FlexStyled>
              <Skeleton
                variant="rectangular"
                width={135}
                height={50}
                sx={{ bgcolor: '#1b3a59', margin: '0 25px 0 0' }}
              />
              <Skeleton
                variant="text"
                width={130}
                height={20}
                sx={{ bgcolor: '#1b3a59' }}
              />
              <Skeleton
                variant="circular"
                width={40}
                height={40}
                sx={{ bgcolor: '#1b3a59', margin: '0 0 0 16px' }}
              />
            </FlexStyled>
          </>
        )}
      </ContainerStyled>
    </HeaderStyled>
  );
}
