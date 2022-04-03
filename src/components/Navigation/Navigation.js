import React from 'react';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { NavLink } from 'react-router-dom';
import { NavigationStyled } from './Navigation.style';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      {isLoggedIn && (
        <NavigationStyled>
          <NavLink to="contacts" style={{ marginRight: '25px' }}>
            Contacts
          </NavLink>
          <NavLink to="create-contact">Create new contact</NavLink>
        </NavigationStyled>
      )}
    </>
  );
}
