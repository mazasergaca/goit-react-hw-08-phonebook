import { useState } from 'react';
import { useRegisterMutation } from 'redux/auth/auth-api';
import Section from 'components/Section';
import Container from 'components/Container/Container';
import { FormStyled, LabelStyled, InputStyled } from './RegisterPage.style';
import Button from '@mui/material/Button';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [register, result] = useRegisterMutation();

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
    <Section>
      <Container>
        <FormStyled onSubmit={handleSubmit}>
          <LabelStyled>
            Name
            <InputStyled
              type="text"
              name="name"
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
          <Button type="submit" variant="contained">
            Go
          </Button>
        </FormStyled>
      </Container>
    </Section>
  );
}
