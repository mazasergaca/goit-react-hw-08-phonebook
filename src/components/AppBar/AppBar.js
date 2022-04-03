import { useState, useEffect } from 'react';
import { BsTelephone } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import AuthNav from 'components/AuthNav';
import {
  HeaderStyled,
  HeaderContainerStyled,
  logoNameStyled,
  FlexStyled,
} from './AppBar.style';
import Container from '@mui/material/Container';

export default function AppBar() {
  const [appBar, setAppBar] = useState(false);

  useEffect(() => {
    changeBackground();

    window.addEventListener('scroll', changeBackground);
  });

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
          <AuthNav />
        </HeaderContainerStyled>
      </Container>
    </HeaderStyled>
  );
}

{
  /* <Header>
  <Navigation />
  
</Header>; */
}
