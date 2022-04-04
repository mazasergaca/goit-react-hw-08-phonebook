import React from 'react';
import { SectionStyled } from './Section.style';

export default function Section({ children, style }) {
  return <SectionStyled style={{ ...style }}>{children}</SectionStyled>;
}
