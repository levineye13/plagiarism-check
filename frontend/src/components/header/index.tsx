import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';
import Logo from '../../images/logo.png';
import { ROUTES } from '../../utils/constants';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { openMenu, closeMenu } from '../../store/actions';

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.auth);
  const { isOpen } = useAppSelector((state) => state.menu);

  const handleClick = () =>
    isOpen ? dispatch(closeMenu()) : dispatch(openMenu());

  return (
    <header className={styles.header}>
      {isAuth && (
        <button
          className={`${styles.button} ${
            isOpen ? `${styles.button_active}` : ''
          }`}
          onClick={handleClick}
        >
          <span className={styles.span} />
        </button>
      )}
      <figure className={styles.figure}>
        <img className={styles.img} src={Logo} alt="РТУ МИРЭА" />
        <figcaption className={styles.paragraph}>РТУ МИРЭА</figcaption>
      </figure>
      <Link to={ROUTES.login} className={styles.link}>
        Вход
      </Link>
    </header>
  );
};

export default Header;
