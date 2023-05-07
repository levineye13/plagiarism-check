import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import AuthFormElements from '../auth-form-elements';
import Input from '../input';
import { Fields, ROUTES, formNames } from '../../utils/constants';
import styles from './index.module.scss';
import { useForm } from '../../hooks/useForm';

type TFields = Fields.Email;

const initialFields: { [key in TFields]: string } = {
  email: '',
};

const ForgotPasswordForm: FC = () => {
  const { values, onChange, onSubmit } = useForm<TFields>(
    formNames.forgotPassword,
    initialFields
  );

  return (
    <form
      name={formNames.forgotPassword}
      className={styles.form}
      onSubmit={onSubmit}
      noValidate
    >
      <h2 className={styles.title}>Восстановление пароля</h2>
      <AuthFormElements buttonText="Восстановить">
        <Input
          type="email"
          name={Fields.Email}
          required
          placeholder="Email"
          value={values.email.value}
          error={values.email.error}
          onChange={onChange}
        />
      </AuthFormElements>
      <Link to={ROUTES.login} className={styles.link}>
        Вспомнили пароль?
      </Link>
    </form>
  );
};

export default ForgotPasswordForm;
