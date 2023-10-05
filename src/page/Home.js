import { fetchContacts } from 'Redux/Contacts/operation';
import css from './Page.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts);
  }, [dispatch]);

  return (
    <main className={css.main}>
      <h1 className={css.home}>Contakts manager welcome page</h1>
    </main>
  );
}
