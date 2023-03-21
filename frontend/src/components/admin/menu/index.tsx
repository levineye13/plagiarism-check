import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

const Menu: FC = (): ReactElement => {
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
            <Link className={styles.link} to="add-group">
              Добавить группу
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.link} to="add-task">
              Добавить задание
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Menu;
