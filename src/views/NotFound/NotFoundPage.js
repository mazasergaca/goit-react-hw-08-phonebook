import React from 'react';
import { Container } from '@mui/material';
import { ImageStyled, containerStyled } from './NotFoundPage.style';
import image404 from 'image/404.png';

export default function NotFound() {
  return (
    <Container style={{ ...containerStyled }}>
      <ImageStyled src={image404} alt="" />
    </Container>
  );
}
