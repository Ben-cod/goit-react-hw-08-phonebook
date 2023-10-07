import { Navigation } from 'components/Navigation/Navigation';
import css from './AppBar.module.css';
import { useAuth } from 'components/hooks';
import { UseMenu } from 'components/UserMenu/UseMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UseMenu /> : <AuthNav />}
    </header>
  );
};
