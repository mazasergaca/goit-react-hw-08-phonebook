import { useState, useEffect } from 'react';
import { useLogInMutation } from 'redux/auth/auth-api';
import { toast } from 'react-toastify';
import {
  AuthFormStyled,
  AuthLabelStyled,
  AuthInputStyled,
  SectionStyled,
  ContainerStyled,
  TextStyled,
  TitleStyled,
  FlexStyled,
  ButtonStyled,
  LinkStyled,
} from './LoginStyles';
import CircularProgress from '@mui/material/CircularProgress';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [logIn, { isLoading }] = useLogInMutation();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await logIn({ email, password }).unwrap();
    } catch (err) {
      toast.error('Wrong email address or password!');
    }
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const handleChange = e => {
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
  };

  return (
    <SectionStyled>
      <ContainerStyled>
        <TextStyled>Welcome to phonebook</TextStyled>
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
              required
            />
          </AuthLabelStyled>
          <AuthLabelStyled>
            Password
            <AuthInputStyled
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
          </AuthLabelStyled>
          <ButtonStyled type="submit" disabled={isLoading}>
            {!isLoading ? (
              'Log In'
            ) : (
              <CircularProgress size="20px" sx={{ color: '#fff' }} />
            )}
          </ButtonStyled>
        </AuthFormStyled>
        <FlexStyled>
          <TextStyled>No Account?</TextStyled>
          <LinkStyled to="/register">Register Here</LinkStyled>
        </FlexStyled>
      </ContainerStyled>
    </SectionStyled>
  );
}
