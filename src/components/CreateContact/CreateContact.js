import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  useCreateContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contacts.api';
import {
  FormStyled,
  LabelStyled,
  InputStyled,
  LabelContainerStyled,
} from './CreateContact.style';
import Button from 'components/Button';

export default function CreateContact({ setOpen }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [createContact] = useCreateContactMutation();
  const { data: contacts } = useGetContactsQuery();

  async function handleSubmit(e) {
    e.preventDefault();

    let containName = false;
    contacts.forEach(item => {
      if (item.name === name) {
        containName = true;
      }
    });
    if (containName) {
      return toast.info(`${name} is already in contacts.`);
    }

    try {
      createContact({ name, number }).unwrap();
      toast.success('Contact successfully added to your list!');
      reset();
      setOpen(false);
    } catch {
      toast.error('Error');
    }
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
              placeholder="Sylvester Block"
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
              placeholder="777-777-7777"
            />
          </LabelStyled>
        </LabelContainerStyled>
        <Button type="submit" variant="contained">
          Create
        </Button>
      </FormStyled>
    </>
  );
}
