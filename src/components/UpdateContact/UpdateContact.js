import { useState } from 'react';
import { toast } from 'react-toastify';
import { useUpdateContactMutation } from 'redux/contacts/contacts.api';
import {
  FormStyled,
  LabelStyled,
  InputStyled,
  LabelContainerStyled,
} from './UpdateContact.style';
import Button from 'components/Button';

export default function CreateContact({ setOpen, id, oldName, oldNumber }) {
  const [name, setName] = useState(oldName);
  const [number, setNumber] = useState(oldNumber);

  const [updateContact] = useUpdateContactMutation();

  function handleSubmit(e) {
    e.preventDefault();
    updateContact({ id, name, number });
    reset();
    setOpen(false);
    toast.success('Сontact updated!');
  }
  function reset() {
    setName('');
    setNumber('');
  }
  function handleChange(e) {
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
  }
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
        <Button type="submit" variant="contained">
          Update
        </Button>
      </FormStyled>
    </>
  );
}
