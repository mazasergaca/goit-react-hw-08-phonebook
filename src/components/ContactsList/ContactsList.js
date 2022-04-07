import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import {
  ListStyled,
  SpanStyled,
  ItemStyled,
  FlexContainerStyled,
  NameStyled,
} from './ContactsList.style';

export default function ContactsList({ children, onClick, sort }) {
  return (
    <ListStyled>
      <ItemStyled>
        <SpanStyled style={{ width: '10%' }}>№</SpanStyled>
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
        <SpanStyled>Phone number</SpanStyled>
      </ItemStyled>
      {children}
    </ListStyled>
  );
}
