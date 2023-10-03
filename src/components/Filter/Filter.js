import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';

import { selectStatusFilter } from 'Redux/Contacts/selectors';
import { setStatusFilter } from 'Redux/Contacts/filtersSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectStatusFilter);

  const handleFilterChange = event => {
    dispatch(setStatusFilter(event.target.value));
  };
  return (
    <div>
      <label className={css.filterWrap}></label>
      <input
        className={css.filter}
        type="text"
        placeholder="Find contacts by name"
        value={value}
        onChange={handleFilterChange}
      />
    </div>
  );
};
