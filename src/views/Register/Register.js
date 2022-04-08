import { useState } from 'react';
import { toast } from 'react-toastify';
import { useRegisterMutation } from 'redux/auth/auth-api';
import {
  FormStyled,
  LabelStyled,
  InputStyled,
  SectionStyled,
  ContainerStyled,
  TextStyled,
  TitleStyled,
  FlexStyled,
  ButtonStyled,
  LinkStyled,
} from './RegisterStyles';
import CircularProgress from '@mui/material/CircularProgress';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [register, { isLoading }] = useRegisterMutation();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await register({ name, email, password }).unwrap();
      reset();
    } catch {
      toast.error('Error');
    }
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
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
        <TitleStyled>Create new account</TitleStyled>
        <FormStyled onSubmit={handleSubmit}>
          <LabelStyled>
            Name
            <InputStyled
              type="text"
              name="name"
              placeholder="user"
              value={name}
              onChange={handleChange}
              required
            />
          </LabelStyled>
          <LabelStyled>
            Email
            <InputStyled
              type="email"
              name="email"
              placeholder="user@exaple.com"
              value={email}
              onChange={handleChange}
              required
            />
          </LabelStyled>
          <LabelStyled>
            Password
            <InputStyled
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
          </LabelStyled>
          <ButtonStyled type="submit" disabled={isLoading}>
            {!isLoading ? (
              'Create contact'
            ) : (
              <CircularProgress size="20px" sx={{ color: '#fff' }} />
            )}
          </ButtonStyled>
        </FormStyled>
        <FlexStyled>
          <TextStyled>Go back to</TextStyled>
          <LinkStyled to="/login">Login</LinkStyled>
        </FlexStyled>
      </ContainerStyled>
    </SectionStyled>
  );
}
