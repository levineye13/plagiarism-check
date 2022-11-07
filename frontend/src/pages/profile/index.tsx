import React, { FC } from 'react';

import Courses from '../../components/my-courses';
import styles from './index.module.scss';
import Prifile from '../../images/profile-user.png';

const user = {
  fio: 'Иванов Иван Иванович',
  role: 'student',
  group: 'АББО-01-20',
};
const isStudent: boolean = user.role === 'student';

const Profile: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <img src={Prifile} alt="Profile user" className={styles.img} />
        <p className={styles.info}>ФИО: {user.fio}</p>
        <p className={`${styles.info} ${styles.role}`}>
          Роль: {isStudent ? 'Студент' : 'Преподаватель'}
        </p>
        {isStudent && <p className={styles.info}>Группа: {user.group}</p>}
      </div>
      <Courses />
    </section>
  );
};

export default Profile;
