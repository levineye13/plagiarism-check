import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../utils/constants';
import styles from './index.module.scss';

const Menu: FC = () => {
  const setClassName = ({ isActive }: { isActive: boolean }): string =>
    `${styles.link} ${isActive ? styles.active : undefined}`;

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.title}>Меню</li>
        <li className={styles.item}>
          <NavLink
            to={ROUTES.home}
            className={({ isActive }) => setClassName({ isActive })}
          >
            Профиль
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
