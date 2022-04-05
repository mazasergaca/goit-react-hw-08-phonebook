import { useState } from 'react';
import { useSelector } from 'react-redux';
import contactsSelectors from 'redux/contacts/contacts-selectors';
import { useGetContactsQuery } from 'redux/contacts/contacts.api';
import ContactsList from 'components/ContactsList';
import ContactItem from 'components/ContactItem';
import Filter from 'components/Filter';
import Section from 'components/Section';
import { Container } from '@mui/material';
import {
  ContainerListStyled,
  NoContactsStyled,
  NoContactsImageStyled,
  NoContactsText,
} from './ContactsPage.style';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import BasicModal from 'components/Modal/Modal';
import CreateContact from 'components/CreateContact';
import ContactsBookImage from 'image/book-contacts.png';

export default function ContactsPage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const filter = useSelector(contactsSelectors.getFilter);

  const { data: contacts, isLoading } = useGetContactsQuery();

  const getVisibleContacts = () => {
    const normalizedFilter = filter?.toLowerCase();
    return contacts?.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Section
      style={{
        backgroundImage: `linear-gradient(160deg, rgba(3,0,47,1) 0%, rgba(27,41,95,1) 48%, rgba(29,44,98,1) 100%)`,
        minHeight: '100vh',
        paddingTop: '120px',
      }}
    >
      <Container>
        <Filter />
        <ContainerListStyled>
          <ContactsList>
            {contacts && !isLoading && getVisibleContacts()?.length > 0 ? (
              getVisibleContacts().map(({ id, name, number }, index) => {
                return (
                  <ContactItem
                    key={id}
                    name={name}
                    number={number}
                    id={id}
                    position={index}
                  />
                );
              })
            ) : (
              <NoContactsStyled>
                <NoContactsText>You have no contacts...</NoContactsText>
                <NoContactsImageStyled
                  src={ContactsBookImage}
                  alt="contacts book"
                />
              </NoContactsStyled>
            )}
          </ContactsList>
        </ContainerListStyled>
        <Fab
          onClick={handleOpen}
          color="secondary"
          aria-label="add"
          style={{
            position: 'fixed',
            top: '85%',
            left: '85%',
          }}
        >
          <AddIcon />
        </Fab>
      </Container>

      <BasicModal open={open} handleClose={handleClose}>
        <CreateContact setOpen={setOpen} />
      </BasicModal>
    </Section>
  );
}
