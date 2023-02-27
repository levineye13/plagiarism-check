import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import Title from '../section-title';
import { useAppSelector } from '../../store/hooks';
import { ROUTES } from '../../utils/constants';
import styles from './index.module.scss';

const Menu: FC = () => {
  const setClassName = ({ isActive }: { isActive: boolean }): string =>
    `${styles.link} ${isActive ? styles.active : undefined}`;

  const { isOpen } = useAppSelector((state) => state.menu);

  return (
    <nav className={`${styles.nav} ${isOpen ? styles.nav_open : ''}`}>
      <ul className={styles.list}>
        <li className={styles.title}>
          <Title>Меню</Title>
        </li>
        <li className={styles.item}>
          <NavLink
            to={ROUTES.home}
            className={({ isActive }) => setClassName({ isActive })}
          >
            Профиль
          </NavLink>
        </li>
        <li>
          <NavLink
            to={ROUTES.subjects}
            className={({ isActive }) => setClassName({ isActive })}
          >
            Дисциплины
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
