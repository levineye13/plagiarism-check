import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';

import Form from '../../components/register-form';
import styles from './index.module.scss';
import { useAppSelector } from '../../store/hooks';
import { ROUTES } from '../../utils/constants';

const Register: FC = () => {
  const { isAuth } = useAppSelector((state) => state.auth);

  if (isAuth) {
    return <Navigate to={ROUTES.home} replace />;
  }

  return (
    <section className={styles.section}>
      <Form />
    </section>
  );
};

export default Register;
