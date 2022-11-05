import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import AuthFormElements from '../auth-form-elements';
import Input from '../input';
import { ROUTES } from '../../utils/constants';
import styles from './index.module.scss';

const ResetPasswordForm: FC = () => {
  return (
    <form name="resetPassword" className={styles.form}>
      <h2 className={styles.title}>Восстановление пароля</h2>
      <AuthFormElements buttonText="Сохранить">
        <Input type="password" required placeholder="Введите новый пароль" />
        <Input type="password" required placeholder="Введите код из письма" />
      </AuthFormElements>
      <Link to={ROUTES.login} className={styles.link}>
        Вспомнили пароль?
      </Link>
    </form>
  );
};

export default ResetPasswordForm;
