import React from 'react';
import { ImageStyled, ContainerStyled } from './NotFoundStyles';
import image404 from 'image/404.png';

export default function NotFound() {
  return (
    <ContainerStyled>
      <ImageStyled src={image404} alt="not found" />
    </ContainerStyled>
  );
}
