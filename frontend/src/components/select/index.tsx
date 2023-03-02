import React, { FC, useState } from 'react';

import styles from './index.module.scss';

interface ISelect {
  readonly title: string;
  readonly list: string[];
  readonly defaultSelect?: string;
}

const Select: FC<ISelect> = ({
  title,
  list,
  defaultSelect,
}): React.ReactElement => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className={styles.select} onClick={handleClick}>
      <p className={styles.title}>{title}</p>
      <p className={styles.selected}>{defaultSelect || list[0]}</p>
      <svg
        focusable="false"
        viewBox="0 0 24 24"
        className={`${styles.button} ${active ? styles.button_active : ''}`}
      >
        <path d="M7 10l5 5 5-5z" fill="#fff"></path>
      </svg>
      <ul className={`${styles.list} ${active ? styles.list_active : ''}`}>
        {list.map((item, index) => (
          <li key={index} className={styles.item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
