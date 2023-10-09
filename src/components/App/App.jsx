import ContactForm from '../ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { getContacts } from 'Redux/operations';
import css from './App.module.css';

const App = () => {

  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const dispatch = useDispatch();
    const isLoading = useSelector(state => state.contacts.isLoading);

  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
      return;
    }
    dispatch(getContacts());
  }, [dispatch, isFirstLoad]);


  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <div>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoading ? <div>...Loading</div> : <ContactList />}
      </div>
    </div>
  );
};

export default App;
