import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import Skeleton from '@mui/material/Skeleton';
import {
  TextStyled,
  SectionStyled,
  ContainerStyled,
  TitleStyled,
  LinkStyled,
} from './HomeStyles';

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
      <ContainerStyled>
        {!isFetchingCurrentUser ? (
          <>
            {isLoggedIn ? (
              <>
                <TitleStyled>Create your new contact</TitleStyled>
                <LinkStyled to="contacts">Go</LinkStyled>
              </>
            ) : (
              <>
                <TitleStyled>
                  Do you need somewhere to store phone contacts?
                </TitleStyled>
                <TextStyled>Do it here</TextStyled>
                <LinkStyled to="register">Sing Up</LinkStyled>
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
    </SectionStyled>
  );
}
