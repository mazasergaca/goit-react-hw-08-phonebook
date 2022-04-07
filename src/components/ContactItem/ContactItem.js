import { useState } from 'react';
import { useDeleteContactMutation } from 'redux/contacts/contacts.api';
import { toast } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CircularProgress from '@mui/material/CircularProgress';
import {
  ItemStyled,
  NumberStyled,
  NameStyled,
  PositionInListStyled,
  DeleteContactTextStyled,
  DeleteContactContainer,
  ButtonDeleteStyled,
  ButtonCancelStyled,
  FlexContainerStyled,
} from './ContactsItem.style';
import BasicModal from 'components/Modal/Modal';
import UpdateContact from 'components/UpdateContact';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function ContactItem({ name, number, id, position }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const [open, setOpen] = useState(false);
  const [deleteModal, setDeleteOpen] = useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => {
    setDeleteOpen(false);
    setOpen(false);
  };

  async function onDeleteContact(contactId) {
    try {
      await deleteContact(contactId).unwrap();
      setOpen(false);
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
        <Button
          onClick={() => {
            setDeleteOpen(true);
            handleModalOpen();
          }}
        >
          <DeleteIcon />
        </Button>
      </ButtonGroup>
      <BasicModal open={open} handleClose={handleModalClose}>
        {deleteModal ? (
          <DeleteContactContainer>
            <DeleteContactTextStyled>
              Are you sure you want to delete this contact?
            </DeleteContactTextStyled>
            <FlexContainerStyled>
              <ButtonDeleteStyled
                onClick={() => onDeleteContact(id)}
                disabled={isLoading}
              >
                {!isLoading ? (
                  'Delete'
                ) : (
                  <CircularProgress size="20px" sx={{ color: '#fff' }} />
                )}
              </ButtonDeleteStyled>
              <ButtonCancelStyled
                onClick={handleModalClose}
                disabled={isLoading}
              >
                Cancel
              </ButtonCancelStyled>
            </FlexContainerStyled>
          </DeleteContactContainer>
        ) : (
          <UpdateContact
            handleModalClose={handleModalClose}
            id={id}
            oldName={name}
            oldNumber={number}
          ></UpdateContact>
        )}
      </BasicModal>
    </ItemStyled>
  );
}
