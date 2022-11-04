import React, { FC } from 'react';

import Form from '../../components/login-form';
import styles from './index.module.scss';

const Login: FC = () => {
  return (
    <section className={styles.section}>
      <Form />
    </section>
  );
};

export default Login;
