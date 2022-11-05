import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import AuthFormElements from '../auth-form-elements';
import Input from '../input';
import { ROUTES } from '../../utils/constants';
import styles from './index.module.scss';

const RegisterForm: FC = () => {
  return (
    <form name="register" className={styles.form}>
      <h2 className={styles.title}>Регистрация</h2>
      <AuthFormElements buttonText="Зарегистрироваться">
        <Input type="email" required placeholder="Email" />
        <Input type="text" required placeholder="Логин" />
        <Input type="password" required placeholder="Пароль" />
        <Input type="password" required placeholder="Подтвердите пароль" />
      </AuthFormElements>
      <Link to={ROUTES.login} className={styles.link}>
        Уже зарегистрированы?
      </Link>
    </form>
  );
};

export default RegisterForm;
