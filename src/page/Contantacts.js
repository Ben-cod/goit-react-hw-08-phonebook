import { fetchContacts } from 'Redux/Contacts/operation';
import { selectIsLoading } from 'Redux/Contacts/selectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import css from './Page.module.css';
import { useDispatch, useSelector } from 'react-redux';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main className={css.main}>
      <Filter />
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </main>
  );
};
export default Contacts;
