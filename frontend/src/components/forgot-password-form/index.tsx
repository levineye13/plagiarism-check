import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import AuthFormElements from '../auth-form-elements';
import Input from '../input';
import { ROUTES } from '../../utils/constants';
import styles from './index.module.scss';

const ForgotPasswordForm: FC = () => {
  return (
    <form name="forgotPassword" className={styles.form}>
      <h2 className={styles.title}>Восстановление пароля</h2>
      <AuthFormElements buttonText="Восстановить">
        <Input type="email" required placeholder="Email" />
      </AuthFormElements>
      <Link to={ROUTES.login} className={styles.link}>
        Вспомнили пароль?
      </Link>
    </form>
  );
};

export default ForgotPasswordForm;
