import { useState, useEffect } from 'react';
import { useLogInMutation } from 'redux/auth/auth-api';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
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
  ButtonStyled,
} from './AuthPage.style';
import CircularProgress from '@mui/material/CircularProgress';
import { useGetContactsQuery } from 'redux/contacts/contacts.api';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logIn, { isLoading }] = useLogInMutation();
  // const { refetch } = useGetContactsQuery();

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
    // refetch();
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
          <ButtonStyled
            type="submit"
            style={{ marginLeft: 'auto' }}
            disabled={isLoading}
          >
            {!isLoading ? (
              'Log In'
            ) : (
              <CircularProgress size="20px" sx={{ color: '#fff' }} />
            )}
          </ButtonStyled>
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
