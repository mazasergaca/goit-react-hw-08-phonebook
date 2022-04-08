import React from 'react';
import { AuthNavStyled, LoginStyled, RegisterStyled } from './AuthNavStyles';

export default function AuthNav() {
  return (
    <AuthNavStyled>
      <LoginStyled to="login" className="nav-link primary-link">
        Log In
      </LoginStyled>
      <RegisterStyled to="register" className="nav-link register-link">
        Sing Up
      </RegisterStyled>
    </AuthNavStyled>
  );
}
