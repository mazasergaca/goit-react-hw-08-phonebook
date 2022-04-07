import React from 'react';
import { ButtonStyled } from './Buton.style';

export default function Button({ children, style, onClick, props }) {
  return (
    <ButtonStyled style={{ ...style }} onClick={onClick} {...props}>
      {children}
    </ButtonStyled>
  );
}
