import React, { FC } from 'react';

import Button from '../button';
import styles from './index.module.scss';

const SearchForm: FC = () => {
  return (
    <form className={styles.form}>
      <fieldset className={styles.fieldset}>
        <label className={styles.label}>
          <input className={styles.input} type="text" />
        </label>
        <ul className={styles.list}>
          <li className={styles.item}>
            <input className={styles.checkbox} type="checkbox" />
          </li>
          <li className={styles.item}>
            <input className={styles.checkbox} type="checkbox" />
          </li>
          <li className={styles.item}>
            <input className={styles.checkbox} type="checkbox" />
          </li>
        </ul>
        <Button type="submit" />
      </fieldset>
    </form>
  );
};

export default SearchForm;
