import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useAuth } from 'components/hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav className={css.nav}>
      {isLoggedIn ? (
        <NavLink className={css.link} to="contacts">
          contacts
        </NavLink>
      ) : (
        <NavLink className={css.link} to="/">
          ☎️Phonebook
        </NavLink>
      )}
    </nav>
  );
};
