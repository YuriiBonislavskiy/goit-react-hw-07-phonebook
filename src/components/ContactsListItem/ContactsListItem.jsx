import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import css from './ContactsListItem.module.css';
import { deleteContacts } from 'Redux/operations';
// import { deleteContact } from 'Redux/phonebookSlice';

export const ContactsListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <span>
      {name}: {number}
      <button
        className={css.deletebutton}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </span>
  );
};

ContactsListItem.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactsListItem;
