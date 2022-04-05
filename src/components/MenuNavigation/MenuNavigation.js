import React from 'react';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { NavLink } from 'react-router-dom';
import 'css/nav-link.css';
import { NavigationStyled } from './MenuNavigation.style';

export default function MenuNavigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      {isLoggedIn && (
        <NavigationStyled>
          <NavLink to="contacts" className="nav-link primary-link">
            My contacts
          </NavLink>
        </NavigationStyled>
      )}
    </>
  );
}
