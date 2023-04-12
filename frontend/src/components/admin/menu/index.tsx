import React, { FC, ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './index.module.scss';
import { ROUTES } from '../../../utils/constants';

const Menu: FC = (): ReactElement => {
  const { pathname } = useLocation();

  return (
    <section className={styles.section}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link className={styles.link} to="groups">
              Список групп
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.link} to="tasks">
              Список заданий
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.link} to="add-group">
              Добавить группу
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.link} to="add-task">
              Добавить задание
            </Link>
          </li>
          <li className={styles.li}>
            <Link
              className={styles.link}
              to={`${pathname}${ROUTES.compareList}${ROUTES.tasks}`}
            >
              Сравнение ответов
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Menu;
