import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

const MyCourses: FC = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.title}>Мои курсы:</li>
      <li className={styles.item}>
        <Link className={styles.link} to="">
          Машинное обучение
        </Link>
      </li>
      <li className={styles.item}>
        <Link className={styles.link} to="">
          Искусственный интеллект
        </Link>
      </li>
    </ul>
  );
};

export default MyCourses;
