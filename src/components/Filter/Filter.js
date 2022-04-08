import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contactsSelectors from 'redux/contacts/contacts-selectors';
import { changeFilter } from 'redux/contacts/contacts-slice';
import { LabelStyled, InputStyled } from './FilterStyles';

export default function Filter() {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  return (
    <LabelStyled>
      Find contacts by name
      <InputStyled
        type="text"
        value={value}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
      />
    </LabelStyled>
  );
}
