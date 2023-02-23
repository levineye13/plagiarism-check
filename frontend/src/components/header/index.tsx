import React, { useState } from 'react';

import styles from './index.module.scss';

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
      <img className={styles.img} src="" alt="РТУ МИРЭА" />
      <p className={styles.paragraph}>РТУ МИРЭА</p>
    </header>
  );
};

export default Header;
