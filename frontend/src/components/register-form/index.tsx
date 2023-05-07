import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import AuthFormElements from '../auth-form-elements';
import Input from '../input';
import { ROUTES, formNames, Fields } from '../../utils/constants';
import styles from './index.module.scss';
import { useForm } from '../../hooks/useForm';

type TFields =
  | Fields.Email
  | Fields.Login
  | Fields.Group
  | Fields.Password
  | Fields.Confirm;

const initialFields: { [key in TFields]: string } = {
  email: '',
  login: '',
  group: '',
  password: '',
  confirm: '',
};

const RegisterForm: FC = () => {
  const { values, onChange, onSubmit } = useForm<TFields>(
    formNames.register,
    initialFields
  );

  return (
    <form
      name={formNames.register}
      className={styles.form}
      onSubmit={onSubmit}
      noValidate
    >
      <h2 className={styles.title}>Регистрация</h2>
      <AuthFormElements buttonText="Зарегистрироваться">
        <Input
          type="email"
          name={Fields.Email}
          required
          placeholder="Email"
          value={values.email ? values.email.value : ''}
          error={values.email ? values.email.error : ''}
          onChange={onChange}
        />
        <Input
          type="text"
          name={Fields.Login}
          required
          placeholder="Логин"
          value={values.login ? values.login.value : ''}
          error={values.login ? values.login.error : ''}
          onChange={onChange}
        />
        <Input
          type="text"
          name={Fields.Group}
          required
          placeholder="Группа"
          value={values.group ? values.group.value : ''}
          error={values.group ? values.group.error : ''}
          onChange={onChange}
        />
        <Input
          type="password"
          name={Fields.Password}
          required
          placeholder="Пароль"
          value={values.password ? values.password.value : ''}
          error={values.password ? values.password.error : ''}
          onChange={onChange}
        />
        <Input
          type="password"
          name={Fields.Confirm}
          required
          placeholder="Подтвердите пароль"
          value={values.confirm ? values.confirm.value : ''}
          error={values.confirm ? values.confirm.error : ''}
          onChange={onChange}
        />
      </AuthFormElements>
      <Link to={ROUTES.login} className={styles.link}>
        Уже зарегистрированы?
      </Link>
    </form>
  );
};

export default RegisterForm;
