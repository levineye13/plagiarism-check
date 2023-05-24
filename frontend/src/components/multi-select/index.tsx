import React, { useState, CSSProperties } from 'react';
import { MouseEvent } from 'react';

import styles from './index.module.scss';
import { useAppDispatch } from '../../store/hooks';
import { ISetField } from '../../store/actions/form';

interface IMultiSelect {
  readonly title: string;
  readonly list: string[];
  readonly selectList: string[];
  readonly onSelect: (newSelect: string[]) => ISetField;
  readonly style?: CSSProperties;
  readonly blocked?: boolean;
  readonly className?: string;
}

const MultiSelect = ({
  title,
  list,
  selectList,
  style,
  onSelect,
  blocked,
  className,
}: IMultiSelect): React.ReactElement => {
  const dispatch = useAppDispatch();
  const handleSelect = (e: MouseEvent<HTMLLIElement>): void => {
    if (blocked) {
      return;
    }

    const elem = e.currentTarget.textContent as string;

    const index = selectList.indexOf(elem);

    if (index === -1) {
      const newSelect = [...selectList, elem];
      dispatch(onSelect(newSelect));
      e.currentTarget.classList.add(`${styles.item_select}`);
    } else {
      const newSelect = [...selectList].splice(index, 1);
      dispatch(onSelect(newSelect));
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
