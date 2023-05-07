import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import AuthFormElements from '../auth-form-elements';
import Input from '../input';
import { Fields, ROUTES, formNames } from '../../utils/constants';
import styles from './index.module.scss';
import { useForm } from '../../hooks/useForm';

type TFields = Fields.Password | Fields.Confirm;

const initialFields: { [key in TFields]: string } = {
  password: '',
  confirm: '',
};

const ResetPasswordForm: FC = () => {
  const { values, onChange, onSubmit } = useForm<TFields>(
    formNames.resetPassword,
    initialFields
  );

  return (
    <form
      name={formNames.resetPassword}
      className={styles.form}
      onSubmit={onSubmit}
      noValidate
    >
      <h2 className={styles.title}>Восстановление пароля</h2>
      <AuthFormElements buttonText="Сохранить">
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
          placeholder="Введите код"
          value={values.confirm ? values.confirm.value : ''}
          error={values.confirm ? values.confirm.error : ''}
          onChange={onChange}
        />
      </AuthFormElements>
      <Link to={ROUTES.login} className={styles.link}>
        Вспомнили пароль?
      </Link>
    </form>
  );
};

export default ResetPasswordForm;
