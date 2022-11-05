import React, { FC } from 'react';

import Form from '../../components/reset-password-form';
import styles from './index.module.scss';

const ResetPassword: FC = () => {
  return (
    <section className={styles.section}>
      <Form />
    </section>
  );
};

export default ResetPassword;
