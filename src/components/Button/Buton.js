import React from 'react';
import { ButtonStyled } from './Buton.style';

export default function Button({ children, style }) {
  return <ButtonStyled style={{ ...style }}>{children}</ButtonStyled>;
}
