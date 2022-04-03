import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contactsSelectors from 'redux/contacts/contacts-selectors';
import { changeFilter } from 'redux/contacts/contacts-slice';
import FilterStyled from './Filter.style';

export default function Filter() {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  return (
    <FilterStyled.Label>
      Find contacts by name
      <FilterStyled.Input
        type="text"
        value={value}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
      />
    </FilterStyled.Label>
  );
}
