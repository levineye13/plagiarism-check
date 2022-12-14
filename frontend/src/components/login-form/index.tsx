import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import AuthFormElements from '../auth-form-elements';
import Input from '../input';
import { ROUTES } from '../../utils/constants';
import styles from './index.module.scss';

const LoginForm: FC = () => {
  return (
    <form name="login" className={styles.form}>
      <h2 className={styles.title}>Авторизация</h2>
      <AuthFormElements buttonText="Войти">
        <Input type="email" required placeholder="Email" />
        <Input type="password" required placeholder="Пароль" />
      </AuthFormElements>
      <Link to={ROUTES.register} className={styles.link}>
        Не зарегистрированы?
      </Link>
      <Link to={ROUTES.forgotPassword} className={styles.link}>
        Забыли пароль?
      </Link>
    </form>
  );
};

export default LoginForm;
