import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import contactsSelectors from 'redux/contacts/contacts-selectors';
import authSelectors from 'redux/auth/auth-selectors';
import { useGetContactsMutation } from 'redux/contacts/contacts.api';
import ContactsList from 'components/ContactsList';
import ContactItem from 'components/ContactItem';
import Filter from 'components/Filter';
import Section from 'components/Section';
import { Container } from '@mui/material';
import { ContainerListStyled } from './ContactsPage.style';

export default function ContactsPage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const visibleContacts = useSelector(contactsSelectors.getVisibleTodos);

  const [getAllContacts] = useGetContactsMutation();

  useEffect(() => {
    if (isLoggedIn) {
      getAllContacts();
    }
  }, [isLoggedIn, getAllContacts]);

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
          {isLoggedIn && visibleContacts?.length > 0 ? (
            <ContactsList>
              {/* {visibleContacts.map(({ id, name, number }) => {
                return (
                  <ContactItem key={id} name={name} number={number} id={id} />
                );
              })} */}
              {visibleContacts.map(({ id, name, number }) => {
                return (
                  <ContactItem key={id} name={name} number={number} id={id} />
                );
              })}
            </ContactsList>
          ) : (
            <h1>No contacts</h1>
          )}
        </ContainerListStyled>
      </Container>
    </Section>
  );
}
