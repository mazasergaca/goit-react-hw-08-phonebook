import React from 'react';
import ContactsListStyled from './ContactsList.style';

export default function ContactsList({ children }) {
  return <ContactsListStyled.List>{children}</ContactsListStyled.List>;
}
