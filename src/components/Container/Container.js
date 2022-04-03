import React from 'react';
import { ContainerStyled } from './Container.style';

export default function Container({ children }) {
  return <ContainerStyled>{children}</ContainerStyled>;
}
