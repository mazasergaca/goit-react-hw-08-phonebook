import React from 'react';
import { ListStyled, SpanStyled, ItemStyled } from './ContactsList.style';

export default function ContactsList({ children }) {
  return (
    <ListStyled>
      <ItemStyled>
        <SpanStyled style={{ width: '10%' }}>№</SpanStyled>
        <SpanStyled>Name</SpanStyled>
        <SpanStyled>Phone number</SpanStyled>
      </ItemStyled>
      {children}
    </ListStyled>
  );
}
