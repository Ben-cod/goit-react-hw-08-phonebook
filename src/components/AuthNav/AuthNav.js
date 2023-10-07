import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.box}>
      <NavLink className={css.links} to="login">
        Log In
      </NavLink>
      <NavLink className={css.links} to="register">
        Register
      </NavLink>
    </div>
  );
};
