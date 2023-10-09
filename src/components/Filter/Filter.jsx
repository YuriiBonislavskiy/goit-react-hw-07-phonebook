import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../Redux/phonebookSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const onChangeFilter = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };

  return (
    <span>
      <p>Find contacts by name</p>
      <input
        className={css.filter}
        type="text"
        name="contactsFilter"
        onChange={onChangeFilter}
        value={filter}
      ></input>
    </span>
  );
};

export default Filter;
