import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import AuthFormElements from '../auth-form-elements';
import Input from '../input';
import { Fields, ROUTES, formNames } from '../../utils/constants';
import styles from './index.module.scss';
import { useForm } from '../../hooks/useForm';

type TFields = Fields.Email | Fields.Password;

const initialFields: { [key in TFields]: string } = {
  email: '',
  password: '',
};

const LoginForm: FC = () => {
  const { values, onChange, onSubmit } = useForm<TFields>(
    formNames.login,
    initialFields
  );

  return (
    <form
      name={formNames.login}
      className={styles.form}
      onSubmit={onSubmit}
      noValidate
    >
      <h2 className={styles.title}>Авторизация</h2>
      <AuthFormElements buttonText="Войти">
        <Input
          type="email"
          name={Fields.Email}
          required
          placeholder="Email"
          value={values.email.value}
          error={values.email.error}
          onChange={onChange}
        />
        <Input
          type="password"
          name={Fields.Password}
          required
          placeholder="Пароль"
          value={values.password.value}
          error={values.password.error}
          onChange={onChange}
        />
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
