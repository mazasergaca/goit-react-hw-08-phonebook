import React from 'react';
import 'css/nav-link.css';
import { NavLink } from 'react-router-dom';
import { AuthNavStyled } from './AuthNav.style';

export default function AuthNav() {
  return (
    <AuthNavStyled>
      <NavLink to="login" className="nav-link primary-link">
        Log In
      </NavLink>
      <NavLink to="register" className="nav-link register-link">
        Sing Up
      </NavLink>
    </AuthNavStyled>
  );
}
