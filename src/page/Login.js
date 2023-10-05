import { LoginForm } from 'components/AuthForm/LogInForm';
import css from './Page.module.css';
const Login = () => {
  return (
    <div className={css.main}>
      <LoginForm />
    </div>
  );
};
export default Login;
