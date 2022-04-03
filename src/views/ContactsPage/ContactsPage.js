import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import contactsSelectors from 'redux/contacts/contacts-selectors';
import authSelectors from 'redux/auth/auth-selectors';
import { useGetContactsMutation } from 'redux/contacts/contacts.api';
import ContactsList from 'components/ContactsList';
import ContactItem from 'components/ContactItem';
import Filter from 'components/Filter';

export default function ContactsPage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // const contacts = useSelector(contactsSelectors.getAllContacts);

  const visibleContacts = useSelector(contactsSelectors.getVisibleTodos);

  const [getAllContacts] = useGetContactsMutation();

  useEffect(() => {
    if (isLoggedIn) {
      getAllContacts();
    }
  }, [isLoggedIn]);

  return (
    <>
      <Filter />
      {isLoggedIn && visibleContacts?.length > 0 ? (
        <ContactsList>
          {visibleContacts.map(({ id, name, number }) => {
            return <ContactItem key={id} name={name} number={number} id={id} />;
          })}
        </ContactsList>
      ) : (
        <h1>No contacts</h1>
      )}
      {/* {!isLoggedIn && <Navigate replace to="/" />} */}
    </>
  );
}
