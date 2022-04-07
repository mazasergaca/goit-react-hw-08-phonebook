import { useState } from 'react';
import { useDeleteContactMutation } from 'redux/contacts/contacts.api';
import { toast } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  ItemStyled,
  NumberStyled,
  NameStyled,
  PositionInListStyled,
} from './ContactsItem.style';
import BasicModal from 'components/Modal/Modal';
import UpdateContact from 'components/UpdateContact';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function ContactItem({ name, number, id, position }) {
  const [deleteContact] = useDeleteContactMutation();
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  async function onDeleteContact(contactId) {
    try {
      await deleteContact(contactId).unwrap();
      toast.success('Contact deleted');
    } catch {
      toast.error('Error');
    }
  }

  return (
    <ItemStyled>
      <PositionInListStyled>{position + 1}</PositionInListStyled>
      <NameStyled>{name}</NameStyled>
      <NumberStyled>{number}</NumberStyled>
      <ButtonGroup
        style={{ width: '10%', backgroundColor: '', borderRadius: '0' }}
      >
        <Button onClick={handleModalOpen}>
          <EditIcon />
        </Button>
        <Button onClick={() => onDeleteContact(id)}>
          <DeleteIcon />
        </Button>
      </ButtonGroup>
      <BasicModal open={open} handleClose={handleModalClose}>
        <UpdateContact
          setOpen={setOpen}
          id={id}
          oldName={name}
          oldNumber={number}
        ></UpdateContact>
      </BasicModal>
    </ItemStyled>
  );
}
