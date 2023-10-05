import { RegisterForm } from 'components/AuthForm/RegisterForm';
import css from './Page.module.css';
const Register = () => {
  return (
    <div className={css.main}>
      <RegisterForm />
    </div>
  );
};

export default Register;
