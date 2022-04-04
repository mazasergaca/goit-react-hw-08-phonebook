import { useState, useEffect } from 'react';
import { useLogInMutation } from 'redux/auth/auth-api';
import { Link } from 'react-router-dom';
import Button from 'components/Button';
import {
  AuthFormStyled,
  AuthLabelStyled,
  AuthInputStyled,
  SectionStyled,
  ContainerStyled,
  TextStyled,
  TitleStyled,
  FlexStyled,
  linkStyled,
} from './AuthPage.style';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logIn] = useLogInMutation();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    logIn({ email, password });
    reset();
  };
  function reset() {
    setEmail('');
    setPassword('');
  }
  function handleChange(e) {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        return;
    }
  }

  return (
    <SectionStyled>
      <ContainerStyled>
        <TextStyled
          style={{ marginBottom: '16px', textTransform: 'uppercase' }}
        >
          Welcome to phonebook
        </TextStyled>
        <TitleStyled>Login to your account</TitleStyled>
        <AuthFormStyled onSubmit={handleSubmit}>
          <AuthLabelStyled>
            Email
            <AuthInputStyled
              type="email"
              name="email"
              value={email}
              placeholder="user@exaple.com"
              onChange={handleChange}
            />
          </AuthLabelStyled>
          <AuthLabelStyled>
            Password
            <AuthInputStyled
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </AuthLabelStyled>
          <Button type="submit" style={{ marginLeft: 'auto' }}>
            Log In
          </Button>
        </AuthFormStyled>
        <FlexStyled>
          <TextStyled style={{ fontWeight: '300' }}>No Account?</TextStyled>
          <Link to="/register" style={{ ...linkStyled }}>
            Register Here
          </Link>
        </FlexStyled>
      </ContainerStyled>
    </SectionStyled>
  );
}
