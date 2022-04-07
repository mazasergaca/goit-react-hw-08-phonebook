import React from 'react';
import { NavigationStyled, LinkStyled } from './MenuNavigation.style';

export default function MenuNavigation() {
  return (
    <NavigationStyled>
      <LinkStyled to="contacts">My contacts</LinkStyled>
    </NavigationStyled>
  );
}
