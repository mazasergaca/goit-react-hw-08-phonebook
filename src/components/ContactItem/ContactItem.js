import React from 'react';
import { useDeleteContactMutation } from 'redux/contacts/contacts.api';
import { Button } from '@mui/material';
import ContactItemStyled from './ContactsItem.style';

export default function ContactItem({ name, number, id }) {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <ContactItemStyled.Item>
      <span>
        {name}: {number}
      </span>
      <Button
        variant="contained"
        size="small"
        onClick={() => deleteContact(id)}
      >
        Delete
      </Button>
    </ContactItemStyled.Item>
  );
}
