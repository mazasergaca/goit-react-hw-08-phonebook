import { useState } from 'react';
import { toast } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { CircularProgress } from '@mui/material';
import { useDeleteContactMutation } from 'redux/contacts/contacts-api';
import BasicModal from 'components/Modal/Modal';
import UpdateContact from 'components/UpdateContact';
import {
  ItemStyled,
  NumberStyled,
  NameStyled,
  PositionStyled,
  DeleteContactTextStyled,
  DeleteContactContainer,
  ButtonDeleteStyled,
  ButtonCancelStyled,
  FlexContainerStyled,
  ButtonStyled,
  ButtonContainer,
} from './ContactsItemStyle';

export default function ContactItem({ name, number, id, position }) {
  const [open, setOpen] = useState(false);
  const [deleteModal, setDeleteOpen] = useState(false);

  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => {
    setDeleteOpen(false);
    setOpen(false);
  };

  const onDeleteContact = async contactId => {
    try {
      await deleteContact(contactId).unwrap();
      setOpen(false);
      toast.success('Contact deleted');
    } catch {
      toast.error('Error');
    }
  };

  return (
    <ItemStyled>
      <PositionStyled>{position + 1}</PositionStyled>
      <NameStyled>{name}</NameStyled>
      <NumberStyled>{number}</NumberStyled>
      <ButtonContainer>
        <ButtonStyled onClick={handleModalOpen}>
          <EditIcon />
        </ButtonStyled>
        <ButtonStyled
          onClick={() => {
            setDeleteOpen(true);
            handleModalOpen();
          }}
        >
          <DeleteIcon />
        </ButtonStyled>
      </ButtonContainer>
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
