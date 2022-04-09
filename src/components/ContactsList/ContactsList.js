import React from 'react';
import PropTypes from 'prop-types';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import {
  ListStyled,
  PhoneStyled,
  ItemStyled,
  FlexContainerStyled,
  NameStyled,
  NumberStyled,
} from './ContactsListStyle';

export default function ContactsList({ children, onClick, sort }) {
  return (
    <ListStyled>
      <ItemStyled>
        <NumberStyled>№</NumberStyled>
        <NameStyled onClick={onClick}>
          Name
          <FlexContainerStyled>
            <ArrowDropUpIcon
              sx={{ color: sort === 'A-Z' ? '#1976d2' : '#fff' }}
            />
            <ArrowDropDownIcon
              sx={{ color: sort === 'Z-A' ? '#1976d2' : '#fff' }}
            />
          </FlexContainerStyled>
        </NameStyled>
        <PhoneStyled>Phone number</PhoneStyled>
      </ItemStyled>
      {children}
    </ListStyled>
  );
}

ContactsList.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
};
