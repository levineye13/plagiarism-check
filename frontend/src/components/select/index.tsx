import React, { useState, CSSProperties } from 'react';
import { MouseEvent } from 'react';

import styles from './index.module.scss';

interface ISelect<T> {
  readonly title: string;
  readonly list: Array<T>;
  readonly selected: T;
  readonly onSelect: (arg: T) => void;
  readonly style?: CSSProperties;
}

const Select = <T extends string | number>({
  title,
  list,
  selected,
  style,
  onSelect,
}: ISelect<T>): React.ReactElement => {
  const [active, setActive] = useState(false);

  const handleClick = (): void => {
    setActive(!active);
  };

  const handleSelect = (e: MouseEvent<HTMLLIElement>): void => {
    const value = e.currentTarget.textContent;
    const newIndexSelect = list.findIndex((item) => item === value);

    onSelect(list[newIndexSelect]);
  };

  return (
    <div className={styles.select} onClick={handleClick} style={style}>
      <p className={styles.title}>{title}</p>
      <p className={styles.selected}>{selected}</p>
      <svg
        focusable="false"
        viewBox="0 0 24 24"
        className={`${styles.button} ${active ? styles.button_active : ''}`}
      >
        <path d="M7 10l5 5 5-5z" fill="#fff"></path>
      </svg>
      <ul className={`${styles.list} ${active ? styles.list_active : ''}`}>
        {list.map((item, index) => (
          <li key={index} className={styles.item} onClick={handleSelect}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
