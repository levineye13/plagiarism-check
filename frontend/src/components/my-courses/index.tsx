import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';
import { useAppSelector } from '../../store/hooks';

const MyCourses: FC = () => {
  const { subjects } = useAppSelector((state) => state.auth.user.group);

  return (
    <ul className={styles.list}>
      <li className={styles.title}>Мои курсы:</li>
      {subjects &&
        subjects.map((subject) => (
          <li className={styles.item}>
            <p className={styles.paragraph}>{subject.name}</p>
          </li>
        ))}
    </ul>
  );
};

export default MyCourses;
