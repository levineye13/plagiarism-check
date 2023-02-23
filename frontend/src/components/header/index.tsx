import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';
import Logo from '../../images/logo.png';
import { ROUTES } from '../../utils/constants';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className={styles.header}>
      <button
        className={`${styles.button} ${
          isActive ? `${styles.button_active}` : ''
        }`}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <span className={styles.span} />
      </button>
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
