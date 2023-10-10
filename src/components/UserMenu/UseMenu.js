import { useDispatch } from 'react-redux';
import css from './UseMenu.module.css';
import { useAuth } from 'components/hooks';
import { logOut } from 'Redux/auth/operation';

export const UseMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <div className={css.wrapper}>
      <p className={css.welcome}>Welcome, {user.name}</p>
      <button type="button" onClick={handleLogOut}>
        ↪️Logout
      </button>
    </div>
  );
};
