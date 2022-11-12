import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

const MyCourses: FC = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.title}>Мои курсы:</li>
      <li className={styles.item}>
        <p className={styles.paragraph}>Алгоритмы</p>
      </li>
      <li className={styles.item}>
        <p className={styles.paragraph}>Структуры данных</p>
      </li>
    </ul>
  );
};

export default MyCourses;
