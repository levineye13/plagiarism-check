import React, { useState, CSSProperties } from 'react';
import { MouseEvent } from 'react';

import styles from './index.module.scss';

interface IMultiSelect<T> {
  readonly title: string;
  readonly list: Array<T>;
  readonly selectList: Array<T>;
  readonly onSelect: (arg: T[]) => void;
  readonly style?: CSSProperties;
  readonly blocked?: boolean;
  readonly className?: string;
}

const MultiSelect = <T extends string | number>({
  title,
  list,
  selectList,
  style,
  onSelect,
  blocked,
  className,
}: IMultiSelect<T>): React.ReactElement => {
  const handleSelect = (e: MouseEvent<HTMLLIElement>): void => {
    if (blocked) {
      return;
    }

    const elem = e.currentTarget.textContent as T;

    const index = selectList.indexOf(elem);

    if (index === -1) {
      onSelect([...selectList, elem]);
      e.currentTarget.classList.add(`${styles.item_select}`);
    } else {
      selectList.splice(index, 1);
      onSelect([...selectList]);
      e.currentTarget.classList.remove(`${styles.item_select}`);
    }
  };

  return (
    <div className={`${styles.select} ${className}`} style={style}>
      <p className={styles.title}>{title}</p>
      <ul className={styles.list}>
        {list.map((item, index) => (
          <li key={index} className={styles.item} onClick={handleSelect}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MultiSelect;
