import { useState } from 'react';
import { useRegisterMutation } from 'redux/auth/auth-api';
import { Link } from 'react-router-dom';
import {
  FormStyled,
  LabelStyled,
  InputStyled,
  SectionStyled,
  ContainerStyled,
  TextStyled,
  TitleStyled,
  FlexStyled,
  linkStyled,
} from './RegisterPage.style';
import Button from 'components/Button';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [register] = useRegisterMutation();

  function handleSubmit(e) {
    e.preventDefault();
    register({ name, email, password });
    reset();
  }
  function reset() {
    setName('');
    setEmail('');
    setPassword('');
  }

  function handleChange(e) {
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
  }

  return (
    <SectionStyled>
      <ContainerStyled>
        <TextStyled
          style={{ marginBottom: '16px', textTransform: 'uppercase' }}
        >
          Welcome to phonebook
        </TextStyled>
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
          <Button type="submit" style={{ marginRight: 'auto' }}>
            Create Account
          </Button>
        </FormStyled>
        <FlexStyled>
          <TextStyled style={{ fontWeight: '300' }}>Go back to</TextStyled>
          <Link to="/login" style={{ ...linkStyled }}>
            Login
          </Link>
        </FlexStyled>
      </ContainerStyled>
    </SectionStyled>
  );
}
