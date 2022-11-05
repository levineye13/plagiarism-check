import React, { FC } from 'react';

import Form from '../../components/register-form';
import styles from './index.module.scss';

const Register: FC = () => {
  return (
    <section className={styles.section}>
      <Form />
    </section>
  );
};

export default Register;
