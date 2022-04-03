import React from 'react';
import 'css/nav-link.css';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { useLogOutMutation } from 'redux/auth/auth-api';
import { NavLink } from 'react-router-dom';
import { AuthNavStyled, linkStyled } from './AuthNav.style';

export default function AuthNav() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const [logOut] = useLogOutMutation();

  function handleClick() {
    logOut();
  }

  return (
    <AuthNavStyled>
      <NavLink to="login" className="nav-link login-link">
        Log In
      </NavLink>
      <NavLink to="register" className="nav-link register-link">
        Sing Up
      </NavLink>
    </AuthNavStyled>
  );
}
