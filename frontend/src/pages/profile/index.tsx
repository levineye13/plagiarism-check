import React, { FC, useEffect } from 'react';

import Courses from '../../components/my-courses';
import styles from './index.module.scss';
import User from '../../images/profile-user.png';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getMe } from '../../store/actions';

const Profile: FC = () => {
  const dispatch = useAppDispatch();
  const { email, name, group } = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <img src={User} alt="Профиль пользователя" className={styles.img} />
        <p className={styles.info}>Пользователь: {name}</p>
        <p className={styles.info}>Почта: {email}</p>
        <p className={styles.info}>Группа: {group.name}</p>
      </div>
      <Courses />
    </section>
  );
};

export default Profile;
