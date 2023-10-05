import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useAuth } from 'components/hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav className={css.nav}>
      <NavLink className={css.link} to="/">
        ☎️Phonebook
      </NavLink>

      {isLoggedIn ? (
        <NavLink className={css.link} to="contacts">
          contacts
        </NavLink>
      ) : (
        <div className={css.box}>
          <NavLink className={css.links} to="login">
            Log In
          </NavLink>
          <NavLink className={css.links} to="register">
            Register
          </NavLink>
        </div>
      )}
    </nav>
  );
};
