import { createSelector } from '@reduxjs/toolkit';

const getAllContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;

const getVisibleTodos = createSelector(
  [getAllContacts, getFilter],
  (todos, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return todos.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);

const contactsSelectors = {
  getAllContacts,
  getFilter,
  getVisibleTodos,
};

export default contactsSelectors;
