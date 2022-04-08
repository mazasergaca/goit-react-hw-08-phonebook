import { useState } from 'react';
import { toast } from 'react-toastify';
import CircularProgress from '@mui/material/CircularProgress';
import { useUpdateContactMutation } from 'redux/contacts/contacts-api';
import {
  FormStyled,
  LabelStyled,
  InputStyled,
  LabelContainerStyled,
  ButtonStyled,
  ButtonCancelStyled,
  FlexContainerStyled,
} from './UpdateContactStyle';

export default function CreateContact({
  handleModalClose,
  id,
  oldName,
  oldNumber,
}) {
  const [name, setName] = useState(oldName);
  const [number, setNumber] = useState(oldNumber);

  const [updateContact, { isLoading }] = useUpdateContactMutation();

  const handleSubmit = async e => {
    e.preventDefault();

    if (name === oldName && number === oldNumber)
      return toast.info('None of the parameters have changed');

    try {
      await updateContact({ id, name, number }).unwrap();
      handleModalClose();
      reset();
      toast.success('Сontact updated!');
    } catch {
      toast.error('Error');
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <LabelContainerStyled>
          <LabelStyled>
            Name
            <InputStyled
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </LabelStyled>
          <LabelStyled>
            Phone
            <InputStyled
              type="tel"
              name="number"
              value={number}
              onChange={handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </LabelStyled>
        </LabelContainerStyled>
        <FlexContainerStyled>
          <ButtonStyled type="submit" disabled={isLoading}>
            {!isLoading ? (
              'Update'
            ) : (
              <CircularProgress size="20px" sx={{ color: '#fff' }} />
            )}
          </ButtonStyled>
          <ButtonCancelStyled
            type="button"
            onClick={handleModalClose}
            disabled={isLoading}
          >
            Cancel
          </ButtonCancelStyled>
        </FlexContainerStyled>
      </FormStyled>
    </>
  );
}
