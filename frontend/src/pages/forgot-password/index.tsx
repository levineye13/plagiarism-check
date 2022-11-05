import React, { FC } from 'react';

import Form from '../../components/forgot-password-form';
import styles from './index.module.scss';

const ForgotPassword: FC = () => {
  return (
    <section className={styles.section}>
      <Form />
    </section>
  );
};

export default ForgotPassword;
