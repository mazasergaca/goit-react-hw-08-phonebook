import React from 'react';
import { useDeleteContactMutation } from 'redux/contacts/contacts.api';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { ItemStyled, NumberStyled, NameStyled } from './ContactsItem.style';
import EditIcon from '@mui/icons-material/Edit';

export default function ContactItem({ name, number, id }) {
  const [deleteContact] = useDeleteContactMutation();

  // return (
  //   <ItemStyled>
  //     <NameStyled>{name}</NameStyled>
  //     <div>
  //       <NumberStyled>{number}</NumberStyled>
  //       <Tooltip title="Delete">
  //         <IconButton onClick={() => deleteContact(id)}>
  //           <DeleteIcon />
  //         </IconButton>
  //       </Tooltip>
  //     </div>
  //   </ItemStyled>
  // );

  return (
    <ItemStyled>
      <NameStyled>{name}</NameStyled>
      <NumberStyled>{number}</NumberStyled>
    </ItemStyled>
  );
}
