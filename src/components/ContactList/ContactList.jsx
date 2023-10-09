import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import ContactsListItem from '../ContactsListItem';


const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const error = useSelector(state => state.contacts.error);


  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    // console.log(contacts);
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    
    <ul className={css.contactlist}>
      {error ? <div>{error}</div> :
      visibleContacts.map(({ id, name, phone }) => (
        <li className={css.contactitem} key={id}>
          <ContactsListItem id={id} name={name} number={phone} />
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
